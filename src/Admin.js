import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const initialForm = {
  title: "",
  date: "",
  location: "",
  tags: "",
  language: "",
  duration: "",
  transcript: "",
};

export default function Admin() {
  const [audios, setAudios] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState("");

  const fetchAudios = async () => {
    const res = await fetch("https://my.api.mockaroo.com/audios?key=e22e9f30");
    const data = await res.json();
    const parsed = data.map((audio) => ({
      ...audio,
      tags: typeof audio.tags === "string" ? JSON.parse(audio.tags) : audio.tags || [],
      language: typeof audio.language === "string" ? JSON.parse(audio.language) : audio.language || [],
      duration: Number(audio.duration || 0),
    }));
    setAudios(parsed);
  };

  useEffect(() => {
    fetchAudios();
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Date", accessor: "date" },
      { Header: "Location", accessor: "location" },
      {
        Header: "Tags",
        accessor: "tags",
        Cell: ({ value }) => value.join(", "),
      },
      {
        Header: "Language",
        accessor: "language",
        Cell: ({ value }) => value.join(", "),
      },
      { Header: "Duration", accessor: "duration" },
      {
        Header: "Transcript",
        accessor: "transcript",
        Cell: ({ value }) => (
          <button
            className="text-blue-600 underline"
            onClick={() => {
              setCurrentTranscript(value);
              setShowTranscript(true);
            }}
          >
            View
          </button>
        ),
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="space-x-2">
            <button
              onClick={() => handleEdit(row.original)}
              className="text-indigo-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeactivate(row.original.id)}
              className="text-red-600 hover:underline"
            >
              Deactivate
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    pageCount,
    state: { pageIndex },
    setFilter,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data: audios,
      initialState: { pageSize: 5 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const handleEdit = (audio) => {
    setForm({
      ...audio,
      tags: audio.tags.join(", "),
      language: audio.language.join(", "),
    });
    setEditingId(audio.id);
    setShowForm(true);
  };

  const handleDeactivate = async (id) => {
    await fetch(`/api/audios/${id}/deactivate`, { method: "POST" });
    fetchAudios();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/audios/${editingId}` : "/api/audios";
    const payload = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()),
      language: form.language.split(",").map((l) => l.trim()),
      duration: Number(form.duration),
    };
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    fetchAudios();
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleCSVExport = () => {
    const csv = Papa.unparse(
      audios.map(({ transcript, ...rest }) => rest) // omit transcript from export
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "audios.csv");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Audio Library</h1>
        <div className="space-x-2">
          <button
            onClick={() => {
              setForm(initialForm);
              setEditingId(null);
              setShowForm(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add New
          </button>
          <button
            onClick={handleCSVExport}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* Filter */}
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search title..."
        onChange={(e) => setFilter("title", e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full border">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-2 border-b text-left cursor-pointer"
                  >
                    {column.render("Header")}
                    <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="divide-y">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-50">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-2 border-b">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button onClick={previousPage} disabled={!canPreviousPage}>
          ⬅ Previous
        </button>
        <span>
          Page {pageIndex + 1} of {pageCount}
        </span>
        <button onClick={nextPage} disabled={!canNextPage}>
          Next ➡
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-full max-w-lg space-y-3">
            <h2 className="text-xl font-bold mb-2">
              {editingId ? "Edit Audio" : "Add New Audio"}
            </h2>
            <input name="title" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="border p-2 w-full" required />
            <input type="date" name="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="border p-2 w-full" required />
            <input name="location" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="border p-2 w-full" />
            <input name="duration" type="number" placeholder="Duration (s)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="border p-2 w-full" />
            <input name="tags" placeholder="Tags (comma-separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="border p-2 w-full" />
            <input name="language" placeholder="Languages (comma-separated)" value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })} className="border p-2 w-full" />
            <textarea name="transcript" placeholder="Transcript" rows={3} value={form.transcript} onChange={(e) => setForm({ ...form, transcript: e.target.value })} className="border p-2 w-full" />
            <div className="flex justify-end space-x-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                {editingId ? "Update" : "Save"}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 underline">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Transcript Modal */}
      {showTranscript && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-2xl relative">
            <h3 className="text-lg font-bold mb-2">Transcript</h3>
            <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-3 rounded max-h-[400px] overflow-auto">
              {currentTranscript}
            </pre>
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowTranscript(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

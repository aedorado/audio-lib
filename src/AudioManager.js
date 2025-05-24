import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  id: "",
  title: "",
  date: "",
  location: "",
  tags: "",
  language: "",
  duration: "",
  transcript: "",
};

export default function AudioManager() {
  const [audios, setAudios] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAudios();
  }, []);

  const fetchAudios = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/audios");
      const data = await res.json();
      setAudios(data);
    } catch (err) {
      console.error("Failed to fetch audios:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
    await fetchAudios();
    setForm(initialForm);
    setEditingId(null);
  };

  const handleEdit = (audio) => {
    setForm({
      ...audio,
      tags: audio.tags.join(", "),
      language: audio.language.join(", "),
    });
    setEditingId(audio.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this audio?")) {
      await fetch(`/api/audios/${id}`, { method: "DELETE" });
      await fetchAudios();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-serif">
      <h1 className="text-3xl font-bold text-saffron-800 mb-6">🎙 Audio Manager</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Title" className="border p-2 rounded" />
          <input type="date" name="date" value={form.date} onChange={handleChange} required className="border p-2 rounded" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" />
          <input name="duration" value={form.duration} onChange={handleChange} type="number" placeholder="Duration (seconds)" className="border p-2 rounded" />
          <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma-separated)" className="border p-2 rounded" />
          <input name="language" value={form.language} onChange={handleChange} placeholder="Languages (comma-separated)" className="border p-2 rounded" />
        </div>
        <textarea name="transcript" value={form.transcript} onChange={handleChange} rows={4} placeholder="Transcript" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-saffron-700 text-white px-4 py-2 rounded hover:bg-saffron-800">
          {editingId ? "Update Audio" : "Add Audio"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setEditingId(null);
            }}
            className="ml-4 text-gray-500 underline"
          >
            Cancel
          </button>
        )}
      </form>

      {loading ? (
        <div className="text-center text-saffron-600">Loading audios...</div>
      ) : (
        <div className="space-y-4">
          {audios.map((audio) => (
            <div key={audio.id} className="bg-white shadow-sm rounded-md p-4 border">
              <h2 className="text-xl font-semibold text-saffron-700">{audio.title}</h2>
              <p className="text-sm text-gray-500">
                📅 {audio.date} — 📍 {audio.location} — 🕒 {Math.round(audio.duration / 60)} min
              </p>
              <p className="text-sm mt-1">
                <strong>Tags:</strong> {audio.tags.join(", ")}<br />
                <strong>Languages:</strong> {audio.language.join(", ")}
              </p>
              <p className="mt-2 text-sm text-gray-700">
                <strong>Transcript:</strong> <br />
                <span className="block bg-saffron-50 p-2 rounded whitespace-pre-wrap">{audio.transcript}</span>
              </p>
              <div className="mt-2 flex gap-2">
                <button onClick={() => handleEdit(audio)} className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Edit</button>
                <button onClick={() => handleDelete(audio.id)} className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

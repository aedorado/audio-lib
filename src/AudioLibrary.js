import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpDown, RotateCcw, ChevronDown, ChevronUp, Shuffle } from "lucide-react";

const API_URL = "https://my.api.mockaroo.com/audios?key=e22e9f30";

const Dropdown = ({ label, options, selectedOptions, setSelectedOptions }) => {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState("");

    const toggleOption = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="relative">
            <button
                className="w-full text-left px-3 py-2 border rounded-md bg-white shadow-sm"
                onClick={() => setOpen((o) => !o)}
            >
                {label} ({selectedOptions.length})
                <span className="float-right">{open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
            </button>
            {open && (
                <div className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto border bg-white rounded-md shadow-lg p-2 space-y-1">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full px-2 py-1 mb-2 border rounded-md text-sm"
                    />
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <label key={option} className="block px-2 py-1 hover:bg-gray-100 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => toggleOption(option)}
                                />
                                {option}
                            </label>
                        ))
                    ) : (
                        <div className="px-2 text-sm text-gray-500">No results</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default function AudioLibrary() {
    const navigate = useNavigate();

    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedDurations, setSelectedDurations] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortField, setSortField] = useState("date");
    const [sortOrder, setSortOrder] = useState("desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        const fetchLectures = async () => {
            const CACHE_KEY = "audio_lectures_cache";
            const CACHE_TIME_KEY = "audio_lectures_cache_time";
            const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

            const cached = localStorage.getItem(CACHE_KEY);
            const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
            const now = Date.now();

            if (cached && cachedTime && now - Number(cachedTime) < CACHE_DURATION) {
                setLectures(JSON.parse(cached));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                const parsed = data.map((lecture) => ({
                    ...lecture,
                    tags: JSON.parse(lecture.tags || "[]"),
                    language: JSON.parse(lecture.language || "[]"),
                    duration: Number(lecture.duration || 0),
                }));
                setLectures(parsed);
                localStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
                localStorage.setItem(CACHE_TIME_KEY, String(now));
            } catch (error) {
                console.error("Failed to fetch lectures:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLectures();
    }, []);


    const normalize = (str) => str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    const handleClearFilters = () => {
        setSelectedLanguages([]);
        setSelectedLocations([]);
        setSelectedYears([]);
        setSelectedDurations([]);
        setSelectedTags([]);
        setSearchQuery("");
    };

    const filtered = useMemo(() => {
        return lectures.filter((l) => {
            const matchSearch = normalize(l.title).includes(normalize(searchQuery)) ||
                l.tags.some((tag) => normalize(tag).includes(normalize(searchQuery)));

            const matchLanguages =
                selectedLanguages.length === 0 ||
                selectedLanguages.some((lang) => l.language.includes(lang));

            const matchLocations =
                selectedLocations.length === 0 ||
                selectedLocations.includes(l.location);

            const matchYears =
                selectedYears.length === 0 ||
                selectedYears.includes(new Date(l.date).getFullYear());

            const matchDurations =
                selectedDurations.length === 0 ||
                selectedDurations.some((range) => {
                    if (range === "short") return l.duration < 600;
                    if (range === "medium") return l.duration >= 600 && l.duration < 1800;
                    if (range === "long") return l.duration >= 1800;
                    return false;
                });

            const matchTags =
                selectedTags.length === 0 ||
                selectedTags.every((tag) => l.tags.includes(tag));

            return matchSearch && matchLanguages && matchLocations && matchYears && matchDurations && matchTags;
        });
    }, [lectures, searchQuery, selectedLanguages, selectedLocations, selectedYears, selectedDurations, selectedTags]);

    const sorted = useMemo(() => {
        return [...filtered].sort((a, b) => {
            const aValue = sortField === "duration" ? a.duration : a[sortField];
            const bValue = sortField === "duration" ? b.duration : b[sortField];
            if (sortOrder === "asc") return aValue > bValue ? 1 : -1;
            return aValue < bValue ? 1 : -1;
        });
    }, [filtered, sortField, sortOrder]);

    const paginated = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return sorted.slice(start, start + pageSize);
    }, [sorted, currentPage, pageSize]);

    const allTags = Array.from(new Set(lectures.flatMap((l) => l.tags)));
    const allLocations = Array.from(new Set(lectures.map((l) => l.location)));
    const allLanguages = Array.from(new Set(lectures.flatMap((l) => l.language)));
    const allYears = Array.from(new Set(lectures.map((l) => new Date(l.date).getFullYear()))).sort((a, b) => b - a);

    const handleRandomLecture = () => {
        if (filtered.length === 0) return;
        const random = filtered[Math.floor(Math.random() * filtered.length)];
        navigate(`/lecture/${random.id}`);
    };

    return (
        <div className="flex min-h-screen bg-saffron-50 text-gray-800 font-serif">
            <aside className="w-full max-w-xs bg-white shadow-md p-4 space-y-4 sticky top-0 h-screen overflow-y-auto">
                <div className="text-xl font-semibold text-saffron-800 mb-2">Filters</div>
                <input
                    type="text"
                    placeholder="Search lectures..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border rounded-md"
                />
                <Dropdown label="Languages" options={allLanguages} selectedOptions={selectedLanguages} setSelectedOptions={setSelectedLanguages} />
                <Dropdown label="Locations" options={allLocations} selectedOptions={selectedLocations} setSelectedOptions={setSelectedLocations} />
                <Dropdown label="Tags" options={allTags} selectedOptions={selectedTags} setSelectedOptions={setSelectedTags} />
                <div>
                    <label className="font-semibold">Year</label>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {allYears.map((year) => (
                            <button
                                key={year}
                                className={`text-sm px-2 py-1 border rounded-full ${selectedYears.includes(year) ? "bg-saffron-600 text-white" : "bg-gray-100"}`}
                                onClick={() =>
                                    setSelectedYears((prev) =>
                                        prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
                                    )
                                }
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="font-semibold">Duration</label>
                    <div className="flex gap-2 mt-1">
                        {["short", "medium", "long"].map((d) => (
                            <button
                                key={d}
                                className={`text-sm px-2 py-1 border rounded-full ${selectedDurations.includes(d) ? "bg-saffron-600 text-white" : "bg-gray-100"}`}
                                onClick={() =>
                                    setSelectedDurations((prev) =>
                                        prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
                                    )
                                }
                            >
                                {d.charAt(0).toUpperCase() + d.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="pt-2 border-t mt-2">
                    <button onClick={handleClearFilters} className="flex items-center text-sm text-red-500 gap-1">
                        <RotateCcw size={16} /> Clear All Filters
                    </button>
                </div>
            </aside>

            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Audio Library</h1>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleRandomLecture}
                            className="flex items-center gap-1 border p-2 rounded-md bg-saffron-600 text-white hover:bg-saffron-700"
                        >
                            <Shuffle size={16} />
                            Random Lecture
                        </button>
                        <select
                            className="border rounded-md p-1"
                            value={sortField}
                            onChange={(e) => setSortField(e.target.value)}
                        >
                            <option value="title">Title</option>
                            <option value="date">Date</option>
                            <option value="duration">Duration</option>
                            <option value="location">Location</option>
                        </select>
                        <button onClick={toggleSortOrder} className="p-1 border rounded-md">
                            <ArrowUpDown size={16} className={sortOrder === "desc" ? "rotate-180" : ""} />
                        </button>
                    </div>
                </div>
                {loading ? (
                    <div className="text-center text-saffron-600 text-lg animate-pulse">Loading...</div>
                ) : (
                    <>
                        <div className="grid gap-4">
                            {paginated.map((l) => (
                                <div key={l.id} className="bg-white p-4 rounded-lg shadow">
                                    <Link to={`/lecture/${l.id}`}>
                                        <h2 className="text-xl font-semibold text-saffron-700 hover:underline">{l.title}</h2>
                                    </Link>
                                    <p className="text-sm text-saffron-600">{l.date} — {l.location}</p>
                                    <p className="text-sm text-gray-500">Duration: {Math.floor(l.duration / 60)} mins</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {l.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-saffron-100 text-saffron-700 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <div>
                                <label className="mr-2">Page size:</label>
                                <select
                                    className="border p-1 rounded"
                                    value={pageSize}
                                    onChange={(e) => {
                                        setPageSize(Number(e.target.value));
                                        setCurrentPage(1);
                                    }}
                                >
                                    {[10, 25, 50].map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)} className="border px-2 py-1 rounded disabled:opacity-50">Prev</button>
                                <span>Page {currentPage}</span>
                                <button disabled={(currentPage * pageSize) >= sorted.length} onClick={() => setCurrentPage((p) => p + 1)} className="border px-2 py-1 rounded disabled:opacity-50">Next</button>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

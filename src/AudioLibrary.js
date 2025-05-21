import React, { useState } from "react";
import { Link } from "react-router-dom";

const lectures = [
    {
        id: 1,
        title: "Build strong foundation of Krishna Consciousness - Śrī Rāma Katha Part 06 of 06",
        date: "2024-04-15",
        location: "Vrindavan",
        tags: ["Bhakti", "Devotion"],
        audioUrl: "#"
    },
    {
        id: 2,
        title: "Importance of Varnasrama Dharma in Governance - Śrī Rāma Katha Part 05 of 06",
        date: "2024-03-02",
        location: "Nairobi",
        tags: ["Gita", "Philosophy"],
        audioUrl: "#"
    },
    {
        id: 3,
        title: "The Exile of Lord Ramchandra - Śrī Rāma Katha Part 04 of 06",
        date: "2024-03-02",
        location: "Mayapur",
        tags: ["Rama", "Lakshman", "Sita", "Hanuman"],
        audioUrl: "#"
    },
    // Add more lectures here
];

export default function AudioLibrary() {
    const [selectedTag, setSelectedTag] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    function normalizeString(str) {
        return str
            .normalize("NFD")                // split accented characters
            .replace(/[\u0300-\u036f]/g, "") // remove diacritic marks
            .toLowerCase();                  // make case-insensitive
    }

    const filteredLectures = lectures.filter((l) => {
        const normalizedQuery = normalizeString(searchQuery);

        const titleMatch = normalizeString(l.title).includes(normalizedQuery);
        const tagMatch = l.tags.some(tag =>
            normalizeString(tag).includes(normalizedQuery)
        );

        const matchesQuery = titleMatch || tagMatch;
        const matchesTag = selectedTag ? l.tags.includes(selectedTag) : true;

        return matchesQuery && matchesTag;
    });

    const uniqueTags = Array.from(new Set(lectures.flatMap(l => l.tags)));

    return (
        <div className="min-h-screen bg-saffron-50 text-gray-800 p-6 font-serif">
            <header className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-semibold text-saffron-800">HH Bhakti Dhira Damodara Swami</h1>
                <p className="text-lg md:text-xl italic text-saffron-600 mt-2">
                    "Chant and be happy."
                </p>
            </header>

            <div className="max-w-4xl mx-auto">
                <input
                    type="text"
                    placeholder="Search lectures..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 mb-6 border border-saffron-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500"
                />

                <div className="flex flex-wrap gap-2 mb-6">
                    {uniqueTags.map((tag, idx) => (
                        <button
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm border ${selectedTag === tag
                                ? 'bg-saffron-600 text-white'
                                : 'bg-white text-saffron-600 border-saffron-300'
                                }`}
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid gap-6">
                    {filteredLectures.map((lecture) => (
                        <div key={lecture.id} className="bg-white rounded-2xl shadow p-4">
                            <Link to={`/lecture/${lecture.id}`}>
                                <h2 className="text-xl font-semibold text-saffron-700 hover:underline">
                                    {lecture.title}
                                </h2>
                            </Link>
                            <p className="text-sm text-saffron-600">{lecture.date} – {lecture.location}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {lecture.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs px-2 py-1 bg-saffron-100 text-saffron-700 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <audio controls className="mt-3 w-full">
                                <source src={lecture.audioUrl} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="mt-16 text-center text-saffron-500 text-sm">
                For personal spiritual use only | © 2025 BDDS Audio Library
            </footer>
        </div>
    );
}

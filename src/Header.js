// Header.js
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-6 py-3 flex items-center justify-between border-b">
      <Link to="/" className="text-xl font-bold text-saffron-700">
        🪷 BDDS Audio Archive
      </Link>
      <nav className="flex gap-4">
        <Link
          to="/"
          className={`hover:underline ${
            location.pathname === "/" ? "text-saffron-700 font-semibold" : "text-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          to="/contact-us"
          className={`hover:underline ${
            location.pathname.includes("contact") ? "text-saffron-700 font-semibold" : "text-gray-700"
          }`}
        >
          Contact Us
        </Link>
        <Link
          to="/admin"
          className={`hover:underline ${
            location.pathname.includes("contact") ? "text-saffron-700 font-semibold" : "text-gray-700"
          }`}
        >
          Admin
        </Link>
      </nav>
    </header>
  );
}




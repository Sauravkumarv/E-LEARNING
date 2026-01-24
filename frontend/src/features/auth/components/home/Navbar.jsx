import { useState } from "react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../../../config/home.config";

export default function Navbar() {
  const { navbar } = HOME_CONTENT;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* ===== BRAND ===== */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          {navbar.brand}
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navbar.links.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm text-gray-700 hover:text-blue-600"
          >
            {navbar.actions.login}
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            {navbar.actions.signup}
          </Link>
        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE DROPDOWN ===== */}
      {open && (
        <div className="md:hidden bg-white border-t shadow">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm">
            {navbar.links.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              {navbar.actions.login}
            </Link>

            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white text-center py-2 rounded-lg"
            >
              {navbar.actions.signup}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-950 border-b border-gray-800 text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-bold text-blue-500"
          >
            Gufran Hasib
          </Link>

          <div className="hidden md:flex gap-6 text-sm md:text-base">

            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>

            <Link to="/skills" className="hover:text-blue-400 transition">
              Skills
            </Link>

            <Link to="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>

            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>

          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-300"
          >
            ☰
          </button>

        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-6 pb-2">

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              About
            </Link>

            <Link
              to="/skills"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>

          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
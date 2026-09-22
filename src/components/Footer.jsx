function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-xl font-bold text-blue-400 mb-3">
          Gufran Hasib
        </h2>

        <p className="text-sm mb-5">
          MERN Stack Developer | AI Integration
        </p>

        <div className="flex justify-center gap-6 mb-6">

          <a
            href="https://github.com/gufranhasib20-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gufranhasib/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

        </div>

        <p className="text-sm text-gray-500">
          © 2026 Gufran Hasib. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
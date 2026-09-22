import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.png'

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white flex items-center px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">

          <p className="text-blue-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Gufran Hasib
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            MERN Stack Developer | AI Integration
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-8 mb-8 max-w-xl mx-auto md:mx-0">
            I build modern web applications using React,
            Node.js, MongoDB, and AI technologies.
            I am passionate about creating useful and
            user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">

            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              About Me
            </Link>

            <Link
              to="/projects"
              className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </Link>
            <a
            href="/Gufran_Hasib_Resume (2).pdf"
            download
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>

          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-8">

            <a
              href="https://github.com/gufranhasib20-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gufranhasib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="flex justify-center order-first md:order-last">

          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-lg shadow-blue-500/20">

            <img
              src={profileImage}
              alt="Gufran Hasib"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Home
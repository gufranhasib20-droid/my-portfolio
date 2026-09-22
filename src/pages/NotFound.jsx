import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="text-center">

        <h1 className="text-7xl md:text-9xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-6 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Back to Home
        </Link>

      </div>
    </section>
  )
}

export default NotFound
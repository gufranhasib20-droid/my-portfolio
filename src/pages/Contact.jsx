function Contact() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold mb-3">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Contact Me
          </h1>

          <p className="text-gray-400">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Let's Connect
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="font-semibold text-lg">
                Email
              </h3>

              <a
                href="mailto:gufranhasib22@gmail.com"
                className="text-blue-400 hover:underline"
              >
                gufranhasib22@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                GitHub
              </h3>

              <a
                href="https://github.com/gufranhasib20-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit my GitHub
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/gufranhasib/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit my LinkedIn
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
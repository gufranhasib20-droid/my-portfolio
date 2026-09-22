function About() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold mb-3">
            GET TO KNOW ME
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            About Me
          </h1>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-5">
            Who I Am
          </h2>

          <p className="text-gray-400 leading-8">
            Hello! I'm Gufran Hasib, a Computer Science student
            specializing in Artificial Intelligence and Machine Learning.
          </p>

          <p className="text-gray-400 leading-8 mt-4">
            I am passionate about MERN Stack Development and AI
            integration. I enjoy building practical web applications
            that solve real-world problems.
          </p>

          <p className="text-gray-400 leading-8 mt-4">
            My goal is to grow as a full-stack developer, improve my
            problem-solving skills, and contribute to innovative
            software projects.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-8">
            Education
          </h2>

          <div className="border-l-2 border-blue-500 pl-6 space-y-8">

            <div>
              <p className="text-blue-400 text-sm font-semibold">
                2023 - 2027
              </p>

              <h3 className="text-xl font-bold mt-2">
                B.Tech in Computer Science
              </h3>

              <p className="text-gray-400 mt-2">
                Artificial Intelligence & Machine Learning
              </p>

              <p className="text-gray-500 mt-1">
                Allenhouse Institute of Technology
              </p>
            </div>

            <div>
              <p className="text-blue-400 text-sm font-semibold">
                2023
              </p>

              <h3 className="text-xl font-bold mt-2">
                Intermediate (Class XII)
              </h3>

              <p className="text-gray-500 mt-1">
                H.A.L Vidyalaya
              </p>
            </div>

          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-5">
            Career Focus
          </h2>

          <p className="text-gray-400 leading-8">
            MERN Stack Development, Artificial Intelligence,
            REST APIs, and continuous learning.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-5">
            My Interests
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'Full-Stack Development',
              'Artificial Intelligence',
              'Problem Solving',
              'Data Structures & Algorithms',
              'Building Real-World Projects',
            ].map((interest) => (
              <span
                key={interest}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
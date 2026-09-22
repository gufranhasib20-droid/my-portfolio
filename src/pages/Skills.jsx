function Skills() {
  const skillGroups = [
    {
      title: 'Frontend Development',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React.js',
        'Tailwind CSS',
        'Bootstrap',
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'JWT',
      ],
    },
    {
      title: 'Database',
      skills: [
        'MongoDB',
        'Mongoose',
      ],
    },
    {
      title: 'AI & Tools',
      skills: [
        'OpenRouter',
        'Google Gemini API',
        'Git',
        'GitHub',
        'VS Code',
        'Thunder Client',
      ],
    },
  ]

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold mb-3">
            MY EXPERTISE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Technical Skills
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern
            web applications and AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-6">
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:text-blue-400 hover:border-blue-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills
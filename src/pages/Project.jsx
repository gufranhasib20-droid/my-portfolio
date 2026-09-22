import interviewImage from '../assets/interview-agent/landing-page.png'
import codeReviewerImage from '../assets/code-reviewer.png'
import gymImage from '../assets/gym-website.png'

function Projects() {
  const projects = [
    {
      title: 'AI Interview Agent',
      category: 'MERN Stack + AI',
      image: interviewImage,
      description:
        'An AI-powered interview platform that analyzes resumes, generates personalized questions, and provides automated feedback and performance scoring.',
      technologies: ['React', 'Node.js', 'MongoDB', 'OpenRouter'],
      demo: 'https://ai-mern-project-client-1.onrender.com',
      github: '#',
    },
    {
      title: 'AI-Powered Code Reviewer',
      category: 'Generative AI',
      image: codeReviewerImage,
      description:
        'A code review application that uses Google Gemini API to analyze source code and provide helpful feedback for developers.',
      technologies: ['React', 'Express.js', 'Gemini API', 'Axios'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Gym Website',
      category: 'Full-Stack Development',
      image: gymImage,
      description:
        'A responsive gym website featuring workout sessions, pricing plans, BMI calculator, gallery, and a contact form.',
      technologies: ['React', 'Node.js', 'Express.js', 'Nodemailer'],
      demo: '#',
      github: 'https://github.com/gufranhasib20-droid/Gym-Website',
    },
  ]

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold mb-3">
            MY WORK
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Featured Projects
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of the projects I have built using
            modern web technologies and AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />

              <p className="text-blue-400 text-sm font-medium mb-3">
                {project.category}
              </p>

              <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">

                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
                  >
                    Live Demo
                  </a>
                )}

                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 hover:border-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition"
                  >
                    GitHub
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects
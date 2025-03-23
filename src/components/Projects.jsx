const projects = [
  {
    id: 1,
    title: "Personal Notes App",
    image: "my-notes.png",
    link: "#",
    description:
      "A secure personal notes app with authentication spring boot, React JS and Tailwind CSS.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "portfolio.jpg",
    link: "#",
    description:
      "A responsive developer portfolio built with React and Tailwind CSS.",
  },
];

const Projects = () => {
  return (
    <section
      id="project"
      className="transition-all duration-300 bg-gray-50 dark:bg-gray-900 p-5 scroll-mt-16"
    >
      <div className="container mx-auto content-center text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
          <div className=" bg-slate-900 dark:bg-white h-[4px] mt-2"></div>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Here are some of my recent projects showcasing my full-stack skills.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-15">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover w-full h-40 dark:text-white"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

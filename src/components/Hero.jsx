const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex md:flex-row flex-col-reverse justify-evenly gap-6 transition-all duration-300 bg-gray-100 dark:bg-gray-900 dark:text-white scroll-mt-16"
    >
      <div className="flex px-10 flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I'm a <span className="text-blue-600">Full Stack Developer</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl">
          Specializing in React.js, Tailwind CSS, and Spring Boot.
        </p>
        <div className="m-6 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="px-6 mx-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="flex px-10 flex-col justify-center items-center text-center">
        <div className="flex  justify-center items-center">
          <div className=" flex justify-center items-center border-4 border-blue-600 rounded-full bg-gradient-to-r from-blue-500 to-purple-500  bg-gray-900 shadow-[0_0_15px_5px_rgba(59,130,246,0.6)]">
            <img
              src="my-notes.png"
              alt=""
              className="w-[250px] aspect-square object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

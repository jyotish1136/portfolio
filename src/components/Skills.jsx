import { GiNetworkBars } from "react-icons/gi";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiSpringboot,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const Services = () => {
  const skills = [
    { icon: SiHtml5, name: "HTML5", color: "#e44d26" },
    { icon: SiCss3, name: "CSS3", color: "#2965f1" },
    { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
    { icon: SiReact, name: "React", color: "#61DBFB" },
    { icon: SiSpringboot, name: "Spring Boot", color: "#6db33f" },
    { icon: SiMysql, name: "MySQL", color: "#00758f" },
    { icon: DiJava, name: "Java", color: "#00758f" },
    { icon: GiNetworkBars, name: "DSA", color: "#00758f" },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center p-4 text-center bg-gray-200 dark:bg-slate-900 dark:text-white scroll-mt-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
        My Skills
        <div className="bg-slate-900 dark:bg-white h-[4px] mt-2"></div>
      </h2>
      <div className="flex flex-wrap justify-center px-16 bg-gray-200 text-gray-900 dark:bg-slate-900 dark:text-white">
        {skills.map(({ icon: Iconx, name, color }, index) => (
          <div
            className="flex flex-col items-center justify-center mx-15 my-6 text-center h-[130px] aspect-square border-4 border-blue-600 rounded-full text-gray-900 dark:text-white transition-transform duration-300 hover:scale-110"
            key={index}
          >
            <Iconx title={name} className="text-5xl" style={{ color }} />
            <p className="mt-2">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

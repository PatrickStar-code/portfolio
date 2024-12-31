import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import ProjectShowcase from "./ProjectShowCase";
// import ProjectShowCaseTeste from "./ProjectShowCase";
import MockupSafari from "./mockup";
import InteractiveHoverButton from "./ui/interactive-hover-button";

export interface IProject {
  image: string;
  title: string;
  description: string;
  link: string;
  url: string;
  technologies: string[];
}

// Dados dos projetos
const ProjectArrayList: IProject[] = [
  {
    image: "https://via.placeholder.com/150",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "#",
    url: "#",
    technologies: ["React", "Tailwind", "TypeScript"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "#",
    url: "#",
    technologies: [
      "React",
      "Tailwind",
      "TypeScript",
      "Next.js",
      "Node.js",
      "MongoDB",
    ],
  },
];

// Componente Principal da Seção de Projetos
export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="w-full min-h-screen py-16 px-8 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        ref={ref}
      >
        Meus Projetos
      </motion.h2>

      <div className="flex flex-col gap-12">
        {ProjectArrayList.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            ref={ref}
          >
            <div className="flex justify-center items-center w-full md:w-1/2 h-98 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <MockupSafari url={project.url} imageSrc={project.image} />
            </div>

            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.technologies.map((language, langIndex) => (
                  <span
                    key={langIndex}
                    className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>
              <div>
                <InteractiveHoverButton text="Acessar" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Espaçamento para separar as seções */}
      <div className="mt-16"></div>
    </div>
  );
}

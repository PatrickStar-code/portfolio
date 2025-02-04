import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MockupSafari from "./mockup";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";

export interface IProject {
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: string[];
  gitHubUrl: string;
}

// Dados dos projetos
const ProjectArrayList: IProject[] = [
  {
    image: "/images/notebookly.png",
    title: "Notebookly",
    description:
      "Notebookly é um projeto que simula um diário digital. O objetivo é permitir que o usuário crie cadernos e notas, podendo registrar seus sentimentos e pensamentos em cada nota criada.",
    link: "https://notebookly.vercel.app/Main",
    gitHubUrl: "https://github.com/PatrickStar-code/notebookly",
    technologies: ["Next", "Tailwind", "TypeScript", "Prisma", "NextAuth"],
  },
];

// Configurações de animação reutilizáveis
const motionConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Componente Principal da Seção de Projetos
export function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      className="w-full min-h-screen py-16 px-8 flex flex-col items-center dark:bg-gray-800"
      id="projetos"
    >
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
            {...motionConfig}
            ref={ref}
          >
            <div className="flex justify-center items-center w-full md:w-1/2 h-98 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <MockupSafari url={project.link} imageSrc={project.image} />
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
              <div className="flex gap-4 items-baseline mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-105"
                >
                  <InteractiveHoverButton text="Acessar" />
                </a>
                <a
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-105"
                >
                  <Button>
                    <GithubIcon />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16"></div>
    </div>
  );
}

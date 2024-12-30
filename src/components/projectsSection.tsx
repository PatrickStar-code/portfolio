import { motion } from "framer-motion";
// import ProjectShowcase from "./ProjectShowCase";
// import ProjectShowCaseTeste from "./ProjectShowCase";
import MockupMacBook from "./mockupMacBook";

export interface IProject {
  image: string;
  title: string;
  description: string;
  link: string;
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
    technologies: ["React", "Tailwind", "TypeScript"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "#",
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
  return (
    <div className="w-full h-screen  py-16 px-8 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Meus Projetos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectArrayList.map((project, index) => (
          <motion.div
            key={index}
            className="flex justify-center bg-"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <MockupMacBook />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

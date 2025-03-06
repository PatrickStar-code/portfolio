"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
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
  {
    image: "/images/MoveXpress.png",
    title: "MoveXpress (Em Construção 🛠️)",
    description: "Em Construção 🛠️.",
    link: "",
    gitHubUrl:
      "https://github.com/PatrickStar-code/mp-saas-landing-page-com-nextjs",
    technologies: ["React", "Tailwind", "TypeScript", "Next.js"],
  },

  {
    image: "/images/AcLandingPage.png",
    title: "AC LandingPage",
    description: "Minha primeira Landing Page Vendida feita para um fotógrafo.",
    link: "https://patrickstar-code.github.io/LandingPage_Arthur/#/",
    gitHubUrl: "https://github.com/PatrickStar-code/LandingPage_Arthur",
    technologies: ["React", "Tailwind", "TypeScript"],
  },
  {
    image: "/images/PixelSurvival.png",
    title: "PixelSurvival",
    description:
      "Jogo criado em Python para projeto da faculdade Inspirado em Vampire Survivor.",
    link: "https://github.com/PatrickStar-code/Pixel-Survival",
    gitHubUrl: "https://github.com/PatrickStar-code/Pixel-Survival",
    technologies: ["Python"],
  },
  {
    image: "/images/AlpacaGenerator.png",
    title: "Alpaca Generator",
    description: "Gere sua alpaca estilosa.",
    link: "https://patrickstar-code.github.io/AlpacaGenerator/",
    gitHubUrl: "https://github.com/PatrickStar-code/AlpacaGenerator",
    technologies: ["HTML", "CSS", "Typescript", "React", "Styled Components"],
  },
];

export function ProjectsSection() {
  const [active, setActive] = useState<IProject | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="w-full min-h-screen py-16 px-8 flex flex-col items-center dark:bg-gray-800">
      {/* Título com animação */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }} // Animação ocorre apenas uma vez
      >
        Meus <span className="text-blue-500">Projetos</span>
      </motion.h1>

      {/* Overlay para o card expandido */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Card expandido */}
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-gray-800 sm:rounded-3xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-96 lg:h-96 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-8">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-lg"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-base lg:text-lg h-60 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div className="flex flex-wrap gap-2">
                      {active.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          viewport={{ once: true }} // Animação ocorre apenas uma vez
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <motion.a
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-sm rounded-full font-bold bg-blue-500 text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }} // Animação ocorre apenas uma vez
                      >
                        Acessar
                      </motion.a>
                      <motion.a
                        href={active.gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-sm rounded-full font-bold bg-gray-500 text-white flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }} // Animação ocorre apenas uma vez
                      >
                        <GithubIcon size={16} />
                        GitHub
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Lista de cards */}
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-8">
        {ProjectArrayList.map((project, index) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            className="p-6 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: true }} // Animação ocorre apenas uma vez
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${project.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-xl"
                >
                  {project.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

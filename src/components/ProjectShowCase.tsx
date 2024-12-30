import { IProject } from "./projectsSection";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Importando os componentes do ShadCN
import Android from "./ui/android";
import InteractiveHoverButton from "./ui/interactive-hover-button";

// Componente Mockup do celular

// Componente Principal de Exibição do Projeto
export default function ProjectShowCaseTeste({
  Project,
}: {
  Project: IProject;
}) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl shadow-lg max-w-md w-full mx-auto bg-white dark:bg-gray-800">
      {/* Exibe o Mockup com a imagem do projeto */}
      <Android className="h-[40rem]" src={Project.image} />

      {/* Título do projeto */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white truncate">
        {Project.title}
      </h2>

      {/* Descrição do projeto com limite de linhas */}
      <p className="mt-2 text-center text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
        {Project.description}
      </p>

      {/* Tecnologias usadas */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {Project.technologies.slice(0, 4).map((tech: string, index: number) => (
          <span
            key={index}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-700 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}

        {Project.technologies.length > 4 && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full">
                  +{Project.technologies.length - 4}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>{Project.technologies.slice(4).join(", ")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      <InteractiveHoverButton text="Acessar" />
    </div>
  );
}

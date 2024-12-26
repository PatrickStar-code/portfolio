import { motion } from "framer-motion";

import Navbar from "./components/navbar";
import ScrollProgress from "./components/ui/scroll-progress";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <ScrollProgress className="top-[65px]" />
      <Navbar />
      {/* Main Section */}
      <section id="inicio" className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou{" "}
          <span className="text-blue-500">[Patrick da Silva Almeida]</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Desenvolvedor Web apaixonado por criar experiências incríveis na web.
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="#projetos"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 border border-gray-800 dark:border-gray-200 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Entre em Contato
          </a>
        </motion.div>
      </section>
      {/* Fim Main Section */}

      {/* Início About Section */}
      <section id="sobre" className="h-screen flex items-center justify-center px-6">
        <div className="flex w-full max-w-6xl gap-8">
          {/* Texto à esquerda */}
          <motion.div
            className="flex flex-col justify-center text-left w-1/2"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
              Sobre mim
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">
              Sou um desenvolvedor web com experiência em criar aplicações
              incríveis usando as tecnologias mais modernas. Adoro desafios e
              estou sempre em busca de aprender algo novo.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">
              Tenho paixão por programação, design e criar experiências digitais
              imersivas. Meu foco está em escrever código limpo e eficiente.
            </p>
          </motion.div>

          {/* Imagem à direita */}
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Imagem do desenvolvedor"
              className="w-full rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </section>
      {/* Fim About Section */}
    </div>
  );
}

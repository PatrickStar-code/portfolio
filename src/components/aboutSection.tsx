import { motion } from "framer-motion";

export default function AboutSection() {
  const cards = [
    {
      title: "Liderança",
      fact: "Liderou uma equipe em um projeto final durante 2 anos e meio.",
    },
    {
      title: "Organização",
      fact: "Planejou e executou entregas alinhadas com requisitos definidos.",
    },
    {
      title: "Comunicação",
      fact: "Facilitou a troca de informações entre equipe.",
    },
    {
      title: "Trabalho em equipe",
      fact: "Colaborou com colegas para criar sistemas completos.",
    },
    {
      title: "Atenção aos detalhes",
      fact: "Garantiu a funcionalidade e eficiência de sistemas entregues.",
    },
    {
      title: "Flexibilidade",
      fact: "Adaptou-se a diferentes desafios durante o desenvolvimento de projetos.",
    },
  ];

  return (
    <section
      id="sobre"
      className="min-h-screen p-10 flex flex-col items-center justify-center dark:bg-gray-800"
    >
      <div className="max-w-5xl text-center space-y-6">
        {/* Título */}
        <motion.h2
          className="text-5xl font-extrabold drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sobre mim ⭐
        </motion.h2>

        {/* Descrição */}
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sou desenvolvedor web formado pelo SENAI de Juiz de Fora, com
          experiência no desenvolvimento de sistemas completos, desde a análise
          de requisitos até a entrega final. Durante minha formação, liderei uma
          equipe no projeto final, aprimorando habilidades em liderança e
          organização. Minha expertise inclui PHP, JavaScript, TypeScript,
          React, MySQL e integração de APIs, sempre buscando entregar soluções
          eficientes e inovadoras.
        </motion.p>

        {/* Cards de curiosidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-600">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

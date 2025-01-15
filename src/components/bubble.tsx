import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function Bubble() {
  const [, setExploded] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setExploded(true);
    controls.start({
      scale: 3, // Aumenta o tamanho
      opacity: 0, // Torna invisível
      transition: { duration: 3 },
    });

    // Após a animação, redefine o estado para permitir que a bolha seja recriada
    setTimeout(() => {
      setExploded(false);
      controls.start({
        scale: 1,
        opacity: 1,
      });
    }, 3000); // Espera o tempo da animação
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Contêiner que anima a bolha e a imagem juntos */}
      <motion.div
        className="flex justify-center items-center relative"
        animate={{
          y: ["0%", "-10%", "0%"], // Move para cima e para baixo
          rotate: [0, 10, -10, 0], // Rotaciona suavemente
        }}
        transition={{
          duration: 3, // Duração da flutuação
          ease: "easeInOut", // Suaviza a transição
          repeat: Infinity, // Repetir a animação infinitamente
          repeatType: "loop", // Loop contínuo
        }}
      >
        {/* Imagem dentro do contêiner */}
        <motion.img
          src="/images/me.jpg"
          alt="Imagem"
          className="rounded-full object-cover"
          style={{
            width: "19rem",
            height: "19rem", // Tamanho da imagem
            zIndex: 10, // Garante que a imagem fique abaixo da bolha
          }}
        />

        {/* Bolha sobre a imagem */}
        <motion.div
          className="bg-gradient-to-br from-blue-200 via-transparent to-blue-200 rounded-full absolute"
          style={{
            width: "21rem",
            height: "21rem", // Tamanho da bolha
          }}
          animate={controls}
          onClick={handleClick}
        ></motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function JigSaw() {
  const [showDialog, setShowDialog] = useState(true);
  const [phrase, setPhrase] = useState("Vamos Jogar um Jogo?");

  function handleYesClick() {
    setPhrase("Ótimo! Vamos começar!");
    setTimeout(() => {
      setShowDialog(false);
    }, 3000);
    window.location.href = "https://8bits-portifolio-snsa.vercel.app/";
  }

  function handleNoClick() {
    setPhrase("Que pena! Se quiser jogar clica em mim");
    setTimeout(() => {
      setShowDialog(false);
    }, 3000);
  }

  return (
    <div>
      {/* Jigsaw no canto */}
      <img
        src="/images/Jigsaw.png"
        alt="Imagem do Jigsaw"
        className="fixed bottom-0 right-0 w-20 cursor-pointer"
      />

      {/* Balão de conversa */}
      {showDialog && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-24 right-5 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 max-w-xs"
        >
          <div
            className="absolute -bottom-2 right-5 w-0 h-0 
            border-l-8 border-r-8 border-t-8 
            border-l-transparent border-r-transparent 
            border-t-white dark:border-t-gray-800"
          ></div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {phrase}
          </p>
          <div className="flex justify-end gap-2 mt-3">
            {phrase === "Vamos Jogar um Jogo?" && (
              <>
                <button
                  className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  onClick={handleYesClick}
                >
                  Sim
                </button>
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={handleNoClick}
                >
                  Não
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

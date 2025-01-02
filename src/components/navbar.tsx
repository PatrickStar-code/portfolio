// Importações necessárias
import { motion } from "framer-motion";
import { Menu, Sun, Moon } from "lucide-react"; // Ícones de exemplo (substitua conforme necessário)
import { useState, useEffect } from "react";

export default function Navbar() {
  const WindownTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(WindownTheme);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Inicio", href: "inicio" },
    { name: "Sobre", href: "sobre" },
    { name: "Projetos", href: "projetos" },
    { name: "Contato", href: "contato" },
  ];

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a href="#inicio">PatrickStarCode</a>
        </motion.div>

        {/* Links grandes */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.href}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          {/* Botão de tema */}
          <motion.div
            className="ml-4 relative w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
            onClick={() => setIsDarkMode(!isDarkMode)}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center transform transition-transform ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              }`}
              layout
            >
              {isDarkMode ? (
                <Moon size={16} className="text-blue-500" />
              ) : (
                <Sun size={16} className="text-yellow-500" />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Botão de menu (mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <motion.div
            className="relative w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-800 rounded-full cursor-pointer"
            onClick={() => setIsDarkMode(!isDarkMode)}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center transform transition-transform ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              }`}
              layout
            >
              {isDarkMode ? (
                <Sun size={16} className="text-yellow-500" />
              ) : (
                <Moon size={16} className="text-blue-500" />
              )}
            </motion.div>
          </motion.div>
          <button
            className="text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 shadow-md"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

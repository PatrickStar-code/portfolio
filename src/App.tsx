import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import ScrollProgress from "./components/ui/scroll-progress";
import TypingAnimation from "./components/ui/typing-animation";
import Bubble from "./components/bubble";
import { ChevronDown } from "lucide-react";

const ScrollDown = () => (
  <motion.div
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-2"
    animate={{ y: [0, 10, 0] }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 1.5,
    }}
  >
    <ChevronDown className="text-black w-8 h-8 drop-shadow-md dark:text-white" />
    <span className="text-black text-sm font-medium drop-shadow-md dark:text-white">
      Scroll Down
    </span>
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative">
      <ScrollProgress className="top-[65px]" />
      <Navbar />
      {/* Main Section */}
      <section className="w-full h-screen flex flex-col md:flex-row gap-8 items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-left mt-16 md:mt-0 text-black dark:text-white w-full px-6 md:w-1/2">
          <motion.h3
            className="text-lg mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello Word! 👋
          </motion.h3>

          <motion.h1
            className="text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            My name is <span className="text-blue-500">Patrick Almeida</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <TypingAnimation className="text-2xl font-normal">
              I'm a Web Developer
            </TypingAnimation>
          </motion.div>
        </div>
        <Bubble />
      </section>

      {/* Scroll Down Indicator */}
      <ScrollDown />
    </div>
  );
}

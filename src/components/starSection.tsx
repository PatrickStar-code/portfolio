import { motion } from "framer-motion";
import TypingAnimation from "./ui/typing-animation";
import Bubble from "./bubble";

export default function StartSection() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row gap-8 items-center justify-center ">
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
  );
}

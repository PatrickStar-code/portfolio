import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      className="min-h-screen p-10  flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl text-center space-y-6">
        {/* Título */}
        <motion.h2
          className="text-5xl font-extrabold  drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          About Patrick Star ⭐
        </motion.h2>

        {/* Descrição */}
        <motion.p
          className="text-lg  leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={ref}
        >
          Patrick Star is not just a starfish; he’s a hilarious, carefree, and
          lovable character from Bikini Bottom. As SpongeBob's best friend,
          Patrick spends his days enjoying jellyfishing, eating, and sleeping
          under his rock house. Despite his simplicity, Patrick has a big heart
          and an unmatched ability to bring laughter wherever he goes.
        </motion.p>

        {/* Cards de curiosidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Favorite Activity", fact: "Jellyfishing 🪼" },
            { title: "Favorite Food", fact: "Krabby Patties 🍔" },
            { title: "Address", fact: "Under a Rock 🪨" },
            { title: "Best Friend", fact: "SpongeBob SquarePants!" },
            { title: "Biggest Fear", fact: "Thinking too hard 🤯" },
            { title: "Catchphrase", fact: "Is mayonnaise an instrument?" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              ref={ref}
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

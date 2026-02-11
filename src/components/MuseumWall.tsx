import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TreePine, Map, Flame, Layers, Building } from "lucide-react";

const tiles = [
  {
    icon: Flame,
    title: "The Original Pit",
    description: "Maroons dug pits into the earth, layered with pimento wood and allspice leaves. The meat cooked low and slow, hidden from colonial eyes. This method—part survival, part artistry—is the ancestor of every jerk grill today.",
  },
  {
    icon: TreePine,
    title: "Pimento / Allspice Tree",
    description: "Pimenta dioica, native to Jamaica, produces wood with a sweet, spicy smoke unlike any other. The leaves and berries (allspice) are woven into jerk marinades. No pimento wood, no real jerk.",
  },
  {
    icon: Layers,
    title: "The Spice Board",
    description: "Scotch bonnet peppers, allspice, thyme, scallion, garlic, ginger, black pepper, cinnamon, nutmeg, soy sauce, and lime. Each ingredient plays a role in the complex heat-sweet-savory profile of authentic jerk seasoning.",
  },
  {
    icon: Map,
    title: "West Africa → Caribbean",
    description: "Smoking techniques from the Gold Coast, spice knowledge from the Sahel, communal cooking from the Niger Delta—these traditions crossed the Atlantic during the slave trade and found new expression in Jamaica's mountains.",
  },
  {
    icon: Building,
    title: "Modern Pit in Lagos",
    description: "The Jerk Pit Africa brings this full-circle story to Nigeria's commercial capital. Our pit is built on the same principles—pimento wood, low-and-slow technique, respect for the craft—adapted for Lagos' fast-paced food culture.",
  },
];

const MuseumWall = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4"
        >
          The Museum <span className="text-gradient-fire">Wall</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-16 text-lg"
        >
          Tap a tile. Each story takes 15 seconds.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setOpenIndex(i)}
              className="bg-card border border-border rounded-2xl p-6 text-center cursor-pointer hover:border-fire/40 hover:shadow-fire transition-all group aspect-square flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-fire transition-colors">
                <tile.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-sm font-semibold leading-tight group-hover:text-fire transition-colors">
                {tile.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setOpenIndex(null)}
          >
            <div className="absolute inset-0 bg-pit-dark/90 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-3xl p-8 md:p-12 max-w-lg w-full"
            >
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <div className="w-14 h-14 rounded-xl bg-gradient-fire flex items-center justify-center mb-6 shadow-ember">
                {(() => { const Icon = tiles[openIndex].icon; return <Icon className="w-7 h-7 text-primary-foreground" />; })()}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{tiles[openIndex].title}</h3>
              <p className="text-secondary-foreground font-body leading-relaxed">{tiles[openIndex].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MuseumWall;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const stories = [
  {
    title: "The Origin",
    headline: "From Survival to Signature",
    preview: "Jerk started as a hidden pit-cooking method used by the Taíno people in Jamaica's interior mountains.",
    full: "The word 'jerk' likely comes from the Quechua word 'charqui,' meaning dried strips of meat. The Taíno people of Jamaica developed a method of smoking and seasoning meat over pimento wood to preserve it in the tropical heat. This technique predates European contact and represents one of the oldest continuous cooking traditions in the Americas. When the Spanish arrived, enslaved Africans who escaped into the mountains—the Maroons—adopted and transformed this method.",
  },
  {
    title: "The Maroons & The Pit",
    headline: "Freedom's Flavor",
    preview: "Escaped enslaved Africans perfected jerk cooking as both sustenance and survival strategy in Jamaica's Blue Mountains.",
    full: "The Maroons—communities of escaped enslaved Africans in Jamaica—transformed jerk from a preservation method into an art form. Living in the remote Blue Mountains, they dug cooking pits, layered pimento wood and allspice leaves, and slow-cooked wild boar and other game. The smoke served a dual purpose: it flavored the meat and kept the fires invisible to colonial patrols. The communal pit became a symbol of freedom, resistance, and community. Every Jerk Pit today carries this legacy.",
  },
  {
    title: "Africa's Role",
    headline: "The Knowledge That Traveled",
    preview: "African seasoning, smoking, and preservation traditions traveled through the diaspora and evolved in Jamaica.",
    full: "The African contribution to jerk is often understated. West African traditions of dry-rubbing meats with complex spice blends, smoking over aromatic woods, and communal fire-pit cooking were the foundation that the Maroons built upon. Scotch bonnet peppers, allspice, thyme, and garlic—the core of jerk seasoning—mirror spice traditions from Ghana, Nigeria, and Senegal. The Jerk Pit Africa honors this full circle: African knowledge, refined in the Caribbean, brought home to Lagos.",
  },
];

const RootsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4"
        >
          The <span className="text-gradient-fire">Roots</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-16 text-lg"
        >
          Three stories. Each takes 30 seconds. The flavor runs deeper than you think.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-fire/30 transition-colors cursor-pointer group"
              onClick={() => setOpenIndex(i)}
            >
              <span className="text-fire font-body font-semibold text-sm uppercase tracking-wider mb-3 block">
                {story.title}
              </span>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-fire transition-colors">
                {story.headline}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm mb-4">
                {story.preview}
              </p>
              <span className="text-fire font-body text-sm font-semibold group-hover:underline">
                Learn more →
              </span>
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <span className="text-fire font-body font-semibold text-sm uppercase tracking-wider mb-3 block">
                {stories[openIndex].title}
              </span>
              <h3 className="font-display text-3xl font-bold mb-6">
                {stories[openIndex].headline}
              </h3>
              <p className="text-secondary-foreground font-body leading-relaxed text-base">
                {stories[openIndex].full}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RootsSection;

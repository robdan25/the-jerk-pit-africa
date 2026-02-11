import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Adunni O.", text: "Best jerk chicken I've had outside Jamaica. The smoke flavor is unreal.", rating: 5 },
  { name: "Chinedu K.", text: "Finally, someone who takes jerk seriously in Lagos. The heat levels are perfect.", rating: 5 },
  { name: "Amara N.", text: "The Jerk Seafood Mix is a game-changer. I order every weekend now.", rating: 5 },
  { name: "Tunde A.", text: "Drive-up pickup in 15 minutes. The food is premium but the speed is fast-food level.", rating: 5 },
  { name: "Folake D.", text: "My Jamaican friend said this is legit. That's the only review that matters.", rating: 5 },
  { name: "Emeka I.", text: "The festival dumplings alone are worth the trip. Everything is fresh and bold.", rating: 5 },
];

const SocialProof = () => {
  return (
    <section className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          What Lagos Is <span className="text-gradient-fire">Saying</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-fire text-fire" />
                ))}
              </div>
              <p className="text-secondary-foreground font-body leading-relaxed mb-4 text-sm">"{t.text}"</p>
              <p className="font-body font-semibold text-sm text-muted-foreground">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

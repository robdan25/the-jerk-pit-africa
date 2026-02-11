import { motion } from "framer-motion";
import { Drumstick, Flame, Car } from "lucide-react";

const steps = [
  {
    icon: Drumstick,
    title: "Choose Your Protein",
    description: "Chicken, fish, pork, or seafood—all pit-smoked to perfection.",
  },
  {
    icon: Flame,
    title: "Pick Your Heat",
    description: "Mild, classic, or extra fire. We respect your spice tolerance.",
  },
  {
    icon: Car,
    title: "Pickup Fast",
    description: "Drive-up, walk-up, or dispatch rider. Average: 12–18 mins.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-16 text-lg"
        >
          Lagos-ready convenience. Three steps to jerk perfection.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-fire/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-fire mx-auto mb-6 flex items-center justify-center shadow-ember group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

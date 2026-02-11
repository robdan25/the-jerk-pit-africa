import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = [
  { name: "Lagos", status: "Flagship", active: true },
  { name: "Accra", status: "Coming 2026", active: false },
  { name: "Nairobi", status: "Future", active: false },
  { name: "Johannesburg", status: "Future", active: false },
];

const ExpansionSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(28 90% 52%), transparent 70%)" }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <Globe className="w-12 h-12 text-fire mx-auto mb-4" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-4"
        >
          From Lagos to <span className="text-gradient-fire">Africa</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto"
        >
          Jerk started in Africa. We're bringing it home—one city at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {cities.map((city) => (
            <div
              key={city.name}
              className={`px-6 py-3 rounded-full border font-body text-sm font-semibold ${
                city.active
                  ? "bg-gradient-fire text-primary-foreground border-transparent shadow-fire"
                  : "border-border text-muted-foreground"
              }`}
            >
              {city.name}
              <span className={`ml-2 text-xs ${city.active ? "text-primary-foreground/80" : "text-muted-foreground/60"}`}>
                {city.status}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" className="border-fire/30 text-fire font-body font-semibold rounded-full px-8 py-6 hover:bg-fire/10 hover:text-fire">
            Partner With Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpansionSection;

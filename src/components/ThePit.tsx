import { motion } from "framer-motion";
import { Flame, Timer, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-jerk.jpg";

const features = [
  { icon: Leaf, title: "Pimento-Wood Smoke", desc: "Jamaica's allspice wood gives our jerk its signature aroma." },
  { icon: Timer, title: "Low-and-Slow Pit Technique", desc: "Hours over coals, never rushed. The pit does the work." },
  { icon: Flame, title: "Africa + Jamaica Spice Blend", desc: "Traditions that traveled the diaspora, perfected in Lagos." },
];

const ThePit = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src={heroImage}
              alt="The jerk pit with pimento wood smoke"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-2xl font-bold text-foreground">The Pit</p>
              <p className="text-cream/70 font-body text-sm">Where fire meets tradition</p>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl font-bold mb-4"
            >
              Why Our Jerk Is <span className="text-gradient-fire">Different</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground font-body text-lg mb-10"
            >
              It's not just seasoning. It's a method, a wood, and centuries of knowledge.
            </motion.p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center flex-shrink-0 shadow-ember">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">{f.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThePit;

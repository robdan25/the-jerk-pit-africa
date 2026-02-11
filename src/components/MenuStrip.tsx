import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jerkBox from "@/assets/jerk-box.jpg";

const menuItems = [
  { name: "Jerk Chicken Box", tag: "Flagship", price: "From ₦4,500" },
  { name: "Jerk Fish", tag: "Tilapia / Snapper", price: "From ₦5,000" },
  { name: "Jerk Pork", tag: "Slow-Smoked", price: "From ₦4,800" },
  { name: "Jerk Seafood Mix", tag: "Premium", price: "From ₦6,500" },
];

const sides = ["Festival", "Plantain", "Rice & Peas", "Fries", "Slaw", "Jerk Sauce"];

const MenuStrip = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Menu Items */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl font-bold mb-4"
            >
              Signature <span className="text-gradient-fire">Menu</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground font-body mb-10 text-lg"
            >
              Premium cuts, pit-smoked daily. No shortcuts.
            </motion.p>

            <div className="space-y-4 mb-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between border-b border-border pb-4 group cursor-pointer"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold group-hover:text-fire transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-sm text-muted-foreground font-body">{item.tag}</span>
                  </div>
                  <span className="font-body font-semibold text-fire">{item.price}</span>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-sm text-muted-foreground font-body mb-3 uppercase tracking-wider">Sides & Sauces</p>
              <div className="flex flex-wrap gap-2">
                {sides.map((side) => (
                  <span key={side} className="px-3 py-1.5 bg-muted rounded-full text-sm font-body text-secondary-foreground">
                    {side}
                  </span>
                ))}
              </div>
            </div>

            <Button className="bg-gradient-fire text-primary-foreground font-body font-semibold rounded-full px-6 hover:opacity-90 transition-opacity">
              View Full Menu
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-fire">
              <img
                src={jerkBox}
                alt="Jerk chicken box with sides"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuStrip;

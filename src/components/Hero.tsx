import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jerk.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jerk chicken grilling over pimento wood fire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      </div>

      {/* Now Open Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-3 bg-gradient-fire px-5 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse-glow" />
          <span className="text-sm font-body font-semibold text-primary-foreground tracking-wide uppercase">
            Now Open in Lagos
          </span>
          <span className="text-sm text-primary-foreground/80 font-body">
            <Clock className="inline w-3.5 h-3.5 mr-1" />
            11am – 10pm
          </span>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight"
        >
          The Jerk Pit
          <span className="block text-gradient-fire">Africa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-xl md:text-2xl text-cream/90 italic mb-2"
        >
          Authentic Jerk. Authentic Roots.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Lagos' home of real Jamaican jerk—built on African roots and firepit tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button size="lg" className="bg-gradient-fire text-primary-foreground font-body font-semibold text-lg px-8 py-6 rounded-full shadow-fire hover:opacity-90 transition-opacity">
            <MessageCircle className="mr-2 w-5 h-5" />
            Order on WhatsApp
          </Button>
          <Button size="lg" variant="outline" className="border-cream/30 text-cream font-body font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm hover:bg-cream/10 hover:text-cream">
            <MapPin className="mr-2 w-5 h-5" />
            Find Lagos Location
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-body text-sm text-muted-foreground tracking-widest uppercase"
        >
          Jerk Chicken • Fish • Pork • Seafood • Pimento Smoke • Made Fresh Daily
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

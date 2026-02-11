import { motion } from "framer-motion";
import { MapPin, Clock, Car, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LagosLocation = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Find Us in <span className="text-gradient-fire">Lagos</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.6234!2d3.2!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Jerk Pit Africa Lagos location"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-fire" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground font-body">Victoria Island, Lagos, Nigeria<br /><span className="text-sm">Near Eko Hotel roundabout</span></p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-fire" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground font-body">Monday – Sunday: 11:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-fire" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Parking & Pickup</h3>
                  <p className="text-muted-foreground font-body">Drive-up pickup available. On-site parking for 15+ cars.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-fire text-primary-foreground font-body font-semibold rounded-full px-8 py-6 shadow-fire hover:opacity-90 transition-opacity w-fit">
              <MessageCircle className="mr-2 w-5 h-5" />
              Order on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LagosLocation;

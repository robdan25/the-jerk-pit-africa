import { Flame, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-pit-dark border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-fire" />
              <span className="font-display text-lg font-bold">The Jerk Pit</span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Authentic Jamaican jerk rooted in African tradition. Made fresh daily in Lagos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Menu", "The Story", "The Pit", "Museum"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-foreground font-body text-sm hover:text-fire transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Visit</h4>
            <ul className="space-y-2">
              {["Lagos Location", "Hours", "Careers", "Partner With Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-foreground font-body text-sm hover:text-fire transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Stay in the loop</h4>
            <p className="text-muted-foreground font-body text-sm mb-4">Get drops + new location launches.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-muted border border-border rounded-l-full text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-fire"
              />
              <button className="px-5 py-2.5 bg-gradient-fire text-primary-foreground rounded-r-full font-body text-sm font-semibold hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-body text-xs">
            © 2026 The Jerk Pit Africa. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-fire/20 transition-colors">
                <Icon className="w-4 h-4 text-muted-foreground hover:text-fire" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

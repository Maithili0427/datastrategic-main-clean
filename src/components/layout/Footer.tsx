import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/about" },
      { label: "Careers", path: "/contact" },
      { label: "News", path: "/portfolio" },
    ],
    services: [
      { label: "Social Intelligence", path: "/services" },
      { label: "AI Solutions", path: "/services" },
      { label: "Data Analytics", path: "/services" },
      { label: "Development", path: "/services" },
    ],
    resources: [
      { label: "Case Studies", path: "/portfolio" },
      { label: "Blog", path: "/portfolio" },
      { label: "Documentation", path: "/services" },
      { label: "Support", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-cyan-glow flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary font-display">IC</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-display leading-tight">
                    SocialPulse
                  </span>
                  <span className="text-xs text-primary-foreground/60 -mt-0.5">
                    Intelligence Solutions
                  </span>
                </div>
              </Link>
              <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
                Empowering enterprises with cutting-edge social intelligence, AI solutions, 
                and digital transformation services for the future.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-cyan hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-display font-semibold mb-5 text-lg">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-cyan transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-5 text-lg">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-cyan transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-5 text-lg">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin size={18} className="mt-0.5 text-cyan flex-shrink-0" />
                  <span>123 Innovation Drive, Tech City, TC 10001</span>
                </li>
                <li>
                  <a
                    href="mailto:hello@icsocialpulse.com"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-cyan transition-colors"
                  >
                    <Mail size={18} className="text-cyan" />
                    hello@icsocialpulse.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-cyan transition-colors"
                  >
                    <Phone size={18} className="text-cyan" />
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} IC SocialPulse. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-cyan transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
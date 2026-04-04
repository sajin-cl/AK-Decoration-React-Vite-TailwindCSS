import { NAV_LINKS, SOCIAL_LINKS } from "@/config/data";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      className="w-full bg-stone-950 border-t border-amber-300/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <a
          href="#hero"
          className="text-white text-sm tracking-widest w-1/8 flex items-center justify-center">
          <img src="/logo.png" alt="logo" loading="lazy" className="h-10 block" />
          <div className="footer-logo-info">
            <p className="text-xl font-poppins">AK</p>
            <p className="text-xs text-amber-200">DECORATION</p>
          </div>
        </a>

        {/* Links */}
        <div className="text-white font-mono flex flex-wrap justify-center items-center gap-5 mx-auto">
          {NAV_LINKS.map((link, idx) => (
            <a key={idx} href={link?.href} className="hover:text-amber-300 transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="text-white text-xl flex gap-3">
          {SOCIAL_LINKS.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}  
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-amber-300 transition"
              >
                <Icon />
              </a>
            );
          })}
        </div>

      </div>

      {/* Copyright */}
      <div className="text-white/70 text-xs  text-center py-4 border-t border-white/10 hover:text-white transition duration-500">
        © {new Date().getFullYear()} AK Decoration. All rights reserved - Developed by Sajin CL.
      </div>
    </motion.footer>
  );
};

export default Footer;

'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Contact']
    },
    {
      title: 'Services',
      links: ['Web Development', 'E-Commerce', 'Branding', 'Marketing']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Case Studies', 'Documentation', 'Support']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-brand to-purple-500 bg-clip-text text-transparent mb-4"
            >
              Wonderfull Site
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating wonderful digital experiences that inspire, engage, and deliver results. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {['T', 'L', 'I', 'F'].map((letter, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all"
                >
                  {letter}
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Wonderfull Site. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
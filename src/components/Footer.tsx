import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    productos: [
      { name: 'Vapes Recargables', href: '#rechargeable' },
      { name: 'Vapes Desechables', href: '#disposable' },
      { name: 'Esencias Premium', href: '#essence' },
      { name: 'Resistencias', href: '#resistance' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Contacto', href: '#contact' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
    ],
    soporte: [
      { name: 'Centro de Ayuda', href: '#help' },
      { name: 'Envíos', href: '#shipping' },
      { name: 'Devoluciones', href: '#returns' },
      { name: 'Garantía', href: '#warranty' },
    ],
    legal: [
      { name: 'Términos de Uso', href: '#terms' },
      { name: 'Política de Privacidad', href: '#privacy' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Edad Legal', href: '#age' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  VapeStore
                </span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-neutral-300 leading-relaxed max-w-md"
              >
                Tu tienda de confianza para productos de vapeo premium. Calidad garantizada, 
                tecnología avanzada y la mejor experiencia de compra.
              </motion.p>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>info@vapestore.com</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>123 Vape Street, City, State 12345</span>
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-neutral-800 rounded-xl transition-all duration-300 ${social.color} hover:bg-neutral-700`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white capitalize mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-neutral-700"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Mantente al día con las últimas novedades
              </h3>
              <p className="text-neutral-300">
                Recibe ofertas exclusivas y noticias sobre nuevos productos
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Tu email"
                className="px-6 py-3 bg-neutral-800 border border-neutral-600 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full sm:w-80"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-2xl font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 border-t border-neutral-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © 2024 VapeStore. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span>🔞 Solo para mayores de 18 años</span>
              <span>•</span>
              <span>Venta responsable</span>
              <span>•</span>
              <span>Calidad garantizada</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
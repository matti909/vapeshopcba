import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Users, Calendar, MessageCircle } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      followers: '125K',
      color: 'from-pink-500 to-purple-500',
      description: 'Síguenos para contenido diario y las últimas tendencias'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      followers: '89K',
      color: 'from-blue-600 to-blue-500',
      description: 'Únete a nuestra comunidad y comparte experiencias'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      followers: '45K',
      color: 'from-sky-500 to-sky-400',
      description: 'Mantente al día con noticias y actualizaciones'
    }
  ];

  const communityFeatures = [
    {
      icon: Users,
      title: 'Comunidad Global',
      description: 'Conecta con entusiastas del vapeo de todo el mundo'
    },
    {
      icon: Calendar,
      title: 'Eventos Exclusivos',
      description: 'Accede a lanzamientos y eventos especiales'
    },
    {
      icon: MessageCircle,
      title: 'Soporte Directo',
      description: 'Obtén ayuda inmediata de nuestro equipo'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
          >
            Únete a Nuestra Comunidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Síguenos en redes sociales para mantenerte actualizado sobre todos nuestros eventos emocionantes
            y conecta con compañeros entusiastas.
          </motion.p>
        </div>

        {/* Social Media Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 overflow-hidden"
            >
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl mb-6`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                  {social.name}
                </h3>
                
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    {social.followers}
                  </span>
                  <span className="text-neutral-600">seguidores</span>
                </div>
                
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {social.description}
                </p>
                
                <div className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-2xl font-semibold group-hover:shadow-lg transition-all duration-300`}>
                  <span>Seguir</span>
                  <social.icon className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Community Features */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              ¿Por Qué Unirse?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl opacity-90"
            >
              Descubre todos los beneficios de ser parte de nuestra comunidad
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="opacity-90 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-neutral-100/80 backdrop-blur-sm rounded-3xl"
        >
          <h4 className="text-2xl font-bold text-neutral-800 mb-4">
            ¿Listo para Conectar?
          </h4>
          <p className="text-lg text-neutral-600 mb-6">
            Únete a más de 250,000 miembros de nuestra comunidad global
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Users className="w-6 h-6" />
            <span>Únete Ahora</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
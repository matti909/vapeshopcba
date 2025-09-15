import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Users, BookOpen } from 'lucide-react';

const ResponsibleMarketing = () => {
  const principles = [
    {
      icon: Users,
      title: "Solo para Adultos",
      description: "Nuestros productos están destinados únicamente a fumadores adultos como alternativa a los cigarrillos."
    },
    {
      icon: Shield,
      title: "No Marketing a Menores",
      description: "Nuestros productos no deben comercializarse a personas menores de 18 años."
    },
    {
      icon: AlertTriangle,
      title: "No Venta a Menores",
      description: "Nuestros productos no deben venderse ni ser utilizados por menores de 18 años."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-lg mb-16"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">ADVERTENCIA IMPORTANTE</h3>
              <p className="text-lg leading-relaxed">
                Este producto contiene nicotina. La nicotina es una sustancia química adictiva.
                <br className="hidden sm:block" />
                Producto destinado exclusivamente a adultos mayores de 18 años.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              Marketing Responsable
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Estamos comprometidos con promover prácticas de marketing responsables para 
              prevenir que los jóvenes accedan a productos de vapeo.
            </p>
          </motion.div>
        </div>

        {/* Three Core Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200/50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-6 mx-auto">
                <principle.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">
                {principle.title}
              </h3>
              <p className="text-neutral-600 text-center leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guardian Program Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-12 rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 mr-4" />
                <h3 className="text-3xl font-bold">Programa Guardian</h3>
              </div>
              <p className="text-xl leading-relaxed mb-6">
                Ilumina el camino de los menores y protege su futuro.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Siempre insistimos en cuidar la salud de los adolescentes y prevenir el uso 
                de nicotina en cualquier forma por parte de menores. Estamos comprometidos a 
                restringir el acceso de menores a nuestros productos.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30"
              >
                <BookOpen className="w-24 h-24 mx-auto mb-4" />
                <p className="text-center text-lg font-medium">
                  Educación y Prevención
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Age Verification Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-neutral-200/50 rounded-2xl"
        >
          <p className="text-neutral-700 text-lg">
            <strong>Verificación de Edad:</strong> Todos los usuarios deben confirmar que tienen 
            18 años o más para acceder a nuestros productos y servicios.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsibleMarketing;
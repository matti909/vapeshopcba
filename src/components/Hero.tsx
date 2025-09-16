import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Settings } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-10 overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-neutral-800 via-primary-600 to-accent-600 bg-clip-text text-transparent">
            Vape Shop Cba
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
          Descubre nuestra colección premium de vapes y accesorios
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
          {/* TODOS LOS PRODUCTOS - Main large card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="lg:col-span-6 group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/7148621/pexels-photo-7148621.jpeg)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-accent-900/70 to-neutral-900/90 group-hover:from-primary-800/90 group-hover:via-accent-800/80 group-hover:to-neutral-800/95 transition-all duration-700" />

            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-2xl"
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-6">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <Zap className="w-5 h-5 text-accent-300" />
                  <span className="text-white/90 text-sm font-medium">
                    Colección Completa
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-4xl md:text-4xl font-bold text-white leading-tight"
                >
                  TODOS LOS
                  <br />
                  <span className="bg-gradient-to-r from-accent-300 to-primary-300 bg-clip-text text-transparent">
                    PRODUCTOS
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-white/80 text-lg max-w-md"
                >
                  Explora nuestra gama completa de vapes recargables,
                  desechables, esencias y resistencias premium
                </motion.p>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn self-start bg-gradient-to-r from-accent-500 to-primary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(217, 70, 239, 0.15), transparent 70%)",
              }}
            />
          </motion.div>

          {/* CONTROL PARENTAL - Warning card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="lg:col-span-6 group relative overflow-hidden rounded-3xl bg-white border-4 border-black shadow-2xl"
          >
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div className="w-16 h-16 mx-auto bg-black rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">18+</span>
                </div>

                <div className="bg-black text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    ADVERTENCIA: Este producto contiene nicotina.
                  </h3>
                  <p className="text-lg">
                    La nicotina es una sustancia química adictiva.
                  </p>
                </div>

                <div className="space-y-3 text-black">
                  <p className="text-lg font-semibold">
                    🔞 Solo para mayores de 18 años
                  </p>
                  <p className="text-base">
                    Venta responsable y uso consciente
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Subtle hover effect */}
            <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-black rounded-3xl" />
          </motion.div>

          {/* RESISTENCIAS Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="lg:col-span-6 group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/7148618/pexels-photo-7148618.jpeg)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-900/80 to-neutral-900/90 group-hover:from-orange-800/90 group-hover:via-red-800/85 group-hover:to-neutral-800/95 transition-all duration-700" />

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-2xl backdrop-blur-sm border border-white/10"
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Settings className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  RESISTENCIAS
                </h3>

                <p className="text-white/80 text-sm">
                  Resistencias de alta calidad para el mejor rendimiento
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-orange-300 font-medium group-hover:text-orange-200 transition-colors"
              >
                <span className="text-sm">Explorar</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(251, 146, 60, 0.2), transparent 60%)",
              }}
            />
          </motion.div>

          {/* ESENCIAS Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="lg:col-span-6 group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/7148619/pexels-photo-7148619.jpeg)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/80 to-neutral-900/90 group-hover:from-emerald-800/90 group-hover:via-teal-800/85 group-hover:to-neutral-800/95 transition-all duration-700" />

            {/* Floating Drops Animation */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full ${
                  i === 0
                    ? "top-8 right-12"
                    : i === 1
                      ? "top-16 right-8"
                      : "top-12 right-16"
                }`}
              />
            ))}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Droplets className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  ESENCIAS
                </h3>

                <p className="text-white/80 text-sm">
                  Sabores premium para una experiencia única
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-emerald-300 font-medium group-hover:text-emerald-200 transition-colors"
              >
                <span className="text-sm">Descubrir</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(52, 211, 153, 0.2), transparent 60%)",
              }}
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
        >
          {[
            { number: "500+", label: "Productos" },
            { number: "50K+", label: "Clientes" },
            { number: "4.9★", label: "Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

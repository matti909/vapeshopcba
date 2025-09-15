import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Mouse } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700">
      {/* Vaping-themed background elements */}
      <div className="absolute inset-0">
        {/* Main vapor clouds */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1.1, 1],
            x: [0, 30, -20, 0],
            opacity: [0.4, 0.7, 0.5, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/5 w-96 h-64 bg-gradient-to-br from-primary-400/30 via-accent-400/25 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 0.9, 1.4, 1.2],
            x: [0, -30, 40, 0],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/5 w-80 h-96 bg-gradient-to-tl from-accent-500/30 via-primary-400/25 to-transparent rounded-full blur-2xl"
        />

        {/* Smaller vapor elements */}
        <motion.div
          animate={{
            y: [0, -80, -40, 0],
            opacity: [0.2, 0.5, 0.3, 0.2],
            scale: [0.9, 1.3, 1.1, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-64 h-48 bg-gradient-to-r from-primary-300/25 to-accent-300/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 60, 30, 0],
            opacity: [0.2, 0.4, 0.3, 0.2],
            scale: [1.1, 0.8, 1.2, 1.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-1/4 w-72 h-56 bg-gradient-to-l from-accent-400/25 to-primary-300/20 rounded-full blur-xl"
        />

        {/* Geometric vape-inspired shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/6 w-6 h-40 bg-gradient-to-b from-primary-400/30 to-transparent rounded-full blur-sm"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.3, 0.8, 1.3],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 left-1/6 w-5 h-36 bg-gradient-to-t from-accent-400/30 to-transparent rounded-full blur-sm"
        />

        {/* Additional floating particles */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -30, 20, 0],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/5 w-32 h-32 bg-gradient-to-br from-primary-300/20 to-accent-300/15 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 40, -25, 0],
            opacity: [0.2, 0.5, 0.3, 0.2],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-2/3 right-1/5 w-40 h-24 bg-gradient-to-bl from-accent-300/20 to-primary-300/15 rounded-full blur-lg"
        />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-neutral-200/50 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-accent-500" />
            <span className="text-sm font-medium text-neutral-700">
              Nueva colección disponible
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
              Vape Shop
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-300 via-primary-300 to-white bg-clip-text text-transparent">
              Cba
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experiencia premium de vapeo con tecnología avanzada y sabores auténticos.
            <br className="hidden md:block" />
            Para adultos que buscan una alternativa de calidad al cigarrillo tradicional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/productos">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              >
                <span>Explorar Productos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <Link to="/productos?category=disposable">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Ver Desechables
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats - Right side vertical */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-8 top-1/3 -translate-y-1/3 hidden lg:flex flex-col space-y-6 items-center"
      >
        {[
          { number: "500+", label: "Productos" },
          { number: "50K+", label: "Clientes" },
          { number: "4.9★", label: "Rating" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, x: -5 }}
            className="flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-neutral-200/50 shadow-lg min-w-[140px]"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-neutral-600 font-medium text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-3"
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-neutral-400 text-sm font-medium text-center"
        >
          Desliza hacia abajo
        </motion.div>
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center bg-white/80 backdrop-blur-sm p-4 rounded-full border border-neutral-200/50 shadow-lg"
        >
          <Mouse className="w-6 h-6 text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


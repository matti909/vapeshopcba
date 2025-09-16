import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Settings, Sparkles, ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

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
        {/* Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">

          {/* Main Hero Card - Spans 2x2 */}
          <Link to="/productos" className="md:col-span-2 md:row-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer h-full bg-gradient-to-br from-primary-600 via-accent-500 to-purple-600 shadow-2xl"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">Premium Collection</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
                  >
                    TODOS LOS
                    <br />
                    <span className="text-white/90">PRODUCTOS</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/80 text-sm md:text-base"
                  >
                    Descubre nuestra colección completa de vapes premium
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-white font-semibold group-hover:text-white/90"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </motion.div>
          </Link>

          {/* Recargables Card */}
          <Link to="/productos?categoria=recargable" className="md:col-span-1 md:row-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-white/30 rounded-full border-t-white"
                  />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-1">RECARGABLES</h3>
                  <p className="text-white/80 text-sm">Duraderos y eco-friendly</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desechables Card */}
          <Link to="/productos?categoria=desechable" className="md:col-span-1 md:row-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-full bg-gradient-to-br from-orange-400 to-red-500 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />

              {/* Floating elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className={`absolute w-2 h-2 bg-white/40 rounded-full ${
                    i === 0 ? 'top-4 right-6' : i === 1 ? 'top-8 right-4' : 'top-6 right-8'
                  }`}
                />
              ))}

              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white/60 text-xs">Conveniente</div>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-1">DESECHABLES</h3>
                  <p className="text-white/80 text-sm">Listos para usar</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Stats Card - Wide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl"
          >
            <div className="h-full flex items-center justify-between p-6">
              <div className="grid grid-cols-3 gap-8 w-full">
                {[
                  { number: "500+", label: "Productos", icon: ShoppingBag },
                  { number: "50K+", label: "Clientes", icon: Heart },
                  { number: "4.9★", label: "Rating", icon: Sparkles },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-primary-500 mr-1" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-neutral-600 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Esencias Card */}
          <Link to="/productos?categoria=esencia" className="md:col-span-1 md:row-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />

              {/* Floating drops */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className={`absolute w-1.5 h-1.5 bg-white/50 rounded-full ${
                    i === 0 ? 'top-6 right-8' :
                    i === 1 ? 'top-8 right-6' :
                    i === 2 ? 'top-10 right-10' : 'top-4 right-4'
                  }`}
                />
              ))}

              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white/60 text-xs">Sabores</div>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-1">ESENCIAS</h3>
                  <p className="text-white/80 text-sm">Aromas únicos</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Resistencias Card */}
          <Link to="/productos?categoria=resistencia" className="md:col-span-1 md:row-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-full bg-gradient-to-br from-slate-600 to-slate-800 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-transparent" />

              {/* Tech pattern */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-6 h-6 border border-white/30 rounded-sm"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-6 right-6 w-4 h-4 border border-white/20 rounded-full"
              />

              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white/60 text-xs">Tech</div>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-1">RESISTENCIAS</h3>
                  <p className="text-white/80 text-sm">Alta calidad</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Age Warning Card - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-2xl bg-black text-white shadow-xl border-2 border-yellow-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent" />

            <div className="relative z-10 h-full flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 text-black rounded-xl flex items-center justify-center font-bold text-lg">
                  18+
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">ADVERTENCIA</h3>
                  <p className="text-white/80 text-sm">Producto solo para mayores de 18 años. La nicotina es adictiva.</p>
                </div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-yellow-400 text-2xl"
              >
                ⚠️
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

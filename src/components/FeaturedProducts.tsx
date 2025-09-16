import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock, Star, Zap, Crown } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import ProductCarousel from "./ProductCarousel";

const FeaturedProducts = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 mx-auto mb-4 border-4 border-primary-500 border-t-transparent rounded-full"
            />
            <p className="text-neutral-600">Cargando productos destacados...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Filter products for different sections
  const getNewArrivals = () => {
    // Simulate new arrivals by taking products with highest IDs (most recent)
    return products
      .sort((a, b) => b.id - a.id)
      .slice(0, 8);
  };

  const getFeaturedProducts = () => {
    // Get products with highest ratings as featured
    return products
      .filter(product => product.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);
  };

  const newArrivals = getNewArrivals();
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
          >
            <Crown className="w-5 h-5" />
            <span className="font-semibold">Productos Destacados</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            Lo Mejor de Nuestra
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Colección Premium
            </span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Descubre nuestras últimas incorporaciones y los productos más valorados por nuestra comunidad
          </p>
        </motion.div>

        {/* New Arrivals Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative">
            {/* Decorative Background for New Arrivals */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl transform -rotate-1 scale-105 opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 via-teal-100/50 to-cyan-100/50 rounded-3xl transform rotate-1 scale-102 opacity-30" />

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
              <ProductCarousel
                products={newArrivals}
                title="Nuevos Ingresos"
                subtitle="Las últimas incorporaciones a nuestra tienda"
                accentColor="emerald"
                icon={<TrendingUp className="w-6 h-6 text-white" />}
              />

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 right-8 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl backdrop-blur-sm border border-emerald-200/30"
              />

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-6 w-12 h-12 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full backdrop-blur-sm"
              />

              {/* Sparkle Effects */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`sparkle-new-${i}`}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut",
                  }}
                  className={`absolute w-2 h-2 bg-emerald-400 rounded-full ${
                    i === 0 ? 'top-16 right-20' :
                    i === 1 ? 'top-24 right-32' :
                    i === 2 ? 'bottom-16 left-16' :
                    i === 3 ? 'bottom-20 left-24' : 'top-32 right-16'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Products Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Decorative Background for Featured */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-3xl transform rotate-1 scale-105 opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-rose-100/50 rounded-3xl transform -rotate-1 scale-102 opacity-30" />

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
              <ProductCarousel
                products={featuredProducts}
                title="Productos Destacados"
                subtitle="Los más valorados por nuestra comunidad"
                accentColor="accent"
                icon={<Star className="w-6 h-6 text-white" />}
              />

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 left-8 w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl backdrop-blur-sm border border-purple-200/30"
              />

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  x: [0, -8, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-6 right-10 w-10 h-10 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full backdrop-blur-sm"
              />

              {/* Crown Effects for Featured */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`crown-${i}`}
                  animate={{
                    scale: [0, 1.2, 0],
                    rotate: [0, 360],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut",
                  }}
                  className={`absolute w-3 h-3 ${
                    i % 2 === 0 ? 'bg-yellow-400' : 'bg-orange-400'
                  } rounded-full ${
                    i === 0 ? 'top-12 right-24' :
                    i === 1 ? 'top-20 right-40' :
                    i === 2 ? 'bottom-12 left-20' : 'bottom-24 left-32'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative flex items-center space-x-2">
              <span>Ver Todos los Productos</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
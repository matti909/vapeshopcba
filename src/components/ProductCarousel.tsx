import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Zap, Droplets } from "lucide-react";
import { Product } from "../types/product";
import OptimizedImage from "./OptimizedImage";

interface ProductCarouselProps {
  products: Product[];
  title: string;
  subtitle?: string;
  accentColor?: string;
  icon?: React.ReactNode;
}

const ProductCarousel = ({
  products,
  title,
  subtitle = "",
  accentColor = "primary",
  icon
}: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || products.length <= 4) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 3)) % Math.max(1, products.length - 3));
    setIsAutoPlaying(false);
  };

  const getFlavorEmoji = (flavor: string) => {
    const flavorLower = flavor.toLowerCase();
    if (flavorLower.includes('menta') || flavorLower.includes('mint')) return '🌿';
    if (flavorLower.includes('fresa') || flavorLower.includes('strawberry')) return '🍓';
    if (flavorLower.includes('mango')) return '🥭';
    if (flavorLower.includes('uva') || flavorLower.includes('grape')) return '🍇';
    if (flavorLower.includes('manzana') || flavorLower.includes('apple')) return '🍎';
    if (flavorLower.includes('naranja') || flavorLower.includes('orange')) return '🍊';
    if (flavorLower.includes('limón') || flavorLower.includes('limon') || flavorLower.includes('lemon')) return '🍋';
    if (flavorLower.includes('cereza') || flavorLower.includes('cherry')) return '🍒';
    if (flavorLower.includes('piña') || flavorLower.includes('pineapple')) return '🍍';
    if (flavorLower.includes('coco') || flavorLower.includes('coconut')) return '🥥';
    if (flavorLower.includes('vainilla') || flavorLower.includes('vanilla')) return '🍦';
    if (flavorLower.includes('café') || flavorLower.includes('coffee')) return '☕';
    if (flavorLower.includes('chocolate')) return '🍫';
    if (flavorLower.includes('tabaco') || flavorLower.includes('tobacco')) return '🍂';
    return '💨';
  };

  const getAccentColors = (color: string) => {
    switch(color) {
      case 'primary':
        return {
          gradient: 'from-primary-500 to-primary-600',
          light: 'primary-100',
          medium: 'primary-500',
          dark: 'primary-600'
        };
      case 'accent':
        return {
          gradient: 'from-accent-500 to-accent-600',
          light: 'accent-100',
          medium: 'accent-500',
          dark: 'accent-600'
        };
      case 'emerald':
        return {
          gradient: 'from-emerald-500 to-emerald-600',
          light: 'emerald-100',
          medium: 'emerald-500',
          dark: 'emerald-600'
        };
      default:
        return {
          gradient: 'from-primary-500 to-primary-600',
          light: 'primary-100',
          medium: 'primary-500',
          dark: 'primary-600'
        };
    }
  };

  const colors = getAccentColors(accentColor);
  const displayProducts = products.slice(0, 4);

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
          <Zap className="w-8 h-8 text-neutral-400" />
        </div>
        <p className="text-neutral-500">No hay productos disponibles</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center space-x-4">
          {icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
            >
              {icon}
            </motion.div>
          )}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-neutral-600 text-lg">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        {products.length > 4 && (
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className={`w-12 h-12 bg-white border border-${colors.light} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-${colors.light}/50`}
            >
              <ChevronLeft className={`w-5 h-5 text-${colors.medium}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: products.length > 4 ? `-${currentIndex * (100 / 4)}%` : '0%'
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          style={{
            width: products.length > 4 ? `${(products.length / 4) * 100}%` : '100%'
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex-none w-1/4 min-w-[280px] md:min-w-[320px]"
              style={{
                width: products.length > 4 ? `${100 / products.length}%` : '25%'
              }}
            >
              <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`absolute top-4 left-4 bg-gradient-to-r ${colors.gradient} text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg`}
                  >
                    {product.categoria}
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-bold text-lg text-neutral-800 mb-2 line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Flavor Pills */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(product.flavors || []).slice(0, 2).map((flavor, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center space-x-1 bg-${colors.light} text-${colors.dark} px-2 py-1 rounded-full text-xs font-medium`}
                        >
                          <span>{getFlavorEmoji(flavor.trim())}</span>
                          <span>{flavor.trim()}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-neutral-800">
                        ${product.price.toLocaleString('es-AR')}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-neutral-500 line-through">
                          ${product.originalPrice.toLocaleString('es-AR')}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-neutral-600 font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-4 bg-gradient-to-r ${colors.gradient} text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Ver Producto
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute top-6 right-6 w-8 h-8 bg-${colors.light}/30 rounded-full blur-sm`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress Indicators */}
      {products.length > 4 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.max(1, products.length - 3) }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `bg-${colors.medium} scale-125`
                  : `bg-${colors.light} hover:bg-${colors.medium}/50`
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Zap } from "lucide-react";
import { Product } from "../services/sheetsService";
import OptimizedImage from "./OptimizedImage";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to get emoji based on flavor name
  const getFlavorEmoji = (flavor: string): string => {
    const flavorLower = flavor.toLowerCase();
    
    if (flavorLower.includes('mint') || flavorLower.includes('menta')) return '🌿';
    if (flavorLower.includes('watermelon') || flavorLower.includes('sandía')) return '🍉';
    if (flavorLower.includes('strawberry') || flavorLower.includes('fresa')) return '🍓';
    if (flavorLower.includes('grape') || flavorLower.includes('uva')) return '🍇';
    if (flavorLower.includes('kiwi')) return '🥝';
    if (flavorLower.includes('mango')) return '🥭';
    if (flavorLower.includes('peach') || flavorLower.includes('durazno')) return '🍑';
    if (flavorLower.includes('apple') || flavorLower.includes('manzana')) return '🍎';
    if (flavorLower.includes('banana') || flavorLower.includes('plátano')) return '🍌';
    if (flavorLower.includes('cherry') || flavorLower.includes('cereza')) return '🍒';
    if (flavorLower.includes('lemon') || flavorLower.includes('limón')) return '🍋';
    if (flavorLower.includes('orange') || flavorLower.includes('naranja')) return '🍊';
    if (flavorLower.includes('berry') || flavorLower.includes('mora')) return '🫐';
    if (flavorLower.includes('ice') || flavorLower.includes('hielo')) return '❄️';
    if (flavorLower.includes('cola')) return '🥤';
    if (flavorLower.includes('coffee') || flavorLower.includes('café')) return '☕';
    if (flavorLower.includes('vanilla') || flavorLower.includes('vainilla')) return '🍦';
    if (flavorLower.includes('chocolate')) return '🍫';
    if (flavorLower.includes('cream') || flavorLower.includes('crema')) return '🥛';
    
    return '🌸'; // Default emoji
  };

  const categoryIcons = {
    rechargeable: Zap,
    disposable: ShoppingCart,
    essence: Heart,
    resistance: Star,
  };

  const CategoryIcon = categoryIcons[product.category];

  const categoryColors = {
    rechargeable: "from-primary-500 to-primary-600",
    disposable: "from-accent-500 to-accent-600",
    essence: "from-emerald-500 to-emerald-600",
    resistance: "from-orange-500 to-orange-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 overflow-hidden"
    >
      {/* Discount badge */}
      {product.originalPrice && (
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: -45 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 -right-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-1 text-sm font-bold z-10 transform rotate-12"
        >
          OFERTA
        </motion.div>
      )}

      {/* Stock status */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            product.inStock
              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
              : "bg-red-100 text-red-700 border border-red-200"
          }`}
        >
          {product.inStock ? "En Stock" : "Agotado"}
        </span>
      </div>

      {/* Like button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <Heart
          className={`w-5 h-5 transition-colors ${
            isLiked ? "text-red-500 fill-red-500" : "text-neutral-400"
          }`}
        />
      </motion.button>

      {/* Product image */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <OptimizedImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Category icon */}
        <div
          className={`absolute bottom-4 left-4 p-2 bg-gradient-to-r ${categoryColors[product.category]} rounded-xl shadow-lg`}
        >
          <CategoryIcon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Product info */}
      <div className="p-6 space-y-4">
        {/* Brand and Product name */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-primary-600">
            {product.brand}
          </div>
          <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <div className="text-sm text-neutral-500">
            {product.puffCount.toLocaleString()} puffs
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-600 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 max-w-full">
          {product.features.slice(0, 2).map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full font-medium truncate max-w-24 sm:max-w-none"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full font-medium">
              +{product.features.length - 2}
            </span>
          )}
        </div>

        {/* Flavors */}
        {product.flavors && product.flavors.length > 0 && (
          <div className="space-y-2 max-w-full">
            <span className="text-sm text-neutral-600 font-medium">Sabores:</span>
            <div className="flex flex-wrap gap-2 max-w-full">
              {product.flavors.slice(0, 4).map((flavor, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-1 px-2 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors max-w-28 sm:max-w-none"
                  title={flavor}
                >
                  <span className="text-sm">{getFlavorEmoji(flavor)}</span>
                  <span className="text-xs text-neutral-700 font-medium truncate">
                    {flavor.length > 8 ? flavor.substring(0, 8) + '...' : flavor}
                  </span>
                </div>
              ))}
              {product.flavors.length > 4 && (
                <div className="flex items-center justify-center px-2 py-1 bg-neutral-100 rounded-full">
                  <span className="text-xs text-neutral-500 font-medium">
                    +{product.flavors.length - 4}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Price and action */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-neutral-200/50 gap-3">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-xl sm:text-2xl font-bold text-neutral-800 truncate">
                ${product.price > 0 ? product.price.toLocaleString('es-AR') : 'Consultar'}
              </span>
              {product.originalPrice && (
                <span className="text-base sm:text-lg text-neutral-500 line-through">
                  ${product.originalPrice.toLocaleString('es-AR')}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-emerald-600 font-medium">
                Ahorra ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!product.inStock}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap ${
              product.inStock
                ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl"
                : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{product.inStock ? "Agregar" : "Agotado"}</span>
          </motion.button>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, rgba(14, 165, 233, 0.1), rgba(217, 70, 239, 0.1))",
          filter: "blur(20px)",
        }}
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
      />
    </motion.div>
  );
};

export default ProductCard;


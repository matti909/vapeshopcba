import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "../services/sheetsService";
import OptimizedImage from "./OptimizedImage";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/50 overflow-hidden"
    >
      {/* Product image */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
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
      </div>

      {/* Product info */}
      <div className="p-4 space-y-3">
        {/* Brand */}
        <div className="text-sm font-medium text-primary-600">
          {product.brand}
        </div>

        {/* Flavors with emojis */}
        {product.flavors && product.flavors.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.flavors.slice(0, 3).map((flavor, i) => (
              <div
                key={i}
                className="flex items-center space-x-1 px-2 py-1 bg-neutral-100 rounded-full"
                title={flavor}
              >
                <span className="text-sm">{getFlavorEmoji(flavor)}</span>
                <span className="text-xs text-neutral-700 font-medium">
                  {flavor}
                </span>
              </div>
            ))}
            {product.flavors.length > 3 && (
              <div className="flex items-center px-2 py-1 bg-neutral-100 rounded-full">
                <span className="text-xs text-neutral-500">
                  +{product.flavors.length - 3}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Puff count */}
        <div className="text-sm text-neutral-600">
          {product.puffCount.toLocaleString()} puffs
        </div>

        {/* Price and actions */}
        <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
          <span className="text-xl font-bold text-neutral-800">
            ${product.price > 0 ? product.price.toLocaleString('es-AR') : 'Consultar'}
          </span>
          
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!product.inStock}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-1 ${
                product.inStock
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg"
                  : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">{product.inStock ? "Agregar" : "Agotado"}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;


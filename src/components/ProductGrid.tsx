import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Loader2, AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductGrid = () => {
  const { products, loading, error, refetch } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = [
    { id: 'all', name: 'Todos', count: products.length },
    { id: 'rechargeable', name: 'Recargables', count: products.filter(p => p.category === 'rechargeable').length },
    { id: 'disposable', name: 'Desechables', count: products.filter(p => p.category === 'disposable').length },
    { id: 'essence', name: 'Esencias', count: products.filter(p => p.category === 'essence').length },
    { id: 'resistance', name: 'Resistencias', count: products.filter(p => p.category === 'resistance').length },
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  // Loading state
  if (loading) {
    return (
      <section id="products" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Loader2 className="w-12 h-12 text-primary-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-neutral-800 mt-6 mb-4">
              Cargando productos...
            </h3>
            <p className="text-neutral-600">
              Obteniendo los últimos productos desde nuestra base de datos
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="products" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Error al cargar productos
            </h3>
            <p className="text-neutral-600 mb-8">
              {error}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={refetch}
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-2xl font-semibold"
            >
              Reintentar
            </motion.button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neutral-800 via-primary-600 to-accent-600 bg-clip-text text-transparent">
              Nuestra Colección
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Descubre productos premium diseñados para la mejor experiencia de vapeo
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={refetch}
            className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Actualizar productos
          </motion.button>
        </motion.div>

        {/* Filters and controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Category filters */}
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-white border border-neutral-200/50 hover:border-primary-300'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="name">Ordenar por Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Valorados</option>
              </select>

              {/* View mode toggle */}
              <div className="flex items-center bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl p-1">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'text-neutral-600 hover:text-primary-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'text-neutral-600 hover:text-primary-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products grid */}
        <motion.div
          layout
          className={`grid gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
        >
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty state */}
        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Filter className="w-12 h-12 text-neutral-500" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              No se encontraron productos
            </h3>
            <p className="text-neutral-600 mb-8">
              Intenta cambiar los filtros para ver más productos
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-2xl font-semibold"
            >
              Ver Todos los Productos
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
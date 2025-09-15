import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter, Grid, List, Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

const ProductsPage = () => {
  const { products, loading, error, refetch } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>("name");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });

  // Get category from URL params (either from route params or search params)
  const selectedCategory =
    params.categoria || searchParams.get("category") || "all";

  // Update search params when category changes
  useEffect(() => {
    if (params.categoria && params.categoria !== "all") {
      setSearchParams({ category: params.categoria });
    }
  }, [params.categoria, setSearchParams]);

  const categories = [
    { id: "all", name: "Todos los Productos", icon: "🛍️" },
    { id: "rechargeable", name: "Recargables", icon: "🔋" },
    { id: "disposable", name: "Desechables", icon: "💨" },
    { id: "essence", name: "Esencias", icon: "🌸" },
    { id: "resistance", name: "Resistencias", icon: "⚙️" },
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      // Category filter
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;

      // Search filter
      const searchMatch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.flavors?.some((flavor) =>
          flavor.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      // Price range filter
      const priceMatch =
        product.price >= priceRange.min && product.price <= priceRange.max;

      return categoryMatch && searchMatch && priceMatch;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "puffs":
          return b.puffCount - a.puffCount;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, selectedCategory, searchTerm, priceRange, sortBy]);

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange({ min: 0, max: 50000 });
    setSortBy("name");
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-neutral-700">
              Cargando productos...
            </h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-neutral-700 mb-2">
              Error al cargar productos
            </h2>
            <p className="text-neutral-600 mb-4">{error}</p>
            <button
              onClick={refetch}
              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Todos los Productos
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Descubre nuestra colección completa de vapes premium
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-full">
            {categories.map((category) => {
              const count =
                category.id === "all"
                  ? products.length
                  : products.filter((p) => p.category === category.id).length;

              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                      : "bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-white border border-neutral-200/50 hover:border-primary-300"
                  }`}
                >
                  <span className="text-base sm:text-lg">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  <span
                    className={`px-1 sm:px-2 py-1 rounded-full text-xs ${
                      selectedCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos, marcas, sabores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full lg:w-auto">
              {/* Filters Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  showFilters
                    ? "bg-primary-500 text-white"
                    : "bg-white/80 text-neutral-700 hover:bg-white border border-neutral-200/50"
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filtros</span>
              </motion.button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="name">Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Valorados</option>
                <option value="puffs">Más Puffs</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                      : "text-neutral-600 hover:text-primary-600"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                      : "text-neutral-600 hover:text-primary-600"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-neutral-200/50"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Rango de Precio
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          min: Number(e.target.value),
                        }))
                      }
                      className="w-24 px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-neutral-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          max: Number(e.target.value),
                        }))
                      }
                      className="w-24 px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center space-x-2 px-4 py-2 text-neutral-600 hover:text-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Limpiar Filtros</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-center"
        >
          <p className="text-neutral-600">
            Mostrando {filteredAndSortedProducts.length} de {products.length}{" "}
            productos
            {selectedCategory !== "all" && (
              <span className="ml-2 px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </span>
            )}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-neutral-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Filter className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              No se encontraron productos
            </h3>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
              Intenta ajustar los filtros de búsqueda o explora otras categorías
            </p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all"
            >
              Limpiar Filtros
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;


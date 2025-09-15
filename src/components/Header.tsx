import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Zap, Home, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const location = useLocation();

  const menuItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Todos los Productos", href: "/productos", icon: Package },
    { name: "Recargables", href: "/productos?category=rechargeable", icon: Zap },
    { name: "Desechables", href: "/productos?category=disposable", icon: Package },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.includes("/productos")) {
      if (href.includes("?category=")) {
        const category = href.split("?category=")[1];
        return location.pathname === "/productos" && location.search.includes(category);
      }
      return location.pathname.startsWith("/productos");
    }
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
                Vape Shop Cba
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                >
                  <motion.div
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl font-medium transition-colors relative ${
                      isActive(item.href)
                        ? 'text-primary-400 bg-primary-500/10'
                        : 'text-neutral-300 hover:text-primary-400 hover:bg-primary-500/5'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:block">{item.name}</span>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-neutral-400 hover:text-primary-400 transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-neutral-400 hover:text-primary-400 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs rounded-full flex items-center justify-center font-medium"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral-400"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-neutral-800/50"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.div
                      className={`flex items-center space-x-3 py-2 px-3 rounded-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary-400 bg-primary-500/10'
                          : 'text-neutral-300 hover:text-primary-400'
                      }`}
                      whileHover={{ x: 10 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;


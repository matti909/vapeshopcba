import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck, X } from 'lucide-react';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onVerify: () => void;
  onClose: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ isOpen, onVerify, onClose }) => {
  const [birthYear, setBirthYear] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const year = parseInt(birthYear);
    const age = currentYear - year;
    setIsValid(year > 1900 && age >= 18);
  }, [birthYear]);

  const handleVerify = () => {
    if (isValid) {
      localStorage.setItem('ageVerified', 'true');
      onVerify();
    }
  };

  const handleExit = () => {
    window.location.href = 'https://google.com';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 rounded-3xl border border-neutral-700/50 shadow-2xl max-w-md mx-4"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center space-y-6">
              {/* Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center"
              >
                <ShieldCheck className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
                  Verificación de Edad
                </h2>
                <p className="text-neutral-300 mt-2 text-sm leading-relaxed">
                  Este sitio web contiene productos de vapeo. Debes ser mayor de 18 años para continuar.
                </p>
              </div>

              {/* Birth Year Input */}
              <div className="space-y-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="number"
                    placeholder="Año de nacimiento (ej: 1995)"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-neutral-800/50 border border-neutral-600/50 rounded-2xl text-white placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
                    min="1900"
                    max="2010"
                  />
                </div>

                {birthYear && !isValid && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm"
                  >
                    Debes ser mayor de 18 años para acceder
                  </motion.p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleVerify}
                  disabled={!isValid}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    isValid
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  Soy mayor de 18 años
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleExit}
                  className="w-full py-3 px-6 rounded-2xl font-medium text-neutral-300 border border-neutral-600/50 hover:border-neutral-500 transition-all duration-300"
                >
                  Soy menor de 18 años - Salir
                </motion.button>
              </div>

              {/* Legal disclaimer */}
              <p className="text-xs text-neutral-500 leading-relaxed">
                Al continuar, confirmas que tienes la edad legal para consumir productos de vapeo en tu jurisdicción. 
                VapeStore Cba cumple con todas las regulaciones locales.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AgeVerificationModal;
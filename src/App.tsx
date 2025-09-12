import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AgeVerificationModal from './components/AgeVerificationModal';

function App() {
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (!ageVerified) {
      setShowAgeModal(true);
    } else {
      setIsAgeVerified(true);
    }
  }, []);

  const handleAgeVerification = () => {
    setIsAgeVerified(true);
    setShowAgeModal(false);
  };

  const handleCloseModal = () => {
    setShowAgeModal(false);
  };

  return (
    <div className="min-h-screen">
      {/* Age Verification Modal */}
      <AgeVerificationModal
        isOpen={showAgeModal}
        onVerify={handleAgeVerification}
        onClose={handleCloseModal}
      />

      {/* Main Content */}
      <div className={isAgeVerified ? '' : 'blur-sm pointer-events-none'}>
        <Header />
        <main>
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

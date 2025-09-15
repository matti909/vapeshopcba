import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AgeVerificationModal from "./components/AgeVerificationModal";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
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
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Age Verification Modal */}
        <AgeVerificationModal
          isOpen={showAgeModal}
          onVerify={handleAgeVerification}
          onClose={handleCloseModal}
        />

        {/* Main Content */}
        <div className={isAgeVerified ? "" : "blur-sm pointer-events-none"}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/productos/:categoria" element={<ProductsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

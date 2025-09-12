import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import ResponsibleMarketing from '../components/ResponsibleMarketing';
import SocialSection from '../components/SocialSection';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProductGrid />
      <ResponsibleMarketing />
      <SocialSection />
      <Newsletter />
    </div>
  );
};

export default HomePage;
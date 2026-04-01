import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import ProductList from './components/ProductList';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { getProducts } from './services/contentful';

export default function App() {
  const [heroProducts, setHeroProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      // Take max 3 products for hero cards
      setHeroProducts(data.slice(0, 3));
    }).catch(() => {
      // silently fail — hero still renders without products
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero products={heroProducts} />
        <Why />
        <ProductList />
        <SocialProof />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

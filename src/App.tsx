import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-200 text-gray-800">
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </main>
  );
}
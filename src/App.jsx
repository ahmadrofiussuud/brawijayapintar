import React from 'react';
import Navbar from './components/Navbar';
import HeroVariantA from './components/HeroVariantA';
import Programs from './components/Programs';
import Mentoring from './components/Mentoring';
import Roadmap from './components/Roadmap';
import StrukturKepengurusan from './components/StrukturKepengurusan';
import RancanganPemasukan from './components/RancanganPemasukan';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <HeroVariantA />
        <Programs />
        <Mentoring />
        <Roadmap />
        <StrukturKepengurusan />
        <RancanganPemasukan />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default App;

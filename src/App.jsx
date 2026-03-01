import React from 'react';
import Navbar from './components/Navbar';
import HeroVariantA from './components/HeroVariantA';
import VisionMission from './components/VisionMission';
import CultureSection from './components/CultureSection';
import Programs from './components/Programs';
import Mentoring from './components/Mentoring';
import Pengertian from './components/Pengertian';
import ArahStrategis from './components/ArahStrategis';
import TimelineSection from './components/TimelineSection';
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
        <VisionMission />
        <CultureSection />
        <Programs />
        <Mentoring />
        <Pengertian />
        <ArahStrategis />
        <TimelineSection />
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

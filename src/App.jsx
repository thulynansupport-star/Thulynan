import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Impact from './components/Impact';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiWidget from './components/AiWidget';


export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <Impact />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <AiWidget />
    </>
  );
}


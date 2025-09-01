import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Index() {
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        if (!document.getElementById('mcjs')) {
          const script = document.createElement('script');
          script.id = 'mcjs';
          script.async = true;
          script.src = 'https://chimpstatic.com/mcjs-connected/js/users/2bff5011ab0f0afa69552f7a8/02a4072ee0e339890111721ec.js';
          document.body.appendChild(script);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-in, .animate-slide-in-right, .animate-slide-in-left, .animate-fade-up, .animate-stagger, .animate-scale-in');
    animatedElements.forEach((el, index) => {
      // Add staggered delay for elements in the same container
      const container = el.closest('section');
      if (container) {
        const elementsInContainer = container.querySelectorAll('.animate-stagger');
        const elementIndex = Array.from(elementsInContainer).indexOf(el);
        if (elementIndex !== -1) {
          (el as HTMLElement).style.transitionDelay = `${elementIndex * 100}ms`;
        }
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

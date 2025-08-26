
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-nobre-black text-white py-1.5 sm:py-2 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="container-custom flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href="tel:21965691913" 
              className="flex items-center gap-1 sm:gap-2 hover:text-nobre-orange transition-colors"
              aria-label="Ligar para Nobre Minerais"
            >
              <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
              <span>(21) 96569-1913</span>
            </a>
            <a 
              href="mailto:nobre.minerais@gmail.com" 
              className="hidden sm:flex items-center gap-2 hover:text-nobre-orange transition-colors"
              aria-label="Enviar email para Nobre Minerais"
            >
              <Mail size={14} />
              <span>nobre.minerais@gmail.com</span>
            </a>
          </div>
          <div className="hidden lg:block">
            <span>Seg-Sex: 7h às 17h | Sáb: 8h às 12h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-[28px] sm:top-[34px] left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <nav className="container-custom py-2 sm:py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/4a80ab86-1885-4a4c-b568-9bd0ccc5305e.png" 
                alt="Nobre Minerais - Comércio de Areia e Brita" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-nobre-black hover:text-nobre-orange transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-nobre-black hover:text-nobre-orange transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-nobre-black hover:text-nobre-orange transition-colors font-medium"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-nobre-black hover:text-nobre-orange transition-colors font-medium"
              >
                Contato
              </button>
              <a 
                href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção."
                className="btn-primary text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-nobre-black hover:text-nobre-orange transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="container-custom py-4 space-y-4">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block w-full text-left py-2 text-nobre-black hover:text-nobre-orange transition-colors font-medium"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="block w-full text-left py-2 text-nobre-black hover:text-nobre-orange transition-colors font-medium"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="block w-full text-left py-2 text-nobre-black hover:text-nobre-orange transition-colors font-medium"
                >
                  Produtos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block w-full text-left py-2 text-nobre-black hover:text-nobre-orange transition-colors font-medium"
                >
                  Contato
                </button>
                <a 
                  href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção."
                  className="btn-primary inline-block mt-4 text-sm px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Solicitar orçamento via WhatsApp"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

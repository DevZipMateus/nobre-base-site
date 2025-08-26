
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
      <div className="bg-nobre-black text-white py-2 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a 
              href="tel:21965691913" 
              className="flex items-center gap-2 hover:text-nobre-orange transition-colors"
              aria-label="Ligar para Nobre Minerais"
            >
              <Phone size={14} />
              <span>(21) 96569-1913</span>
            </a>
            <a 
              href="mailto:nobre.minerais@gmail.com" 
              className="flex items-center gap-2 hover:text-nobre-orange transition-colors"
              aria-label="Enviar email para Nobre Minerais"
            >
              <Mail size={14} />
              <span>nobre.minerais@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Seg-Sex: 7h às 17h | Sáb: 8h às 12h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-[42px] left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/4a80ab86-1885-4a4c-b568-9bd0ccc5305e.png" 
                alt="Nobre Minerais - Comércio de Areia e Brita" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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
                className="btn-primary"
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
              className="md:hidden p-2 text-nobre-black hover:text-nobre-orange transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
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
                  className="btn-primary inline-block mt-4"
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

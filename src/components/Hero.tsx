
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/55886f36-10e9-4d6a-8f27-0c9708de9cf3.png)' }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)] py-8">
          {/* Content */}
          <div className="text-white animate-fade-in text-center max-w-4xl">
            <div className="mb-6 lg:mb-8">
              <span className="bg-white/20 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                🏗️ Materiais de Construção Civil
              </span>
            </div>

            {/* Logo NOBRE MINERAIS */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-300 to-nobre-orange text-black font-black text-3xl sm:text-4xl lg:text-5xl w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center shadow-2xl">
                  N
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider">
                    NOBRE
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-white/90 tracking-widest -mt-1">
                    MINERAIS
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6">
              Construir com <span className="text-yellow-300">Excelência</span> Começa pela Base
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 lg:mb-6 leading-relaxed">
              Fornecemos <strong>areia, brita e agregados</strong> de alta qualidade para sua obra. 
              Mais de <strong>15 anos</strong> de experiência no mercado carioca.
            </p>

            <div className="mb-6 lg:mb-8">
              <p className="text-lg sm:text-xl lg:text-2xl text-yellow-300 font-bold italic">
                "E a base é Nobre."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12 justify-center">
              <a 
                href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção."
                className="btn-hero flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                Solicitar Orçamento
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </a>
              <button 
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero-outline flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4"
              >
                Ver Produtos
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center max-w-md mx-auto">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300">15+</div>
                <div className="text-xs sm:text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300">1000+</div>
                <div className="text-xs sm:text-sm text-white/80">Obras Atendidas</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300">18</div>
                <div className="text-xs sm:text-sm text-white/80">Tipos de Produtos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white/50 rounded-full mt-1.5 lg:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/062c57bd-6daa-4bfa-8df7-ca5740b94a1a.png)'
    }} />
      
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)] py-8">
          {/* Content */}
          <div className="text-white animate-fade-in text-center max-w-5xl">
            <div className="mb-8 lg:mb-12">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full text-sm sm:text-base font-medium border border-white/20 shadow-xl">
                <span className="text-lg">🏗️</span>
                Materiais de Construção Civil
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8 lg:mb-12 tracking-tight">
              <span className="block mb-2">Construir com Excelência</span>
              <span className="block mb-2">Começa pela Base</span>
              <span className="block">
                E a base é{' '}
                <span className="bg-gradient-to-r from-nobre-orange to-yellow-400 bg-clip-text text-transparent">
                  Nobre
                </span>
                <span className="text-nobre-orange">.</span>
              </span>
            </h1>

            {/* Logo Nobre Minerais - Modern Card */}
            <div className="mb-8 lg:mb-12">
              <div className="inline-block bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
                <img src="/lovable-uploads/4a80ab86-1885-4a4c-b568-9bd0ccc5305e.png" alt="Nobre Minerais - Comércio de Areia e Brita" className="h-28 sm:h-32 md:h-36 lg:h-44 xl:h-48 w-auto mx-auto filter drop-shadow-2xl" />
              </div>
            </div>
            
            

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-12 lg:mb-16 justify-center">
              <a href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção." className="btn-hero group flex items-center justify-center gap-3 text-base lg:text-lg" target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento via WhatsApp">
                Solicitar Orçamento
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <button onClick={() => document.getElementById('produtos')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-hero-outline flex items-center justify-center gap-3 text-base lg:text-lg">
                Ver Produtos
              </button>
            </div>

            {/* Modern Stats Cards */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-300 to-nobre-orange bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/90 font-medium">
                  Qualidade Garantida
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-300 to-nobre-orange bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/90 font-medium">
                  Obras Atendidas
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-300 to-nobre-orange bg-clip-text text-transparent mb-2">
                  18
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/90 font-medium">
                  Tipos de Produtos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
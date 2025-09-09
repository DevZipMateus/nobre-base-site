import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Orange Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nobre-orange/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-nobre-orange/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-nobre-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}}>
          <div className="w-2 h-2 bg-nobre-orange rounded-full blur-sm"></div>
        </div>
        <div className="absolute animate-float" style={{top: '60%', left: '80%', animationDelay: '1s'}}>
          <div className="w-3 h-3 bg-nobre-orange/60 rounded-full blur-sm"></div>
        </div>
        <div className="absolute animate-float" style={{top: '40%', left: '60%', animationDelay: '2s'}}>
          <div className="w-1 h-1 bg-nobre-orange rounded-full blur-sm"></div>
        </div>
        <div className="absolute animate-float" style={{top: '80%', left: '30%', animationDelay: '3s'}}>
          <div className="w-2 h-2 bg-nobre-orange/40 rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)] py-8">
          {/* Content */}
          <div className="text-white animate-fade-in text-left max-w-5xl mx-auto">
            <div className="mb-8 lg:mb-12">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full text-sm sm:text-base font-medium border border-white/20 shadow-xl">
                <span className="text-lg">🏗️</span>
                Materiais de Construção Civil
              </span>
            </div>
            
            {/* Primeira parte - texto menor */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] mb-4 lg:mb-6 text-white/90">
              <span className="block mb-1">Construir</span>
              <span className="block mb-1">com excelência</span>
              <span className="block">começa pela base.</span>
            </div>
            
            {/* Segunda parte - texto maior e destacado */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 lg:mb-12 tracking-tight">
              <span className="block">
                E a base é{' '}
                <span className="bg-gradient-to-r from-nobre-orange to-orange-400 bg-clip-text text-transparent">
                  Nobre
                </span>
                <span className="text-nobre-orange">.</span>
              </span>
            </h1>

            {/* Logo Nobre Minerais - Modern Card */}
            <div className="mb-8 lg:mb-12 text-center">
              <div className="inline-block bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
                <img src="/lovable-uploads/4a80ab86-1885-4a4c-b568-9bd0ccc5305e.png" alt="Nobre Minerais - Comércio de Areia e Brita" className="h-32 sm:h-36 md:h-44 lg:h-52 xl:h-60 w-auto filter brightness-150 contrast-125 drop-shadow-2xl" />
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
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-300 to-nobre-orange bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/90 font-medium">
                  Qualidade Garantida
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-300 to-nobre-orange bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/90 font-medium">
                  Obras Atendidas
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-300 to-nobre-orange bg-clip-text text-transparent mb-2">
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
    </section>
  );
};

export default Hero;
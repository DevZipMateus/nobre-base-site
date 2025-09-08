import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/2bb6f595-bd23-4a17-b733-30987e723c49.png)'
    }} />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)] py-8">
          {/* Content */}
          <div className="text-white animate-fade-in text-center max-w-4xl backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 bg-black/30">
            <div className="mb-6 lg:mb-8">
              <span className="bg-white/20 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                🏗️ Materiais de Construção Civil
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 lg:mb-8">
              Construir com <span className="text-slate-50">Excelência</span> Começa pela Base{' '}
              <span className="block mt-2 text-gray-50">E a base é Nobre.</span>
            </h1>

            {/* Logo Nobre Minerais */}
            <div className="mb-6 lg:mb-8">
              <div className="inline-block bg-white/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8">
                <img src="/lovable-uploads/4a80ab86-1885-4a4c-b568-9bd0ccc5305e.png" alt="Nobre Minerais - Comércio de Areia e Brita" className="h-24 sm:h-28 md:h-32 lg:h-40 xl:h-44 w-auto mx-auto" />
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 lg:mb-8 leading-relaxed">
              Fornecemos <strong>areia, brita e agregados</strong> de alta qualidade para sua obra. 
              Empresa especializada no mercado carioca.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12 justify-center">
              <a href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção." className="btn-hero flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4" target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento via WhatsApp">
                Solicitar Orçamento
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </a>
              <button onClick={() => document.getElementById('produtos')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-hero-outline flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-4">
                Ver Produtos
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center max-w-md mx-auto">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300">100%</div>
                <div className="text-xs sm:text-sm text-white/80">Qualidade Garantida</div>
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
    </section>;
};
export default Hero;
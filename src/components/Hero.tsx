
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                🏗️ Materiais de Construção Civil
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Construir com <span className="text-yellow-300">Excelência</span> Começa pela Base
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Fornecemos <strong>areia, brita e agregados</strong> de alta qualidade para sua obra. 
              Mais de <strong>15 anos</strong> de experiência no mercado carioca.
            </p>

            <div className="mb-8">
              <p className="text-lg text-white/80 font-medium">
                "E a base é Nobre."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção."
                className="btn-hero flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </a>
              <button 
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero-outline flex items-center justify-center gap-2"
              >
                Ver Produtos
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">15+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">1000+</div>
                <div className="text-sm text-white/80">Obras Atendidas</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">18</div>
                <div className="text-sm text-white/80">Tipos de Produtos</div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="animate-slide-in-right flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-w-md w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ pointerEvents: 'none' }}
              >
                <source src="/lovable-uploads/areia.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

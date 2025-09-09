
import React from 'react';
import { Target, Users, Award, Handshake } from 'lucide-react';
const About = () => {
  const values = [{
    icon: Target,
    title: "Nossa Missão",
    description: "Construir com Qualidade é o Nosso Compromisso"
  }, {
    icon: Award,
    title: "Exigências Técnicas",
    description: "Fornecer materiais que atendam às exigências técnicas das obras"
  }, {
    icon: Handshake,
    title: "Parcerias Duradouras",
    description: "Estabelecer parcerias duradouras com nossos clientes"
  }, {
    icon: Users,
    title: "Atendimento Diferenciado",
    description: "Promover soluções com ótimo custo-benefício e atendimento diferenciado"
  }];
  return <section id="sobre" className="section-padding bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 lg:mb-6">
            Sobre a <span className="text-nobre-orange">Nobre Minerais</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left order-2 lg:order-1 space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-nobre-orange mb-3 lg:mb-4">
              Tradição e Qualidade no Rio de Janeiro
            </h3>
            
            <div className="space-y-3 lg:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Localizada na Pechincha, Rio de Janeiro, a Nobre Minerais se destaca pela 
                qualidade dos materiais oferecidos e pela agilidade na entrega, garantindo 
                que sua obra não pare.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
            {values.map((value, index) => <div key={index} className={`bg-white/5 backdrop-blur-md rounded-xl shadow-md border border-white/10 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:bg-white/10 text-center group animate-stagger animate-delay-${index * 100}`}>
                <div className="bg-nobre-orange/20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:bg-nobre-orange/30 transition-colors">
                  <value.icon size={20} className="text-nobre-orange sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h4 className="font-semibold text-white mb-2 lg:mb-3 text-xs sm:text-sm lg:text-base">{value.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 animate-fade-up">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-3 lg:mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6">
              Entre em contato conosco e receba um orçamento personalizado para sua obra.
            </p>
            <a href="https://wa.me/5521965691913?text=Olá! Gostaria de conhecer mais sobre os materiais da Nobre Minerais." className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3" target="_blank" rel="noopener noreferrer" aria-label="Entrar em contato via WhatsApp">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default About;

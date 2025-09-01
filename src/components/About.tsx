
import React from 'react';
import { Target, Users, Award, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Construir com Qualidade é o Nosso Compromisso"
    },
    {
      icon: Award,
      title: "Exigências Técnicas",
      description: "Fornecer materiais que atendam às exigências técnicas das obras"
    },
    {
      icon: Handshake,
      title: "Parcerias Duradouras",
      description: "Estabelecer parcerias duradouras com nossos clientes"
    },
    {
      icon: Users,
      title: "Atendimento Diferenciado",
      description: "Promover soluções com ótimo custo-benefício e atendimento diferenciado"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nobre-black leading-tight mb-4 lg:mb-6">
            Sobre a <span className="text-nobre-orange">Nobre Minerais</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-nobre-gray leading-relaxed max-w-3xl mx-auto px-4">
            Somos uma empresa com ampla experiência no ramo de materiais para a construção civil 
            e promovemos o fornecimento adequado de agregados graúdos e miúdos para diversos projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-nobre-orange mb-4 lg:mb-6">
              Tradição e Qualidade no Rio de Janeiro
            </h3>
            
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <p className="text-sm sm:text-base lg:text-lg text-nobre-gray leading-relaxed">
                Trabalhamos com uma ampla variedade de produtos em nosso catálogo para que 
                todos os clientes encontrem aquilo que procuram. Nossa experiência no mercado 
                carioca nos permite entender as necessidades específicas de cada obra.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-nobre-gray leading-relaxed">
                Localizada na Pechincha, Rio de Janeiro, a Nobre Minerais se destaca pela 
                qualidade dos materiais oferecidos e pela agilidade na entrega, garantindo 
                que sua obra não pare.
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
              <h4 className="font-semibold text-nobre-black mb-3 lg:mb-4 text-sm sm:text-base">Informações da Empresa</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 text-xs sm:text-sm">
                <div>
                  <span className="font-medium text-nobre-gray">CNPJ:</span>
                  <p className="text-nobre-black">54.400.053/0001-29</p>
                </div>
                <div>
                  <span className="font-medium text-nobre-gray">Especialidade:</span>
                  <p className="text-nobre-black">Materiais para Construção Civil</p>
                </div>
                <div>
                  <span className="font-medium text-nobre-gray">Localização:</span>
                  <p className="text-nobre-black">Pechincha, Rio de Janeiro - RJ</p>
                </div>
                <div>
                  <span className="font-medium text-nobre-gray">Atendimento:</span>
                  <p className="text-nobre-black">Segunda a Sábado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 animate-slide-in-right order-1 lg:order-2">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-nobre-orange/30 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-nobre-orange/10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:bg-nobre-orange/20 transition-colors">
                  <value.icon size={24} className="text-nobre-orange sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
                <h4 className="font-semibold text-nobre-black mb-2 lg:mb-3 text-sm sm:text-base">{value.title}</h4>
                <p className="text-nobre-gray text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16 animate-scale-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-nobre-black mb-3 lg:mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-nobre-gray leading-relaxed mb-4 lg:mb-6">
              Entre em contato conosco e receba um orçamento personalizado para sua obra.
            </p>
            <a 
              href="https://wa.me/5521965691913?text=Olá! Gostaria de conhecer mais sobre os materiais da Nobre Minerais."
              className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entrar em contato via WhatsApp"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

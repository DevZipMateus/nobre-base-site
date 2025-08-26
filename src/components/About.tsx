
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-6">
            Sobre a <span className="text-nobre-orange">Nobre Minerais</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Somos uma empresa com ampla experiência no ramo de materiais para a construção civil 
            e promovemos o fornecimento adequado de agregados graúdos e miúdos para diversos projetos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="heading-md mb-6 text-nobre-orange">
              Tradição e Qualidade no Rio de Janeiro
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-body">
                Trabalhamos com uma ampla variedade de produtos em nosso catálogo para que 
                todos os clientes encontrem aquilo que procuram. Nossa experiência no mercado 
                carioca nos permite entender as necessidades específicas de cada obra.
              </p>
              
              <p className="text-body">
                Localizada na Pechincha, Rio de Janeiro, a Nobre Minerais se destaca pela 
                qualidade dos materiais oferecidos e pela agilidade na entrega, garantindo 
                que sua obra não pare.
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h4 className="font-semibold text-nobre-black mb-4">Informações da Empresa</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-nobre-gray">CNPJ:</span>
                  <p className="text-nobre-black">54.400.053/0001-29</p>
                </div>
                <div>
                  <span className="font-medium text-nobre-gray">Fundação:</span>
                  <p className="text-nobre-black">Mais de 15 anos no mercado</p>
                </div>
                <div>
                  <span className="font-medium text-nobre-gray">Localização:</span>
                  <p className="text-nobre-black">Pechincha, Rio de Janeiro - RJ</p>
                </div>
                <div>
                  <span className="font-medium text-nobre-gray">Especialidade:</span>
                  <p className="text-nobre-black">Materiais para Construção Civil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {values.map((value, index) => (
              <div 
                key={index}
                className="card-service text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-nobre-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nobre-orange/20 transition-colors">
                  <value.icon size={32} className="text-nobre-orange" />
                </div>
                <h4 className="font-semibold text-nobre-black mb-3">{value.title}</h4>
                <p className="text-nobre-gray text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="heading-sm mb-4 text-nobre-black">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-body mb-6">
              Entre em contato conosco e receba um orçamento personalizado para sua obra.
            </p>
            <a 
              href="https://wa.me/5521965691913?text=Olá! Gostaria de conhecer mais sobre os materiais da Nobre Minerais."
              className="btn-primary inline-flex items-center gap-2"
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

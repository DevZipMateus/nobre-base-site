import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Brita1 = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <div className="bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-nobre-orange transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para produtos
          </Link>
        </div>
      </div>

      {/* Hero Section with Two Columns */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nobre-orange/5 via-transparent to-nobre-orange/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Information */}
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                  Brita 1
                </h1>
                <div className="w-24 h-1 bg-nobre-orange mb-8"></div>
                <p className="font-sans text-xl text-gray-300 mb-8 leading-relaxed">
                  Entre os agregados mais utilizados na construção civil, a Brita 1 é um dos principais materiais devido à sua versatilidade e excelente desempenho em diferentes etapas da obra. A Venda de Brita 1 é fundamental para garantir qualidade, resistência e durabilidade nas estruturas.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Concreto convencional
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Lajes e vigas
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Pisos e calçadas
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Pré-moldados
                  </span>
                </div>

                <a 
                  href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Brita 1&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-nobre-orange text-black px-8 py-4 rounded-lg font-sans font-semibold hover:bg-nobre-orange/90 transition-colors shadow-lg hover:shadow-nobre-orange/20"
                >
                  <span>Solicitar Orçamento</span>
                </a>
              </div>

              {/* About Section */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
                  Sobre Nosso Produto
                </h2>
                <div className="space-y-4">
                  <p className="font-sans text-gray-300 leading-relaxed">
                    A escolha correta dos agregados faz toda a diferença no resultado final de uma construção. A Brita 1 é composta por pedras de granulometria média, sendo a mais utilizada em obras por oferecer equilíbrio entre resistência e trabalhabilidade.
                  </p>
                  <p className="font-sans text-gray-300 leading-relaxed">
                    Optar por fornecedores especializados na Venda de Brita 1 garante um material de alto nível, limpo e devidamente classificado, pronto para atender às necessidades do seu projeto.
                  </p>
                  <p className="font-sans text-gray-300 leading-relaxed">
                    A Nobre Comércio e Serviços de Minerais é referência no fornecimento de britas e outros materiais para a construção civil. Com ampla experiência no setor, trabalhamos para oferecer produtos de qualidade e um atendimento diferenciado. Sempre que precisar de Brita 1, conte conosco para ter segurança e eficiência em sua obra.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/galeria/brita_1.jpg"
                alt="Brita 1 - Nobre Minerais"
                className="w-full max-w-2xl h-auto rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Qualidade Garantida</h3>
              <p className="font-sans text-gray-300">Materiais de primeira linha, testados e aprovados para construção civil.</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Entrega Rápida</h3>
              <p className="font-sans text-gray-300">Logística eficiente para atender seus prazos de obra.</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Atendimento Ágil</h3>
              <p className="font-sans text-gray-300">Suporte técnico especializado para suas necessidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Aplicações da Brita 1
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Concreto convencional</h3>
                <p className="font-sans text-gray-300">Produção de concreto convencional para diversas aplicações.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Lajes, colunas e vigas</h3>
                <p className="font-sans text-gray-300">Ideal para estruturas como lajes, colunas e vigas.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Pisos e calçadas</h3>
                <p className="font-sans text-gray-300">Perfeita para pisos e calçadas de alta resistência.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Pré-moldados</h3>
                <p className="font-sans text-gray-300">Fabricação de pré-moldados de alta qualidade.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Obras estruturais</h3>
                <p className="font-sans text-gray-300">Obras em geral que exigem bom acabamento estrutural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nobre-orange via-nobre-orange to-nobre-orange/90 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Solicite Seu Orçamento
          </h2>
          <p className="font-sans text-xl mb-8 opacity-90">
            Entre em contato conosco e receba o melhor preço para Brita 1
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Brita 1&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-sans font-semibold hover:bg-black/90 transition-colors shadow-lg"
            >
              WhatsApp: (21) 96569-1913
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Brita 1&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg font-sans font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              WhatsApp: (21) 99538-5789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brita1;
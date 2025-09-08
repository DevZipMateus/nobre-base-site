import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BicaCorrida = () => {
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
                  Bica Corrida
                </h1>
                <div className="w-24 h-1 bg-nobre-orange mb-8"></div>
                <p className="font-sans text-xl text-gray-300 mb-8 leading-relaxed">
                  Invista em uma empresa experiente quando precisar de Venda de Bica Corrida
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Pavimentação
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Base de Calçadas
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Aterros
                  </span>
                </div>

                <a 
                  href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Bica Corrida&type=phone_number&app_absent=0"
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
                    Conhecida por ser um conjunto de pedra britada, pedrisco e pó-de-pedra que não tem nenhuma graduação definida, a bica corrida é um componente obtido por meio do equipamento de britagem. Esse tipo de material é bastante utilizado no ramo de construção porque, em função da sua resistência, é aplicado no processo de pavimentação.
                  </p>
                  <p className="font-sans text-gray-300 leading-relaxed">
                    A Nobre Comércio e Serviços de Minerais é referência na comercialização de agregados graúdos e miúdos para a construção civil, uma vez que prezamos pela qualidade dos produtos disponibilizados em nosso catálogo.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Bica-Corrida01.png"
                alt="Bica Corrida - Nobre Minerais"
                className="w-full max-w-md h-auto rounded-lg shadow-2xl border border-white/10"
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
              <h3 className="font-serif text-xl font-bold text-white mb-2">Alta Resistência</h3>
              <p className="font-sans text-gray-300">Material resistente ideal para pavimentação e bases sólidas.</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Agilidade na Entrega</h3>
              <p className="font-sans text-gray-300">Entrega rápida sem atrasos para seus projetos.</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Atendimento Completo</h3>
              <p className="font-sans text-gray-300">Supervisão profissional em todas as etapas da venda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              Agilidade na Compra e Entrega
            </h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-8">
              O principal objetivo da nossa companhia é garantir que os clientes tenham o melhor atendimento e encontrem o que procuram para a sua obra. Por conta disso, todas as etapas da Venda de Bica Corrida acompanham a supervisão de profissionais qualificados para esclarecer dúvidas e preparar o orçamento de acordo com as suas necessidades.
            </p>
            <p className="font-sans text-gray-300 leading-relaxed">
              Além disso, a agilidade na entrega também é algo importante, principalmente porque alguns clientes têm urgência quanto ao recebimento do produto. Desse modo, saiba que com a Nobre Comércio e Serviços de Minerais não há atrasos, uma vez que buscamos sempre atingir a sua satisfação na Venda de Bica Corrida.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Principais Aplicações
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Pavimentação</h3>
                <p className="font-sans text-gray-300">Ideal para pavimentação de ruas e estradas com alta durabilidade.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Base de Calçadas</h3>
                <p className="font-sans text-gray-300">Perfeita para criar bases sólidas em calçadas e passeios.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Aterros</h3>
                <p className="font-sans text-gray-300">Excelente para aterros e nivelamento de terrenos.</p>
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
            Entre em contato conosco e receba o melhor preço para Bica Corrida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Bica Corrida&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-sans font-semibold hover:bg-black/90 transition-colors shadow-lg"
            >
              WhatsApp: (21) 96569-1913
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Bica Corrida&type=phone_number&app_absent=0"
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

export default BicaCorrida;
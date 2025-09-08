import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Saibro = () => {
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
                  Saibro
                </h1>
                <div className="w-24 h-1 bg-nobre-orange mb-8"></div>
                <p className="font-sans text-xl text-gray-300 mb-8 leading-relaxed">
                  Conte com a melhor empresa para a Venda de Saibro para sua obra
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Aterros
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Nivelamento
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full font-sans text-sm font-semibold border border-nobre-orange/30">
                    Jardins
                  </span>
                </div>

                <a 
                  href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Saibro&type=phone_number&app_absent=0"
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
                    Muitos são os materiais utilizados na construção de casas, prédios e demais estabelecimentos. Entre os agregados necessários, o saibro é um dos produtos que possui procura no mercado, uma vez que é empregado na cobertura de quadras e demais áreas.
                  </p>
                  <p className="font-sans text-gray-300 leading-relaxed">
                    Muitas são as finalidades do saibro e isso faz com que ele tenha ampla busca, afinal também pode ser incorporado com outros componentes no preparo de argamassa para a construção civil. Por conta disso, a melhor forma de obter um bom produto é contar com uma empresa de alto nível na Venda de Saibro, e a Nobre Comércio e Serviços de Minerais é a escolha certa.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/nobre/Nobre-Minerais-Venda-de-Saibro01.png"
                alt="Saibro - Nobre Minerais"
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
              <h3 className="font-serif text-xl font-bold text-white mb-2">Qualidade Garantida</h3>
              <p className="font-sans text-gray-300">Padrão de qualidade superior para todas as aplicações.</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Entrega Eficiente</h3>
              <p className="font-sans text-gray-300">Logística otimizada para atender suas necessidades.</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Atendimento Personalizado</h3>
              <p className="font-sans text-gray-300">Suporte especializado em todas as etapas do processo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              Total Suporte na Venda de Saibro
            </h2>
            <p className="font-sans text-gray-300 leading-relaxed mb-8">
              O nosso principal objetivo é garantir que nossos clientes tenham um atendimento personalizado e que recebam um produto adequado para a construção ou reforma de ambientes. Por conta disso, a Nobre Comércio e Serviços de Minerais se preocupa com o padrão de qualidade entregue não somente pelo material, mas também no atendimento feito na Venda de Saibro.
            </p>
            <p className="font-sans text-gray-300 leading-relaxed">
              Nossa equipe de profissionais mantém a atenção em todas as etapas da Venda de Saibro, de modo que você obtenha exatamente o que procura. Além disso, a Nobre Comércio e Serviços de Minerais oferece preço justo compatível com o produto, garantindo assim o excelente custo benefício do material para o emprego em diversos projetos.
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
                <h3 className="font-serif text-xl font-bold text-white mb-2">Cobertura de Quadras</h3>
                <p className="font-sans text-gray-300">Ideal para cobertura de quadras esportivas e áreas de lazer.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Aterros</h3>
                <p className="font-sans text-gray-300">Perfeito para aterros e nivelamento de terrenos diversos.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-nobre-orange mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-2">Preparo de Argamassa</h3>
                <p className="font-sans text-gray-300">Componente para preparo de argamassa na construção civil.</p>
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
            Entre em contato conosco e receba o melhor preço para Saibro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Saibro&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-sans font-semibold hover:bg-black/90 transition-colors shadow-lg"
            >
              WhatsApp: (21) 96569-1913
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5521995385789&text=Olá, gostaria de solicitar um orçamento para Saibro&type=phone_number&app_absent=0"
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

export default Saibro;
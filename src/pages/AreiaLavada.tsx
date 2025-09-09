import { ArrowLeft, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AreiaLavada = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <div className="bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-nobre-orange transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Voltar para produtos
          </Link>
        </div>
      </div>

      {/* Hero Section with Two Columns */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nobre-orange/5 via-transparent to-nobre-orange/10"></div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Information */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                  Areia Lavada
                </h1>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-nobre-orange mb-4 sm:mb-6 lg:mb-8"></div>
                <p className="font-sans text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                  A seleção de materiais para uma construção civil deve contemplar empresas de alto nível para a Venda de Areia Lavada
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                  <span className="bg-nobre-orange/20 text-nobre-orange px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full font-sans text-xs sm:text-sm font-semibold border border-nobre-orange/30">
                    Argamassa
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full font-sans text-xs sm:text-sm font-semibold border border-nobre-orange/30">
                    Reboco
                  </span>
                  <span className="bg-nobre-orange/20 text-nobre-orange px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full font-sans text-xs sm:text-sm font-semibold border border-nobre-orange/30">
                    Assentamento
                  </span>
                </div>

                <a 
                  href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Areia Lavada&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-nobre-orange text-black px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-sans font-semibold hover:bg-nobre-orange/90 transition-colors shadow-lg hover:shadow-nobre-orange/20 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Solicitar Orçamento WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column - Video and Image */}
            <div className="space-y-4 sm:space-y-6">
              {/* Video */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="/lovable-uploads/galeria/areia_lavada_.jpg"
                >
                  <source src="/lovable-uploads/areia.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              
              {/* Product Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/galeria/areia_lavada_.jpg" 
                  alt="Areia Lavada - Material de qualidade para construção civil"
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-nobre-orange/10 to-transparent">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8 lg:mb-12">
            Por que escolher nossa Areia Lavada?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-nobre-orange mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Livre de Impurezas</h3>
              <p className="text-xs sm:text-sm text-gray-300">Areia totalmente lavada e peneirada</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-nobre-orange mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Qualidade Garantida</h3>
              <p className="text-xs sm:text-sm text-gray-300">Material certificado e testado</p>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-1 bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-nobre-orange mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Entrega Rápida</h3>
              <p className="text-xs sm:text-sm text-gray-300">Frota própria no Rio de Janeiro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8 lg:mb-12">
            Principais Aplicações
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              "Preparo de argamassa",
              "Reboco de paredes", 
              "Assentamento de tijolos",
              "Chapisco",
              "Contrapiso",
              "Acabamentos finos"
            ].map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/10 hover:border-nobre-orange/30 transition-colors group">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-nobre-orange rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-white font-medium text-xs sm:text-sm lg:text-base">{application}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-nobre-orange/20 via-nobre-orange/10 to-transparent">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Precisa de Areia Lavada para sua obra?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado com entrega em todo Rio de Janeiro
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5521965691913&text=Olá, gostaria de solicitar um orçamento para Areia Lavada&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg flex items-center text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            
            <a 
              href="tel:21965691913"
              className="bg-white/10 text-white border border-white/20 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreiaLavada;
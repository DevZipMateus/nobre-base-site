import React from 'react';
import { Package, Truck, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const Products = () => {
  // Helper function to standardize product names
  const formatProductName = (name: string) => {
    return name
      .replace(/_/g, ' ') // Remove underscores
      .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
      .trim(); // Remove any trailing spaces
  };

  const carouselImages = [
    {
      src: '/lovable-uploads/galeria/areia_lavada_.jpg',
      alt: 'Areia lavada para construção civil',
      title: formatProductName('areia_lavada_')
    },
    {
      src: '/lovable-uploads/galeria/areia_lavada_fina_.jpg',
      alt: 'Areia lavada fina para construção',
      title: formatProductName('areia_lavada_fina_')
    },
    {
      src: '/lovable-uploads/galeria/areia_para_aterro.jpg',
      alt: 'Areia para aterro',
      title: formatProductName('areia_para_aterro')
    },
    {
      src: '/lovable-uploads/galeria/brita_0.jpg',
      alt: 'Brita 0 para construção',
      title: formatProductName('brita_0')
    },
    {
      src: '/lovable-uploads/galeria/brita_1.jpg',
      alt: 'Brita 1 para construção',
      title: formatProductName('brita_1')
    },
    {
      src: '/lovable-uploads/galeria/po_de_pedra_.jpg',
      alt: 'Pó de pedra para construção',
      title: formatProductName('po_de_pedra_')
    },
    {
      src: '/lovable-uploads/galeria/rachao.jpg',
      alt: 'Rachão para construção',
      title: formatProductName('rachao')
    },
    {
      src: '/lovable-uploads/galeria/bgs-bica-corrida.jpg',
      alt: 'BGS e Bica Corrida para pavimentação',
      title: formatProductName('BGS_e_bica_corrida')
    }
  ];

  const products = [
    {
      category: "Areias",
      items: [
        "Areia Lavada Média / Grossa",
        "Areia Lavada Fina", 
        "Areia para Aterro",
        "Areia de Praia",
        "Areia Lavada Ensacada"
      ]
    },
    {
      category: "Britas",
      items: [
        "Brita 0",
        "Brita 1", 
        "Brita 2",
        "Brita 4",
        "Brita 0 Ensacada",
        "Brita 1 Ensacada"
      ]
    },
    {
      category: "Materiais",
      items: [
        "Rachão",
        "Pó de Pedra",
        "Bica Corrida",
        "BGS",
        "Saibro"
      ]
    },
    {
      category: "Outros",
      items: [
        "Terra Adubada",
        "Grama Natural"
      ]
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Qualidade Certificada",
      description: "Todos os nossos materiais passam por rigoroso controle de qualidade"
    },
    {
      icon: Truck,
      title: "Entrega Própria",
      description: "Frota própria garante pontualidade e cuidado no transporte"
    },
    {
      icon: Package,
      title: "Variedade Completa",
      description: "Mais de 18 tipos diferentes de materiais para sua obra"
    },
    {
      icon: Clock,
      title: "Pronta Entrega",
      description: "Estoque sempre disponível para atendimento imediato"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block bg-nobre-orange/20 text-nobre-orange px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            🏗️ Nossos Produtos
          </div>
        </div>

        {/* Products Grid Images */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {carouselImages.map((image, index) => {
              // Map image titles to routes
              const getRouteForProduct = (title: string) => {
                const routeMap: { [key: string]: string } = {
                  'Areia Lavada': '/areia-lavada',
                  'Areia Lavada Fina': '/areia-lavada-fina',
                  'Areia Para Aterro': '/areia-para-aterro',
                  'Brita 0': '/brita-0',
                  'Brita 1': '/brita-1',
                  'Po De Pedra': '/po-de-pedra',
                  'Rachao': '/rachao',
                  'BGS E Bica Corrida': '/bgs-bica-corrida'
                };
                return routeMap[title] || '/';
              };

              const animationDelay = `animate-delay-${Math.min(index * 100, 800)}`;

              return (
                <Link 
                  key={index}
                  to={getRouteForProduct(image.title)}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-nobre-orange/30 animate-stagger ${animationDelay}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                      priority={index < 6}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-nobre-orange transition-colors duration-300">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Clique para ver detalhes
                      </p>
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-nobre-orange/50 rounded-2xl transition-colors duration-300"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const animationClass = index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right';
            const animationDelay = `animate-delay-${Math.min(index * 100, 400)}`;

            return (
              <div 
                key={index}
                className={`text-center p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/10 ${animationClass} ${animationDelay}`}
              >
                <div className="bg-nobre-orange/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-nobre-orange" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {products.map((category, index) => {
            const animationDelay = `animate-delay-${Math.min(index * 100, 400)}`;

            return (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 border border-white/10 animate-fade-up ${animationDelay}`}
              >
                <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center text-gray-300 hover:text-nobre-orange transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-nobre-orange rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up">
          <p className="text-lg text-gray-300 mb-6">
            Precisa de um orçamento personalizado para sua obra?
          </p>
          <a 
            href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção."
            className="btn-hero inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
          >
            Solicitar Orçamento
            <Package size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
import React from 'react';
import { Package, Truck, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      src: '/lovable-uploads/galeria/BGS e bica_corrida.jpg',
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
        <div className="text-center mb-16">
          <div className="inline-block bg-nobre-orange/20 text-nobre-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏗️ Nossos Produtos
          </div>
        </div>

        {/* Products Grid Images */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                  'Bgs E Bica Corrida': '/bgs-bica-corrida'
                };
                return routeMap[title] || '/';
              };

              return (
                <Link 
                  key={index}
                  to={getRouteForProduct(image.title)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-nobre-orange/30"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/10"
            >
              <div className="bg-nobre-orange/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <h3 className="font-bold text-xl text-white mb-6 text-center">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-center text-gray-300 hover:text-nobre-orange transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-nobre-orange rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
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

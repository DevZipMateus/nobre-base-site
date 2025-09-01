
import React from 'react';
import { Package, Truck, Award, Clock } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Products = () => {
  const carouselImages = [
    {
      src: '/lovable-uploads/galeria/areia_lavada_.jpg',
      alt: 'Areia lavada para construção civil',
      title: 'areia_lavada_'
    },
    {
      src: '/lovable-uploads/galeria/areia_lavada_fina_.jpg',
      alt: 'Areia lavada fina para construção',
      title: 'areia_lavada_fina_'
    },
    {
      src: '/lovable-uploads/galeria/areia_para_aterro.jpg',
      alt: 'Areia para aterro',
      title: 'areia_para_aterro'
    },
    {
      src: '/lovable-uploads/galeria/brita_0.jpg',
      alt: 'Brita 0 para construção',
      title: 'brita_0'
    },
    {
      src: '/lovable-uploads/galeria/brita_1.jpg',
      alt: 'Brita 1 para construção',
      title: 'brita_1'
    },
    {
      src: '/lovable-uploads/galeria/po_de_pedra_.jpg',
      alt: 'Pó de pedra para construção',
      title: 'po_de_pedra_'
    },
    {
      src: '/lovable-uploads/galeria/rachao.jpg',
      alt: 'Rachão para construção',
      title: 'rachao'
    },
    {
      src: '/lovable-uploads/galeria/BGS e bica_corrida.jpg',
      alt: 'BGS e Bica Corrida para pavimentação',
      title: 'BGS e bica_corrida'
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
    <section id="produtos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-nobre-orange/10 text-nobre-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏗️ Nossos Produtos
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-nobre-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-nobre-orange" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-center text-gray-700 hover:text-nobre-orange transition-colors duration-300"
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
          <p className="text-lg text-gray-600 mb-6">
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

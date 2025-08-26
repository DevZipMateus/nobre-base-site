
import React from 'react';
import { Package, Truck, Award, Clock } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Products = () => {
  const carouselImages = [
    {
      src: '/lovable-uploads/8d03d019-5eaa-4dca-855c-360b72c24755.png',
      alt: 'Pilha de areia para construção civil',
      title: 'Areia Lavada - Diversos tipos'
    },
    {
      src: '/lovable-uploads/363fb942-181e-44da-bd5c-e7e364b25c39.png',
      alt: 'Areia fina para construção',
      title: 'Areia Fina - Alta qualidade'
    },
    {
      src: '/lovable-uploads/d295f4c8-af52-4cd6-bc9c-8f252d756b49.png',
      alt: 'Montanha de areia amarela',
      title: 'Areia para Aterro'
    },
    {
      src: '/lovable-uploads/2beea51f-eeb5-4c54-a627-21b9454db6e3.png',
      alt: 'Brita cinza para construção',
      title: 'Brita 0, 1, 2 e 4'
    },
    {
      src: '/lovable-uploads/f7b2fadd-1d57-4aa8-b068-e1365ed19d27.png',
      alt: 'Pedras britadas de diversos tamanhos',
      title: 'Rachão e Pó de Pedra'
    },
    {
      src: '/lovable-uploads/59fd1f44-1c04-4186-a7c5-fc2aad10235e.png',
      alt: 'Brita para pavimentação',
      title: 'Bica Corrida e BGS'
    },
    {
      src: '/lovable-uploads/c1864915-b0c2-4a45-9498-3adf16240d1b.png',
      alt: 'Vista panorâmica da pedreira',
      title: 'Nossa Pedreira'
    },
    {
      src: '/lovable-uploads/2cbf9394-25fb-4f83-9133-1967413036e8.png',
      alt: 'Caminhão Nobre Minerais carregando areia',
      title: 'Entrega com Frota Própria'
    },
    {
      src: '/lovable-uploads/c4ec84d4-a7b2-4f88-a77f-16f742463a0e.png',
      alt: 'Caminhão Nobre Minerais na pedreira',
      title: 'Logística Especializada'
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
      category: "Agregados",
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Materiais de <span className="text-nobre-orange">Primeira Qualidade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma linha completa de agregados para construção civil, 
            todos com certificação de qualidade e entrega garantida no Rio de Janeiro.
          </p>
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

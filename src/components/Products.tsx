
import React from 'react';
import { Package, Truck, Scale } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: "Areias",
      icon: Package,
      description: "Areia de qualidade para todos os tipos de construção",
      products: [
        "Areia Lavada Média/Grossa",
        "Areia Lavada Fina", 
        "Areia para Aterro",
        "Areia de Praia",
        "Areia Lavada Ensacada"
      ]
    },
    {
      title: "Britas",
      icon: Scale,
      description: "Britas em diversos tamanhos e especificações",
      products: [
        "Brita 0",
        "Brita 1", 
        "Brita 2",
        "Brita 4",
        "Brita 0 Ensacada",
        "Brita 1 Ensacada"
      ]
    },
    {
      title: "Agregados",
      icon: Truck,
      description: "Diversos tipos de agregados para sua obra",
      products: [
        "Rachão",
        "Pó de Pedra",
        "Bica Corrida",
        "BGS",
        "Saibro"
      ]
    },
    {
      title: "Especiais",
      icon: Package,
      description: "Produtos especiais para acabamento e paisagismo",
      products: [
        "Terra Adubada",
        "Grama Natural"
      ]
    }
  ];

  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-6">
            Nossos <span className="text-nobre-orange">Produtos</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Oferecemos uma linha completa de materiais para construção civil, 
            todos com qualidade certificada e entrega garantida no Rio de Janeiro.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="card-product group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div className="bg-nobre-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nobre-orange/20 transition-colors">
                  <category.icon size={32} className="text-nobre-orange" />
                </div>
                <h3 className="heading-sm mb-2">{category.title}</h3>
                <p className="text-nobre-gray text-sm">{category.description}</p>
              </div>

              <ul className="space-y-2">
                {category.products.map((product, productIndex) => (
                  <li 
                    key={productIndex}
                    className="flex items-center gap-2 text-nobre-black text-sm"
                  >
                    <div className="w-2 h-2 bg-nobre-orange rounded-full flex-shrink-0"></div>
                    {product}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href={`https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para ${category.title.toLowerCase()}.`}
                  className="btn-outline w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Solicitar orçamento para ${category.title} via WhatsApp`}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={32} className="text-green-600" />
            </div>
            <h4 className="font-semibold text-nobre-black mb-2">Produtos Ensacados</h4>
            <p className="text-nobre-gray text-sm">
              Disponibilizamos alguns produtos ensacados para facilitar o transporte e manuseio
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck size={32} className="text-blue-600" />
            </div>
            <h4 className="font-semibold text-nobre-black mb-2">Entrega Própria</h4>
            <p className="text-nobre-gray text-sm">
              Frota própria para garantir entrega rápida e segura em todo o Rio de Janeiro
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale size={32} className="text-yellow-600" />
            </div>
            <h4 className="font-semibold text-nobre-black mb-2">Qualidade Certificada</h4>
            <p className="text-nobre-gray text-sm">
              Todos os materiais passam por controle de qualidade rigoroso antes da entrega
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de um produto específico?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Entre em contato conosco! Temos outros materiais disponíveis e podemos 
              atender necessidades especiais da sua obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5521965691913?text=Olá! Preciso de informações sobre materiais para construção."
                className="btn-hero-outline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato via WhatsApp"
              >
                Falar no WhatsApp
              </a>
              <a 
                href="tel:21965691913"
                className="btn-hero-outline"
                aria-label="Ligar para Nobre Minerais"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

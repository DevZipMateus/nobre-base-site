
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: [
        "(21) 96569-1913",
        "(21) 96759-7858"
      ]
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["nobre.minerais@gmail.com"]
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Estr. do Pau-Ferro, 480",
        "Pechincha, Rio de Janeiro - RJ",
        "CEP: 22743-051"
      ]
    },
    {
      icon: Clock,
      title: "Funcionamento",
      details: [
        "Segunda a Sexta: 7h às 17h",
        "Sábado: 8h às 12h",
        "Domingo: Fechado"
      ]
    }
  ];

  return (
    <section id="contato" className="section-padding bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-6 text-white">
            Entre em <span className="text-nobre-orange">Contato</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto text-gray-300">
            Estamos prontos para atender você! Entre em contato conosco para solicitar 
            orçamentos, tirar dúvidas ou agendar entregas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10"
                >
                  <div className="bg-nobre-orange/20 p-3 rounded-xl flex-shrink-0">
                    <info.icon size={24} className="text-nobre-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300 mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Instagram size={20} className="text-nobre-orange" />
                Siga-nos no Instagram
              </h4>
              <a 
                href="https://www.instagram.com/nobreminerais/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nobre-orange hover:text-nobre-orange-dark transition-colors"
                aria-label="Seguir Nobre Minerais no Instagram"
              >
                @nobreminerais
              </a>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="animate-slide-in-right">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10">
              <h3 className="heading-sm mb-6 text-white">
                Solicite seu Orçamento
              </h3>
              <p className="text-gray-300 mb-8">
                Escolha a forma mais conveniente para entrar em contato conosco:
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/5521965691913?text=Olá! Gostaria de solicitar um orçamento para materiais de construção."
                  className="btn-whatsapp w-full flex items-center justify-center gap-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar orçamento via WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>

                {/* Phone */}
                <a 
                  href="tel:21965691913"
                  className="btn-outline w-full flex items-center justify-center gap-3"
                  aria-label="Ligar para Nobre Minerais"
                >
                  <Phone size={20} />
                  Ligar Agora
                </a>

                {/* Email */}
                <a 
                  href="mailto:nobre.minerais@gmail.com?subject=Solicitação de Orçamento&body=Olá! Gostaria de solicitar um orçamento para materiais de construção."
                  className="btn-outline w-full flex items-center justify-center gap-3"
                  aria-label="Enviar email para Nobre Minerais"
                >
                  <Mail size={20} />
                  Enviar E-mail
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4 text-sm text-center">
                  <div>
                    <div className="font-semibold text-white">Resposta Rápida</div>
                    <div className="text-gray-300">Em até 2 horas</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Orçamento</div>
                    <div className="text-gray-300">100% Gratuito</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

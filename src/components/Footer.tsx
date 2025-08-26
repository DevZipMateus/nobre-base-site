
import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nobre-black text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/4a80ab86-1885-4a4c-b568-9bd0ccc5305e.png" 
                alt="Nobre Minerais" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Mais de 15 anos fornecendo materiais de construção civil de qualidade 
              para obras no Rio de Janeiro.
            </p>
            <div className="text-sm text-gray-400">
              <p>CNPJ: 54.400.053/0001-29</p>
              <p className="mt-1">"Construir com excelência começa pela base. E a base é Nobre."</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nossos Produtos</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Areia Lavada (Média/Grossa/Fina)</li>
              <li>Britas (0, 1, 2, 4)</li>
              <li>Rachão e Pó de Pedra</li>
              <li>Bica Corrida e BGS</li>
              <li>Terra Adubada</li>
              <li>Grama Natural</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-nobre-orange mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>(21) 96569-1913</p>
                  <p>(21) 96759-7858</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-nobre-orange mt-1 flex-shrink-0" />
                <a 
                  href="mailto:nobre.minerais@gmail.com"
                  className="text-gray-400 hover:text-nobre-orange transition-colors"
                >
                  nobre.minerais@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Instagram size={18} className="text-nobre-orange mt-1 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/nobreminerais/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-nobre-orange transition-colors"
                >
                  @nobreminerais
                </a>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-nobre-orange mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Estr. do Pau-Ferro, 480</p>
                  <p>Pechincha, Rio de Janeiro - RJ</p>
                  <p>CEP: 22743-051</p>
                </div>
              </div>
              
              <div className="text-gray-400">
                <h5 className="font-medium text-white mb-2">Horário de Funcionamento</h5>
                <p>Segunda a Sexta: 7h às 17h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Nobre Comércio e Serviço de Minerais Ltda. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://wa.me/5521965691913"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nobre-orange transition-colors text-sm"
                aria-label="WhatsApp da Nobre Minerais"
              >
                WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/nobreminerais/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nobre-orange transition-colors text-sm"
                aria-label="Instagram da Nobre Minerais"
              >
                Instagram
              </a>
              <a 
                href="mailto:nobre.minerais@gmail.com"
                className="text-gray-400 hover:text-nobre-orange transition-colors text-sm"
                aria-label="Email da Nobre Minerais"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🌍",
      title: "Multilingue",
      description: "Suporte a todas as variantes do português nos países CPLP",
      badge: "Personalizado por país"
    },
    {
      icon: "💰",
      title: "Gestão Financeira",
      description: "Suporte a múltiplas moedas locais com câmbios automáticos",
      badge: "Kwanza | Metical | Real"
    },
    {
      icon: "📜",
      title: "Legislação Integrada",
      description: "Adaptação às leis fiscais, educativas e de proteção de dados",
      badge: "Sempre atualizado"
    },
    {
      icon: "🏛️",
      title: "Multi-escola",
      description: "Gestão de múltiplas escolas, filiais e utilizadores",
      badge: "Modo SaaS"
    },
    {
      icon: "📱",
      title: "Multi-plataforma",
      description: "Acesso web e mobile com PWA e apps dedicadas",
      badge: "Responsivo"
    },
    {
      icon: "🔐",
      title: "Segurança RGPD",
      description: "Encriptação, logs de auditoria, 2FA e backups regulares",
      badge: "Proteção de dados"
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Completas</h2>
          <p className="text-lg text-gray-600">
            O nosso ERP escolar foi criado especificamente para atender às necessidades das instituições educativas em países lusófonos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-start">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-lusofonia-blue hover:bg-blue-200">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

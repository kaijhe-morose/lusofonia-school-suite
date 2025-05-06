
import { Card, CardContent } from "@/components/ui/card";

const ExtraFeatures = () => {
  const features = [
    {
      title: "Microfranquias Educativas",
      description: "Sistema de gestão para redes de microfranquias educativas, permitindo replicar modelos de negócio com facilidade.",
      icon: "🏫"
    },
    {
      title: "Dashboards Regionais",
      description: "KPIs educacionais avançados por região, permitindo análises comparativas e benchmarking entre escolas.",
      icon: "📊"
    },
    {
      title: "Inteligência Artificial",
      description: "Módulo de IA para previsão de desistência, notas e comportamento dos alunos, possibilitando intervenção precoce.",
      icon: "🤖"
    },
    {
      title: "Relatórios de Compliance",
      description: "Geração automática de relatórios de conformidade com legislações educacionais locais e internacionais.",
      icon: "📑"
    },
    {
      title: "Blockchain Educacional",
      description: "Integração opcional com blockchain para criar histórico escolar imutável e verificável, garantindo a autenticidade dos dados.",
      icon: "🔗"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Diferenciais Exclusivos</h2>
          <p className="text-lg text-gray-600">
            Funcionalidades inovadoras que tornam o nosso ERP único no mercado educacional lusófono.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraFeatures;

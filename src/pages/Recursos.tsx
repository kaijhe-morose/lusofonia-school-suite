
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import ExtraFeatures from "@/components/ExtraFeatures";

const modules = [
  {
    id: "academic",
    name: "Gestão Académica",
    icon: "📚",
    features: [
      "Matrículas e inscrições online",
      "Gestão de turmas e horários",
      "Registro de notas e avaliações",
      "Assiduidade e comportamento",
      "Currículos adaptados por país",
      "Boletins de notas personalizáveis",
      "Histórico escolar completo",
      "Gestão de exames e provas"
    ]
  },
  {
    id: "administrative",
    name: "Gestão Administrativa",
    icon: "📋",
    features: [
      "Controle de documentos",
      "Gestão de recursos humanos",
      "Controle de inventário",
      "Manutenção de instalações",
      "Agendamentos e calendários",
      "Comunicações internas",
      "Processos administrativos digitais",
      "Relatórios personalizados"
    ]
  },
  {
    id: "financial",
    name: "Gestão Financeira",
    icon: "💰",
    features: [
      "Gestão de propinas e mensalidades",
      "Faturação automática",
      "Relatórios financeiros",
      "Orçamentação e projeções",
      "Múltiplas moedas",
      "Conformidade fiscal local",
      "Controle de despesas",
      "Folha de pagamentos"
    ]
  },
  {
    id: "communication",
    name: "Comunicação",
    icon: "📱",
    features: [
      "Portal para pais e alunos",
      "Notificações automáticas",
      "Aplicativo móvel",
      "Mensagens entre utilizadores",
      "Comunicados escolares",
      "Eventos e calendário",
      "Compartilhamento de arquivos",
      "Chat interno"
    ]
  },
  {
    id: "reports",
    name: "Relatórios e Análises",
    icon: "📊",
    features: [
      "Dashboards personalizáveis",
      "Relatórios para ministérios",
      "Análise de desempenho",
      "Estatísticas educacionais",
      "Exportação em múltiplos formatos",
      "Relatórios agendados",
      "KPIs educacionais",
      "Comparativos históricos"
    ]
  },
  {
    id: "security",
    name: "Segurança e Conformidade",
    icon: "🔐",
    features: [
      "Conformidade com RGPD",
      "Backups automáticos",
      "Controle de acessos",
      "Logs de auditoria",
      "Autenticação em dois fatores",
      "Encriptação de dados",
      "Políticas de privacidade",
      "Recuperação de desastres"
    ]
  }
];

const Recursos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Recursos do Sistema</h1>
              <p className="text-lg text-gray-600">
                Conheça todas as funcionalidades do ERP Escolar Lusofonia, desenvolvido especificamente 
                para atender às necessidades das instituições de ensino nos países de língua portuguesa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <Card key={module.id} className="card-hover overflow-hidden">
                  <div className="h-2 hero-gradient"></div>
                  <CardContent className="p-6 pt-8">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{module.icon}</div>
                      <h3 className="text-xl font-semibold">{module.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-lusofonia-blue shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <Features />
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Adaptado para Cada Realidade</h2>
              <p className="text-lg text-gray-600">
                Nosso ERP escolar é totalmente personalizável para atender às necessidades 
                específicas de cada tipo de instituição educacional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: "Escolas Públicas",
                  icon: "🏫",
                  description: "Adaptado aos requisitos governamentais, com relatórios oficiais e integração com sistemas ministeriais."
                },
                {
                  type: "Escolas Privadas",
                  icon: "🏢",
                  description: "Foco em gestão financeira eficiente, marketing educacional e comunicação com os pais."
                },
                {
                  type: "Universidades",
                  icon: "🎓",
                  description: "Módulos específicos para gestão acadêmica de ensino superior, com suporte a múltiplas faculdades e departamentos."
                },
                {
                  type: "Escolas Técnicas",
                  icon: "⚙️",
                  description: "Funcionalidades para gestão de estágios, parcerias empresariais e acompanhamento de inserção profissional."
                }
              ].map((item, idx) => (
                <Card key={idx} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <ExtraFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Recursos;

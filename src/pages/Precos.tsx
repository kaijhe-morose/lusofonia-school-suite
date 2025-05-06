
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";

const Precos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Planos e Preços</h1>
              <p className="text-lg text-gray-600">
                Escolha o melhor plano para a sua instituição de ensino, com preços adaptados à realidade de cada país.
              </p>
            </div>
          </div>
        </div>
        
        <Pricing />
        
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Posso mudar de plano a qualquer momento?</h3>
                  <p className="text-gray-600">
                    Sim, pode atualizar ou fazer downgrade do seu plano a qualquer momento. 
                    As alterações entrarão em vigor no próximo ciclo de faturação.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">O que acontece se ultrapassar o limite de alunos?</h3>
                  <p className="text-gray-600">
                    Se ultrapassar o limite de alunos do seu plano, entraremos em contacto para 
                    discutir opções de atualização. Não haverá interrupção de serviço.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Oferecem descontos para redes de escolas?</h3>
                  <p className="text-gray-600">
                    Sim, temos planos corporativos para redes com múltiplas escolas. 
                    Entre em contacto com a nossa equipe comercial para obter uma proposta personalizada.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Posso experimentar antes de comprar?</h3>
                  <p className="text-gray-600">
                    Oferecemos um período de avaliação gratuito de 14 dias em todos os planos, 
                    sem necessidade de cartão de crédito. Além disso, pode agendar uma demonstração 
                    personalizada com a nossa equipa.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Como funciona a faturação?</h3>
                  <p className="text-gray-600">
                    A faturação pode ser mensal ou anual, conforme a sua preferência. 
                    Aceitamos diversos métodos de pagamento, incluindo cartões internacionais 
                    e opções locais de pagamento para cada país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Precos;


import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 lg:p-16 text-white relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pronto para transformar a gestão da sua escola?
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl">
                  Experimente gratuitamente por 14 dias o sistema ERP escolar mais completo para países lusófonos. 
                  Sem compromissos, sem necessidade de cartão de crédito.
                </p>
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-base px-8">
                  Iniciar Teste Gratuito
                </Button>
                <Button variant="link" className="text-blue-100 hover:text-white">
                  Agendar uma Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

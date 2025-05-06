
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 hero-gradient"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-lusofonia-blue text-sm font-medium mb-3">
                PALOP/CPLP Edition v1.0
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              ERP Escolar <span className="text-lusofonia-blue">Lusofonia</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Solução de gestão escolar adaptada às realidades dos países de língua portuguesa. 
              Multi-escola, seguro e com suporte legislativo local.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-4">
              <Button className="btn-cta" size="lg">
                Começar Demonstração
              </Button>
              <Link to="/precos" className="btn-secondary">
                Ver Planos
              </Link>
            </div>
            
            <div className="flex items-center pt-4">
              {['🇦🇴', '🇲🇿', '🇬🇼', '🇨🇻', '🇸🇹', '🇧🇷', '🇵🇹'].map((flag) => (
                <span key={flag} className="text-2xl mr-2" title={flag}>
                  {flag}
                </span>
              ))}
              <span className="text-sm text-gray-600 ml-2">
                Adaptado para todos os países da CPLP
              </span>
            </div>
          </div>
          
          <div className="relative md:pl-10">
            <div className="relative rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 flex items-center px-4 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="mx-auto text-sm text-gray-500">ERP Escolar Lusofonia</div>
              </div>
              <div className="pt-10 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800" 
                  alt="ERP Escolar Dashboard" 
                  className="w-full" 
                />
              </div>
            </div>
            
            <div className="absolute -bottom-16 -right-16 h-48 w-48 bg-blue-100 rounded-full opacity-70 z-0 blur-xl"></div>
            <div className="absolute -top-16 -left-16 h-48 w-48 bg-green-100 rounded-full opacity-70 z-0 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

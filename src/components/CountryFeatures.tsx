
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const countries = [
  {
    id: "angola",
    name: "Angola",
    flag: "🇦🇴",
    currency: "Kwanza (AOA)",
    features: [
      "Conformidade com Lei Geral da Educação (Lei n.º 17/16)",
      "Relatórios para Ministério da Educação angolano",
      "Sistema de avaliação adaptado ao modelo educacional angolano",
      "Gestão de propinas em Kwanza com emissão de recibos legais"
    ],
    color: "bg-red-100 text-red-800"
  },
  {
    id: "mozambique",
    name: "Moçambique",
    flag: "🇲🇿",
    currency: "Metical (MZN)",
    features: [
      "Conformidade com a Lei n.º 18/2018 (Sistema Nacional de Educação)",
      "Relatórios para o MINEDH",
      "Sistema de classificação moçambicano integrado",
      "Gestão financeira em Meticais com conformidade fiscal local"
    ],
    color: "bg-green-100 text-green-800"
  },
  {
    id: "guinea",
    name: "Guiné-Bissau",
    flag: "🇬🇼",
    currency: "Franco CFA (XOF)",
    features: [
      "Adaptado à Lei de Bases do Sistema Educativo",
      "Relatórios para o Ministério da Educação Nacional",
      "Sistema de avaliação guineense",
      "Gestão financeira em Franco CFA"
    ],
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    id: "capeverde",
    name: "Cabo Verde",
    flag: "🇨🇻",
    currency: "Escudo Cabo-verdiano (CVE)",
    features: [
      "Conformidade com Lei de Bases do Sistema Educativo",
      "Relatórios para o Ministério da Educação",
      "Sistema de avaliação cabo-verdiano",
      "Gestão financeira em Escudos"
    ],
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: "saotome",
    name: "São Tomé e Príncipe",
    flag: "🇸🇹",
    currency: "Dobra (STD)",
    features: [
      "Adaptação à Lei de Bases do Sistema Educativo",
      "Relatórios para o Ministério da Educação e Ensino Superior",
      "Sistema de avaliação são-tomense",
      "Gestão financeira em Dobras"
    ],
    color: "bg-green-100 text-green-800"
  },
  {
    id: "brazil",
    name: "Brasil",
    flag: "🇧🇷",
    currency: "Real (BRL)",
    features: [
      "Conformidade com a Lei de Diretrizes e Bases da Educação (LDB)",
      "Relatórios para o MEC e secretarias estaduais/municipais",
      "Sistema de avaliação brasileiro (Fundamental/Médio)",
      "Gestão financeira em Reais com NFE integrada"
    ],
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    id: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    currency: "Euro (EUR)",
    features: [
      "Conformidade com Lei de Bases do Sistema Educativo",
      "Relatórios para o Ministério da Educação português",
      "Sistema de avaliação português integrado",
      "Gestão financeira em Euros com faturação eletrônica"
    ],
    color: "bg-red-100 text-red-800"
  }
];

const CountryFeatures = () => {
  const [activeTab, setActiveTab] = useState("angola");
  
  const activeCountry = countries.find(country => country.id === activeTab) || countries[0];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Adaptado para Cada País da CPLP
          </h2>
          <p className="text-lg text-gray-600">
            O nosso ERP oferece funcionalidades específicas para cada país, 
            respeitando as legislações locais, moedas e sistemas educativos.
          </p>
        </div>
        
        <div className="my-8">
          <Tabs defaultValue="angola" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-1">
                {countries.map(country => (
                  <TabsTrigger 
                    key={country.id} 
                    value={country.id}
                    className="flex flex-col items-center px-4 py-2 data-[state=active]:bg-lusofonia-blue data-[state=active]:text-white"
                  >
                    <span className="text-2xl mb-1">{country.flag}</span>
                    <span className="text-xs md:text-sm font-medium">{country.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {countries.map(country => (
              <TabsContent key={country.id} value={country.id} className="mt-0">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-4 ${country.color}`}>
                        <span className="text-xl mr-2">{country.flag}</span>
                        {country.name}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Características Específicas</h3>
                      <p className="text-gray-600 mb-4">
                        Sistema adaptado às necessidades educacionais e legislativas de {country.name}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-6">
                        <span className="font-medium">Moeda:</span>
                        <span className="ml-2">{country.currency}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {country.features.map((feature, index) => (
                        <Card key={index} className="bg-gray-50 border-none">
                          <CardContent className="p-4 flex items-start">
                            <div className="mr-3 mt-1 text-lusofonia-blue">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <p className="text-sm">{feature}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Cada país possui características específicas adaptadas à realidade local,
            garantindo total conformidade com os requisitos educacionais e legislativos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryFeatures;

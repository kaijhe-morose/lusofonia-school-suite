
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingData = {
  "Angola": { currency: "Kz", multiplier: 500, symbol: "AOA" },
  "Moçambique": { currency: "MT", multiplier: 65, symbol: "MZN" },
  "Guiné-Bissau": { currency: "CFA", multiplier: 600, symbol: "XOF" },
  "Cabo Verde": { currency: "$", multiplier: 100, symbol: "CVE" },
  "São Tomé e Príncipe": { currency: "Db", multiplier: 25, symbol: "STD" },
  "Brasil": { currency: "R$", multiplier: 5, symbol: "BRL" },
  "Portugal": { currency: "€", multiplier: 1, symbol: "EUR" }
};

type PlanType = "basic" | "standard" | "premium";

interface PlanFeature {
  text: string;
  included: boolean | string;
}

interface Plan {
  name: string;
  price: { monthly: number; annually: number };
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  buttonText: string;
  studentsLimit: number;
}

const basePlans: Record<PlanType, Plan> = {
  basic: {
    name: "Básico",
    price: { monthly: 49, annually: 490 },
    description: "Para escolas pequenas ou em fase inicial",
    studentsLimit: 100,
    buttonText: "Iniciar Gratuitamente",
    features: [
      { text: "Gestão de Alunos", included: true },
      { text: "Gestão de Professores", included: true },
      { text: "Gestão de Turmas", included: true },
      { text: "Gestão Financeira Básica", included: true },
      { text: "Relatórios Básicos", included: true },
      { text: "Multilingue", included: "2 idiomas" },
      { text: "Suporte por Email", included: true },
      { text: "Atualizações de Legislação", included: false },
      { text: "Módulos Avançados", included: false },
      { text: "Inteligência Artificial", included: false },
    ]
  },
  standard: {
    name: "Standard",
    price: { monthly: 99, annually: 990 },
    description: "Para escolas em crescimento",
    studentsLimit: 500,
    highlight: true,
    buttonText: "Experimentar Grátis",
    features: [
      { text: "Gestão de Alunos", included: true },
      { text: "Gestão de Professores", included: true },
      { text: "Gestão de Turmas", included: true },
      { text: "Gestão Financeira Completa", included: true },
      { text: "Relatórios Avançados", included: true },
      { text: "Multilingue", included: "Todos idiomas" },
      { text: "Suporte Prioritário", included: true },
      { text: "Atualizações de Legislação", included: true },
      { text: "Módulos Avançados", included: "5 módulos" },
      { text: "Inteligência Artificial", included: false },
    ]
  },
  premium: {
    name: "Premium",
    price: { monthly: 199, annually: 1990 },
    description: "Para redes de escolas",
    studentsLimit: 2000,
    buttonText: "Contactar Vendas",
    features: [
      { text: "Gestão de Alunos", included: true },
      { text: "Gestão de Professores", included: true },
      { text: "Gestão de Turmas", included: true },
      { text: "Gestão Financeira Completa", included: true },
      { text: "Relatórios Personalizados", included: true },
      { text: "Multilingue", included: "Todos idiomas" },
      { text: "Suporte 24/7", included: true },
      { text: "Atualizações de Legislação", included: true },
      { text: "Módulos Avançados", included: "Todos" },
      { text: "Inteligência Artificial", included: true },
    ]
  }
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [selectedCountry, setSelectedCountry] = useState("Angola");
  const { currency, multiplier, symbol } = pricingData[selectedCountry as keyof typeof pricingData];

  const formatPrice = (price: number) => {
    const localPrice = price * multiplier;
    return localPrice.toLocaleString() + " " + currency;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos Adaptados à Sua Escola</h2>
          <p className="text-lg text-gray-600 mb-8">
            Escolha o plano que melhor se adapta às necessidades da sua instituição de ensino.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
            <div>
              <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-1">
                Selecione o País:
              </label>
              <select
                id="country-select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.keys(pricingData).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">Ciclo de Faturação:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                    billingCycle === "monthly" ? "bg-white shadow-sm" : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => setBillingCycle("monthly")}
                >
                  Mensal
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                    billingCycle === "annually" ? "bg-white shadow-sm" : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => setBillingCycle("annually")}
                >
                  Anual
                  <span className="ml-1 text-xs text-lusofonia-green inline-block px-1.5 py-0.5 rounded-full bg-green-100">
                    -17%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.keys(basePlans) as PlanType[]).map((key) => {
            const plan = basePlans[key];
            return (
              <Card 
                key={key} 
                className={`${
                  plan.highlight 
                    ? "border-lusofonia-blue relative shadow-lg" 
                    : "border-gray-200"
                } card-hover`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-lusofonia-blue text-white text-sm font-medium px-4 py-1 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}

                <CardHeader className="pb-0">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-2 mb-1">
                    <span className="text-3xl font-bold">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {billingCycle === "monthly" ? "/mês" : "/ano"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Até {plan.studentsLimit} alunos
                  </p>
                </CardHeader>

                <CardContent className="pt-4">
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <>
                            <Check className="h-5 w-5 text-lusofonia-green shrink-0 mr-2" />
                            <span>
                              {feature.text}
                              {typeof feature.included === "string" && (
                                <span className="text-gray-500 text-sm"> ({feature.included})</span>
                              )}
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="h-5 w-5 text-gray-300 shrink-0 mr-2">—</div>
                            <span className="text-gray-500">{feature.text}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.highlight 
                        ? "bg-lusofonia-blue hover:bg-blue-700" 
                        : "bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-800"
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de um plano personalizado para a sua rede de ensino?
          </p>
          <Button variant="outline" className="border-lusofonia-blue text-lusofonia-blue hover:bg-blue-50">
            Contacte a Nossa Equipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

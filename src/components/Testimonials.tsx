
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "O ERP Lusofonia revolucionou a gestão da nossa escola. Agora conseguimos ter relatórios em conformidade com a legislação angolana e gerir as mensalidades em Kwanza de forma eficiente.",
    author: "Maria Silva",
    position: "Diretora Administrativa",
    school: "Colégio Esperança",
    location: "Luanda, Angola",
    flag: "🇦🇴"
  },
  {
    text: "A adaptação ao sistema educacional moçambicano foi perfeita. Economizámos tempo e recursos com a automatização dos processos administrativos e financeiros.",
    author: "João Macamo",
    position: "Diretor Pedagógico",
    school: "Escola Nova Geração",
    location: "Maputo, Moçambique",
    flag: "🇲🇿"
  },
  {
    text: "O suporte multilingue e a adaptação às particularidades do sistema educativo brasileiro fizeram toda a diferença para a nossa rede de escolas.",
    author: "Ana Costa",
    position: "CEO",
    school: "Grupo Educacional Futuro",
    location: "São Paulo, Brasil",
    flag: "🇧🇷"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-lg text-gray-600">
            Histórias de sucesso de instituições educativas que utilizam o nosso ERP em diferentes países.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="card-hover border-t-4 border-t-lusofonia-blue">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-lusofonia-blue opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl">
                        {testimonial.flag}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                      <p className="text-sm text-gray-500">{testimonial.school}, {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

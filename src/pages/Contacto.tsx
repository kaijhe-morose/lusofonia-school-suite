
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contacto</h1>
              <p className="text-lg text-gray-600">
                Estamos aqui para ajudar. Entre em contacto com a nossa equipe para conhecer 
                melhor a solução ERP Escolar Lusofonia ou agendar uma demonstração.
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-lusofonia-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Vendas</h3>
                <p className="text-gray-600 mb-2">Entre em contacto para conhecer preços e soluções</p>
                <p className="text-lusofonia-blue font-medium">+244 923 456 789</p>
                <p className="text-lusofonia-blue font-medium">vendas@erpsaas.com</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-lusofonia-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Suporte</h3>
                <p className="text-gray-600 mb-2">Suporte técnico para clientes existentes</p>
                <p className="text-lusofonia-blue font-medium">+244 923 789 456</p>
                <p className="text-lusofonia-blue font-medium">suporte@erpsaas.com</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-lusofonia-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Parcerias</h3>
                <p className="text-gray-600 mb-2">Oportunidades para integradores e revendedores</p>
                <p className="text-lusofonia-blue font-medium">+244 923 123 456</p>
                <p className="text-lusofonia-blue font-medium">parcerias@erpsaas.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-12 bg-white border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Presença nos Países Lusófonos</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  {
                    country: "Angola",
                    flag: "🇦🇴",
                    address: "Av. 4 de Fevereiro, Luanda",
                    phone: "+244 923 456 789",
                    email: "angola@erpsaas.com"
                  },
                  {
                    country: "Moçambique",
                    flag: "🇲🇿",
                    address: "Av. Julius Nyerere, Maputo",
                    phone: "+258 84 123 4567",
                    email: "mocambique@erpsaas.com"
                  },
                  {
                    country: "Brasil",
                    flag: "🇧🇷",
                    address: "Av. Paulista, São Paulo",
                    phone: "+55 11 9876-5432",
                    email: "brasil@erpsaas.com"
                  },
                  {
                    country: "Portugal",
                    flag: "🇵🇹",
                    address: "Av. da Liberdade, Lisboa",
                    phone: "+351 912 345 678",
                    email: "portugal@erpsaas.com"
                  }
                ].map((office, idx) => (
                  <div key={idx} className="p-4 border rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{office.flag}</span>
                      <h3 className="text-lg font-semibold">{office.country}</h3>
                    </div>
                    <address className="text-gray-600 not-italic mb-2">
                      {office.address}
                    </address>
                    <p className="text-gray-600">{office.phone}</p>
                    <p className="text-lusofonia-blue">{office.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;

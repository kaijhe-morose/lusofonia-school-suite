
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    schoolName: "",
    studentCount: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, country: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto brevemente. Obrigado pelo seu interesse.",
      });
      
      setFormState({
        name: "",
        email: "",
        phone: "",
        country: "",
        schoolName: "",
        studentCount: "",
        message: ""
      });
      
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contacto</h2>
            <p className="text-lg text-gray-600">
              Estamos disponíveis para responder a todas as suas questões sobre o ERP Escolar Lusofonia.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Insira seu nome completo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Incluir código do país"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country">País</Label>
                  <Select value={formState.country} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="angola">🇦🇴 Angola</SelectItem>
                      <SelectItem value="mozambique">🇲🇿 Moçambique</SelectItem>
                      <SelectItem value="guinebissau">🇬🇼 Guiné-Bissau</SelectItem>
                      <SelectItem value="caboverde">🇨🇻 Cabo Verde</SelectItem>
                      <SelectItem value="saotome">🇸🇹 São Tomé e Príncipe</SelectItem>
                      <SelectItem value="brasil">🇧🇷 Brasil</SelectItem>
                      <SelectItem value="portugal">🇵🇹 Portugal</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="schoolName">Nome da Instituição</Label>
                  <Input
                    id="schoolName"
                    name="schoolName"
                    value={formState.schoolName}
                    onChange={handleChange}
                    placeholder="Nome da escola ou instituição"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="studentCount">Número de Alunos</Label>
                  <Select value={formState.studentCount} onValueChange={(val) => setFormState(prev => ({ ...prev, studentCount: val }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Número aproximado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">Menos de 50</SelectItem>
                      <SelectItem value="51-100">51-100</SelectItem>
                      <SelectItem value="101-500">101-500</SelectItem>
                      <SelectItem value="501-1000">501-1000</SelectItem>
                      <SelectItem value="1001+">Mais de 1000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar? Detalhe suas necessidades ou questões..."
                  rows={5}
                  required
                />
              </div>
              
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  className="bg-lusofonia-blue hover:bg-blue-700 px-8 py-2" 
                  disabled={loading}
                >
                  {loading ? "A enviar..." : "Enviar Mensagem"}
                </Button>
              </div>
            </form>
            
            <div className="mt-10 pt-8 border-t grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="mx-auto mb-2 w-10 h-10 bg-blue-100 text-lusofonia-blue rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Telefone</h4>
                <p className="text-gray-500">+244 923 456 789</p>
              </div>
              
              <div>
                <div className="mx-auto mb-2 w-10 h-10 bg-blue-100 text-lusofonia-blue rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="text-gray-500">info@erpsaas.com</p>
              </div>
              
              <div>
                <div className="mx-auto mb-2 w-10 h-10 bg-blue-100 text-lusofonia-blue rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Sede</h4>
                <p className="text-gray-500">Luanda, Angola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

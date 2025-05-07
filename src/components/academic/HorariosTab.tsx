
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowDown } from "lucide-react";

export default function HorariosTab() {
  const [activeSubTab, setActiveSubTab] = useState("calendario-escolar");
  const [selectedTurma, setSelectedTurma] = useState("9a");
  
  // Days of the week
  const weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  
  // Time periods
  const timePeriods = [
    "07:30 - 08:20", 
    "08:20 - 09:10", 
    "09:10 - 10:00", 
    "10:20 - 11:10", 
    "11:10 - 12:00"
  ];
  
  // Example schedule data
  const scheduleData = {
    "9a": [
      ["Matemática", "Português", "História", "Geografia", "Ciências"],
      ["Português", "Matemática", "Inglês", "Ciências", "Ed. Física"],
      ["História", "Geografia", "Matemática", "Português", "Artes"],
      ["Ciências", "Inglês", "Português", "Matemática", "História"],
      ["Artes", "Ed. Física", "Ciências", "Português", "Geografia"]
    ]
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" /> 
            Horários
          </h2>
          <p className="text-muted-foreground">
            Configure e gerencie os horários escolares
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline">Ver Calendário</Button>
          <Button>Gerar Horários</Button>
        </div>
      </div>
      
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendario-escolar">Calendário Escolar</TabsTrigger>
          <TabsTrigger value="geracao-automatica">Geração Automática</TabsTrigger>
          <TabsTrigger value="troca-sala">Troca de Sala</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calendario-escolar">
          <Card>
            <CardHeader>
              <CardTitle>Calendário Escolar 2025-2026</CardTitle>
              <CardDescription>
                Visualize os eventos importantes para o ano letivo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">1º Semestre</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 border-l-2 border-primary pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Início das Aulas</h4>
                        <p className="text-sm text-muted-foreground">15 de Setembro, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-amber-500 pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Feriado - Dia da República</h4>
                        <p className="text-sm text-muted-foreground">5 de Outubro, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-purple-500 pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Reunião de Pais</h4>
                        <p className="text-sm text-muted-foreground">15 de Outubro, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-green-500 pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Férias de Natal</h4>
                        <p className="text-sm text-muted-foreground">20 de Dezembro, 2025 - 5 de Janeiro, 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-red-500 pl-4">
                      <div>
                        <h4 className="font-medium">Exames 1º Semestre</h4>
                        <p className="text-sm text-muted-foreground">10-20 de Janeiro, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">2º Semestre</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 border-l-2 border-primary pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Início 2º Semestre</h4>
                        <p className="text-sm text-muted-foreground">1 de Fevereiro, 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-amber-500 pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Férias da Páscoa</h4>
                        <p className="text-sm text-muted-foreground">5-15 de Abril, 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-purple-500 pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Festa de Fim de Ano</h4>
                        <p className="text-sm text-muted-foreground">10 de Junho, 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-red-500 pl-4 pb-4">
                      <div>
                        <h4 className="font-medium">Exames Finais</h4>
                        <p className="text-sm text-muted-foreground">15-30 de Junho, 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 border-l-2 border-green-500 pl-4">
                      <div>
                        <h4 className="font-medium">Férias de Verão</h4>
                        <p className="text-sm text-muted-foreground">1 de Julho - 31 de Agosto, 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="geracao-automatica">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Horário de Aulas</CardTitle>
                  <CardDescription>
                    Visualize e gerencie o horário das turmas
                  </CardDescription>
                </div>
                <Select value={selectedTurma} onValueChange={setSelectedTurma}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione a turma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9a">9º Ano A</SelectItem>
                    <SelectItem value="9b">9º Ano B</SelectItem>
                    <SelectItem value="10a">10º Ano A</SelectItem>
                    <SelectItem value="10b">10º Ano B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <div className="grid grid-cols-6 gap-0">
                  <div className="bg-muted p-3 text-center font-medium">Hora / Dia</div>
                  {weekDays.map((day, idx) => (
                    <div key={idx} className="bg-muted p-3 text-center font-medium">{day}</div>
                  ))}
                  
                  {timePeriods.map((time, timeIdx) => (
                    <>
                      <div key={`time-${timeIdx}`} className="border-t border-r p-2 text-center text-sm">
                        {time}
                      </div>
                      {weekDays.map((_, dayIdx) => (
                        <div 
                          key={`cell-${timeIdx}-${dayIdx}`} 
                          className="border-t border-r p-2 text-center bg-white hover:bg-primary/5"
                        >
                          {scheduleData["9a"][dayIdx][timeIdx]}
                        </div>
                      ))}
                    </>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ArrowDown className="h-4 w-4 mr-1" /> Exportar PDF
                  </Button>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="troca-sala">
          <Card>
            <CardHeader>
              <CardTitle>Troca de Sala</CardTitle>
              <CardDescription>
                Gerencie mudanças temporárias ou permanentes de salas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                <Calendar className="mx-auto h-12 w-12 mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-2">Gestão de Trocas de Sala</h3>
                <p className="max-w-md mx-auto mb-4">
                  Aqui você pode gerenciar as trocas de sala temporárias ou permanentes para as aulas.
                </p>
                <Button>Iniciar troca de sala</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

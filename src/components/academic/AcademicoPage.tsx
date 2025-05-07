
import { DashboardLayout, UserRole } from "@/components/DashboardLayout";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Users, FileText, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MatriculasTab from "./MatriculasTab";
import TurmasTab from "./TurmasTab";
import HorariosTab from "./HorariosTab";

interface AcademicoPageProps {
  userRole: UserRole;
}

export default function AcademicoPage({ userRole }: AcademicoPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Académico</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie matrículas, turmas, disciplinas e horários
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-background">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="matriculas" className="data-[state=active]:bg-background">
              Matrículas
            </TabsTrigger>
            <TabsTrigger value="turmas" className="data-[state=active]:bg-background">
              Turmas e Disciplinas
            </TabsTrigger>
            <TabsTrigger value="horarios" className="data-[state=active]:bg-background">
              Horários
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Matrículas Card */}
              <Card className="hover:shadow-md transition-all cursor-pointer" 
                onClick={() => setActiveTab("matriculas")}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl mt-4">Matrículas</CardTitle>
                  <CardDescription>
                    Gerencie todo o processo de matrícula dos alunos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Pré-inscrição</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Matrícula Definitiva</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Transferências</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Turmas Card */}
              <Card className="hover:shadow-md transition-all cursor-pointer"
                onClick={() => setActiveTab("turmas")}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl mt-4">Turmas e Disciplinas</CardTitle>
                  <CardDescription>
                    Organize e acompanhe turmas e suas disciplinas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Criação de Turmas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Alocação de Professores</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Grade de Disciplinas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horários Card */}
              <Card className="hover:shadow-md transition-all cursor-pointer"
                onClick={() => setActiveTab("horarios")}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl mt-4">Horários</CardTitle>
                  <CardDescription>
                    Configure e gerencie os horários escolares
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Calendário Escolar</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Geração Automática</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>Troca de Sala</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Estatísticas Académicas</CardTitle>
                <CardDescription>Visão geral das principais métricas académicas</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Total de Alunos</span>
                  <span className="text-3xl font-bold">1,245</span>
                  <span className="text-xs text-green-500 mt-1">+3.2% este mês</span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Turmas Ativas</span>
                  <span className="text-3xl font-bold">42</span>
                  <span className="text-xs text-green-500 mt-1">+2 este semestre</span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Professores</span>
                  <span className="text-3xl font-bold">87</span>
                  <span className="text-xs text-green-500 mt-1">+5 este ano</span>
                </div>
                <div className="flex flex-col border rounded-lg p-4">
                  <span className="text-muted-foreground text-sm">Salas em Uso</span>
                  <span className="text-3xl font-bold">28</span>
                  <span className="text-xs text-blue-500 mt-1">95% ocupação</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Calendário Académico</CardTitle>
                  <CardDescription>Próximos eventos importantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Início das Aulas</h4>
                        <p className="text-muted-foreground text-xs">15 de Setembro, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Exames 1º Semestre</h4>
                        <p className="text-muted-foreground text-xs">10-20 de Janeiro, 2026</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Prazo Matrículas</h4>
                        <p className="text-muted-foreground text-xs">30 de Agosto, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                  <CardDescription>Aceda rapidamente às funções mais utilizadas</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <FileText className="h-5 w-5" />
                    <span className="text-xs">Nova Matrícula</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="text-xs">Criar Turma</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-xs">Ver Horários</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-xs">Disciplinas</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="matriculas">
            <MatriculasTab />
          </TabsContent>
          
          <TabsContent value="turmas">
            <TurmasTab />
          </TabsContent>
          
          <TabsContent value="horarios">
            <HorariosTab />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

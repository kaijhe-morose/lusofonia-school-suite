
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Search, Plus, Filter, BookOpen, UserCheck, ArrowRight } from "lucide-react";

export default function TurmasTab() {
  const [activeSubTab, setActiveSubTab] = useState("criacao-turmas");
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" /> 
            Turmas e Disciplinas
          </h2>
          <p className="text-muted-foreground">
            Organize e acompanhe turmas e suas disciplinas
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" /> Filtrar
          </Button>
          <Button size="sm" className="flex items-center gap-1">
            <Plus className="h-4 w-4" /> Nova Turma
          </Button>
        </div>
      </div>
      
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="criacao-turmas">Criação de Turmas</TabsTrigger>
          <TabsTrigger value="alocacao-professores">Alocação de Professores</TabsTrigger>
          <TabsTrigger value="grade-disciplinas">Grade de Disciplinas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="criacao-turmas">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Lista de Turmas</CardTitle>
                  <CardDescription>
                    Gerencie as turmas criadas e crie novas
                  </CardDescription>
                </div>
                <div className="relative w-full md:w-64 lg:w-72">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Pesquisar turmas..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="hover:shadow-md transition-all cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">9º Ano A</CardTitle>
                    <CardDescription>Ensino Fundamental</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>28 alunos</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>8 disciplinas</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Detalhes <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-md transition-all cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">10º Ano B</CardTitle>
                    <CardDescription>Ensino Médio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>32 alunos</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>10 disciplinas</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Detalhes <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-md transition-all cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">12º Ano C</CardTitle>
                    <CardDescription>Ensino Médio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>24 alunos</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>12 disciplinas</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Detalhes <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-dashed hover:shadow-md transition-all cursor-pointer flex items-center justify-center p-6">
                  <div className="text-center">
                    <Plus className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                    <h3 className="font-medium">Adicionar Nova Turma</h3>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alocacao-professores">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Alocação de Professores</CardTitle>
                  <CardDescription>
                    Atribua professores às turmas e disciplinas
                  </CardDescription>
                </div>
                <div className="relative w-full md:w-64 lg:w-72">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Pesquisar professores..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Professor</TableHead>
                    <TableHead>Disciplina</TableHead>
                    <TableHead>Turmas</TableHead>
                    <TableHead>Carga Horária</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Dr. Paulo Coelho</TableCell>
                    <TableCell>Matemática</TableCell>
                    <TableCell>9ºA, 10ºB, 12ºC</TableCell>
                    <TableCell>24h semanais</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dra. Maria Oliveira</TableCell>
                    <TableCell>Português</TableCell>
                    <TableCell>9ºA, 9ºB, 10ºA</TableCell>
                    <TableCell>20h semanais</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dr. João Alves</TableCell>
                    <TableCell>Física</TableCell>
                    <TableCell>10ºA, 11ºC, 12ºB</TableCell>
                    <TableCell>18h semanais</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando 3 de 15 registros
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm">
                  Próximo
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="grade-disciplinas">
          <Card>
            <CardHeader>
              <CardTitle>Grade de Disciplinas</CardTitle>
              <CardDescription>
                Configure a grade de disciplinas para cada turma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <h3 className="font-semibold">9º Ano A</h3>
                  <Button variant="outline" size="sm">Editar Grade</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <Card className="p-3">
                    <div className="font-medium">Matemática</div>
                    <div className="text-sm text-muted-foreground">4h semanais</div>
                  </Card>
                  <Card className="p-3">
                    <div className="font-medium">Português</div>
                    <div className="text-sm text-muted-foreground">5h semanais</div>
                  </Card>
                  <Card className="p-3">
                    <div className="font-medium">História</div>
                    <div className="text-sm text-muted-foreground">3h semanais</div>
                  </Card>
                  <Card className="p-3">
                    <div className="font-medium">Geografia</div>
                    <div className="text-sm text-muted-foreground">3h semanais</div>
                  </Card>
                  <Card className="p-3">
                    <div className="font-medium">Ciências</div>
                    <div className="text-sm text-muted-foreground">4h semanais</div>
                  </Card>
                  <Card className="p-3">
                    <div className="font-medium">Educação Física</div>
                    <div className="text-sm text-muted-foreground">2h semanais</div>
                  </Card>
                  <Card className="p-3">
                    <div className="font-medium">Artes</div>
                    <div className="text-sm text-muted-foreground">2h semanais</div>
                  </Card>
                  <Card className="p-3">
                    <div className="font-medium">Inglês</div>
                    <div className="text-sm text-muted-foreground">2h semanais</div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

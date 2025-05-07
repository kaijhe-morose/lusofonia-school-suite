
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Search, Plus, Download, Filter, Calendar, Clock, CheckCircle, Upload, FileCheck, ClipboardList } from "lucide-react";
import { UserRole } from "@/components/DashboardLayout";

interface AvaliacoesPageProps {
  userRole: UserRole;
}

export default function AvaliacoesPage({ userRole }: AvaliacoesPageProps) {
  const [activeTab, setActiveTab] = useState("provas");
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" /> 
            Avaliações & Exames
          </h2>
          <p className="text-muted-foreground">
            Gerencie provas, notas, boletins e processos de revisão
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" /> Filtrar
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" /> Exportar
          </Button>
          <Button size="sm" className="flex items-center gap-1">
            <Plus className="h-4 w-4" /> Nova Avaliação
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="provas" className="flex items-center gap-2">
            <FileCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Provas e Trabalhos</span>
            <span className="sm:hidden">Provas</span>
          </TabsTrigger>
          <TabsTrigger value="notas" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            <span className="hidden sm:inline">Notas & Boletins</span>
            <span className="sm:hidden">Notas</span>
          </TabsTrigger>
          <TabsTrigger value="revisoes" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Revisões & Recursos</span>
            <span className="sm:hidden">Revisões</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Provas e Trabalhos Tab */}
        <TabsContent value="provas">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Provas e Trabalhos</CardTitle>
                  <CardDescription>
                    Gerencie provas, trabalhos, exercícios e prazos
                  </CardDescription>
                </div>
                <div className="relative w-full md:w-64 lg:w-72">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Pesquisar avaliações..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Upload de Exercícios Card */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Upload className="h-5 w-5 text-primary" />
                        Upload de Exercícios
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                        <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                        <h4 className="font-medium mb-1">Arraste e solte os arquivos</h4>
                        <p className="text-muted-foreground text-sm mb-3">Ou clique para selecionar arquivos</p>
                        <Button size="sm">Selecionar Arquivos</Button>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Arquivos Recentes</h4>
                        <div className="text-sm bg-muted p-2 rounded-md flex justify-between items-center">
                          <span>Prova_Matematica_10Ano.pdf</span>
                          <Button variant="ghost" size="sm">Visualizar</Button>
                        </div>
                        <div className="text-sm bg-muted p-2 rounded-md flex justify-between items-center">
                          <span>Trabalho_Historia_Trimestral.docx</span>
                          <Button variant="ghost" size="sm">Visualizar</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Datas e Prazos Card */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Datas e Prazos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                          <Calendar className="h-8 w-8 text-red-500 bg-red-100 p-1.5 rounded-md" />
                          <div className="flex-1">
                            <h4 className="font-medium">Prova de Matemática - 10º Ano</h4>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Clock className="h-3 w-3" />
                              <span>Hoje, 14:30 - 16:00</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Editar</Button>
                        </div>
                        
                        <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                          <Calendar className="h-8 w-8 text-orange-500 bg-orange-100 p-1.5 rounded-md" />
                          <div className="flex-1">
                            <h4 className="font-medium">Entrega de Trabalho - Biologia</h4>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Clock className="h-3 w-3" />
                              <span>Amanhã, 23:59</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Editar</Button>
                        </div>
                        
                        <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                          <Calendar className="h-8 w-8 text-blue-500 bg-blue-100 p-1.5 rounded-md" />
                          <div className="flex-1">
                            <h4 className="font-medium">Prova Final - História</h4>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Clock className="h-3 w-3" />
                              <span>15/05/2025, 10:00 - 11:30</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Editar</Button>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">Ver Todos os Prazos</Button>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Cronograma de Avaliações</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Disciplina</TableHead>
                          <TableHead>Tipo</TableHead>
                          <TableHead>Data</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Matemática</TableCell>
                          <TableCell>Prova</TableCell>
                          <TableCell>07/05/2025</TableCell>
                          <TableCell>
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                              Pendente
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Detalhes</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Física</TableCell>
                          <TableCell>Trabalho</TableCell>
                          <TableCell>12/05/2025</TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              Em preparação
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Detalhes</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">História</TableCell>
                          <TableCell>Prova Final</TableCell>
                          <TableCell>15/05/2025</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Confirmada
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Detalhes</Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      Mostrando 3 de 12 avaliações
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
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notas & Boletins Tab */}
        <TabsContent value="notas">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Notas & Boletins</CardTitle>
                  <CardDescription>
                    Lançamento de notas e geração de boletins digitais
                  </CardDescription>
                </div>
                <div className="relative w-full md:w-64 lg:w-72">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Pesquisar alunos..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Lançamento de Notas Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Lançamento de Notas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label htmlFor="turma">Turma</Label>
                      <select id="turma" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Selecione uma turma</option>
                        <option value="10A">10º Ano - Turma A</option>
                        <option value="10B">10º Ano - Turma B</option>
                        <option value="11A">11º Ano - Turma A</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="disciplina">Disciplina</Label>
                      <select id="disciplina" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Selecione uma disciplina</option>
                        <option value="mat">Matemática</option>
                        <option value="port">Português</option>
                        <option value="bio">Biologia</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="periodo">Período</Label>
                      <select id="periodo" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Selecione um período</option>
                        <option value="1">1º Trimestre</option>
                        <option value="2">2º Trimestre</option>
                        <option value="3">3º Trimestre</option>
                      </select>
                    </div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome do Aluno</TableHead>
                        <TableHead>Prova 1</TableHead>
                        <TableHead>Trabalho</TableHead>
                        <TableHead>Prova 2</TableHead>
                        <TableHead>Média</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Ana Silva</TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="17" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="16" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="18" />
                        </TableCell>
                        <TableCell className="font-medium">17.0</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">João Santos</TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="14" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="15" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="13" />
                        </TableCell>
                        <TableCell className="font-medium">14.0</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Pedro Costa</TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="12" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="14" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="20" className="w-16" defaultValue="13" />
                        </TableCell>
                        <TableCell className="font-medium">13.0</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Salvar Notas</Button>
                  </div>
                </div>
                
                {/* Boletim Digital Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Boletim Digital</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="overflow-hidden">
                      <div className="h-2 bg-primary"></div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Gerar Boletins</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="turma-boletim">Turma</Label>
                          <select id="turma-boletim" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Selecione uma turma</option>
                            <option value="10A">10º Ano - Turma A</option>
                            <option value="10B">10º Ano - Turma B</option>
                            <option value="11A">11º Ano - Turma A</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="periodo-boletim">Período</Label>
                          <select id="periodo-boletim" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Selecione um período</option>
                            <option value="1">1º Trimestre</option>
                            <option value="2">2º Trimestre</option>
                            <option value="3">3º Trimestre</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="aluno-boletim">Aluno (opcional)</Label>
                          <select id="aluno-boletim" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Todos os alunos</option>
                            <option value="ana">Ana Silva</option>
                            <option value="joao">João Santos</option>
                            <option value="pedro">Pedro Costa</option>
                          </select>
                        </div>
                        <Button className="w-full">Gerar Boletins</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Boletins Recentes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <span>10º Ano - Turma A (1º Trimestre)</span>
                            </div>
                            <Button size="sm" variant="ghost">Download</Button>
                          </div>
                          <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <span>10º Ano - Turma B (1º Trimestre)</span>
                            </div>
                            <Button size="sm" variant="ghost">Download</Button>
                          </div>
                          <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <span>11º Ano - Turma A (1º Trimestre)</span>
                            </div>
                            <Button size="sm" variant="ghost">Download</Button>
                          </div>
                          <div className="flex justify-center mt-2">
                            <Button variant="link">Ver todos os boletins</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Revisões & Recursos Tab */}
        <TabsContent value="revisoes">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Revisões & Recursos</CardTitle>
                  <CardDescription>
                    Gerencie pedidos de revisão e pareceres
                  </CardDescription>
                </div>
                <div className="relative w-full md:w-64 lg:w-72">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Pesquisar pedidos..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pedidos de Revisão */}
              <div>
                <h3 className="text-lg font-medium mb-4">Pedidos de Revisão</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Aluno</TableHead>
                      <TableHead>Disciplina</TableHead>
                      <TableHead>Avaliação</TableHead>
                      <TableHead>Data do Pedido</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Ana Silva</TableCell>
                      <TableCell>Matemática</TableCell>
                      <TableCell>Prova Final (1º Trim.)</TableCell>
                      <TableCell>03/05/2025</TableCell>
                      <TableCell>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          Em análise
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Ver detalhes</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">João Santos</TableCell>
                      <TableCell>Física</TableCell>
                      <TableCell>Trabalho em Grupo</TableCell>
                      <TableCell>01/05/2025</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Aprovado
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Ver detalhes</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Carlos Pereira</TableCell>
                      <TableCell>História</TableCell>
                      <TableCell>Prova Parcial</TableCell>
                      <TableCell>30/04/2025</TableCell>
                      <TableCell>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Recusado
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Ver detalhes</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Mostrando 3 de 8 pedidos
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm">
                      Próximo
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Pareceres */}
              <div>
                <h3 className="text-lg font-medium mb-4">Pareceres</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Emitir Parecer</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="pedido">Pedido de Revisão</Label>
                        <select id="pedido" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">Selecione um pedido</option>
                          <option value="ana">Ana Silva - Matemática</option>
                          <option value="joao">João Santos - Física</option>
                          <option value="carlos">Carlos Pereira - História</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="justificativa">Justificativa</Label>
                        <textarea 
                          id="justificativa" 
                          className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Escreva a justificativa para o parecer..."
                        ></textarea>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="decisao">Decisão</Label>
                        <select id="decisao" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">Selecione uma decisão</option>
                          <option value="aprovar">Aprovar - Alterar nota</option>
                          <option value="recusar">Recusar - Manter nota</option>
                          <option value="parcial">Aprovação parcial</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nova-nota">Nova nota (se aplicável)</Label>
                        <Input id="nova-nota" type="number" min="0" max="20" className="w-full" />
                      </div>
                      <Button className="w-full">Emitir Parecer</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Estatísticas de Revisão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-muted/50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-primary">8</p>
                            <p className="text-sm text-muted-foreground">Total de Pedidos</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-600">3</p>
                            <p className="text-sm text-muted-foreground">Aprovados</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-red-600">2</p>
                            <p className="text-sm text-muted-foreground">Recusados</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Distribuição por disciplina</h4>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Matemática</span>
                                <span>50%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: "50%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Física</span>
                                <span>25%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>História</span>
                                <span>25%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full">Ver Relatório Completo</Button>
                      </div>
                    </CardContent>
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

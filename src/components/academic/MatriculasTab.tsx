
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Search, Plus, Download, Filter, ArrowRight } from "lucide-react";

export default function MatriculasTab() {
  const [activeSubTab, setActiveSubTab] = useState("pre-inscricao");
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" /> 
            Matrículas
          </h2>
          <p className="text-muted-foreground">
            Gerencie todo o processo de matrícula dos alunos
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" /> Filtrar
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" /> Exportar
          </Button>
          <Button size="sm" className="flex items-center gap-1">
            <Plus className="h-4 w-4" /> Nova Matrícula
          </Button>
        </div>
      </div>
      
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="pre-inscricao">Pré-inscrição</TabsTrigger>
          <TabsTrigger value="matricula-definitiva">Matrícula Definitiva</TabsTrigger>
          <TabsTrigger value="transferencias">Transferências</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pre-inscricao">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Lista de Pré-inscrições</CardTitle>
                  <CardDescription>
                    Gerencie as pré-inscrições pendentes e aprovadas
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Aluno</TableHead>
                    <TableHead>Data de Inscrição</TableHead>
                    <TableHead>Curso/Ano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Ana Silva</TableCell>
                    <TableCell>12/05/2025</TableCell>
                    <TableCell>9º Ano</TableCell>
                    <TableCell>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Pendente
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">João Santos</TableCell>
                    <TableCell>10/05/2025</TableCell>
                    <TableCell>12º Ano</TableCell>
                    <TableCell>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Aprovado
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Carlos Ferreira</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell>10º Ano</TableCell>
                    <TableCell>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Rejeitado
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando 3 de 24 registros
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
        
        <TabsContent value="matricula-definitiva">
          <Card>
            <CardHeader>
              <CardTitle>Matrículas Definitivas</CardTitle>
              <CardDescription>
                Gerencie as matrículas definitivas dos alunos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                <FileText className="mx-auto h-12 w-12 mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-2">Gerencie matrículas definitivas</h3>
                <p className="max-w-md mx-auto mb-4">
                  Aqui você pode converter pré-inscrições em matrículas definitivas e gerenciar documentos necessários.
                </p>
                <Button>Iniciar nova matrícula</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="transferencias">
          <Card>
            <CardHeader>
              <CardTitle>Transferências</CardTitle>
              <CardDescription>
                Gerencie as transferências de alunos entre escolas ou turmas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                <FileText className="mx-auto h-12 w-12 mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-2">Gestão de transferências</h3>
                <p className="max-w-md mx-auto mb-4">
                  Aqui você pode gerenciar transferências internas entre turmas ou transferências externas entre escolas.
                </p>
                <Button>Iniciar nova transferência</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

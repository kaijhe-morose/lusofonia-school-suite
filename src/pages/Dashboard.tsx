
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Calendar, Database, FileText, LayoutDashboard, Settings } from "lucide-react";
import ModuleGrid from "@/components/ModuleGrid";
import { allModules, moduleGroups } from "@/data/modules";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredModules = searchTerm
    ? allModules.filter(module => 
        module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.modules.some(m => m.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        module.modules.some(m => 
          m.submods && m.submods.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard ERP Escolar</h1>
              <p className="text-gray-600">Gerencie todos os módulos do seu sistema em um só lugar</p>
            </div>
            <div className="w-full md:w-64 mt-4 md:mt-0">
              <Input
                type="search"
                placeholder="Pesquisar módulos..."
                className="w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {searchTerm ? (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Resultados da pesquisa: {filteredModules.length}</h2>
              {filteredModules.length > 0 ? (
                <ModuleGrid modules={filteredModules} searchTerm={searchTerm} />
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-600">Nenhum módulo encontrado para "{searchTerm}"</p>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <Tabs defaultValue="todos" className="w-full">
              <TabsList className="mb-6 flex flex-wrap bg-transparent gap-2">
                <TabsTrigger value="todos" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Todos os Módulos
                </TabsTrigger>
                <TabsTrigger value="academico" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  Académico
                </TabsTrigger>
                <TabsTrigger value="administrativo" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Settings className="h-4 w-4 mr-2" />
                  Administrativo
                </TabsTrigger>
                <TabsTrigger value="financeiro" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <BarChart className="h-4 w-4 mr-2" />
                  Financeiro
                </TabsTrigger>
                <TabsTrigger value="recursos" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Database className="h-4 w-4 mr-2" />
                  Recursos
                </TabsTrigger>
                <TabsTrigger value="agenda" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agenda e Eventos
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="todos" className="mt-0">
                <ModuleGrid modules={allModules} />
              </TabsContent>
              
              {moduleGroups.map((group) => (
                <TabsContent key={group.id} value={group.id} className="mt-0">
                  <ModuleGrid modules={group.modules} />
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

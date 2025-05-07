
import { useParams, Navigate, Link } from "react-router-dom";
import { DashboardLayout, UserRole } from "@/components/DashboardLayout";
import { allModules } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

export default function ModuleDetailPage() {
  const { role, moduleId } = useParams<{ role: string; moduleId: string }>();
  
  // Validate if the role is a valid UserRole
  const validRoles: UserRole[] = ["super", "professor", "aluno", "encarregado", "staff", "admin"];
  const userRole = role as UserRole;
  
  if (!validRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // Find the module by moduleId
  const module = allModules.find(mod => mod.id === moduleId);
  
  if (!module) {
    return <Navigate to={`/dashboard/${role}`} replace />;
  }
  
  // Find the category of the module
  const categoryId = module.category;
  
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/dashboard/${role}/category/${categoryId}`}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar para {module.category}
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{module.icon}</span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{module.name}</h1>
              <p className="text-muted-foreground mt-1">{module.description}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {module.modules.map((subModule, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-2 bg-gradient-to-r from-primary to-purple-400"></div>
              <CardHeader>
                <CardTitle>{subModule.name}</CardTitle>
                <CardDescription>
                  {subModule.submods && subModule.submods.length > 0 ? 
                    `${subModule.submods.length} funcionalidades` : 
                    "Funcionalidade básica"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {subModule.submods && subModule.submods.length > 0 ? (
                  <ul className="space-y-1">
                    {subModule.submods.map((submod, subIndex) => (
                      <li key={subIndex} className="flex items-start text-sm">
                        <span className="text-primary inline-block mr-2">•</span>
                        <span>{submod}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Esta funcionalidade está disponível para uso imediato.
                  </p>
                )}
                
                <div className="mt-4">
                  <Button 
                    asChild 
                    className="w-full"
                    onClick={() => {
                      // In a real implementation, this would open the submodule
                    }}
                  >
                    <Link to={`/dashboard/${role}/module/${module.id}/submodule/${index}`}>
                      Acessar
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

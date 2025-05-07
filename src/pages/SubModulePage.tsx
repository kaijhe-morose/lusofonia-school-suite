
import { useParams, Navigate, Link } from "react-router-dom";
import { DashboardLayout, UserRole } from "@/components/DashboardLayout";
import { allModules } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

export default function SubModulePage() {
  const { role, moduleId, submoduleIndex } = useParams<{ 
    role: string; 
    moduleId: string;
    submoduleIndex: string;
  }>();
  
  // Validate if the role is a valid UserRole
  const validRoles: UserRole[] = ["super", "professor", "aluno", "encarregado", "staff", "admin"];
  const userRole = role as UserRole;
  
  if (!validRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // Find the module by moduleId
  const module = allModules.find(mod => mod.id === moduleId);
  
  if (!module || !submoduleIndex) {
    return <Navigate to={`/dashboard/${role}`} replace />;
  }
  
  const subModuleIdx = parseInt(submoduleIndex, 10);
  
  if (isNaN(subModuleIdx) || subModuleIdx < 0 || subModuleIdx >= module.modules.length) {
    return <Navigate to={`/dashboard/${role}/module/${moduleId}`} replace />;
  }
  
  const subModule = module.modules[subModuleIdx];
  
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/dashboard/${role}/module/${moduleId}`}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar para {module.name}
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{subModule.name}</h1>
            <p className="text-muted-foreground mt-1">
              {module.name} / {subModule.name}
            </p>
          </div>
        </div>
        
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="p-6 bg-muted/40 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-2">Funcionalidade em Desenvolvimento</h3>
              <p className="text-muted-foreground">
                Esta funcionalidade está atualmente em desenvolvimento e estará disponível em breve.
              </p>
            </div>
            
            {subModule.submods && subModule.submods.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Recursos Incluídos</h3>
                <ul className="space-y-2">
                  {subModule.submods.map((submod, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold inline-block mr-2">•</span>
                      <span>{submod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

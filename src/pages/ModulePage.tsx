
import { useParams, Navigate } from "react-router-dom";
import { DashboardLayout, UserRole } from "@/components/DashboardLayout";
import ModuleGrid from "@/components/ModuleGrid";
import { moduleGroups } from "@/data/modules";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ModulePage() {
  const { role, categoryId } = useParams<{ role: string; categoryId: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Validate if the role is a valid UserRole
  const validRoles: UserRole[] = ["super", "professor", "aluno", "encarregado", "staff", "admin"];
  const userRole = role as UserRole;
  
  if (!validRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // Find the module group by categoryId
  const moduleGroup = moduleGroups.find(group => group.id === categoryId);
  
  if (!moduleGroup) {
    return <Navigate to={`/dashboard/${role}`} replace />;
  }
  
  // Filter modules based on search term
  const filteredModules = searchTerm 
    ? moduleGroup.modules.filter(module => 
        module.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.modules.some(subModule => 
          subModule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (subModule.submods && subModule.submods.some(submod => 
            submod.toLowerCase().includes(searchTerm.toLowerCase())
          ))
        )
      )
    : moduleGroup.modules;
  
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{moduleGroup.name}</h1>
            <p className="text-muted-foreground mt-1">
              Explore todos os módulos da categoria {moduleGroup.name}
            </p>
          </div>
          
          <div className="relative w-full md:w-64 lg:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar módulos..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <ModuleGrid 
          modules={filteredModules} 
          searchTerm={searchTerm}
          onClearSearch={() => setSearchTerm("")}
        />
      </div>
    </DashboardLayout>
  );
}

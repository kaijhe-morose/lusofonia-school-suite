
import { useParams, Navigate, Link } from "react-router-dom";
import { DashboardLayout, UserRole } from "@/components/DashboardLayout";
import { moduleGroups } from "@/data/modules";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MenuModulesPage() {
  const { role } = useParams<{ role: string }>();
  
  // Validate if the role is a valid UserRole
  const validRoles: UserRole[] = ["super", "professor", "aluno", "encarregado", "staff", "admin"];
  const userRole = role as UserRole;
  
  if (!validRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Megamódulos</h1>
          <p className="text-muted-foreground mt-1">
            Explore todas as categorias de módulos disponíveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleGroups.map((group) => (
            <Link 
              to={`/dashboard/${role}/category/${group.id}`} 
              key={group.id}
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-400"></div>
                <CardHeader>
                  <CardTitle>{group.name}</CardTitle>
                  <CardDescription>
                    {group.modules.length} módulos disponíveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {group.modules.slice(0, 3).map((module) => (
                      <li key={module.id} className="flex items-start text-sm">
                        <span className="text-primary inline-block mr-2">{module.icon}</span>
                        <span>{module.name}</span>
                      </li>
                    ))}
                    {group.modules.length > 3 && (
                      <li className="text-sm text-muted-foreground mt-1">
                        + {group.modules.length - 3} outros módulos
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

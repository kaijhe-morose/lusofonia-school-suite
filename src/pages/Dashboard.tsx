
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UserRole } from "@/components/DashboardLayout";
import { 
  LayoutDashboard, 
  User, 
  Users, 
  School,
  GraduationCap,
  FileText,
  BarChart
} from "lucide-react";
import "../styles/dashboard.css";

interface RoleCardProps {
  role: UserRole;
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const RoleCard = ({ role, title, description, icon, onClick }: RoleCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="h-2 bg-gradient-to-r from-primary to-purple-400"></div>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button onClick={onClick} className="w-full">
        Acessar Dashboard
      </Button>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const navigate = useNavigate();
  
  const roleData: Array<{
    role: UserRole;
    title: string;
    description: string;
    icon: React.ReactNode;
  }> = [
    {
      role: "super",
      title: "Super Utilizador",
      description: "Acesso total ao sistema e configurações avançadas",
      icon: <LayoutDashboard className="h-5 w-5 text-primary" />
    },
    {
      role: "admin",
      title: "Administrador",
      description: "Gerenciamento da instituição e recursos",
      icon: <School className="h-5 w-5 text-primary" />
    },
    {
      role: "professor",
      title: "Professor",
      description: "Gestão de turmas, notas e material didático",
      icon: <GraduationCap className="h-5 w-5 text-primary" />
    },
    {
      role: "aluno",
      title: "Aluno",
      description: "Acesso a aulas, notas e tarefas",
      icon: <User className="h-5 w-5 text-primary" />
    },
    {
      role: "encarregado",
      title: "Encarregado de Educação",
      description: "Acompanhamento dos educandos",
      icon: <Users className="h-5 w-5 text-primary" />
    },
    {
      role: "staff",
      title: "Staff",
      description: "Operações administrativas e suporte",
      icon: <FileText className="h-5 w-5 text-primary" />
    }
  ];

  const navigateToRoleDashboard = (role: UserRole) => {
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Selecione o Tipo de Utilizador</h1>
            <p className="text-gray-600">Aceda à área correspondente ao seu perfil no ERP Escolar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {roleData.map((data) => (
              <RoleCard
                key={data.role}
                role={data.role}
                title={data.title}
                description={data.description}
                icon={data.icon}
                onClick={() => navigateToRoleDashboard(data.role)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

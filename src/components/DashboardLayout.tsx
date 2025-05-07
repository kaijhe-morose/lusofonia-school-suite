
import { useState, ReactNode } from "react";
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Bell, 
  BookOpen, 
  Calendar, 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  MessageSquare,
  Search, 
  Settings,
  User,
  Users,
  School,
  GraduationCap,
  FileText,
  BarChart
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: UserRole;
}

export type UserRole = "super" | "professor" | "aluno" | "encarregado" | "staff" | "admin";

export function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: "Pesquisa iniciada",
        description: `A procurar por "${searchTerm}"`,
      });
    }
  };

  const handleLogout = () => {
    toast({
      title: "Sessão terminada",
      description: "Você foi desconectado com sucesso.",
    });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Desktop Sidebar */}
        <DashboardSidebar userRole={userRole} />
        
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="border-b bg-background">
            <div className="flex h-16 items-center px-4 gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <MobileSidebar userRole={userRole} />
                </SheetContent>
              </Sheet>
              
              <h1 className="text-lg font-semibold hidden sm:inline-block">
                {getRoleDashboardTitle(userRole)}
              </h1>
              
              <form onSubmit={handleSearch} className="ml-auto flex-1 md:flex-none md:w-64 lg:w-80">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Pesquisar..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </form>
              
              <div className="flex items-center gap-4 ml-auto">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
                
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>{getUserInitials(userRole)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function DashboardSidebar({ userRole }: { userRole: UserRole }) {
  const menuConfig = getMenuConfigForRole(userRole);
  
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-4 py-2">
          <School className="h-6 w-6 text-primary" />
          <h2 className="font-semibold text-lg">ERP Escolar</h2>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuConfig.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {menuConfig.secondary && menuConfig.secondary.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>{getRoleSpecificGroupLabel(userRole)}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuConfig.secondary.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-4 py-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center gap-2"
            onClick={() => {
              // Logout logic would go here
              window.location.href = "/";
            }}
          >
            <LogOut className="h-4 w-4" />
            <span>Terminar Sessão</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function MobileSidebar({ userRole }: { userRole: UserRole }) {
  const menuConfig = getMenuConfigForRole(userRole);
  
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center space-x-2 p-4 border-b">
        <School className="h-6 w-6 text-primary" />
        <h2 className="font-semibold text-lg">ERP Escolar</h2>
      </div>
      
      <div className="flex-1 overflow-auto p-3">
        <div className="space-y-6">
          <div>
            <h3 className="px-2 text-sm font-medium text-muted-foreground">Navegação</h3>
            <div className="mt-2 space-y-1">
              {menuConfig.main.map((item) => (
                <Button 
                  key={item.title} 
                  variant="ghost" 
                  size="sm"
                  className="w-full justify-start text-left"
                  asChild
                >
                  <a href={item.url} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {menuConfig.secondary && menuConfig.secondary.length > 0 && (
            <div>
              <h3 className="px-2 text-sm font-medium text-muted-foreground">
                {getRoleSpecificGroupLabel(userRole)}
              </h3>
              <div className="mt-2 space-y-1">
                {menuConfig.secondary.map((item) => (
                  <Button 
                    key={item.title} 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-start text-left"
                    asChild
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 border-t">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center gap-2"
          onClick={() => {
            // Logout logic would go here
            window.location.href = "/";
          }}
        >
          <LogOut className="h-4 w-4" />
          <span>Terminar Sessão</span>
        </Button>
      </div>
    </div>
  );
}

// Helper functions
function getUserInitials(role: UserRole): string {
  switch (role) {
    case "super": return "SU";
    case "professor": return "PF";
    case "aluno": return "AL";
    case "encarregado": return "EE";
    case "staff": return "ST";
    case "admin": return "AD";
    default: return "US";
  }
}

function getRoleDashboardTitle(role: UserRole): string {
  switch (role) {
    case "super": return "Administração Geral";
    case "professor": return "Área do Professor";
    case "aluno": return "Portal do Aluno";
    case "encarregado": return "Área do Encarregado";
    case "staff": return "Portal Administrativo";
    case "admin": return "Gestão Escolar";
    default: return "Dashboard";
  }
}

function getRoleSpecificGroupLabel(role: UserRole): string {
  switch (role) {
    case "super": return "Administração";
    case "professor": return "Docência";
    case "aluno": return "Académico";
    case "encarregado": return "Acompanhamento";
    case "staff": return "Operações";
    case "admin": return "Gestão";
    default: return "Recursos";
  }
}

interface MenuItem {
  title: string;
  url: string;
  icon: any;
}

interface MenuConfig {
  main: MenuItem[];
  secondary?: MenuItem[];
}

function getMenuConfigForRole(role: UserRole): MenuConfig {
  const baseMenu = [
    {
      title: "Dashboard",
      url: `/dashboard/${role}`,
      icon: LayoutDashboard,
    },
    {
      title: "Perfil",
      url: `/dashboard/${role}/perfil`,
      icon: User,
    },
    {
      title: "Calendário",
      url: `/dashboard/${role}/calendario`,
      icon: Calendar,
    },
    {
      title: "Mensagens",
      url: `/dashboard/${role}/mensagens`,
      icon: MessageSquare,
    },
  ];

  switch (role) {
    case "super":
      return {
        main: baseMenu,
        secondary: [
          {
            title: "Configurações",
            url: `/dashboard/${role}/configuracoes`,
            icon: Settings,
          },
          {
            title: "Utilizadores",
            url: `/dashboard/${role}/utilizadores`,
            icon: Users,
          },
          {
            title: "Relatórios",
            url: `/dashboard/${role}/relatorios`,
            icon: FileText,
          },
        ],
      };
      
    case "professor":
      return {
        main: baseMenu,
        secondary: [
          {
            title: "Turmas",
            url: `/dashboard/${role}/turmas`,
            icon: Users,
          },
          {
            title: "Material Didático",
            url: `/dashboard/${role}/material`,
            icon: BookOpen,
          },
          {
            title: "Avaliações",
            url: `/dashboard/${role}/avaliacoes`,
            icon: FileText,
          },
        ],
      };
      
    case "aluno":
      return {
        main: baseMenu,
        secondary: [
          {
            title: "Disciplinas",
            url: `/dashboard/${role}/disciplinas`,
            icon: BookOpen,
          },
          {
            title: "Notas",
            url: `/dashboard/${role}/notas`,
            icon: GraduationCap,
          },
          {
            title: "Tarefas",
            url: `/dashboard/${role}/tarefas`,
            icon: FileText,
          },
        ],
      };
      
    case "encarregado":
      return {
        main: baseMenu,
        secondary: [
          {
            title: "Educandos",
            url: `/dashboard/${role}/educandos`,
            icon: Users,
          },
          {
            title: "Propinas",
            url: `/dashboard/${role}/propinas`,
            icon: BarChart,
          },
          {
            title: "Relatórios",
            url: `/dashboard/${role}/relatorios`,
            icon: FileText,
          },
        ],
      };
      
    case "staff":
      return {
        main: baseMenu,
        secondary: [
          {
            title: "Matrículas",
            url: `/dashboard/${role}/matriculas`,
            icon: FileText,
          },
          {
            title: "Pagamentos",
            url: `/dashboard/${role}/pagamentos`,
            icon: BarChart,
          },
          {
            title: "Recursos",
            url: `/dashboard/${role}/recursos`,
            icon: BookOpen,
          },
        ],
      };
      
    case "admin":
      return {
        main: baseMenu,
        secondary: [
          {
            title: "Gestão Escolar",
            url: `/dashboard/${role}/gestao`,
            icon: School,
          },
          {
            title: "Funcionários",
            url: `/dashboard/${role}/funcionarios`,
            icon: Users,
          },
          {
            title: "Financeiro",
            url: `/dashboard/${role}/financeiro`,
            icon: BarChart,
          },
        ],
      };
      
    default:
      return { main: baseMenu };
  }
}

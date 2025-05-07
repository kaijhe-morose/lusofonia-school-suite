
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, FileText, Grid3x3, School, UserRound, Users } from "lucide-react";
import { UserRole } from "./DashboardLayout";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { moduleGroups } from "@/data/modules";

interface RoleDashboardProps {
  role: UserRole;
}

export function RoleDashboard({ role }: RoleDashboardProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">{getDashboardTitle(role)}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {getDashboardStats(role).map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {getDashboardCards(role).map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Megamódulos</h2>
            <p className="text-muted-foreground">Acesse todos os módulos do sistema</p>
          </div>
          
          <Button asChild>
            <Link to={`/dashboard/${role}/modules`}>
              <Grid3x3 className="mr-2 h-4 w-4" />
              Ver todos os módulos
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleGroups.slice(0, 3).map((group) => (
            <Link 
              to={`/dashboard/${role}/category/${group.id}`} 
              key={group.id}
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-400"></div>
                <CardHeader>
                  <CardTitle>{group.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {group.modules.length} módulos disponíveis
                  </p>
                  <Button variant="outline" className="w-full">Explorar</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function getDashboardTitle(role: UserRole): string {
  switch (role) {
    case "super":
      return "Painel de Administração Geral";
    case "professor":
      return "Área do Professor";
    case "aluno":
      return "Portal do Aluno";
    case "encarregado":
      return "Área do Encarregado de Educação";
    case "staff":
      return "Portal Administrativo";
    case "admin":
      return "Gestão Escolar";
    default:
      return "Dashboard";
  }
}

function getDashboardStats(role: UserRole) {
  switch (role) {
    case "super":
      return [
        {
          title: "Escolas",
          value: "12",
          icon: School,
          subtitle: "Gerenciadas no sistema"
        },
        {
          title: "Utilizadores",
          value: "8,432",
          icon: UserRound,
          subtitle: "Total registado"
        },
        {
          title: "Módulos Ativos",
          value: "28",
          icon: FileText,
          subtitle: "De 30 disponíveis"
        },
        {
          title: "Servidores",
          value: "4/4",
          icon: BarChart,
          subtitle: "Operacionais"
        }
      ];
      
    case "professor":
      return [
        {
          title: "Turmas",
          value: "6",
          icon: Users,
          subtitle: "Atribuídas"
        },
        {
          title: "Alunos",
          value: "154",
          icon: UserRound,
          subtitle: "Total"
        },
        {
          title: "Avaliações",
          value: "23",
          icon: FileText,
          subtitle: "Programadas"
        },
        {
          title: "Aulas",
          value: "18",
          icon: Calendar,
          subtitle: "Esta semana"
        }
      ];
      
    case "aluno":
      return [
        {
          title: "Disciplinas",
          value: "8",
          icon: School,
          subtitle: "Este semestre"
        },
        {
          title: "Tarefas",
          value: "12",
          icon: FileText,
          subtitle: "Pendentes"
        },
        {
          title: "Média",
          value: "16,5",
          icon: BarChart,
          subtitle: "Notas globais"
        },
        {
          title: "Eventos",
          value: "3",
          icon: Calendar,
          subtitle: "Próximos dias"
        }
      ];
      
    case "encarregado":
      return [
        {
          title: "Educandos",
          value: "2",
          icon: UserRound,
          subtitle: "Matriculados"
        },
        {
          title: "Mensagens",
          value: "5",
          icon: FileText,
          subtitle: "Não lidas"
        },
        {
          title: "Próximo Pagamento",
          value: "€350",
          icon: BarChart,
          subtitle: "12 de Junho"
        },
        {
          title: "Reuniões",
          value: "1",
          icon: Calendar,
          subtitle: "Agendada"
        }
      ];
      
    case "staff":
      return [
        {
          title: "Matrículas",
          value: "32",
          icon: FileText,
          subtitle: "Em processamento"
        },
        {
          title: "Pagamentos",
          value: "€12.450",
          icon: BarChart,
          subtitle: "Este mês"
        },
        {
          title: "Requisições",
          value: "8",
          icon: FileText,
          subtitle: "Pendentes"
        },
        {
          title: "Eventos",
          value: "2",
          icon: Calendar,
          subtitle: "Esta semana"
        }
      ];
      
    case "admin":
      return [
        {
          title: "Professores",
          value: "42",
          icon: UserRound,
          subtitle: "Ativos"
        },
        {
          title: "Alunos",
          value: "568",
          icon: Users,
          subtitle: "Matriculados"
        },
        {
          title: "Funcionários",
          value: "23",
          icon: UserRound,
          subtitle: "Staff administrativo"
        },
        {
          title: "Orçamento",
          value: "€45.320",
          icon: BarChart,
          subtitle: "Disponível"
        }
      ];
      
    default:
      return [
        {
          title: "Atividades",
          value: "12",
          icon: FileText,
          subtitle: "Pendentes"
        },
        {
          title: "Utilizadores",
          value: "8",
          icon: UserRound,
          subtitle: "Online"
        },
        {
          title: "Recursos",
          value: "64%",
          icon: BarChart,
          subtitle: "Utilização"
        },
        {
          title: "Eventos",
          value: "3",
          icon: Calendar,
          subtitle: "Hoje"
        }
      ];
  }
}

function getDashboardCards(role: UserRole) {
  switch (role) {
    case "super":
      return [
        {
          title: "Visão Geral do Sistema",
          content: "Todos os serviços funcionando normalmente. Última verificação em 15/05/2025 às 09:45."
        },
        {
          title: "Registros de Auditoria",
          content: "42 novos registros de auditoria nas últimas 24 horas. Nenhuma ação crítica detectada."
        },
        {
          title: "Atualizações Disponíveis",
          content: "Nova versão 2.5.3 disponível com melhorias de segurança e correção de bugs."
        }
      ];
      
    case "professor":
      return [
        {
          title: "Próximas Aulas",
          content: "Matemática - 10A (Sala 15) - 10:30\nFísica - 11C (Lab 3) - 13:45\nMatemática - 12B (Sala 22) - 15:30"
        },
        {
          title: "Avaliações Pendentes",
          content: "12 testes para corrigir do 10A\n8 trabalhos para avaliar do 11C\n15 apresentações para analisar do 12B"
        },
        {
          title: "Mensagens Recentes",
          content: "Diretora: Reunião de departamento amanhã às 16h\nEnc. Educação (João Silva): Pedido de reunião\nSecretaria: Entrega de notas até dia 15/06"
        }
      ];
      
    case "aluno":
      return [
        {
          title: "Horário de Hoje",
          content: "Matemática - Sala 15 - 10:30\nAlmoço - 12:30\nFísica - Lab 3 - 13:45\nEducação Física - Pavilhão - 15:30"
        },
        {
          title: "Próximas Avaliações",
          content: "Teste de Matemática - 18/05\nTrabalho de Grupo História - 20/05\nApresentação de Português - 22/05"
        },
        {
          title: "Tarefas Pendentes",
          content: "Exercícios de Matemática - até 17/05\nLeitura capítulos 5-7 - até 19/05\nRelatório de laboratório - até 21/05"
        }
      ];
      
    case "encarregado":
      return [
        {
          title: "Desempenho de Maria Silva",
          content: "Média atual: 16,3 (subiu 0,5 desde a última avaliação)\nMelhor disciplina: Matemática (18,5)\nOportunidade de melhoria: Inglês (14,2)"
        },
        {
          title: "Desempenho de João Silva",
          content: "Média atual: 15,1 (desceu 0,2 desde a última avaliação)\nMelhor disciplina: Educação Física (19,0)\nOportunidade de melhoria: Física (13,5)"
        },
        {
          title: "Pagamentos",
          content: "Próximo pagamento: €350 (12/06/2025)\nHistórico: Todos os pagamentos em dia"
        }
      ];
      
    case "staff":
      return [
        {
          title: "Matrículas Recentes",
          content: "32 novas matrículas nos últimos 7 dias\n15 pendentes de validação de documentos\n5 aguardando pagamento"
        },
        {
          title: "Requisições",
          content: "8 novas requisições de material\n3 pedidos de manutenção\n2 solicitações de salas para eventos"
        },
        {
          title: "Tarefas Administrativas",
          content: "Emissão de certificados para 12ºB\nPreparação de documentação para auditoria\nAtualização de registros de alunos"
        }
      ];
      
    case "admin":
      return [
        {
          title: "Gestão de Recursos",
          content: "Ocupação de salas: 84%\nDispositivos disponíveis: 24\nProfessores substitutos: 3 disponíveis"
        },
        {
          title: "Gestão Financeira",
          content: "Orçamento disponível: €45.320\nPagamentos pendentes: €12.450\nPrevisão de despesas próximo mês: €28.500"
        },
        {
          title: "Relatórios Académicos",
          content: "Média global da escola: 15,8\nTaxa de aprovação: 94,5%\nTurma com melhor desempenho: 10A (média 17,2)"
        }
      ];
      
    default:
      return [
        {
          title: "Avisos",
          content: "Sem avisos importantes neste momento"
        },
        {
          title: "Atividades Recentes",
          content: "Sem atividades registradas"
        },
        {
          title: "Próximos Eventos",
          content: "Sem eventos agendados"
        }
      ];
  }
}

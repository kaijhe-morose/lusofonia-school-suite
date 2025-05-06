
export interface SubModule {
  name: string;
  submods?: string[];
}

export interface Module {
  id: string;
  icon: string;
  name: string;
  description: string;
  category: string;
  modules: SubModule[];
}

export interface ModuleGroup {
  id: string;
  name: string;
  modules: Module[];
}

// Array com todos os módulos
export const allModules: Module[] = [
  {
    id: "administracao",
    icon: "⚙️",
    name: "Administração Escolar",
    description: "Configure os parâmetros gerais do sistema e gerencie permissões",
    category: "administrativo",
    modules: [
      {
        name: "Configurações Gerais",
        submods: ["Parâmetros do Sistema", "Temas e Branding", "Localizações (países, línguas, fusos)"]
      },
      {
        name: "Gestão de Escolas/Filiais",
        submods: ["Cadastro de Unidades", "Horários de Funcionamento", "Estrutura Organizacional"]
      },
      {
        name: "Perfis e Permissões",
        submods: ["Papéis (Admin, Diretor, Secretário…)", "Controle de Acesso (RBAC)", "Logs de Auditoria"]
      }
    ]
  },
  {
    id: "academico",
    icon: "📚",
    name: "Académico",
    description: "Gerencie matrículas, turmas, disciplinas e horários",
    category: "academico",
    modules: [
      {
        name: "Matrículas",
        submods: ["Pré–inscrição", "Matrícula Definitiva", "Transferências"]
      },
      {
        name: "Turmas e Disciplinas",
        submods: ["Criação de Turmas", "Alocação de Professores", "Grade de Disciplinas"]
      },
      {
        name: "Horários",
        submods: ["Calendário Escolar", "Geração Automática", "Troca de Sala"]
      }
    ]
  },
  {
    id: "financeiro",
    icon: "💰",
    name: "Gestão Financeira",
    description: "Controle de propinas, faturação e despesas",
    category: "financeiro",
    modules: [
      {
        name: "Propinas & Taxas",
        submods: ["Lançamento de Propinas", "Planos de Pagamento", "Descontos e Bolsas"]
      },
      {
        name: "Faturação",
        submods: ["Emissão de Faturas", "Cobranças Automáticas", "Notificações de Atraso"]
      },
      {
        name: "Despesas & Salários",
        submods: ["Cadastro de Despesas", "Folha de Pagamento", "Contas a Pagar/Receber"]
      }
    ]
  },
  {
    id: "recursoshumanos",
    icon: "👥",
    name: "Recursos Humanos",
    description: "Gestão de funcionários, recrutamento e treinamento",
    category: "recursos",
    modules: [
      {
        name: "Recrutamento",
        submods: ["Vagas Abertas", "Processos Seletivos", "Entrevistas"]
      },
      {
        name: "Gestão de Funcionários",
        submods: ["Ficha Funcional", "Férias e Faltas", "Avaliação de Desempenho"]
      },
      {
        name: "Treinamento",
        submods: ["Planeamento de Cursos Internos", "Certificados", "Histórico de Capacitações"]
      }
    ]
  },
  {
    id: "biblioteca",
    icon: "📖",
    name: "Biblioteca",
    description: "Gestão do acervo, empréstimos e aquisições",
    category: "recursos",
    modules: [
      {
        name: "Catálogo de Itens",
        submods: ["Livros, E-books, Periódicos", "Classificação (CDD, BIC…)"]
      },
      {
        name: "Empréstimos & Devoluções",
        submods: ["Reservas Online", "Multas por Atraso"]
      },
      {
        name: "Aquisições",
        submods: ["Propostas de Compra", "Ordens de Serviço"]
      }
    ]
  },
  {
    id: "laboratorios",
    icon: "🧪",
    name: "Laboratórios",
    description: "Gestão de equipamentos, reservas e inventário",
    category: "recursos",
    modules: [
      {
        name: "Agendamento de Equipamentos",
        submods: ["Horários de Uso", "Reserva de Material"]
      },
      {
        name: "Inventário",
        submods: ["Itens de Laboratório", "Manutenção Preventiva"]
      },
      {
        name: "Relatórios de Uso",
        submods: ["Logs de Acesso", "Relatórios de Consumo"]
      }
    ]
  },
  {
    id: "transporteescolar",
    icon: "🚍",
    name: "Transporte Escolar",
    description: "Gestão de rotas, veículos e manutenção",
    category: "administrativo",
    modules: [
      {
        name: "Rotas & Veículos",
        submods: ["Cadastro de Ônibus", "Mapa de Rotas", "Alocação de Alunos"]
      },
      {
        name: "Paradas e Horários",
        submods: ["Controle de Presença"]
      },
      {
        name: "Manutenção de Frotas",
        submods: ["Histórico de Revisões", "Alertas de Vencimento"]
      }
    ]
  },
  {
    id: "alimentacao",
    icon: "🍱",
    name: "Alimentação & Cantina",
    description: "Planeamento de refeições e controle de consumo",
    category: "recursos",
    modules: [
      {
        name: "Planeamento de Refeições",
        submods: ["Menus Semanais", "Restrições Alimentares"]
      },
      {
        name: "Controle de Consumo",
        submods: ["Carregamento de Cartões", "Extrato de Consumidor"]
      },
      {
        name: "Fornecedores & Compras",
        submods: ["Pedidos de Insumos", "Controle de Estoque"]
      }
    ]
  },
  {
    id: "saudeescolar",
    icon: "🩺",
    name: "Saúde Escolar",
    description: "Gestão de atendimentos médicos e emergências",
    category: "administrativo",
    modules: [
      {
        name: "Ficha Clínica",
        submods: ["Histórico Médico", "Alergias e Vacinas"]
      },
      {
        name: "Consultas & Atendimentos",
        submods: ["Agendamento", "Prontuário Eletrônico"]
      },
      {
        name: "Emergências",
        submods: ["Contatos de Responsáveis", "Procedimentos Padrão"]
      }
    ]
  },
  {
    id: "psicologiaescolar",
    icon: "🧠",
    name: "Psicologia Escolar",
    description: "Avaliações psicológicas e atendimentos",
    category: "administrativo",
    modules: [
      {
        name: "Avaliação Psicológica",
        submods: ["Testes e Relatórios", "Plano de Acompanhamento"]
      },
      {
        name: "Atendimentos",
        submods: ["Agendamento", "Histórico de Sessões"]
      },
      {
        name: "Workshops e Palestras",
        submods: ["Temas e Incrições", "Frequência"]
      }
    ]
  },
  {
    id: "seguranca",
    icon: "🔒",
    name: "Segurança & Acessos",
    description: "Controle de acesso físico e planos de emergência",
    category: "administrativo",
    modules: [
      {
        name: "Controle de Acesso Físico",
        submods: ["Cartões RFID", "Controle de Portões"]
      },
      {
        name: "Vídeo Monitoramento",
        submods: ["Integração com CFTV", "Alertas em Tempo Real"]
      },
      {
        name: "Planos de Emergência",
        submods: ["Evacuação", "Simulados"]
      }
    ]
  },
  {
    id: "bemestarainclusao",
    icon: "♿",
    name: "Bem-estar & Inclusão",
    description: "Acessibilidade, mentoria e atendimento social",
    category: "administrativo",
    modules: [
      {
        name: "Acessibilidade",
        submods: ["Recursos para Deficientes", "Adaptações de Sala"]
      },
      {
        name: "Programas de Mentoria",
        submods: ["Padrinho-Madrinha", "Feedback Contínuo"]
      },
      {
        name: "Atendimento Social",
        submods: ["Bolsa-auxílio", "Apoio Psicossocial"]
      }
    ]
  },
  {
    id: "comunicacoes",
    icon: "💬",
    name: "Comunicações",
    description: "Mensagens internas, emails e newsletters",
    category: "administrativo",
    modules: [
      {
        name: "Mensagens Internas",
        submods: ["Chat Aluno-Professor", "Grupos de Turma"]
      },
      {
        name: "Email/SMS/Push",
        submods: ["Campanhas", "Alertas Urgentes"]
      },
      {
        name: "Newsletters & Blog",
        submods: ["Criação e Agendamento", "Estatísticas de Abertura"]
      }
    ]
  },
  {
    id: "eventoseatividades",
    icon: "🎪",
    name: "Eventos & Atividades Extra",
    description: "Calendário de eventos e gestão de participantes",
    category: "agenda",
    modules: [
      {
        name: "Calendário de Eventos",
        submods: ["Feiras, Palestras, Torneios", "Inscrições Online"]
      },
      {
        name: "Gestão de Participantes",
        submods: ["Relatórios de Frequência", "Emissão de Certificados"]
      }
    ]
  },
  {
    id: "avaliacoesexames",
    icon: "📝",
    name: "Avaliações & Exames",
    description: "Provas, notas, boletins e revisões",
    category: "academico",
    modules: [
      {
        name: "Provas e Trabalhos",
        submods: ["Upload de Exercícios", "Datas e Prazos"]
      },
      {
        name: "Notas & Boletins",
        submods: ["Lançamento de Notas", "Boletim Digital"]
      },
      {
        name: "Revisões & Recursos",
        submods: ["Pedidos de Revisão", "Pareceres"]
      }
    ]
  },
  {
    id: "curriculo",
    icon: "📋",
    name: "Currículo & Planos de Aula",
    description: "Estrutura curricular e planos de aula",
    category: "academico",
    modules: [
      {
        name: "Estrutura Curricular",
        submods: ["Matriz de Disciplinas", "Ementas"]
      },
      {
        name: "Planos de Aula",
        submods: ["Templates", "Compartilhamento"]
      },
      {
        name: "Banco de Recursos",
        submods: ["Slides, Vídeos, PDFs"]
      }
    ]
  },
  {
    id: "elearning",
    icon: "💻",
    name: "E-learning & LMS",
    description: "Cursos online, avaliações digitais e certificação",
    category: "academico",
    modules: [
      {
        name: "Cursos Online",
        submods: ["Módulos e Unidades", "Progresso do Aluno"]
      },
      {
        name: "Avaliações Digitais",
        submods: ["Quiz, Tarefa, Fórum", "Certificação Automática"]
      },
      {
        name: "Emissão de Certificados",
        submods: []
      }
    ]
  },
  {
    id: "gamificacao",
    icon: "🎮",
    name: "Gamificação",
    description: "Pontuação, conquistas e recompensas",
    category: "academico",
    modules: [
      {
        name: "Pontuação",
        submods: ["Atribuição Automática", "Históricos"]
      },
      {
        name: "Conquistas & Medalhas",
        submods: ["Níveis e Insígnias"]
      },
      {
        name: "Ranking",
        submods: ["Turma, Escola, Global"]
      }
    ]
  },
  {
    id: "moedainterna",
    icon: "🪙",
    name: "Moeda Interna (WisCoin)",
    description: "Carteiras virtuais, transações e recompensas",
    category: "administrativo",
    modules: [
      {
        name: "Carteiras Virtuais",
        submods: ["Saldo e Extrato"]
      },
      {
        name: "Transações",
        submods: ["Compra, Venda, Troca"]
      },
      {
        name: "Loja Virtual",
        submods: ["Itens e Recompensas"]
      }
    ]
  },
  {
    id: "relatoriosbi",
    icon: "📊",
    name: "Relatórios & BI",
    description: "Dashboards personalizados, KPIs e auditorias",
    category: "administrativo",
    modules: [
      {
        name: "Dashboards Personalizados",
        submods: ["Acadêmico, Financeiro, RH…", "Exportação"]
      },
      {
        name: "KPIs & Alertas",
        submods: ["Metas e Limiares"]
      },
      {
        name: "Auditoria & Compliance",
        submods: ["Logs de Ações", "Conformidade GDPR/LPDP"]
      }
    ]
  },
  {
    id: "documentos",
    icon: "📄",
    name: "Documentos & Arquivos",
    description: "Upload, download e controle de versões",
    category: "administrativo",
    modules: [
      {
        name: "Upload e Download",
        submods: ["Convênios, Contratos", "Controle de Versões"]
      },
      {
        name: "Histórico",
        submods: []
      },
      {
        name: "Assinatura Digital",
        submods: ["e-Sign"]
      }
    ]
  },
  {
    id: "apiintegracoes",
    icon: "🔄",
    name: "API & Integrações",
    description: "REST/GraphQL, webhooks e conectores",
    category: "administrativo",
    modules: [
      {
        name: "REST / GraphQL",
        submods: ["Endpoints Públicos"]
      },
      {
        name: "Webhooks",
        submods: ["Eventos em Tempo Real"]
      },
      {
        name: "Conectores",
        submods: ["Google Meet, Zoom, Stripe"]
      }
    ]
  },
  {
    id: "marketingcrm",
    icon: "📱",
    name: "Marketing & CRM",
    description: "Funil de leads, campanhas e análise de conversão",
    category: "administrativo",
    modules: [
      {
        name: "Funil de Leads",
        submods: ["Captação, Nutrição"]
      },
      {
        name: "Campanhas",
        submods: ["E-mail, SMS, WhatsApp"]
      },
      {
        name: "Análise de Conversão",
        submods: ["ROI"]
      }
    ]
  },
  {
    id: "admissoes",
    icon: "📥",
    name: "Admissões & Inscrições",
    description: "Formulários online e processamento de documentos",
    category: "academico",
    modules: [
      {
        name: "Formulários Online",
        submods: ["Pré-inscrição"]
      },
      {
        name: "Processamento de Documentos",
        submods: ["Upload e Validação"]
      },
      {
        name: "Comunicação com Candidatos",
        submods: ["Status e Feedback"]
      }
    ]
  },
  {
    id: "bolsas",
    icon: "🎓",
    name: "Bolsas & Financiamento",
    description: "Tipos de bolsa, processos de seleção e relatórios",
    category: "financeiro",
    modules: [
      {
        name: "Tipos de Bolsa",
        submods: ["Mérito, Social, Esportiva"]
      },
      {
        name: "Processos de Seleção",
        submods: ["Inscrição, Análise"]
      },
      {
        name: "Relatórios de Distribuição",
        submods: ["Critérios e Impacto"]
      }
    ]
  },
  {
    id: "infraestrutura",
    icon: "🏗️",
    name: "Infraestrutura & Manutenção",
    description: "Cadastro de espaços e solicitações de manutenção",
    category: "administrativo",
    modules: [
      {
        name: "Cadastro de Espaços",
        submods: ["Salas, Auditórios"]
      },
      {
        name: "Solicitações de Manutenção",
        submods: ["Acompanhamento"]
      },
      {
        name: "Agenda de Manutenção",
        submods: ["Preventiva x Corretiva"]
      }
    ]
  },
  {
    id: "governanca",
    icon: "👔",
    name: "Governança & Conselho",
    description: "Atas de reuniões, planos estratégicos e votações",
    category: "administrativo",
    modules: [
      {
        name: "Ata de Reuniões",
        submods: ["Registro e Publicação"]
      },
      {
        name: "Planos Estratégicos",
        submods: ["Metas e OKRs"]
      },
      {
        name: "Decisões e Votações",
        submods: ["Registro de Votos"]
      }
    ]
  },
  {
    id: "alumni",
    icon: "👨‍🎓",
    name: "Alumni & Relações Externas",
    description: "Banco de ex-alunos, eventos e doações",
    category: "administrativo",
    modules: [
      {
        name: "Banco de Ex-Alunos",
        submods: ["Cadastro e Networking"]
      },
      {
        name: "Eventos de Alumni",
        submods: ["Reuniões, Workshops"]
      },
      {
        name: "Doações & Patrocínios",
        submods: ["Campanhas e Relatórios"]
      }
    ]
  },
  {
    id: "sustentabilidade",
    icon: "🌱",
    name: "Sustentabilidade & Green Initiatives",
    description: "Gestão de resíduos, energia e projetos verdes",
    category: "administrativo",
    modules: [
      {
        name: "Gestão de Resíduos",
        submods: ["Coleta Seletiva"]
      },
      {
        name: "Consumo de Energia",
        submods: ["Monitoramento"]
      },
      {
        name: "Projetos Verdes",
        submods: ["Hortas, Reciclagem"]
      }
    ]
  }
];

// Agrupar módulos por categoria
export const moduleGroups: ModuleGroup[] = [
  {
    id: "academico",
    name: "Académico",
    modules: allModules.filter(module => module.category === "academico")
  },
  {
    id: "administrativo",
    name: "Administrativo",
    modules: allModules.filter(module => module.category === "administrativo")
  },
  {
    id: "financeiro",
    name: "Financeiro",
    modules: allModules.filter(module => module.category === "financeiro")
  },
  {
    id: "recursos",
    name: "Recursos",
    modules: allModules.filter(module => module.category === "recursos")
  },
  {
    id: "agenda",
    name: "Agenda e Eventos",
    modules: allModules.filter(module => module.category === "agenda")
  }
];

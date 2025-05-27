"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Briefcase, Users, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { useRouter } from "next/navigation"

interface JobPosition {
  id: string
  title: string
  department: string
  type: string
  location: string
  description: string
  requirements: string[]
  responsibilities: string[]
  questions: {
    id: string
    question: string
    type: "text" | "textarea" | "select" | "number" | "multiselect"
    options?: string[]
    placeholder?: string
    allowOther?: boolean
    validation?: {
      pattern?: RegExp
      message?: string
    }
  }[]
  color: "blue" | "purple" | "green" | "orange" | "pink"
  image: string
}

export default function TrabalheConoscoPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const router = useRouter()

  const jobPositions: JobPosition[] = [
    {
      id: "gestor-trafego",
      title: "Gestor de Tráfego Pago",
      department: "Marketing Digital",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Procuramos um(a) Gestor(a) de Tráfego Pago com visão estratégica, domínio técnico e foco em performance. Você será responsável por planejar, executar e otimizar campanhas nas principais plataformas (Meta Ads e Google Ads).",
      requirements: [
        "Experiência comprovada em Meta Ads e Google Ads;",
        "Conhecimento de funis, públicos e estratégias de mídia paga;",
        "Organização e visão analítica;",
        "Domínio de ferramentas como Google Tag Manager, Analytics, UTM, etc;",
        "Conhecimento em WhatsApp API, Landing Pages e funis de leads será diferencial.",
      ],
      responsibilities: [
        "Criação e estruturação de campanhas de aquisição e conversão;",
        "Segmentação de público e definição de criativos;",
        "Monitoramento e otimização constante das campanhas;",
        "Geração de relatórios com análise de KPIs;",
        "A/B testing e propostas de melhorias com base nos dados.",
      ],
      questions: [
        { id: "nome", question: "Nome completo:", type: "text" },
        { id: "idade", question: "Idade:", type: "number" },
        { id: "cidade_estado", question: "Cidade e estado onde mora atualmente:", type: "text" },
        {
          id: "telefone",
          question: "Telefone para contato:",
          type: "text",
          validation: {
            pattern: /^(\+\d{1,3}\s?)?\d{2}[\s.-]?\d{4,5}[\s.-]?\d{4}$/,
            message: "Formato inválido. Ex: (99) 99999-9999",
          },
        },
        {
          id: "email",
          question: "E-mail:",
          type: "text",
          validation: {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Digite um email válido",
          },
        },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        {
          id: "trabalha",
          question: "Você está trabalhando no momento?",
          type: "select",
          options: ["Sim, em tempo integral", "Sim, como freelancer ou PJ", "Não estou trabalhando atualmente"],
        },
        { id: "clientes_ativos", question: "Você possui clientes ativos atualmente?", type: "text" },
        {
          id: "tempo_trafego",
          question: "Há quanto tempo você trabalha com tráfego pago? (Ex: 1 ano, 2 anos, 5+ anos...)",
          type: "text",
        },
        {
          id: "plataformas",
          question: "Em quais plataformas você tem mais experiência?",
          type: "multiselect",
          options: [
            "Meta Ads (Facebook/Instagram)",
            "Google Ads",
            "TikTok Ads",
            "LinkedIn Ads",
            "Pinterest Ads",
            "Outras",
          ],
          allowOther: true,
        },
        {
          id: "investimento",
          question: "Já gerenciou contas com qual nível de investimento mensal?",
          type: "select",
          options: ["Até R$5.000", "Entre R$5.001 e R$20.000", "Entre R$20.001 e R$100.000", "Acima de R$100.000"],
        },
        { id: "nichos", question: "Quais nichos ou tipos de clientes você já atendeu?", type: "textarea" },
        {
          id: "ferramentas",
          question:
            "Com quais ferramentas você já trabalhou para gestão ou análise de campanhas? (Exemplo: Google Tag Manager, Google Analytics, Hotjar, Power BI, Reportei, etc.)",
          type: "textarea",
        },
        {
          id: "desafio",
          question: "Qual foi seu maior desafio em tráfego pago até hoje e como você lidou com ele?",
          type: "textarea",
        },
        {
          id: "estrategia_ecommerce",
          question:
            "Estratégia: Como você estruturaria uma campanha para um e-commerce que quer escalar as vendas, mas tem um ROAS abaixo de 1,5?",
          type: "textarea",
        },
        {
          id: "estrategia_cpa",
          question:
            "Estratégia: Quais seriam seus primeiros passos ao assumir uma conta de tráfego com campanhas ativas e CPA muito acima da meta?",
          type: "textarea",
        },
        {
          id: "remuneracao",
          question: "Qual é a sua pretensão de remuneração mensal? (Especifique se é bruto, líquido, PJ ou CLT)",
          type: "text",
        },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente?",
          type: "select",
          options: ["Sim, total disponibilidade", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question: "Deseja compartilhar algum link de portfólio, case de sucesso ou conta gerenciada? (Opcional)",
          type: "text",
        },
      ],

      color: "blue",
      image: "/vagas/GESTORDETRAF.png?height=600&width=600",
    },
    {
      id: "gestor-projetos",
      title: "Gestor de Projetos",
      department: "Operações",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Estamos em busca de um(a) Gestor(a) de Projetos que seja organizado(a), metódico(a) e orientado(a) a resultados. Você será responsável por garantir que todas as etapas dos projetos da agência sejam executadas com excelência, prazo e alinhamento.",
      requirements: [
        "Experiência prévia em gestão de projetos (PMO, Scrum, Kanban);",
        "Habilidade em gestão de múltiplas demandas e times multidisciplinares;",
        "Domínio de ferramentas de gestão como Monday, ClickUp, Notion ou Trello;",
        "Visão estratégica e foco em eficiência operacional;",
        "Antecipar gargalos e promover soluções junto ao time.",
      ],
      responsibilities: [
        "Planejar, acompanhar e garantir a execução dos cronogramas;",
        "Gerenciar a comunicação entre times e stakeholders;",
        "Monitorar prazos, entregas e qualidade dos projetos;",
        "Realizar reuniões de kick-off, follow-up e fechamento;",
        "Certificações (Scrum, PMP, etc) são diferenciais.",
      ],
      questions: [
        { id: "nome", question: "Nome completo:", type: "text" },
        { id: "idade", question: "Idade:", type: "number" },
        { id: "cidade_estado", question: "Cidade e estado onde mora atualmente:", type: "text" },
        {
          id: "telefone",
          question: "Telefone para contato:",
          type: "text",
          validation: {
            pattern: /^(\+\d{1,3}\s?)?\d{2}[\s.-]?\d{4,5}[\s.-]?\d{4}$/,
            message: "Formato inválido. Ex: (99) 99999-9999",
          },
        },
        {
          id: "email",
          question: "E-mail:",
          type: "text",
          validation: {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Digite um email válido",
          },
        },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        {
          id: "trabalha",
          question: "Você está trabalhando no momento?",
          type: "select",
          options: ["Sim, em tempo integral", "Sim, como freelancer ou PJ", "Não estou trabalhando atualmente"],
        },
        {
          id: "clientes_ativos",
          question: "Você possui clientes ou projetos ativos atualmente?",
          type: "select",
          options: ["Sim", "Não"],
        },
        {
          id: "tempo_projetos",
          question: "Há quanto tempo você trabalha com gestão de projetos? (Ex: 1 ano, 3 anos, 5+ anos...)",
          type: "text",
        },
        {
          id: "tipos_projetos",
          question: "Quais tipos de projetos você já gerenciou?",
          type: "multiselect",
          options: [
            "Marketing digital",
            "Desenvolvimento web",
            "Tecnologia/SaaS",
            "Branding/design",
            "Equipes criativas",
            "Outros",
          ],
          allowOther: true,
        },
        {
          id: "metodologias",
          question: "Quais metodologias ou frameworks você já utilizou?",
          type: "multiselect",
          options: ["Scrum", "Kanban", "Waterfall", "Agile (Genérico)", "OKRs", "Outras"],
          allowOther: true,
        },
        {
          id: "ferramentas",
          question: "Quais ferramentas você domina para gestão de tarefas e projetos?",
          type: "textarea",
          placeholder: "Exemplo: Trello, Asana, Notion, ClickUp, Jira, Monday...",
        },
        {
          id: "lideranca_multidisciplinar",
          question: "Você já atuou liderando equipes multidisciplinares (tráfego, design, copy, social media)?",
          type: "textarea",
        },
        {
          id: "estrategia_travado",
          question:
            "Estratégia: O que você faria ao assumir um projeto travado, com prazos estourados e equipe desmotivada?",
          type: "textarea",
        },
        {
          id: "estrategia_stakeholders",
          question:
            "Estratégia: Como você garantiria que um projeto com múltiplos stakeholders avance sem perder o foco no escopo e prazos?",
          type: "textarea",
        },
        {
          id: "remuneracao",
          question: "Qual é a sua pretensão de remuneração mensal? (Especifique se é bruto, líquido, PJ ou CLT)",
          type: "text",
        },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente?",
          type: "select",
          options: ["Sim, total disponibilidade", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question:
            "Deseja compartilhar algum link de portfólio, apresentações, cases ou materiais já coordenados por você? (Opcional)",
          type: "text",
        },
      ],
      color: "purple",
      image: "/vagas/GESTORDEPROJETOS.png?height=600&width=600",
    },
    {
      id: "atendimento-cliente",
      title: "Atendimento ao Cliente CS",
      department: "Customer Success",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Buscamos um(a) profissional de Atendimento ao Cliente que saiba equilibrar empatia, agilidade e clareza na comunicação. Você será o elo entre a agência e nossos clientes, garantindo um relacionamento próximo e fluido.",
      requirements: [
        "Excelente comunicação escrita e verbal;",
        "Organização e proatividade;",
        "Experiência com atendimento em agências, projetos ou B2B;",
        "Familiaridade com ferramentas de organização (Monday, Trello, ClickUp, Notion);",
        "Capacidade de mediar conflitos e manter o relacionamento saudável.",
      ],
      responsibilities: [
        "Acompanhamento de clientes e feedbacks constantes;",
        "Organização das demandas entre cliente e equipe interna;",
        "Participação em reuniões de alinhamento e estratégia;",
        "Garantir que os prazos e entregas sejam compreendidos e cumpridos;",
        "Sugerir melhorias e manter os clientes engajados.",
      ],
      questions: [
        { id: "nome", question: "Nome completo:", type: "text" },
        { id: "idade", question: "Idade:", type: "number" },
        { id: "cidade_estado", question: "Cidade e estado onde mora atualmente:", type: "text" },
        {
          id: "telefone",
          question: "Telefone para contato:",
          type: "text",
          validation: {
            pattern: /^(\+\d{1,3}\s?)?\d{2}[\s.-]?\d{4,5}[\s.-]?\d{4}$/,
            message: "Formato inválido. Ex: (99) 99999-9999",
          },
        },
        {
          id: "email",
          question: "E-mail:",
          type: "text",
          validation: {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Digite um email válido",
          },
        },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        {
          id: "trabalha",
          question: "Você está trabalhando no momento?",
          type: "select",
          options: ["Sim, em tempo integral", "Sim, como freelancer ou PJ", "Não estou trabalhando atualmente"],
        },
        {
          id: "clientes_ativos",
          question: "Você possui clientes ou contas ativas sob sua responsabilidade atualmente?",
          type: "select",
          options: ["Sim", "Não"],
        },
        {
          id: "tempo_experiencia",
          question:
            "Há quanto tempo você atua com atendimento ao cliente ou customer success? (Ex: 1 ano, 3 anos, 5+ anos...)",
          type: "text",
        },
        {
          id: "canais_atendimento",
          question: "Em quais canais você tem experiência de atendimento?",
          type: "multiselect",
          options: [
            "WhatsApp",
            "E-mail",
            "Telefone",
            "Instagram / Redes sociais",
            "Plataformas como Zendesk / Intercom",
            "Outros",
          ],
          allowOther: true,
        },
        {
          id: "experiencia_empresas",
          question:
            "Você já trabalhou com atendimento voltado à retenção, suporte ou sucesso do cliente em empresas de marketing, tecnologia ou serviços?",
          type: "select",
          options: ["Sim", "Não"],
        },
        {
          id: "explicacao_experiencia",
          question: "Se sim, explique brevemente.",
          type: "textarea",
        },
        {
          id: "ferramentas",
          question: "Quais ferramentas ou sistemas você já usou no atendimento ou gestão de clientes?",
          type: "textarea",
          placeholder: "Ex: CRM, HubSpot, Pipedrive, Google Agenda, Trello, Notion, etc.",
        },
        {
          id: "lidar_cliente_insatisfeito",
          question: "Como você lida com situações em que o cliente está insatisfeito ou frustrado?",
          type: "textarea",
        },
        {
          id: "estrategia_cancelamento",
          question:
            "Estratégia: O que você faria se um cliente ameaçasse cancelar o serviço por não ver resultados imediatos, mesmo estando dentro do prazo esperado?",
          type: "textarea",
        },
        {
          id: "relacionamento_dificil",
          question:
            "Estratégia: Como você mantém um bom relacionamento com o cliente, mesmo quando ele tem pouco tempo disponível para reuniões e retornos?",
          type: "textarea",
        },
        {
          id: "remuneracao",
          question: "Qual é a sua pretensão de remuneração mensal? (Especifique se é bruto, líquido, PJ ou CLT)",
          type: "text",
        },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente?",
          type: "select",
          options: ["Sim, total disponibilidade", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
      ],

      color: "green",
      image: "/vagas/ATENDIMENTOAOCLIENTE.png?height=600&width=600",
    },
    {
      id: "representante-comercial",
      title: "SDR (Pré-Vendas)",
      department: "Comercial",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Estamos em busca de um(a) SDR (Sales Development Representative) para atuar na linha de frente da nossa operação comercial. Seu papel será qualificar leads, gerar oportunidades e agendar reuniões para o time de vendas.",
      requirements: [
        "Facilidade de comunicação e argumentação;",
        "Perfil resiliente, organizado e com mentalidade comercial;",
        "Experiência com pré-vendas, prospecção ou call center;",
        "Familiaridade com ferramentas de CRM (Kommo, Pipedrive, HubSpot etc);",
        "Conhecimento de marketing digital será um diferencial.",
      ],
      responsibilities: [
        "Realizar prospecção ativa (outbound) e nutrir leads inbound;",
        "Qualificar leads com base em critérios BANT ou SPIN Selling;",
        "Marcar reuniões com leads qualificados para o time comercial;",
        "Atualizar o CRM com informações completas e organizadas;",
        "Enviar mensagens, áudios e fazer ligações com foco em conversão.",
      ],
      questions: [
        { id: "nome", question: "Nome completo:", type: "text" },
        { id: "idade", question: "Idade:", type: "number" },
        { id: "cidade_estado", question: "Cidade e estado onde mora atualmente:", type: "text" },
        {
          id: "telefone",
          question: "Telefone para contato:",
          type: "text",
          validation: {
            pattern: /^(\+\d{1,3}\s?)?\d{2}[\s.-]?\d{4,5}[\s.-]?\d{4}$/,
            message: "Formato inválido. Ex: (99) 99999-9999",
          },
        },
        {
          id: "email",
          question: "E-mail:",
          type: "text",
          validation: {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Digite um email válido",
          },
        },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        {
          id: "trabalha",
          question: "Você está trabalhando no momento?",
          type: "select",
          options: ["Sim, em tempo integral", "Sim, como freelancer ou PJ", "Não estou trabalhando atualmente"],
        },
        {
          id: "clientes_ativos",
          question: "Você possui clientes, leads ativos ou parcerias comerciais em andamento?",
          type: "select",
          options: ["Sim", "Não"],
        },
        {
          id: "tempo_vendas",
          question: "Há quanto tempo você trabalha com vendas ou pré-vendas? (Ex: 6 meses, 2 anos, 5+ anos...)",
          type: "text",
        },
        {
          id: "b2b",
          question: "Você já atuou com vendas B2B (empresa para empresa)?",
          type: "select",
          options: ["Sim", "Não"],
        },
        {
          id: "b2b_detalhes",
          question: "Se sim, explique brevemente o tipo de produto ou serviço.",
          type: "textarea",
        },
        {
          id: "atividades_sdr",
          question: "Quais atividades você já executou em um processo de pré-venda ou SDR?",
          type: "multiselect",
          options: [
            "Prospecção ativa (cold call / cold message)",
            "Qualificação de leads (BANT, SPIN etc.)",
            "Marcação de reuniões para closer ou consultores",
            "Atualização de CRM",
            "Follow-up com leads frios",
            "Scripts e objeções",
            "Outras",
          ],
          allowOther: true,
        },
        {
          id: "ferramentas",
          question: "Quais ferramentas você já utilizou em vendas ou prospecção?",
          type: "textarea",
          placeholder: "Ex: Pipedrive, HubSpot, RD Station, Apollo, WhatsApp Business, Google Sheets, etc.",
        },
        {
          id: "prospeccao_conforto",
          question: "Você está confortável com prospecção ativa por telefone, WhatsApp e Instagram?",
          type: "select",
          options: ["Sim", "Não", "Sim, com suporte e script"],
        },
        {
          id: "followup_estrategia",
          question: 'Estratégia: Se um lead responde "agora não é um bom momento", como você conduziria o follow-up?',
          type: "textarea",
        },
        {
          id: "qualificacao_estrategia",
          question:
            "Estratégia: Como você identificaria se um lead está qualificado para passar para o time de fechamento?",
          type: "textarea",
        },
        {
          id: "remuneracao",
          question: "Qual é a sua pretensão de remuneração mensal? (Especifique se é bruto, líquido, PJ ou CLT)",
          type: "text",
        },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente?",
          type: "select",
          options: ["Sim, total disponibilidade", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question:
            "Deseja compartilhar algum vídeo de apresentação, resultado ou case de prospecção que você participou? (Opcional)",
          type: "text",
        },
      ],
      color: "orange",
      image: "/vagas/REPCOMERCIAL.png?height=600&width=600",
    },
    {
      id: "social-media",
      title: "Social Media",
      department: "Marketing de Conteúdo",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Estamos em busca de um(a) Social Media criativo(a), estratégico(a) e apaixonado(a) por resultados. Você será responsável por planejar, criar e executar conteúdos para redes sociais, garantindo presença digital impactante e alinhada à identidade dos nossos clientes.",
      requirements: [
        "Excelente escrita e domínio da língua portuguesa;",
        "Experiência com Instagram, Facebook, TikTok e LinkedIn;",
        "Domínio de ferramentas como Monday, Trello, Notion ou similares;",
        "Organização, proatividade e criatividade;",
        "Capacidade de análise e ajustes com base em dados.",
      ],
      responsibilities: [
        "Planejamento e execução de calendários de conteúdo;",
        "Redação de legendas criativas e estratégias de copywriting;",
        "Agendamento e publicação dos conteúdos;",
        "Interação e engajamento com seguidores;",
        "Análise de desempenho (KPI's) e ajustes estratégicos;",
        "Briefing e direcionamento de criativos junto à equipe criativa.",
      ],
      questions: [
        { id: "nome", question: "Nome completo:", type: "text" },
        { id: "idade", question: "Idade:", type: "number" },
        { id: "cidade_estado", question: "Cidade e estado onde mora atualmente:", type: "text" },
        {
          id: "telefone",
          question: "Telefone para contato:",
          type: "text",
          validation: {
            pattern: /^(\+\d{1,3}\s?)?\d{2}[\s.-]?\d{4,5}[\s.-]?\d{4}$/,
            message: "Formato inválido. Ex: (99) 99999-9999",
          },
        },
        {
          id: "email",
          question: "E-mail:",
          type: "text",
          validation: {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Digite um email válido",
          },
        },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        {
          id: "trabalha",
          question: "Você está trabalhando no momento?",
          type: "select",
          options: ["Sim, em tempo integral", "Sim, como freelancer ou PJ", "Não estou trabalhando atualmente"],
        },
        {
          id: "clientes_ativos",
          question: "Você possui clientes ou perfis ativos no momento?",
          type: "select",
          options: ["Sim", "Não"],
        },
        {
          id: "tempo_redes_sociais",
          question: "Há quanto tempo você trabalha com redes sociais? (Ex: 1 ano, 3 anos, 5+ anos...)",
          type: "text",
        },
        {
          id: "nichos",
          question: "Quais tipos de contas ou nichos você já atendeu como social media?",
          type: "textarea",
        },
        {
          id: "atividades_social_media",
          question: "Quais atividades você costuma executar em um projeto de social media?",
          type: "multiselect",
          options: [
            "Planejamento de conteúdo",
            "Criação de roteiro para Reels",
            "Legendas e textos para postagens",
            "Agendamento de posts",
            "Relatórios de desempenho",
            "Atendimento de comentários e DMs",
            "Coordenação com design/captação de vídeos/tráfego pago",
            "Outras",
          ],
          allowOther: true,
        },
        {
          id: "ferramentas",
          question: "Quais ferramentas você domina?",
          type: "textarea",
          placeholder: "Exemplo: Canva, CapCut, Metricool, mLabs, Trello, Notion, etc.",
        },
        {
          id: "estrategia_leads",
          question:
            "Você já trabalhou com alguma estratégia de crescimento ou geração de leads nas redes sociais? Conte um exemplo:",
          type: "textarea",
        },
        {
          id: "estrategia_engajamento",
          question:
            "Estratégia: Um perfil está estagnado, com baixo engajamento. Quais seriam suas primeiras ações para identificar e resolver isso?",
          type: "textarea",
        },
        {
          id: "estrategia_conteudo_nicho",
          question:
            "Estratégia: Se você tivesse que criar um calendário de conteúdo para um cliente novo em um nicho que não domina, como iniciaria o processo?",
          type: "textarea",
        },
        {
          id: "remuneracao",
          question: "Qual é a sua pretensão de remuneração mensal? (Especifique se é bruto, líquido, PJ ou CLT)",
          type: "text",
        },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente?",
          type: "select",
          options: ["Sim, total disponibilidade", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question:
            "Deseja compartilhar algum perfil que você já gerenciou ou portfólio de conteúdos criados? (Opcional)",
          type: "text",
        },
      ],
      color: "pink",
      image: "/vagas/SOCIALMEDIA.png?height=600&width=600",
    },
  ]

  const handleApply = (job: JobPosition) => {
    // Navegar para a rota específica da vaga
    router.push(`/trabalhe-conosco/${job.id}`)
  }

  const getGradientColors = (color: string) => {
    switch (color) {
      case "blue":
        return "from-[#4bb6ef] to-[#3a9fd8]"
      case "purple":
        return "from-[#8a63d2] to-[#6a4db3]"
      case "green":
        return "from-[#4cd5b6] to-[#2bb39b]"
      case "orange":
        return "from-[#ff9966] to-[#ff7e47]"
      case "pink":
        return "from-[#ff6b9d] to-[#e84c88]"
      default:
        return "from-[#4bb6ef] to-[#3a9fd8]"
    }
  }

  const getGlowColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-[#4bb6ef]/10"
      case "purple":
        return "bg-[#8a63d2]/10"
      case "green":
        return "bg-[#4cd5b6]/10"
      case "orange":
        return "bg-[#ff9966]/10"
      case "pink":
        return "bg-[#ff6b9d]/10"
      default:
        return "bg-[#4bb6ef]/10"
    }
  }

  const getTextColor = (color: string) => {
    switch (color) {
      case "blue":
        return "text-[#4bb6ef]"
      case "purple":
        return "text-[#8a63d2]"
      case "green":
        return "text-[#4cd5b6]"
      case "orange":
        return "text-[#ff9966]"
      case "pink":
        return "text-[#ff6b9d]"
      default:
        return "text-[#4bb6ef]"
    }
  }

  const getBorderColor = (color: string) => {
    switch (color) {
      case "blue":
        return "border-[#4bb6ef]"
      case "purple":
        return "border-[#8a63d2]"
      case "green":
        return "border-[#4cd5b6]"
      case "orange":
        return "border-[#ff9966]"
      case "pink":
        return "border-[#ff6b9d]"
      default:
        return "border-[#4bb6ef]"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Job Positions Section - AGORA É A PRIMEIRA SEÇÃO */}
      <section className="relative py-32 bg-[#0e1420]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                <span className="text-[#4bb6ef] font-medium text-sm">Oportunidades</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vagas <GradientText>Disponíveis</GradientText>
              </h2>

              <p className="text-gray-300 text-lg">
                Confira nossas vagas abertas e encontre a oportunidade perfeita
                <br /> para o seu próximo desafio profissional.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {jobPositions.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 0.1}>
                <motion.div
                  className={`group relative overflow-hidden rounded-2xl h-full transition-all duration-300`}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveTab(job.id === activeTab ? null : job.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#111827] to-[#0e1420] z-0"></div>

                  {/* Gradient border effect */}
                  <div className="absolute inset-0 p-[1px] rounded-2xl overflow-hidden z-10">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(
                        job.color,
                      )}/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-8 flex flex-col h-full">
                    <div
                      className={`w-14 h-14 rounded-full ${getGlowColor(job.color)} border ${getBorderColor(
                        job.color,
                      )}/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:${getGlowColor(
                        job.color,
                      )}/30`}
                    >
                      <Briefcase className={`h-6 w-6 ${getTextColor(job.color)}`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 truncate">{job.title}</h3>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{job.department}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{job.type}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button
                        onClick={() => handleApply(job)}
                        className={`w-full bg-transparent border ${getBorderColor(job.color)} ${getTextColor(
                          job.color,
                        )} hover:bg-gradient-to-r ${getGradientColors(
                          job.color,
                        )} hover:text-white transition-all duration-300 group`}
                      >
                        Candidatar-se
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {activeTab && (
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#111827]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50"
              >
                {jobPositions
                  .filter((job) => job.id === activeTab)
                  .map((job) => (
                    <div key={job.id} className="space-y-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center text-gray-400">
                              <Users className="h-4 w-4 mr-2" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleApply(job)}
                          className={`bg-gradient-to-r ${getGradientColors(job.color)} hover:opacity-90 text-white px-6 py-2 rounded-md`}
                        >
                          Candidatar-se
                        </Button>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Descrição da Vaga</h4>
                        <p className="text-gray-300">{job.description}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Requisitos</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300">
                              <div className="min-w-[20px] h-5 flex items-center justify-center">
                                <div className={`w-1.5 h-1.5 rounded-full ${getTextColor(job.color)}`}></div>
                              </div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Responsabilidades</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300">
                              <div className="min-w-[20px] h-5 flex items-center justify-center">
                                <div className={`w-1.5 h-1.5 rounded-full ${getTextColor(job.color)}`}></div>
                              </div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Button
                          onClick={() => handleApply(job)}
                          className={`bg-gradient-to-r ${getGradientColors(job.color)} hover:opacity-90 text-white px-8 py-4 rounded-md`}
                        >
                          Candidatar-se a esta vaga
                        </Button>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Hero Section - Movido para baixo */}
      <section className="relative py-32 bg-[#0a0f18]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                <span className="text-[#4bb6ef] font-medium text-sm">Carreira</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trabalhe <GradientText>Conosco</GradientText>
              </h1>

              <p className="text-gray-300 text-lg">
                Junte-se à nossa equipe de talentos e faça parte de uma agência em constante crescimento. Estamos sempre
                em busca de profissionais apaixonados por marketing digital e inovação.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Seção "Por que trabalhar na CCStudios" - MOVER PARA DEPOIS */}
      <section className="relative py-32 bg-[#0a0f18]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="bg-[#111827]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 h-full">
                  <h2 className="text-2xl font-bold text-white mb-6">Por que trabalhar na CCStudios?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center mt-1">
                        <Users className="h-5 w-5 text-[#4bb6ef]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Ambiente Colaborativo</h3>
                        <p className="text-gray-300">
                          Trabalhamos em equipe para alcançar resultados extraordinários, compartilhando conhecimento e
                          celebrando conquistas juntos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center mt-1">
                        <Briefcase className="h-5 w-5 text-[#4bb6ef]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Crescimento Profissional</h3>
                        <p className="text-gray-300">
                          Investimos no desenvolvimento contínuo de nossos colaboradores, com treinamentos, workshops e
                          oportunidades de crescimento.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center mt-1">
                        <Clock className="h-5 w-5 text-[#4bb6ef]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Flexibilidade</h3>
                        <p className="text-gray-300">
                          Oferecemos modelos de trabalho flexíveis, incluindo opções remotas e híbridas, para que você
                          possa equilibrar vida pessoal e profissional.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center mt-1">
                        <MapPin className="h-5 w-5 text-[#4bb6ef]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Projetos Desafiadores</h3>
                        <p className="text-gray-300">
                          Trabalhamos com clientes de diversos segmentos e portes, proporcionando experiências
                          enriquecedoras e desafios constantes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative h-full">
                  <Image
                    src="/banners/FORM 10.png?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Equipe CC Studios"
                    className="rounded-2xl object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white text-xl font-semibold mb-4">
                      "Na CCStudios, valorizamos a criatividade, inovação e, acima de tudo, as pessoas."
                    </p>
                    <p className="text-[#4bb6ef]">Luciano Matos, CEO & Fundador</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[#0e1420]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1a2234] to-[#0e1420]"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#4bb6ef]/10 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4bb6ef]/5 rounded-full blur-[80px]"></div>

              <div className="relative z-10 p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Não encontrou a <span className="text-[#4bb6ef]">vaga ideal</span>?
                  </h2>

                  <p className="text-gray-300 text-lg">
                    Envie seu currículo para nosso banco de talentos e entraremos em contato assim que surgir uma
                    oportunidade compatível com o seu perfil.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    onClick={() => router.push("/trabalhe-conosco/banco-talentos")}
                    className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white px-8 py-6 text-lg rounded-md group min-w-[200px]"
                  >
                    Enviar Currículo
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

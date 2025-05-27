"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Users, Clock, MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useParams, useRouter } from "next/navigation"

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
  }[]
  color: "blue" | "purple" | "green" | "orange" | "pink"
  image: string
}

export default function JobApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [otherSpecifications, setOtherSpecifications] = useState<Record<string, string>>({})
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)
  const [isValid, setIsValid] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

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
        { id: "telefone", question: "Telefone para contato:", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
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
        { id: "telefone", question: "Telefone para contato:", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
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
        { id: "telefone", question: "Telefone para contato:", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
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
        { id: "telefone", question: "Telefone para contato:", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
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
        { id: "telefone", question: "Telefone para contato:", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
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

  // Add data-page attribute to body to hide header/footer when showing form
  useEffect(() => {
    document.body.setAttribute("data-page", "job-application")

    // Cleanup function to remove attribute when component unmounts
    return () => {
      document.body.removeAttribute("data-page")
    }
  }, [])

  // Find the job based on slug
  useEffect(() => {
    const job = jobPositions.find((j) => j.id === slug)
    if (job) {
      setSelectedJob(job)
    } else {
      // Redirect to 404 or back to jobs page if job not found
      router.push("/trabalhe-conosco")
    }
  }, [slug, router])

  useEffect(() => {
    // Focar automaticamente no campo quando mudar de step
    if (selectedJob) {
      const focusTimer = setTimeout(() => {
        try {
          const question = selectedJob.questions[currentStep]
          if (!question) return

          if (question.type === "text" || question.type === "number") {
            inputRef.current?.focus()
          } else if (question.type === "textarea") {
            textareaRef.current?.focus()
          } else if (question.type === "select") {
            selectRef.current?.focus()
          }
        } catch (error) {
          console.error("Erro ao focar:", error)
        }
      }, 500)

      return () => clearTimeout(focusTimer)
    }
  }, [currentStep, selectedJob])

  useEffect(() => {
    // Validate current step - mesma lógica do formulário de contato
    if (selectedJob) {
      const questionIndex = currentStep
      if (questionIndex >= 0 && questionIndex < selectedJob.questions.length) {
        const question = selectedJob.questions[questionIndex]
        const value = formData[question.id] || ""

        // Portfolio é opcional
        if (question.id === "portfolio") {
          setIsValid(true)
          return
        }

        // Validação básica de email
        if (question.id === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          setIsValid(value.trim().length > 0 && emailRegex.test(value))
          return
        }

        if (question.type === "multiselect") {
          setIsValid(value.split(",").filter((v) => v).length > 0)
        } else {
          setIsValid(value.trim().length > 0)
        }
      }
    }
  }, [currentStep, formData, selectedJob])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isValid) {
      e.preventDefault()
      handleNext()
    }
  }

  const handleNext = () => {
    if (isValid && selectedJob && currentStep < selectedJob.questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else if (isValid && selectedJob && currentStep === selectedJob.questions.length - 1) {
      // Submit form - mesma lógica do formulário de contato
      console.log("Form submitted:", formData)

      // Enviar dados para a API
      const formattedData = {
        vaga: selectedJob.title,
        data_candidatura: new Date().toISOString(),
        ...formData,
        ...otherSpecifications,
      }

      fetch("/api/submit-job-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      })
        .then(async (response) => {
          const responseData = await response.json()

          if (response.ok) {
            alert("Candidatura enviada com sucesso! Em breve entraremos em contato.")
            router.push("/trabalhe-conosco")
          } else {
            alert(responseData.message || "Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.")
          }
        })
        .catch((error) => {
          console.error("Erro ao enviar candidatura:", error)
          alert("Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.")
        })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      router.push("/trabalhe-conosco")
    }
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

  const renderStepContent = () => {
    if (!selectedJob) return null

    const questionIndex = currentStep
    if (selectedJob && questionIndex >= 0 && questionIndex < selectedJob.questions.length) {
      const question = selectedJob.questions[questionIndex]
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <p className={getTextColor(selectedJob.color)}>
              Pergunta {questionIndex + 1} de {selectedJob.questions.length}
            </p>
            <h2 className="text-2xl font-bold text-white">{question.question}</h2>
          </div>

          <div className="space-y-4">
            {question.type === "multiselect" ? (
              <div className="space-y-4">
                {question.options?.map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData[question.id]?.split(",").includes(option) || false}
                      onChange={(e) => {
                        const currentValues = formData[question.id]?.split(",").filter((v) => v) || []
                        let newValues
                        if (e.target.checked) {
                          newValues = [...currentValues, option]
                        } else {
                          newValues = currentValues.filter((v) => v !== option)
                        }
                        setFormData((prev) => ({ ...prev, [question.id]: newValues.join(",") }))

                        // Se for "Outras" ou "Outros", mostrar campo de especificação
                        if ((option === "Outras" || option === "Outros") && !e.target.checked) {
                          setOtherSpecifications((prev) => ({ ...prev, [question.id]: "" }))
                        }
                      }}
                      className="w-5 h-5 text-[#4bb6ef] bg-[#0a0f18] border-gray-800 rounded focus:ring-[#4bb6ef]/50"
                    />
                    <span className="text-white">{option}</span>
                  </label>
                ))}

                {/* Campo de especificação para "Outras/Outros" */}
                {question.allowOther &&
                  (formData[question.id]?.includes("Outras") || formData[question.id]?.includes("Outros")) && (
                    <input
                      ref={inputRef}
                      type="text"
                      value={otherSpecifications[question.id] || ""}
                      onChange={(e) => setOtherSpecifications((prev) => ({ ...prev, [question.id]: e.target.value }))}
                      onKeyPress={handleKeyPress}
                      placeholder="Especifique..."
                      className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                    />
                  )}
              </div>
            ) : question.type === "select" ? (
              <select
                ref={selectRef}
                name={question.id}
                value={formData[question.id] || ""}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1.5em 1.5em",
                }}
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {question.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : question.type === "textarea" ? (
              <Textarea
                ref={textareaRef}
                name={question.id}
                value={formData[question.id] || ""}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={question.placeholder}
                className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 min-h-[150px]"
              />
            ) : (
              <input
                ref={inputRef}
                type={question.type}
                name={question.id}
                value={formData[question.id] || ""}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={question.placeholder}
                className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
              />
            )}
          </div>
        </div>
      )
    }
    return null
  }

  if (!selectedJob) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#0a0f18]">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Carregando...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 bg-[#0a0f18] relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={selectedJob.image || "/placeholder.svg?height=600&width=600"}
              alt={`Vaga de ${selectedJob.title}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18]/80 via-transparent to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Vaga: <span className={getTextColor(selectedJob.color)}>{selectedJob.title}</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-300">
                <Users className="h-4 w-4 mr-2" />
                <span>{selectedJob.department}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-2" />
                <span>{selectedJob.type}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{selectedJob.location}</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mb-4">{selectedJob.description}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">Requisitos:</h3>
              <ul className="space-y-1 mb-4">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <div className="min-w-[20px] h-5 flex items-center justify-center">
                      <div className={`w-1.5 h-1.5 rounded-full ${getTextColor(selectedJob.color)}`}></div>
                    </div>
                    {req}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-white mb-2">Responsabilidades:</h3>
              <ul className="space-y-1">
                {selectedJob.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <div className="min-w-[20px] h-5 flex items-center justify-center">
                      <div className={`w-1.5 h-1.5 rounded-full ${getTextColor(selectedJob.color)}`}></div>
                    </div>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 bg-[#0e1420] p-8 lg:p-16 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Image src="/LogoCCS.png" alt="CC Studios Logo" width={150} height={40} />

            <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {renderStepContent()}

                  <Button
                    onClick={handleNext}
                    disabled={!isValid}
                    className={cn(
                      `w-full bg-gradient-to-r ${getGradientColors(
                        selectedJob.color,
                      )} hover:opacity-90 text-white py-6 rounded-md group transition-all duration-300`,
                      !isValid && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    {currentStep === selectedJob.questions.length - 1 ? "Enviar Candidatura" : "Prosseguir"}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <div className="text-center text-xs text-gray-500 mt-4">
                    Ao clicar em PROSSEGUIR você automaticamente concorda com os{" "}
                    <a href="#" className={getTextColor(selectedJob.color) + " hover:underline"}>
                      termos de uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className={getTextColor(selectedJob.color) + " hover:underline"}>
                      política de privacidade
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {Array.from({ length: selectedJob.questions.length }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? `w-6 bg-gradient-to-r ${getGradientColors(selectedJob.color)}`
                        : index < currentStep
                          ? `w-3 ${getGlowColor(selectedJob.color)}`
                          : "w-3 bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>
              <div className="text-gray-500 text-sm">
                Etapa {currentStep + 1} de {selectedJob.questions.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

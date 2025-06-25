"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Users, Clock, MapPin, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
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
    validation?: {
      pattern: RegExp
      message: string
    }
  }[]
  color: "blue" | "purple" | "green" | "orange" | "pink" | "teal"
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showJobDetails, setShowJobDetails] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

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
        { id: "telefone", question: "Telefone para contato (com DDD):", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        { id: "trabalha", question: "Você está trabalhando no momento?", type: "textarea" },
        { id: "clientes_ativos", question: "Você possui clientes ativos atualmente?", type: "textarea" },
        { id: "tempo_trafego", question: "Há quanto tempo você atua com tráfego pago?", type: "textarea" },
        {
          id: "plataformas",
          question: "Em quais plataformas de mídia paga você já gerenciou campanhas?",
          type: "textarea",
        },
        {
          id: "ferramentas",
          question: "Quais ferramentas de análise, gestão ou automação você domina?",
          type: "textarea",
        },
        {
          id: "desafio",
          question: "Qual foi o maior desafio que você enfrentou gerenciando campanhas e como solucionou?",
          type: "textarea",
        },
        {
          id: "estrategia_cpa",
          question: "Estratégia: Como você reduziria um CPA alto em uma conta com campanhas ativas?",
          type: "textarea",
        },
        {
          id: "estrategia_escalar",
          question: "Estratégia: Como estruturaria uma campanha para um cliente novo que quer escalar vendas?",
          type: "textarea",
        },
        {
          id: "estrategia_conta_mal",
          question:
            "Estratégia: Se assumisse uma conta mal estruturada e sem histórico de conversão, qual seria seu primeiro passo?",
          type: "textarea",
        },
        {
          id: "motivacao",
          question: "O que te motiva a buscar uma nova oportunidade neste momento?",
          type: "textarea",
        },
        { id: "remuneracao", question: "Qual é a sua pretensão de remuneração mensal?", type: "textarea" },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente em Balneário Camboriú?",
          type: "select",
          options: ["Sim, total", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        { id: "portfolio", question: "Link para portfólio de campanhas, relatórios ou cases:", type: "text" },
      ],
      color: "blue",
      image: "/vagas/GESTORDETRAF.png?height=600&width=600",
    },
    {
      id: "atendimento-cliente",
      title: "Atendimento ao Cliente",
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
        { id: "telefone", question: "Telefone para contato (com DDD):", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        { id: "trabalha", question: "Você está trabalhando no momento?", type: "textarea" },
        { id: "clientes_ativos", question: "Você possui clientes ou contas ativas atualmente?", type: "textarea" },
        {
          id: "tempo_atendimento",
          question: "Há quanto tempo você atua com atendimento ao cliente?",
          type: "textarea",
        },
        { id: "canais_atendimento", question: "Em quais canais de atendimento você já trabalhou?", type: "textarea" },
        {
          id: "ferramentas",
          question: "Quais ferramentas de CRM, gestão ou comunicação você domina?",
          type: "textarea",
        },
        {
          id: "desafio",
          question: "Qual foi o maior desafio que você enfrentou com um cliente insatisfeito e como solucionou?",
          type: "textarea",
        },
        {
          id: "estrategia_reclamacao",
          question: "Estratégia: Como você agiria ao receber uma reclamação pública em rede social?",
          type: "textarea",
        },
        {
          id: "estrategia_ausentes",
          question:
            "Estratégia: Como você gerencia o relacionamento de clientes que estão ausentes nas reuniões de acompanhamento?",
          type: "textarea",
        },
        {
          id: "estrategia_retencao",
          question: "Estratégia: Que ações você tomaria para melhorar a retenção de clientes insatisfeitos?",
          type: "textarea",
        },
        {
          id: "motivacao",
          question: "O que te motiva a buscar uma nova oportunidade neste momento?",
          type: "textarea",
        },
        { id: "remuneracao", question: "Qual é a sua pretensão de remuneração mensal?", type: "textarea" },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente em Balneário Camboriú?",
          type: "select",
          options: ["Sim, total", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question: "Caso queira, compartilhe algum feedback, case ou histórico de cliente que você gerenciou:",
          type: "text",
        },
      ],
      color: "green",
      image: "/vagas/ATENDIMENTOAOCLIENTE.png?height=600&width=600",
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
        { id: "telefone", question: "Telefone para contato (com DDD):", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        { id: "trabalha", question: "Você está trabalhando no momento?", type: "textarea" },
        { id: "projetos_ativos", question: "Você possui projetos ou clientes ativos atualmente?", type: "textarea" },
        { id: "tempo_projetos", question: "Há quanto tempo você atua com gestão de projetos?", type: "textarea" },
        { id: "tipos_projetos", question: "Quais tipos de projetos você já gerenciou?", type: "textarea" },
        { id: "ferramentas", question: "Quais ferramentas e metodologias de gestão você domina?", type: "textarea" },
        {
          id: "desafio",
          question: "Qual foi o maior desafio que você enfrentou como gestor de projetos e como solucionou?",
          type: "textarea",
        },
        {
          id: "estrategia_travado",
          question: "Estratégia: Como você agiria ao assumir um projeto com prazos estourados e equipe desmotivada?",
          type: "textarea",
        },
        {
          id: "estrategia_stakeholders",
          question:
            "Estratégia: Como garantiria a entrega de um projeto com múltiplos stakeholders e prazos apertados?",
          type: "textarea",
        },
        {
          id: "estrategia_escopo",
          question: "Estratégia: Como você lida com mudança de escopo durante a execução de um projeto?",
          type: "textarea",
        },
        {
          id: "motivacao",
          question: "O que te motiva a buscar uma nova oportunidade neste momento?",
          type: "textarea",
        },
        { id: "remuneracao", question: "Qual é a sua pretensão de remuneração mensal?", type: "textarea" },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente em Balneário Camboriú?",
          type: "select",
          options: ["Sim, total", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question: "Link de portfólio, cronogramas, apresentações ou cases coordenados:",
          type: "text",
        },
      ],
      color: "purple",
      image: "/vagas/GESTORDEPROJETOS.png?height=600&width=600",
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
        { id: "telefone", question: "Telefone para contato (com DDD):", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        { id: "trabalha", question: "Você está trabalhando no momento?", type: "textarea" },
        { id: "clientes_ativos", question: "Você possui clientes ou perfis ativos atualmente?", type: "textarea" },
        { id: "tempo_social_media", question: "Há quanto tempo você atua como social media?", type: "textarea" },
        { id: "nichos", question: "Quais tipos de contas ou nichos você já gerenciou?", type: "textarea" },
        { id: "ferramentas", question: "Quais ferramentas e plataformas você domina?", type: "textarea" },
        {
          id: "desafio",
          question: "Qual foi o maior desafio que você enfrentou com um cliente nas redes sociais e como solucionou?",
          type: "textarea",
        },
        {
          id: "estrategia_engajamento",
          question: "Estratégia: Como você agiria para reverter um perfil com engajamento em queda?",
          type: "textarea",
        },
        {
          id: "estrategia_nicho",
          question:
            "Estratégia: Se precisasse criar um calendário de conteúdo para um nicho que não domina, por onde começaria?",
          type: "textarea",
        },
        {
          id: "estrategia_alcance",
          question:
            "Estratégia: Como você aumentaria o alcance de um perfil com orçamento limitado para impulsionamento?",
          type: "textarea",
        },
        {
          id: "motivacao",
          question: "O que te motiva a buscar uma nova oportunidade neste momento?",
          type: "textarea",
        },
        { id: "remuneracao", question: "Qual é a sua pretensão de remuneração mensal?", type: "textarea" },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente em Balneário Camboriú?",
          type: "select",
          options: ["Sim, total", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question: "Link para perfis que você já gerenciou ou exemplos de conteúdos criados:",
          type: "text",
        },
      ],
      color: "pink",
      image: "/vagas/SOCIALMEDIA.png?height=600&width=600",
    },
    {
      id: "sdr",
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
        { id: "telefone", question: "Telefone para contato (com DDD):", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        { id: "trabalha", question: "Você está trabalhando no momento?", type: "textarea" },
        {
          id: "clientes_leads_ativos",
          question: "Você possui clientes, leads ativos ou parcerias comerciais em andamento?",
          type: "textarea",
        },
        { id: "tempo_vendas", question: "Há quanto tempo você atua com vendas ou pré-vendas?", type: "textarea" },
        { id: "atividades_prevenda", question: "Quais atividades de pré-venda você já executou?", type: "textarea" },
        { id: "ferramentas_crm", question: "Quais ferramentas comerciais ou de CRM você domina?", type: "textarea" },
        {
          id: "desafio",
          question: "Qual foi o maior desafio que você enfrentou na área comercial e como solucionou?",
          type: "textarea",
        },
        {
          id: "estrategia_lead_frio",
          question: "Estratégia: Como você reverteria um lead frio que demonstrou desinteresse?",
          type: "textarea",
        },
        {
          id: "estrategia_qualificacao",
          question: "Estratégia: Como você avalia se um lead está qualificado para passar para um closer?",
          type: "textarea",
        },
        {
          id: "estrategia_lista_leads",
          question: "Estratégia: Se tivesse que montar uma lista de leads para uma nova campanha, por onde começaria?",
          type: "textarea",
        },
        {
          id: "motivacao",
          question: "O que te motiva a buscar uma nova oportunidade neste momento?",
          type: "textarea",
        },
        { id: "remuneracao", question: "Qual é a sua pretensão de remuneração mensal?", type: "textarea" },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente em Balneário Camboriú?",
          type: "select",
          options: ["Sim, total", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question: "Deseja compartilhar algum vídeo, case de prospecção ou resultado comercial?",
          type: "text",
        },
      ],
      color: "orange",
      image: "/vagas/REPCOMERCIAL.png?height=600&width=600",
    },
    {
      id: "videomaker",
      title: "Videomaker",
      department: "Produção Audiovisual",
      type: "Tempo Integral",
      location: "Presencial – Balneário Camboriú",
      description:
        "Estamos em busca de um(a) Videomaker criativo(a), técnico(a) e apaixonado(a) por contar histórias através das lentes. Você será responsável por captar e editar vídeos para marcas e campanhas diversas, garantindo uma entrega audiovisual de alto impacto e alinhada à identidade dos nossos clientes.",
      requirements: [
        "Experiência em gravação e edição de vídeos;",
        "Conhecimento técnico em câmeras DSLR/Mirrorless ou smartphones com uso profissional;",
        "Domínio de programas de edição como Premiere, After Effects, CapCut, entre outros;",
        "Organização, proatividade e senso estético apurado;",
        "Capacidade de criar vídeos com foco em redes sociais (Reels, YouTube Shorts, etc.);",
        "Familiaridade com cronogramas de produção e prazos de entrega.",
      ],
      responsibilities: [
        "Captação de imagens em ambiente interno e externo;",
        "Edição de vídeos com foco em storytelling, ritmo e estética visual;",
        "Inserção de efeitos, trilhas, cortes e legendas;",
        "Colaboração com a equipe de social media e branding;",
        "Adaptação de vídeos para diferentes formatos e canais;",
        "Apoio em gravações de clientes e projetos internos.",
      ],
      questions: [
        { id: "nome", question: "Nome completo:", type: "text" },
        { id: "idade", question: "Idade:", type: "number" },
        { id: "cidade_estado", question: "Cidade e estado onde mora atualmente:", type: "text" },
        { id: "telefone", question: "Telefone para contato (com DDD):", type: "text" },
        { id: "email", question: "E-mail:", type: "text" },
        { id: "instagram", question: "Instagram (profissional ou pessoal):", type: "text" },
        { id: "linkedin", question: "LinkedIn (URL do perfil):", type: "text" },
        { id: "trabalha", question: "Você está trabalhando no momento?", type: "textarea" },
        { id: "projetos_ativos", question: "Você possui clientes ou projetos ativos atualmente?", type: "textarea" },
        { id: "tempo_videomaker", question: "Há quanto tempo você atua como videomaker?", type: "textarea" },
        {
          id: "tipos_projetos",
          question: "Com quais tipos de projetos audiovisuais você já trabalhou?",
          type: "textarea",
        },
        { id: "equipamentos", question: "Quais equipamentos e programas de edição você domina?", type: "textarea" },
        {
          id: "desafio",
          question: "Qual foi o maior desafio que você enfrentou em um projeto de vídeo e como solucionou?",
          type: "textarea",
        },
        {
          id: "estrategia_prazo",
          question: "Estratégia: Como você lidaria com um cliente que pede um vídeo com prazo extremamente curto?",
          type: "textarea",
        },
        {
          id: "estrategia_marca",
          question:
            "Estratégia: Se tivesse que criar um vídeo de vendas para uma marca que você nunca trabalhou, por onde começaria?",
          type: "textarea",
        },
        {
          id: "estrategia_orcamento",
          question: "Estratégia: Como garantir qualidade e criatividade em vídeos mesmo com orçamento limitado?",
          type: "textarea",
        },
        {
          id: "motivacao",
          question: "O que te motiva a buscar uma nova oportunidade neste momento?",
          type: "textarea",
        },
        { id: "remuneracao", question: "Qual é a sua pretensão de remuneração mensal?", type: "textarea" },
        {
          id: "modelo_contratacao",
          question: "Qual modelo de contratação você prefere?",
          type: "select",
          options: ["CLT", "PJ", "MEI", "Indiferente"],
        },
        {
          id: "presencial",
          question: "Tem disponibilidade para atuar presencialmente em Balneário Camboriú?",
          type: "select",
          options: ["Sim, total", "Sim, parcialmente (modelo híbrido)", "Não, apenas remoto"],
        },
        {
          id: "portfolio",
          question: "Link para portfólio de vídeos (Google Drive, YouTube, Vimeo, etc):",
          type: "text",
        },
      ],
      color: "teal",
      image: "/vagas/VIDEOMAKER.png?height=600&width=600",
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
    // Validate current step - todos os campos são obrigatórios exceto o último campo de portfólio
    if (selectedJob) {
      const questionIndex = currentStep
      if (questionIndex >= 0 && questionIndex < selectedJob.questions.length) {
        const question = selectedJob.questions[questionIndex]
        const value = formData[question.id] || ""

        // Validação de email
        if (question.id === "email") {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          setIsValid(value.trim().length > 0 && emailRegex.test(value))
          return
        }

        // Campo de portfólio é opcional
        if (question.id === "portfolio") {
          setIsValid(true)
          return
        }

        // Validação para campos de texto, textarea, select e number - todos obrigatórios
        setIsValid(value.trim().length > 0)
      }
    }
  }, [currentStep, formData, selectedJob])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isValid && !isSubmitting) {
      e.preventDefault()
      handleNext()
    }
  }

  const validateAllFields = () => {
    const errors: Record<string, string> = {}
    let hasErrors = false

    if (!selectedJob) return false

    selectedJob.questions.forEach((question) => {
      const value = formData[question.id] || ""

      // Campo de portfólio é opcional
      if (question.id === "portfolio") {
        return
      }

      // Verificar campos obrigatórios - TODOS os campos são obrigatórios exceto portfólio
      if (value.trim() === "") {
        errors[question.id] = "Este campo é obrigatório"
        hasErrors = true
        return
      }

      // Verificação específica para e-mail
      if (question.id === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(value)) {
          errors[question.id] = "Digite um e-mail válido"
          hasErrors = true
          return
        }
      }
    })

    setValidationErrors(errors)
    return !hasErrors
  }

  // Update the handleNext function to include better error handling for Monday.com integration
  const handleNext = async () => {
    if (isSubmitting) return

    if (isValid && selectedJob && currentStep < selectedJob.questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else if (isValid && selectedJob && currentStep === selectedJob.questions.length - 1) {
      // Validar todos os campos antes de enviar
      if (!validateAllFields()) {
        alert("Por favor, preencha todos os campos obrigatórios antes de enviar.")
        return
      }

      setIsSubmitting(true)

      try {
        // Enviar dados para a API
        const formattedData = {
          vaga: selectedJob.title,
          data_candidatura: new Date().toISOString(),
          ...formData,
          ...otherSpecifications,
        }

        const response = await fetch("/api/submit-job-application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Falha ao enviar candidatura")
        }

        const responseData = await response.json()

        if (responseData.success) {
          // Redirecionar para página de obrigado
          router.push("/trabalhe-conosco/obrigado")
        } else {
          alert(responseData.message || "Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.")
          setIsSubmitting(false)
        }
      } catch (error) {
        console.error("Erro ao enviar candidatura:", error)
        alert(
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.",
        )
        setIsSubmitting(false)
      }
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
      case "teal":
        return "from-[#14b8a6] to-[#0d9488]"
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
      case "teal":
        return "bg-[#14b8a6]/10"
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
      case "teal":
        return "text-[#14b8a6]"
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
            {question.type === "select" ? (
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
    <div className="min-h-screen w-screen lg:h-screen lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:h-full">
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
          <div className="absolute bottom-0 left-0 right-0 p-12 z-10 hidden lg:block">
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
                {selectedJob.requirements.slice(0, 5).map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <div className="min-w-[20px] h-5 flex items-center justify-center">
                      <div className={`w-1.5 h-1.5 rounded-full ${getTextColor(selectedJob.color)}`}></div>
                    </div>
                    {req}
                  </li>
                ))}
                {selectedJob.requirements.length > 8 && (
                  <li className="text-gray-400 text-sm">
                    + {selectedJob.requirements.length - 8} requisitos adicionais
                  </li>
                )}
              </ul>

              <h3 className="text-lg font-semibold text-white mb-2">Responsabilidades:</h3>
              <ul className="space-y-1">
                {selectedJob.responsibilities.slice(0, 7).map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <div className="min-w-[20px] h-5 flex items-center justify-center">
                      <div className={`w-1.5 h-1.5 rounded-full ${getTextColor(selectedJob.color)}`}></div>
                    </div>
                    {resp}
                  </li>
                ))}
                {selectedJob.responsibilities.length > 8 && (
                  <li className="text-gray-400 text-sm">
                    + {selectedJob.responsibilities.length - 8} responsabilidades adicionais
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 bg-[#0e1420] p-8 lg:p-16 flex flex-col lg:h-full min-h-screen lg:min-h-0">
          <div className="flex items-center justify-between mb-8">
            <Image src="/LogoCCS.png" alt="CC Studios Logo" width={150} height={40} />

            <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </button>
          </div>

          {/* Mobile Job Details */}
          <div className="lg:hidden mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              <span className={getTextColor(selectedJob.color)}>{selectedJob.title}</span>
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

            <button
              onClick={() => setShowJobDetails(!showJobDetails)}
              className={`flex items-center justify-between w-full p-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white hover:bg-[#0f1520] transition-colors mb-4`}
            >
              <span className="font-medium">Ver requisitos e responsabilidades</span>
              {showJobDetails ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            <AnimatePresence>
              {showJobDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-[#0a0f18] border border-gray-800 rounded-md p-4 space-y-4 mb-4">
                    <p className="text-gray-300 text-sm">{selectedJob.description}</p>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Requisitos:</h3>
                      <ul className="space-y-1">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="min-w-[16px] h-5 flex items-center justify-center">
                              <div className={`w-1 h-1 rounded-full ${getTextColor(selectedJob.color)}`}></div>
                            </div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Responsabilidades:</h3>
                      <ul className="space-y-1">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="min-w-[16px] h-5 flex items-center justify-center">
                              <div className={`w-1 h-1 rounded-full ${getTextColor(selectedJob.color)}`}></div>
                            </div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 flex flex-col justify-center lg:justify-center">
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
                    disabled={!isValid || isSubmitting}
                    className={cn(
                      `w-full bg-gradient-to-r ${getGradientColors(
                        selectedJob.color,
                      )} hover:opacity-90 text-white py-6 rounded-md group transition-all duration-300`,
                      (!isValid || isSubmitting) && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        {currentStep === selectedJob.questions.length - 1 ? "Enviar Candidatura" : "Prosseguir"}
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
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

          <div className="mt-auto pt-8 lg:mt-auto lg:pt-8">
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

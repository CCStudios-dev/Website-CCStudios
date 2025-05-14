"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Briefcase, Users, Clock, MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

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
    type: "text" | "textarea" | "select"
    options?: string[]
    placeholder?: string
  }[]
  color: "blue" | "purple" | "green" | "orange" | "pink"
  image: string
}

export default function TrabalheConoscoPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
  })
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)
  const [isValid, setIsValid] = useState(false)

  const jobPositions: JobPosition[] = [
    {
      id: "gestor-trafego",
      title: "Gestor de Tráfego",
      department: "Marketing Digital",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Estamos em busca de um Gestor de Tráfego experiente para desenvolver e implementar estratégias de tráfego pago que maximizem o ROI para nossos clientes. O candidato ideal tem experiência comprovada em campanhas de Google Ads, Facebook Ads e outras plataformas de mídia paga.",
      requirements: [
        "Experiência mínima de 2 anos como Gestor de Tráfego",
        "Conhecimento avançado em Google Ads, Facebook Ads, Instagram Ads e LinkedIn Ads",
        "Experiência com ferramentas de análise como Google Analytics e Data Studio",
        "Conhecimento em SEO e marketing de conteúdo",
        "Capacidade de analisar dados e tomar decisões baseadas em métricas",
        "Excelentes habilidades de comunicação e trabalho em equipe",
      ],
      responsibilities: [
        "Desenvolver e implementar estratégias de tráfego pago para diversos clientes",
        "Gerenciar orçamentos de mídia e otimizar campanhas para maximizar o ROI",
        "Realizar análises de performance e apresentar relatórios detalhados",
        "Identificar oportunidades de crescimento e propor melhorias contínuas",
        "Manter-se atualizado sobre as tendências e melhores práticas do mercado",
        "Colaborar com as equipes de design e conteúdo para criar materiais eficazes",
      ],
      questions: [
        {
          id: "experience",
          question: "Quantos anos de experiência você tem com tráfego pago?",
          type: "select",
          options: ["Menos de 1 ano", "1-2 anos", "3-5 anos", "Mais de 5 anos"],
        },
        {
          id: "platforms",
          question: "Com quais plataformas de anúncios você tem experiência?",
          type: "textarea",
          placeholder: "Ex: Google Ads, Facebook Ads, LinkedIn Ads...",
        },
        {
          id: "campaign",
          question: "Descreva uma campanha de tráfego pago bem-sucedida que você gerenciou",
          type: "textarea",
          placeholder: "Conte sobre os objetivos, estratégias, resultados...",
        },
        {
          id: "tools",
          question: "Quais ferramentas de análise você utiliza no seu dia a dia?",
          type: "textarea",
          placeholder: "Ex: Google Analytics, Data Studio, SEMrush...",
        },
        {
          id: "challenge",
          question: "Qual foi o maior desafio que você enfrentou em uma campanha e como o superou?",
          type: "textarea",
          placeholder: "Descreva a situação, ação e resultado...",
        },
      ],
      color: "blue",
      image: "/MARKETING 01.png?height=600&width=600",
    },
    {
      id: "gestor-projetos",
      title: "Gestor de Projetos",
      department: "Operações",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Procuramos um Gestor de Projetos organizado e proativo para coordenar nossos projetos de marketing digital. O profissional será responsável por garantir que todos os projetos sejam entregues dentro do prazo, orçamento e escopo definidos, mantendo a qualidade e a satisfação do cliente.",
      requirements: [
        "Experiência mínima de 3 anos em gestão de projetos, preferencialmente em agências digitais",
        "Conhecimento em metodologias ágeis (Scrum, Kanban)",
        "Familiaridade com ferramentas de gestão de projetos (Asana, Trello, Monday)",
        "Excelentes habilidades de comunicação, organização e liderança",
        "Capacidade de gerenciar múltiplos projetos simultaneamente",
        "Conhecimento básico de marketing digital e seus processos",
      ],
      responsibilities: [
        "Coordenar projetos de marketing digital do início ao fim",
        "Definir cronogramas, recursos necessários e orçamentos",
        "Gerenciar equipes multidisciplinares e garantir a entrega dentro dos prazos",
        "Manter comunicação constante com clientes e stakeholders",
        "Identificar e mitigar riscos nos projetos",
        "Documentar processos e criar relatórios de status",
        "Buscar continuamente melhorias nos processos de gestão",
      ],
      questions: [
        {
          id: "experience",
          question: "Quantos anos de experiência você tem com gestão de projetos?",
          type: "select",
          options: ["Menos de 1 ano", "1-3 anos", "4-6 anos", "Mais de 6 anos"],
        },
        {
          id: "methodologies",
          question: "Quais metodologias de gestão de projetos você utiliza?",
          type: "textarea",
          placeholder: "Ex: Scrum, Kanban, Waterfall...",
        },
        {
          id: "tools",
          question: "Com quais ferramentas de gestão de projetos você tem experiência?",
          type: "textarea",
          placeholder: "Ex: Asana, Trello, Monday, Jira...",
        },
        {
          id: "challenge",
          question: "Descreva um projeto desafiador que você gerenciou e como garantiu seu sucesso",
          type: "textarea",
          placeholder: "Conte sobre o projeto, desafios e soluções...",
        },
        {
          id: "multiple",
          question: "Como você gerencia múltiplos projetos simultaneamente?",
          type: "textarea",
          placeholder: "Descreva sua abordagem e estratégias...",
        },
      ],
      color: "purple",
      image: "/CARD LAPTOP.png?height=600&width=600",
    },
    {
      id: "atendimento-cliente",
      title: "Atendimento ao Cliente CS",
      department: "Customer Success",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Buscamos um profissional de Atendimento ao Cliente para integrar nossa equipe de Customer Success. O candidato ideal é empático, comunicativo e orientado à solução de problemas, capaz de construir relacionamentos duradouros com nossos clientes e garantir sua satisfação e sucesso.",
      requirements: [
        "Experiência mínima de 1 ano em atendimento ao cliente ou customer success",
        "Excelentes habilidades de comunicação verbal e escrita",
        "Capacidade de gerenciar múltiplos clientes e demandas simultaneamente",
        "Conhecimento básico de marketing digital",
        "Habilidade para identificar oportunidades de upsell e cross-sell",
        "Experiência com ferramentas de CRM e atendimento ao cliente",
      ],
      responsibilities: [
        "Ser o ponto de contato principal entre a empresa e os clientes",
        "Realizar reuniões periódicas de acompanhamento com os clientes",
        "Identificar necessidades dos clientes e propor soluções adequadas",
        "Gerenciar e resolver problemas e reclamações",
        "Monitorar a satisfação dos clientes e implementar melhorias",
        "Colaborar com as equipes internas para garantir a entrega de valor aos clientes",
        "Documentar interações com clientes e manter o CRM atualizado",
      ],
      questions: [
        {
          id: "experience",
          question: "Quantos anos de experiência você tem com atendimento ao cliente?",
          type: "select",
          options: ["Menos de 1 ano", "1-2 anos", "3-5 anos", "Mais de 5 anos"],
        },
        {
          id: "tools",
          question: "Com quais ferramentas de CRM ou atendimento ao cliente você tem experiência?",
          type: "textarea",
          placeholder: "Ex: Zendesk, Intercom, Salesforce...",
        },
        {
          id: "challenge",
          question: "Descreva uma situação difícil com um cliente e como você a resolveu",
          type: "textarea",
          placeholder: "Conte sobre o problema, sua abordagem e o resultado...",
        },
        {
          id: "retention",
          question: "Quais estratégias você utiliza para aumentar a retenção de clientes?",
          type: "textarea",
          placeholder: "Descreva suas abordagens e métodos...",
        },
        {
          id: "feedback",
          question: "Como você lida com feedback negativo de clientes?",
          type: "textarea",
          placeholder: "Explique sua abordagem com exemplos...",
        },
      ],
      color: "green",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "representante-comercial",
      title: "Representante Comercial (PréVenda)",
      department: "Comercial",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Estamos à procura de um Representante Comercial para nossa equipe de pré-vendas. O profissional será responsável por identificar oportunidades de negócio, qualificar leads e apresentar nossas soluções de marketing digital para potenciais clientes, preparando o terreno para o fechamento de vendas.",
      requirements: [
        "Experiência mínima de 1 ano em vendas B2B ou pré-vendas",
        "Conhecimento do mercado de marketing digital",
        "Excelentes habilidades de comunicação e apresentação",
        "Capacidade de entender as necessidades dos clientes e alinhar com nossas soluções",
        "Habilidade para qualificar leads e identificar oportunidades de negócio",
        "Familiaridade com ferramentas de CRM e processos de vendas",
      ],
      responsibilities: [
        "Realizar o primeiro contato com leads qualificados",
        "Conduzir reuniões de descoberta para entender as necessidades dos potenciais clientes",
        "Apresentar nossas soluções de marketing digital de forma clara e persuasiva",
        "Qualificar oportunidades e preparar o terreno para o time de vendas",
        "Alimentar o CRM com informações relevantes sobre os leads",
        "Colaborar com as equipes de marketing e vendas para otimizar o funil de conversão",
        "Manter-se atualizado sobre o mercado, concorrentes e tendências",
      ],
      questions: [
        {
          id: "experience",
          question: "Quantos anos de experiência você tem com vendas ou pré-vendas?",
          type: "select",
          options: ["Menos de 1 ano", "1-2 anos", "3-5 anos", "Mais de 5 anos"],
        },
        {
          id: "segment",
          question: "Em quais segmentos de mercado você já atuou com vendas?",
          type: "textarea",
          placeholder: "Ex: Tecnologia, Educação, Saúde...",
        },
        {
          id: "qualification",
          question: "Qual é sua abordagem para qualificar leads?",
          type: "textarea",
          placeholder: "Descreva seu processo e critérios...",
        },
        {
          id: "presentation",
          question: "Como você prepara e conduz uma apresentação para um potencial cliente?",
          type: "textarea",
          placeholder: "Explique sua metodologia e técnicas...",
        },
        {
          id: "objection",
          question: "Como você lida com objeções durante o processo de pré-venda?",
          type: "textarea",
          placeholder: "Descreva sua abordagem com exemplos...",
        },
      ],
      color: "orange",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "social-media",
      title: "Social Media",
      department: "Marketing de Conteúdo",
      type: "Tempo Integral",
      location: "Presencial",
      description:
        "Buscamos um Social Media criativo e estratégico para gerenciar as redes sociais de nossos clientes. O profissional será responsável por criar e implementar estratégias de conteúdo que aumentem o engajamento, a visibilidade e as conversões.",
      requirements: [
        "Experiência mínima de 2 anos como Social Media",
        "Conhecimento avançado das principais plataformas de redes sociais",
        "Excelente redação e capacidade de criar conteúdos engajadores",
        "Conhecimento em ferramentas de design (Canva, Photoshop) e edição de vídeo",
        "Familiaridade com ferramentas de agendamento e análise de redes sociais",
        "Conhecimento em estratégias de growth hacking e marketing de conteúdo",
      ],
      responsibilities: [
        "Desenvolver estratégias de conteúdo para redes sociais alinhadas aos objetivos dos clientes",
        "Criar calendários editoriais e produzir conteúdos relevantes e engajadores",
        "Gerenciar a comunidade online, respondendo comentários e mensagens",
        "Monitorar métricas e KPIs, apresentando relatórios de performance",
        "Identificar tendências e oportunidades para melhorar o desempenho das redes sociais",
        "Colaborar com designers e copywriters para criar materiais de alta qualidade",
        "Manter-se atualizado sobre as mudanças e novidades nas plataformas de redes sociais",
      ],
      questions: [
        {
          id: "experience",
          question: "Quantos anos de experiência você tem como Social Media?",
          type: "select",
          options: ["Menos de 1 ano", "1-2 anos", "3-5 anos", "Mais de 5 anos"],
        },
        {
          id: "platforms",
          question: "Com quais plataformas de redes sociais você tem mais experiência?",
          type: "textarea",
          placeholder: "Ex: Instagram, Facebook, LinkedIn, TikTok...",
        },
        {
          id: "strategy",
          question: "Descreva uma estratégia de conteúdo bem-sucedida que você implementou",
          type: "textarea",
          placeholder: "Conte sobre os objetivos, abordagem e resultados...",
        },
        {
          id: "tools",
          question: "Quais ferramentas você utiliza para criação e gestão de conteúdo?",
          type: "textarea",
          placeholder: "Ex: Canva, Photoshop, Later, Hootsuite...",
        },
        {
          id: "trend",
          question: "Como você se mantém atualizado sobre as tendências de redes sociais?",
          type: "textarea",
          placeholder: "Descreva suas fontes e métodos...",
        },
      ],
      color: "pink",
      image: "/placeholder.svg?height=600&width=600",
    },
  ]

  // Add data-page attribute to body to hide header/footer when showing form
  useEffect(() => {
    if (showForm) {
      document.body.setAttribute("data-page", "job-application")
    } else {
      document.body.removeAttribute("data-page")
    }

    // Cleanup function to remove attribute when component unmounts
    return () => {
      document.body.removeAttribute("data-page")
    }
  }, [showForm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateStep = () => {
    if (!selectedJob) return false

    switch (currentStep) {
      case 0: // Basic info
        return (
          formData.name?.trim().split(" ").length >= 2 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email || "") &&
          formData.phone?.replace(/\D/g, "").length >= 10
        )
      case 1: // Professional info
        return formData.linkedin?.trim().length > 0
      default:
        // Job specific questions
        const questionIndex = currentStep - 2
        if (questionIndex >= 0 && questionIndex < selectedJob.questions.length) {
          const question = selectedJob.questions[questionIndex]
          return formData[question.id]?.trim().length > 0
        }
        return false
    }
  }

  const handleNext = () => {
    const isCurrentStepValid = validateStep()
    setIsValid(isCurrentStepValid)

    if (isCurrentStepValid) {
      if (selectedJob && currentStep < selectedJob.questions.length + 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Form submission
        console.log("Form submitted:", formData)
        alert("Candidatura enviada com sucesso! Em breve entraremos em contato.")
        setShowForm(false)
        setCurrentStep(0)
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          portfolio: "",
        })
        setSelectedJob(null)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      setShowForm(false)
      setSelectedJob(null)
    }
  }

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job)
    setShowForm(true)
    setCurrentStep(0)
    setActiveTab(null)
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
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

  const renderFormStep = () => {
    if (!selectedJob) return null

    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className={getTextColor(selectedJob.color)}>Informações Básicas</p>
              <h2 className="text-2xl font-bold text-white">Vamos começar com seus dados pessoais</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome e sobrenome"
                  className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  placeholder="Digite seu e-mail"
                  className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value)
                    setFormData((prev) => ({ ...prev, phone: formatted }))
                  }}
                  placeholder="(00) 00000-0000"
                  className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                />
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className={getTextColor(selectedJob.color)}>Informações Profissionais</p>
              <h2 className="text-2xl font-bold text-white">Conte-nos sobre sua experiência profissional</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-1">
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin || ""}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/seu-perfil"
                  className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-1">
                  Portfólio ou Site Pessoal (opcional)
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio || ""}
                  onChange={handleInputChange}
                  placeholder="https://seu-portfolio.com"
                  className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">
                  Currículo (PDF)
                </label>
                <div className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 flex items-center justify-between">
                  <span className="text-gray-400">Selecione um arquivo</span>
                  <Button className={`${getGlowColor(selectedJob.color)} ${getTextColor(selectedJob.color)}`}>
                    Escolher arquivo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        const questionIndex = currentStep - 2
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
                    id={question.id}
                    name={question.id}
                    value={formData[question.id] || ""}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="" disabled selected>
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
                    id={question.id}
                    name={question.id}
                    value={formData[question.id] || ""}
                    onChange={handleInputChange}
                    placeholder={question.placeholder}
                    className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 min-h-[150px]"
                  />
                ) : (
                  <input
                    type="text"
                    id={question.id}
                    name={question.id}
                    value={formData[question.id] || ""}
                    onChange={handleInputChange}
                    placeholder={question.placeholder}
                    className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                  />
                )}
              </div>
            </div>
          )
        }
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className={getTextColor(selectedJob.color)}>Revisão</p>
              <h2 className="text-2xl font-bold text-white">Revise suas informações antes de enviar</h2>
            </div>

            <div className="space-y-4 bg-[#111827]/50 p-6 rounded-xl">
              <p className="text-white">
                <span className="text-gray-400">Nome:</span> {formData.name}
              </p>
              <p className="text-white">
                <span className="text-gray-400">E-mail:</span> {formData.email}
              </p>
              <p className="text-white">
                <span className="text-gray-400">Telefone:</span> {formData.phone}
              </p>
              <p className="text-white">
                <span className="text-gray-400">LinkedIn:</span> {formData.linkedin}
              </p>
              {formData.portfolio && (
                <p className="text-white">
                  <span className="text-gray-400">Portfólio:</span> {formData.portfolio}
                </p>
              )}
            </div>
          </div>
        )
    }
  }

  if (showForm && selectedJob) {
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
              <p className="text-gray-300 max-w-md">{selectedJob.description}</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 bg-[#0e1420] p-8 lg:p-16 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <Image src="/logoCCS.png" alt="CC Studios Logo" width={150} height={40} />

              <button
                onClick={handleBack}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
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
                    {renderFormStep()}

                    <Button
                      onClick={handleNext}
                      className={cn(
                        `w-full bg-gradient-to-r ${getGradientColors(
                          selectedJob.color,
                        )} hover:opacity-90 text-white py-6 rounded-md group transition-all duration-300`,
                        !validateStep() && "opacity-50 cursor-not-allowed",
                      )}
                      disabled={!validateStep()}
                    >
                      {currentStep === selectedJob.questions.length + 2 ? "Enviar Candidatura" : "Prosseguir"}
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
                  {Array.from({ length: selectedJob.questions.length + 3 }).map((_, index) => (
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
                  Etapa {currentStep + 1} de {selectedJob.questions.length + 3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-[#111827]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Por que trabalhar na CC Studios?</h2>
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
                    "Na CC Studios, valorizamos a criatividade, inovação e, acima de tudo, as pessoas."
                  </p>
                  <p className="text-[#4bb6ef]">Luciano Matos, CEO & Fundador</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
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
                Confira nossas vagas abertas e encontre a oportunidade perfeita para o seu próximo desafio profissional.
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

      {/* CTA Section */}
      <section className="relative py-32 bg-[#0a0f18]">
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
                    onClick={() => {
                      setSelectedJob({
                        id: "banco-talentos",
                        title: "Banco de Talentos",
                        department: "Diversos",
                        type: "A definir",
                        location: "A definir",
                        description: "Cadastre-se em nosso banco de talentos para futuras oportunidades.",
                        requirements: [],
                        responsibilities: [],
                        questions: [
                          {
                            id: "area",
                            question: "Em qual área você gostaria de trabalhar?",
                            type: "select",
                            options: [
                              "Marketing Digital",
                              "Desenvolvimento",
                              "Design",
                              "Comercial",
                              "Administrativo",
                              "Outra",
                            ],
                          },
                          {
                            id: "experience",
                            question: "Conte-nos sobre sua experiência profissional",
                            type: "textarea",
                            placeholder: "Descreva suas experiências anteriores, habilidades e competências...",
                          },
                          {
                            id: "motivation",
                            question: "Por que você gostaria de trabalhar na CC Studios?",
                            type: "textarea",
                            placeholder: "Conte-nos sua motivação...",
                          },
                        ],
                        color: "blue",
                        image: "/placeholder.svg?height=600&width=600",
                      })
                      setShowForm(true)
                    }}
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

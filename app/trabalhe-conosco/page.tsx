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
  color: "blue" | "purple" | "green" | "orange" | "pink" | "teal" | "cyan"
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
      questions: [],
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
      questions: [],
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
      questions: [],
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
      questions: [],
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
      questions: [],
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
      questions: [],
      color: "cyan",
      image: "/vagas/VIDEOMAKER.png?height=600&width=600",
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
      case "teal":
        return "from-[#14b8a6] to-[#0d9488]"
      case "cyan":
        return "from-[#06b6d4] to-[#0891b2]"
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
      case "cyan":
        return "bg-[#06b6d4]/10"
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
      case "cyan":
        return "text-[#06b6d4]"
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
      case "teal":
        return "border-[#14b8a6]"
      case "cyan":
        return "border-[#06b6d4]"
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
                    <p className="text-white text-xl font-semibold mb-2">Faça parte da nossa equipe!</p>
                    <p className="text-gray-300">Junte-se a nós e construa uma carreira sólida no marketing digital.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Banco de Talentos Section */}
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
                <span className="text-[#4bb6ef] font-medium text-sm">Banco de Talentos</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Não encontrou sua <GradientText>vaga ideal?</GradientText>
              </h2>

              <p className="text-gray-300 text-lg mb-8">
                Cadastre-se em nosso banco de talentos e seja o primeiro a saber sobre novas oportunidades que combinam
                com seu perfil.
              </p>

              <Button
                onClick={() => router.push("/trabalhe-conosco/banco-talentos")}
                className="bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8] hover:opacity-90 text-white px-8 py-4 rounded-md text-lg"
              >
                Cadastrar no Banco de Talentos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

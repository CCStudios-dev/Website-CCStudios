"use client"

import { Mail, Users, BarChart3, Zap, Target, LineChart } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTestimonial } from "@/components/service-testimonial"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceCTA } from "@/components/service-cta"

export default function EmailMarketingPage() {
  const features = [
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Campanhas Personalizadas",
      description: "Emails estrategicamente criados e segmentados para maximizar engajamento e conversões.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Automação de Marketing",
      description: "Fluxos automatizados que nutrem leads e guiam clientes pela jornada de compra de forma eficiente.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Análise de Desempenho",
      description: "Relatórios detalhados com métricas essenciais para otimizar continuamente suas campanhas.",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Integração com CRM",
      description: "Sincronização perfeita com seu sistema de CRM para uma visão completa da jornada do cliente.",
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Segmentação Avançada",
      description: "Divisão estratégica da sua base de contatos para mensagens altamente relevantes e personalizadas.",
    },
    {
      icon: <LineChart className="h-7 w-7" />,
      title: "Testes A/B",
      description: "Otimização contínua através de testes comparativos para identificar as melhores estratégias.",
    },
  ]

  const processSteps = [
    {
      title: "Estratégia",
      description: "Definição de objetivos, público-alvo e planejamento detalhado das campanhas e automações.",
    },
    {
      title: "Criação",
      description: "Desenvolvimento de conteúdo persuasivo e design atraente que reflete sua marca e gera resultados.",
    },
    {
      title: "Implementação",
      description: "Configuração técnica, segmentação da base e programação das campanhas e fluxos automatizados.",
    },
    {
      title: "Análise e Otimização",
      description:
        "Monitoramento constante de métricas e ajustes estratégicos para melhorar continuamente os resultados.",
    },
  ]

  const faqs = [
    {
      question: "Qual é a frequência ideal para enviar emails?",
      answer:
        "A frequência ideal varia conforme seu público e tipo de negócio. Geralmente, recomendamos de 1 a 4 emails por mês para newsletters e comunicações regulares. Para campanhas específicas ou fluxos de automação, a frequência pode ser diferente. Realizamos testes para determinar a frequência ideal para o seu público específico.",
    },
    {
      question: "Como vocês ajudam a construir uma lista de emails?",
      answer:
        "Desenvolvemos estratégias éticas e eficazes para crescimento de lista, incluindo criação de conteúdo premium (ebooks, webinars), formulários otimizados, landing pages de conversão e integrações com suas redes sociais e site. Focamos sempre em qualidade e conformidade com leis de proteção de dados.",
    },
    {
      question: "Quais métricas são monitoradas nas campanhas?",
      answer:
        "Monitoramos todas as métricas essenciais, incluindo taxa de abertura, taxa de cliques, taxa de conversão, taxa de rejeição, cancelamentos de inscrição e ROI. Fornecemos relatórios detalhados com análises e recomendações para melhorar continuamente o desempenho das campanhas.",
    },
    {
      question: "As campanhas são compatíveis com a LGPD?",
      answer:
        "Absolutamente! Todas as nossas estratégias e implementações seguem rigorosamente a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações internacionais. Implementamos processos de opt-in adequados, gerenciamento de consentimento e políticas de privacidade claras para garantir total conformidade.",
    },
    {
      question: "Quais plataformas de email marketing vocês utilizam?",
      answer:
        "Trabalhamos com diversas plataformas líderes do mercado, incluindo Mailchimp, RD Station, ActiveCampaign, HubSpot e SendGrid. A escolha da plataforma depende das necessidades específicas do seu negócio, volume de envios e recursos necessários. Podemos recomendar a melhor opção para seu caso ou trabalhar com sua plataforma atual.",
    },
  ]

  return (
    <>
      <ServiceHero
        title="Email Marketing Estratégico para Resultados Excepcionais"
        subtitle="Email Marketing"
        description="Campanhas e automações de email que engajam sua audiência, nutrem leads e impulsionam vendas com mensagens personalizadas e relevantes."
        image="/CARD - EMAIL MKT.png?height=600&width=600"
        gradient="green"
      />

      <ServiceFeatures
        title="Soluções Completas de Email Marketing"
        subtitle="Nossos Serviços"
        description="Estratégias personalizadas que transformam seu email marketing em um poderoso canal de vendas e relacionamento."
        features={features}
        gradient="green"
      />

      <ServiceProcess
        title="Nosso Processo de Trabalho"
        subtitle="Metodologia"
        description="Uma abordagem estruturada e orientada a dados para criar campanhas de email marketing que geram resultados consistentes."
        steps={processSteps}
        gradient="green"
      />

      <ServiceTestimonial
        quote="As campanhas de email marketing da CC Studios transformaram completamente nossa estratégia de nutrição de leads. Aumentamos nossa taxa de conversão em 85% e o ROI das campanhas é simplesmente extraordinário."
        author="Marcos Oliveira"
        position="Diretor Comercial"
        company="Bocas Best Collision Center"
        image="/placeholder.svg?height=600&width=800"
        logo="/placeholder.svg?height=60&width=160"
        gradient="green"
      />

      <ServiceFAQ
        title="Perguntas Frequentes"
        subtitle="Dúvidas"
        description="Respostas para as perguntas mais comuns sobre nossos serviços de email marketing."
        faqs={faqs}
        gradient="green"
      />

      <ServiceCTA
        title="Pronto para revolucionar seu email marketing?"
        description="Entre em contato hoje mesmo e descubra como podemos transformar suas campanhas de email em uma poderosa ferramenta de vendas e relacionamento."
        primaryButtonText="Fale com um especialista"
        secondaryButtonText="Ver casos de sucesso"
        gradient="green"
      />
    </>
  )
}

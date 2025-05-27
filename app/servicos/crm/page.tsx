"use client"

import { Users, Database, BarChart3, Zap, Target, LineChart } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTestimonial } from "@/components/service-testimonial"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceCTA } from "@/components/service-cta"

export default function CRMPage() {
  const features = [
    {
      icon: <Database className="h-7 w-7" />,
      title: "Implementação de CRM",
      description:
        "Configuração personalizada de plataformas de CRM adaptadas às necessidades específicas do seu negócio.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Gestão de Relacionamento",
      description:
        "Estratégias para acompanhar e melhorar cada interação com seus clientes ao longo de toda a jornada.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Análise de Dados",
      description:
        "Transformação de dados em insights acionáveis para tomada de decisões estratégicas baseadas em evidências.",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Automação de Processos",
      description: "Fluxos automatizados que aumentam a eficiência operacional e melhoram a experiência do cliente.",
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Segmentação de Clientes",
      description: "Categorização estratégica da sua base de clientes para comunicações e ofertas personalizadas.",
    },
    {
      icon: <LineChart className="h-7 w-7" />,
      title: "Relatórios e Dashboards",
      description: "Visualizações claras e intuitivas dos seus dados para monitoramento constante e otimização.",
    },
  ]

  const processSteps = [
    {
      title: "Diagnóstico",
      description: "Análise profunda dos seus processos atuais, necessidades específicas e objetivos de negócio.",
    },
    {
      title: "Implementação",
      description:
        "Configuração e personalização da plataforma de CRM, incluindo integrações com seus sistemas existentes.",
    },
    {
      title: "Treinamento",
      description: "Capacitação completa da sua equipe para maximizar o uso e os benefícios da plataforma.",
    },
    {
      title: "Otimização Contínua",
      description:
        "Acompanhamento, análise e refinamento constante dos processos para melhorar continuamente os resultados.",
    },
  ]

  const faqs = [
    {
      question: "Quais plataformas de CRM vocês trabalham?",
      answer:
        "Trabalhamos com diversas plataformas líderes do mercado, incluindo HubSpot, Salesforce, RD Station, Pipedrive e Microsoft Dynamics. A escolha da plataforma depende das necessidades específicas do seu negócio, orçamento e objetivos. Podemos recomendar a melhor opção para seu caso ou implementar e otimizar sua plataforma atual.",
    },
    {
      question: "Quanto tempo leva para implementar um sistema de CRM?",
      answer:
        "O tempo de implementação varia conforme a complexidade do projeto e a plataforma escolhida. Uma implementação básica pode levar de 2 a 4 semanas, enquanto projetos mais complexos com múltiplas integrações e personalizações podem levar de 2 a 3 meses. Durante o diagnóstico inicial, forneceremos um cronograma detalhado específico para o seu projeto.",
    },
    {
      question: "É possível integrar o CRM com outros sistemas que já utilizamos?",
      answer:
        "Sim, realizamos integrações com diversos sistemas como ERP, plataformas de e-commerce, ferramentas de marketing, sistemas de atendimento ao cliente e muito mais. Nossas soluções garantem que os dados fluam perfeitamente entre todos os sistemas, proporcionando uma visão unificada do cliente e processos mais eficientes.",
    },
    {
      question: "Vocês oferecem treinamento para nossa equipe?",
      answer:
        "Absolutamente! O treinamento é uma parte fundamental do nosso processo. Oferecemos capacitação completa para sua equipe, incluindo sessões práticas, documentação personalizada e suporte contínuo. Nosso objetivo é garantir que sua equipe esteja confiante e capacitada para maximizar o uso da plataforma.",
    },
    {
      question: "Como o CRM pode ajudar a aumentar as vendas da minha empresa?",
      answer:
        "Um CRM bem implementado pode aumentar suas vendas de diversas formas: organizando seu funil de vendas, identificando oportunidades de cross-selling e up-selling, automatizando tarefas repetitivas para que sua equipe foque no que realmente importa, fornecendo insights sobre o comportamento dos clientes, e permitindo uma abordagem mais personalizada em cada interação. Nossos clientes tipicamente veem um aumento de 20-30% nas taxas de conversão após a implementação adequada de um CRM.",
    },
  ]

  return (
    <>
      <ServiceHero
        title="Soluções de CRM para Potencializar seu Negócio"
        subtitle="CRM"
        description="Transforme o relacionamento com seus clientes e impulsione suas vendas com soluções de CRM personalizadas e estratégicas."
        image="/services/CARD - CRM.png?height=600&width=600"
        gradient="orange"
      />

      <ServiceFeatures
        title="Soluções Completas de CRM"
        subtitle="Nossos Serviços"
        description="Estratégias e implementações que transformam dados em relacionamentos duradouros e vendas consistentes."
        features={features}
        gradient="orange"
      />

      <ServiceProcess
        title="Nosso Processo de Implementação"
        subtitle="Metodologia"
        description="Uma abordagem estruturada e personalizada para garantir que sua solução de CRM atenda perfeitamente às necessidades do seu negócio."
        steps={processSteps}
        gradient="orange"
      />

      <ServiceTestimonial
        quote="A implementação de CRM realizada pela CCStudios revolucionou nossos processos de vendas. Aumentamos nossa taxa de conversão em 35% e reduzimos o ciclo de vendas em quase 40%."
        author="Doutora Clarissa"
        position="Diretora"
        company="DoctorFIT"
        image="/clientes/doctorcreative.png?height=600&width=800"
        logo="/clientes/doctorfit.png?height=60&width=160"
        gradient="orange"
      />

      <ServiceFAQ
        title="Perguntas Frequentes"
        subtitle="Dúvidas"
        description="Respostas para as perguntas mais comuns sobre nossos serviços de CRM."
        faqs={faqs}
        gradient="orange"
      />

      <ServiceCTA
        title="Pronto para transformar seu relacionamento com clientes?"
        description="Entre em contato hoje mesmo e descubra como nossas soluções de CRM podem impulsionar seu negócio com processos mais eficientes e relacionamentos mais fortes."
        primaryButtonText="Solicitar diagnóstico gratuito"
        secondaryButtonText="Ver casos de sucesso"
        gradient="orange"
      />
    </>
  )
}

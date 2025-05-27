"use client"

import { Globe, Code, Smartphone, Zap, Search, ShieldCheck } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTestimonial } from "@/components/service-testimonial"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceCTA } from "@/components/service-cta"

export default function DesenvolvimentoSitesLandingPagesPage() {
  const features = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Sites Institucionais",
      description:
        "Sites profissionais e responsivos que representam sua marca com excelência e convertem visitantes em clientes.",
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Landing Pages",
      description:
        "Páginas de conversão otimizadas para transformar visitantes em leads qualificados e aumentar suas taxas de conversão.",
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Design Responsivo",
      description:
        "Interfaces adaptáveis que funcionam perfeitamente em todos os dispositivos, de smartphones a desktops.",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Performance Otimizada",
      description: "Sites rápidos e eficientes que carregam em segundos, melhorando a experiência do usuário e o SEO.",
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "SEO On-page",
      description: "Otimização técnica completa para melhorar o posicionamento do seu site nos mecanismos de busca.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Segurança e Manutenção",
      description: "Proteção contínua contra ameaças e atualizações regulares para manter seu site seguro e funcional.",
    },
  ]

  const processSteps = [
    {
      title: "Briefing e Planejamento",
      description:
        "Entendimento profundo dos seus objetivos, público-alvo e necessidades específicas para criar um plano detalhado.",
    },
    {
      title: "Design e Prototipagem",
      description:
        "Criação de wireframes e protótipos interativos para visualizar a estrutura e funcionalidades antes do desenvolvimento.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Codificação do site com as melhores práticas e tecnologias atuais, garantindo qualidade e performance.",
    },
    {
      title: "Testes e Lançamento",
      description:
        "Testes rigorosos em múltiplos dispositivos e navegadores, seguidos pelo lançamento e monitoramento inicial.",
    },
  ]

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site ou landing page?",
      answer:
        "O tempo de desenvolvimento varia conforme a complexidade do projeto. Uma landing page geralmente leva de 1 a 2 semanas, um site institucional de 4 a 8 semanas. Durante o briefing inicial, forneceremos um cronograma detalhado específico para o seu projeto.",
    },
    {
      question: "Vocês também oferecem hospedagem para os sites?",
      answer:
        "Sim, oferecemos soluções completas de hospedagem com alta performance, segurança e suporte técnico. Nossos servidores são otimizados para garantir velocidade de carregamento e disponibilidade máxima para seu site.",
    },
    {
      question: "O site será otimizado para dispositivos móveis?",
      answer:
        "Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em qualquer dispositivo, seja smartphone, tablet ou desktop. A otimização mobile é fundamental tanto para a experiência do usuário quanto para o SEO.",
    },
    {
      question: "Vocês integram sistemas de pagamento em e-commerces?",
      answer:
        "Sim, integramos diversas plataformas de pagamento como PagSeguro, Mercado Pago, PayPal, Stripe e gateways bancários. Implementamos também soluções de frete, gestão de estoque e outras integrações necessárias para o funcionamento completo do seu e-commerce.",
    },
    {
      question: "Como funciona a manutenção do site após o lançamento?",
      answer:
        "Oferecemos planos de manutenção mensal que incluem atualizações de segurança, backups regulares, pequenas alterações de conteúdo e suporte técnico. Isso garante que seu site permaneça seguro, atualizado e funcionando perfeitamente ao longo do tempo.",
    },
  ]

  return (
    <>
      <ServiceHero
        title="Desenvolvimento de Sites e Landing Pages Orientados à Conversão"
        subtitle="Desenvolvimento Web"
        description="Sites e landing pages que não apenas impressionam visualmente, mas também são estrategicamente projetados para converter visitantes em clientes."
        image="/services/CARD - WEB SITES.png?height=600&width=600"
        gradient="purple"
      />

      <ServiceFeatures
        title="Soluções Completas de Desenvolvimento Web"
        subtitle="Nossos Serviços"
        description="Criamos experiências digitais excepcionais que combinam design atraente, tecnologia avançada e estratégias de conversão."
        features={features}
        gradient="purple"
      />

      <ServiceProcess
        title="Nosso Processo de Desenvolvimento"
        subtitle="Metodologia"
        description="Uma abordagem estruturada e colaborativa para criar sites que atendem perfeitamente às necessidades do seu negócio e seus clientes."
        steps={processSteps}
        gradient="purple"
      />

      <ServiceTestimonial
        quote="A equipe da CCStudios entregou um site que superou todas as nossas expectativas. Além do design excepcional, a performance e as taxas de conversão transformaram completamente nosso negócio online."
        author="Carlos Martins"
        position="Diretor"
        company="TUBOTECNICA"
        image="/clientes/tubocreative.jpg?height=600&width=800"
        logo="/clientes/tubotecnica.png?height=60&width=160"
        gradient="purple"
      />

      <ServiceFAQ
        title="Perguntas Frequentes"
        subtitle="Dúvidas"
        description="Respostas para as perguntas mais comuns sobre nossos serviços de desenvolvimento web."
        faqs={faqs}
        gradient="purple"
      />

      <ServiceCTA
        title="Pronto para transformar sua presença digital?"
        description="Entre em contato hoje mesmo e descubra como podemos criar uma experiência web excepcional que impulsiona seu negócio."
        primaryButtonText="Solicitar orçamento"
        secondaryButtonText="Ver portfólio"
        gradient="purple"
      />
    </>
  )
}

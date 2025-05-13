"use client"

import { PenTool, Users, BarChart3, Zap, Target, LineChart } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTestimonial } from "@/components/service-testimonial"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceCTA } from "@/components/service-cta"

export default function ConteudoPage() {
  const features = [
    {
      icon: <PenTool className="h-7 w-7" />,
      title: "Criação de Conteúdo",
      description: "Conteúdos estratégicos e criativos para suas redes sociais que engajam e convertem.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Gestão de Redes Sociais",
      description: "Gerenciamento completo das suas plataformas sociais para construir uma presença digital forte.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Análise de Desempenho",
      description: "Relatórios detalhados com métricas essenciais para otimizar continuamente sua estratégia.",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Produção Visual",
      description: "Criação de imagens e vídeos de alta qualidade que capturam a atenção do seu público-alvo.",
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Estratégia de Conteúdo",
      description: "Planejamento estratégico para criar conteúdo relevante e alinhado aos objetivos do seu negócio.",
    },
    {
      icon: <LineChart className="h-7 w-7" />,
      title: "Calendário Editorial",
      description: "Organização e planejamento de conteúdo para garantir consistência e resultados.",
    },
  ]

  const processSteps = [
    {
      title: "Diagnóstico",
      description: "Análise da sua marca, público-alvo e concorrentes para definir a estratégia ideal.",
    },
    {
      title: "Planejamento",
      description: "Desenvolvimento de calendário editorial e estratégias de conteúdo alinhadas aos seus objetivos.",
    },
    {
      title: "Produção",
      description: "Criação de conteúdos visuais e textuais de alta qualidade para suas redes sociais.",
    },
    {
      title: "Análise e Otimização",
      description:
        "Monitoramento constante de métricas e ajustes estratégicos para melhorar continuamente os resultados.",
    },
  ]

  const faqs = [
    {
      question: "Com que frequência vocês publicam nas redes sociais?",
      answer:
        "A frequência de publicação varia conforme a plataforma e os objetivos da sua estratégia. Geralmente, recomendamos de 3 a 5 publicações semanais para Instagram e Facebook, 1 a 2 para LinkedIn, e conteúdo diário para stories. Desenvolvemos um calendário personalizado baseado nas necessidades específicas do seu negócio e no comportamento do seu público-alvo.",
    },
    {
      question: "Vocês também produzem conteúdo em vídeo?",
      answer:
        "Sim, oferecemos produção completa de conteúdo em vídeo, incluindo reels, stories, vídeos institucionais e tutoriais. Nossa equipe cuida de todo o processo, desde o roteiro até a edição final, garantindo conteúdo de alta qualidade que engaja seu público e fortalece sua marca.",
    },
    {
      question: "Como vocês medem o sucesso das estratégias de conteúdo?",
      answer:
        "Utilizamos métricas específicas para cada objetivo, como engajamento (curtidas, comentários, compartilhamentos), alcance, crescimento de seguidores, tráfego para o site, geração de leads e conversões. Fornecemos relatórios mensais detalhados com análises e recomendações para otimização contínua.",
    },
    {
      question: "Vocês também gerenciam os comentários e mensagens nas redes sociais?",
      answer:
        "Sim, oferecemos serviço completo de gerenciamento de comunidade, incluindo resposta a comentários, mensagens diretas e interações com o público. Desenvolvemos um guia de tom de voz personalizado para sua marca, garantindo comunicação consistente e alinhada aos valores da sua empresa.",
    },
    {
      question: "É possível integrar a estratégia de conteúdo com campanhas de tráfego pago?",
      answer:
        "Absolutamente! Na verdade, recomendamos essa integração para maximizar resultados. Desenvolvemos conteúdos específicos para campanhas pagas, garantindo coerência entre conteúdo orgânico e pago. Nossa abordagem integrada permite amplificar o alcance do seu conteúdo de qualidade e otimizar o retorno sobre investimento das suas campanhas.",
    },
  ]

  return (
    <>
      <ServiceHero
        title="Estratégias de Conteúdo para Redes Sociais que Convertem"
        subtitle="Conteúdo"
        description="Conteúdo estratégico e criativo para suas redes sociais que engaja seu público, fortalece sua marca e impulsiona resultados de negócio."
        image="/services/CARD - EMAIL MKT.png?height=600&width=600"
        gradient="green"
      />

      <ServiceFeatures
        title="Soluções Completas de Conteúdo"
        subtitle="Nossos Serviços"
        description="Estratégias personalizadas que transformam suas redes sociais em poderosos canais de relacionamento e vendas."
        features={features}
        gradient="green"
      />

      <ServiceProcess
        title="Nosso Processo de Trabalho"
        subtitle="Metodologia"
        description="Uma abordagem estruturada e orientada a dados para criar estratégias de conteúdo que geram resultados consistentes."
        steps={processSteps}
        gradient="green"
      />

      <ServiceTestimonial
        quote="As estratégias de conteúdo da CC Studios transformaram completamente nossas redes sociais. Aumentamos nosso engajamento em 215% e as conversões provenientes das redes sociais cresceram 180% em apenas 3 meses."
        author="Fredo"
        position="Diretor Comercial"
        company="Saucy Rentals"
        image="/clientes/blue-corvette-1-X3.jpg?height=600&width=800"
        logo="/clientes/saucy.png?height=60&width=160"
        gradient="green"
      />

      <ServiceFAQ
        title="Perguntas Frequentes"
        subtitle="Dúvidas"
        description="Respostas para as perguntas mais comuns sobre nossos serviços de conteúdo para redes sociais."
        faqs={faqs}
        gradient="green"
      />

      <ServiceCTA
        title="Pronto para revolucionar seu conteúdo nas redes sociais?"
        description="Entre em contato hoje mesmo e descubra como podemos transformar suas redes sociais em uma poderosa ferramenta de marketing e vendas."
        primaryButtonText="Fale com um especialista"
        secondaryButtonText="Ver portfólio"
        gradient="green"
      />
    </>
  )
}

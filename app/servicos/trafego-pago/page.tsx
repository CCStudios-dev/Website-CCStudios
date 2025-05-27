"use client"

import { Megaphone, Target, BarChart3, Users, TrendingUp, LineChart } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceTestimonial } from "@/components/service-testimonial"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceCTA } from "@/components/service-cta"

export default function TrafegoPagoPage() {
  const features = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "Campanhas de Tráfego Pago",
      description:
        "Estratégias personalizadas para Google Ads, Facebook Ads e Instagram Ads que maximizam seu ROI e alcançam seu público-alvo com precisão.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "SEO Avançado",
      description:
        "Otimização completa do seu site para mecanismos de busca, garantindo melhor posicionamento e mais tráfego orgânico qualificado.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Gestão de Mídias Sociais",
      description:
        "Criação de conteúdo relevante e gerenciamento estratégico das suas redes sociais para aumentar engajamento e conversões.",
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Marketing de Conteúdo",
      description:
        "Produção de conteúdo de alta qualidade que educa seu público, estabelece autoridade e gera leads qualificados para seu negócio.",
    },
    {
      icon: <LineChart className="h-7 w-7" />,
      title: "Análise de Dados",
      description:
        "Monitoramento constante e análise detalhada de métricas para otimizar campanhas e maximizar resultados.",
    },
    {
      icon: <Megaphone className="h-7 w-7" />,
      title: "Estratégia Omnichannel",
      description:
        "Integração de múltiplos canais de marketing para criar uma experiência consistente e eficaz para seus clientes.",
    },
  ]

  const processSteps = [
    {
      title: "Diagnóstico",
      description: "Análise completa do seu negócio, mercado e concorrência para identificar oportunidades e desafios.",
    },
    {
      title: "Estratégia",
      description:
        "Desenvolvimento de um plano personalizado com objetivos claros, canais e táticas específicas para seu negócio.",
    },
    {
      title: "Implementação",
      description:
        "Execução meticulosa das estratégias definidas, com monitoramento constante e ajustes em tempo real.",
    },
    {
      title: "Otimização",
      description:
        "Análise contínua de resultados e refinamento das estratégias para maximizar o retorno sobre investimento.",
    },
  ]

  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados com tráfego pago?",
      answer:
        "O tráfego pago pode gerar resultados imediatos, mas a otimização completa das campanhas geralmente leva de 2 a 4 semanas. Durante este período, coletamos dados valiosos que nos permitem refinar as estratégias e maximizar o ROI. Fornecemos relatórios detalhados para acompanhar o progresso desde o início.",
    },
    {
      question: "Qual é o investimento mínimo recomendado para campanhas de tráfego pago?",
      answer:
        "O investimento mínimo varia conforme seu mercado e objetivos. Para campanhas eficazes, recomendamos um orçamento mínimo que permita testes adequados e otimização contínua. Durante nossa reunião de diagnóstico, analisaremos seu mercado específico e recomendaremos um orçamento ideal para alcançar seus objetivos.",
    },
    {
      question: "A CCStudios gerencia as contas de anúncios ou apenas cria as campanhas?",
      answer:
        "Oferecemos um serviço completo de gerenciamento de campanhas. Isso inclui a criação, implementação, monitoramento diário, otimização contínua e relatórios detalhados. Nossa equipe especializada cuida de todos os aspectos das suas campanhas para garantir o melhor desempenho possível.",
    },
    {
      question: "Como é feito o acompanhamento dos resultados das campanhas?",
      answer:
        "Utilizamos ferramentas avançadas de análise para monitoramento em tempo real. Fornecemos dashboards personalizados e relatórios mensais detalhados, além de reuniões regulares para discutir resultados, insights e ajustes estratégicos necessários para otimizar o desempenho.",
    },
    {
      question: "É possível integrar o tráfego pago com estratégias offline?",
      answer:
        "Absolutamente! Acreditamos em uma abordagem omnichannel que integra perfeitamente estratégias online e offline. Desenvolvemos planos que alinham suas iniciativas digitais com ações de marketing tradicional, garantindo uma mensagem consistente e maximizando o impacto em todos os pontos de contato com o cliente.",
    },
  ]

  return (
    <>
      <ServiceHero
        title="Tráfego Pago Estratégico e Orientado a Resultados"
        subtitle="Tráfego Pago"
        description="Transforme sua presença online com estratégias personalizadas que geram leads qualificados, aumentam vendas e maximizam seu ROI."
        image="/services/CARD - MKT DIGITAL.png?height=600&width=600"
        gradient="blue"
      />

      <ServiceFeatures
        title="Soluções Completas de Tráfego Pago"
        subtitle="Nossos Serviços"
        description="Oferecemos um conjunto abrangente de serviços de tráfego pago para impulsionar seu negócio em todas as frentes."
        features={features}
        gradient="blue"
      />

      <ServiceProcess
        title="Nosso Processo de Trabalho"
        subtitle="Metodologia"
        description="Uma abordagem estruturada e orientada a dados para garantir resultados consistentes e mensuráveis."
        steps={processSteps}
        gradient="blue"
      />

      <ServiceTestimonial
        quote="A CCStudios revolucionou nossa estratégia de tráfego pago. Em apenas 3 meses, aumentamos nossas conversões em 320% e reduzimos o custo por aquisição em 30%."
        author="Carlos Silva"
        position="CEO"
        company="TradingMEX"
        image="/clientes/tradingmex.jpg?height=600&width=800"
        logo="/clientes/HORIZONTAL.png?height=60&width=160"
        gradient="blue"
      />

      <ServiceFAQ
        title="Perguntas Frequentes"
        subtitle="Dúvidas"
        description="Respostas para as perguntas mais comuns sobre nossos serviços de tráfego pago."
        faqs={faqs}
        gradient="blue"
      />

      <ServiceCTA
        title="Pronto para transformar seu tráfego pago?"
        description="Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa a alcançar resultados extraordinários com nossas estratégias personalizadas."
        primaryButtonText="Fale com um especialista"
        secondaryButtonText="Ver portfólio"
        gradient="blue"
      />
    </>
  )
}

"use client"

import { Megaphone, Globe, PenTool, BarChart3, Mail, Users, Zap, LineChart, Search } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { ServiceCard } from "@/components/service-card"

export default function ServicosPage() {
  const services = [
    {
      icon: <Megaphone className="h-7 w-7" />,
      title: "Tráfego Pago",
      description:
        "Estratégias personalizadas de anúncios online para aumentar sua visibilidade e converter visitantes em clientes.",
      href: "/servicos/trafego-pago",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Desenvolvimento de Sites e Landing Pages",
      description:
        "Sites e landing pages otimizados para conversão, com design moderno e experiência de usuário excepcional.",
      href: "/servicos/desenvolvimento-sites-landing-pages",
    },
    {
      icon: <PenTool className="h-7 w-7" />,
      title: "Conteúdo",
      description: "Estratégias de conteúdo para redes sociais que engajam seu público e fortalecem sua marca.",
      href: "/servicos/conteudo",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "CRM",
      description: "Soluções de CRM para transformar dados em relacionamentos duradouros e vendas consistentes.",
      href: "/servicos/crm",
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email Marketing",
      description: "Campanhas de email eficientes para nutrir leads, aumentar vendas e fidelizar clientes.",
      href: "/servicos/email-marketing",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Gestão de Redes Sociais",
      description: "Gerenciamento completo das suas redes sociais para aumentar engajamento e conversões.",
      href: "/servicos/gestao-redes-sociais",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Automação de Marketing",
      description: "Fluxos automatizados que nutrem leads e guiam clientes pela jornada de compra de forma eficiente.",
      href: "/servicos/automacao-marketing",
    },
    {
      icon: <LineChart className="h-7 w-7" />,
      title: "Análise de Dados",
      description: "Transformação de dados em insights acionáveis para tomada de decisões estratégicas.",
      href: "/servicos/analise-dados",
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "SEO",
      description: "Otimização para mecanismos de busca para melhorar seu posicionamento e aumentar tráfego orgânico.",
      href: "/servicos/seo",
    },
  ]

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
                <span className="text-[#4bb6ef] font-medium text-sm">Nossos Serviços</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Soluções <GradientText>Completas</GradientText> para seu Negócio
              </h1>

              <p className="text-gray-300 text-lg">
                Oferecemos um conjunto abrangente de serviços de marketing digital para impulsionar seu negócio em todas
                as frentes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[#0e1420]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

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
                    Não encontrou o que <GradientText>procura?</GradientText>
                  </h2>

                  <p className="text-gray-300 text-lg">
                    Entre em contato hoje mesmo e descubra como podemos criar uma solução personalizada para atender às
                    necessidades específicas do seu negócio.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/contato"
                    className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white px-8 py-6 text-lg rounded-md group min-w-[200px] text-center"
                  >
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

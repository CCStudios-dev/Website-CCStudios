"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronRight, ArrowRight, ArrowUpRight, Globe, BarChart3, Mail, Megaphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SuccessCase } from "@/components/success-case"
import { StatCard } from "@/components/stat-card"
import { ServiceCard } from "@/components/service-card"
import { LocationMap } from "@/components/location-map"
import { ComparisonSlider } from "@/components/comparison-slider"
import { GradientText } from "@/components/gradient-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false })

  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const successCases = [
    {
      id: 1,
      title: "TradingMEX",
      logo: "/placeholder.svg?height=60&width=160",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Através de novas fontes de tráfego pago e implementação de um CRM para controle dos dados dos clientes, alcançamos um",
      results: "ROI (Retorno sobre o investimento) de",
      highlightedText: "45x ou seja, lucraram 45 vezes o que foi investido com marketing digital!",
      stats: [
        { value: "45x", label: "ROI" },
        { value: "+320%", label: "Conversões" },
        { value: "-30%", label: "CPA" },
      ],
    },
    {
      id: 2,
      title: "TUBOTECNICA",
      logo: "/placeholder.svg?height=60&width=160",
      image: "/placeholder.svg?height=600&width=800",
      description: "Através da nossas análises conseguimos um",
      results: "custo por cliente qualificado",
      highlightedText:
        "50% menor do que pagavam antes de se juntarem a CCSTUDIOS. Tudo isso apenas analisando o mercado e encontrando oportunidades não exploradas pelos concorrentes.",
      stats: [
        { value: "-50%", label: "Custo/Lead" },
        { value: "+85%", label: "Leads" },
        { value: "2.3x", label: "ROAS" },
      ],
    },
    {
      id: 3,
      title: "Bocas Best Collision Center",
      logo: "/placeholder.svg?height=60&width=160",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Bocas Best Collision Center não tinha presença online antes de nos contratar, através de nossas estratégias avançadas de marketing digital,",
      results: "hoje as campanhas online representam",
      highlightedText: "cerca de 50% de todo o faturamento da empresa.",
      stats: [
        { value: "50%", label: "Faturamento" },
        { value: "+230%", label: "Tráfego" },
        { value: "12x", label: "Crescimento" },
      ],
    },
  ]

  const services = [
    {
      icon: <Megaphone className="h-7 w-7" />,
      title: "Marketing Digital",
      description:
        "Estratégias personalizadas para aumentar sua visibilidade online e converter visitantes em clientes.",
      href: "/servicos/marketing-digital",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Desenvolvimento Web",
      description:
        "Sites e plataformas otimizados para conversão, com design moderno e experiência de usuário excepcional.",
      href: "/servicos/desenvolvimento-web",
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email Marketing",
      description: "Campanhas de email eficientes para nutrir leads, aumentar vendas e fidelizar clientes.",
      href: "/servicos/email-marketing",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "CRM",
      description: "Soluções de CRM para transformar dados em relacionamentos duradouros e vendas consistentes.",
      href: "/servicos/crm",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f18]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

          {/* Animated Gradient Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#4bb6ef]/20 to-transparent w-full"
                style={{
                  top: `${15 + i * 20}%`,
                  animationDuration: `${30 + i * 5}s`,
                  animationDelay: `${i * 2}s`,
                }}
              ></div>
            ))}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-[#4bb6ef]/20 to-transparent h-full"
                style={{
                  left: `${20 + i * 30}%`,
                  animationDuration: `${20 + i * 5}s`,
                  animationDelay: `${i * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <motion.div
          className="container relative z-10 mx-auto px-4 py-20"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                <span className="text-[#4bb6ef] font-medium text-sm">Resultados que transformam negócios</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">Eleve sua marca com a</span>
                <br />
                <GradientText>CCSTUDIOS</GradientText>
              </h1>

              <p className="text-gray-300 text-lg max-w-lg">
                Soluções personalizadas de marketing digital para impulsionar seu negócio com estratégias eficientes e
                resultados mensuráveis.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white rounded-md px-8 py-6 text-lg group">
                  Fale com um especialista
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-white/5 rounded-md px-8 py-6 text-lg"
                >
                  Ver portfólio
                </Button>
              </div>

              <div className="pt-10 grid grid-cols-3 gap-8 border-t border-gray-800/50">
                <StatCard value="30+" label="clientes atendidos" />
                <StatCard value="R$ 2M+" label="em tráfego pago" />
                <StatCard value="6+" label="anos de experiência" />
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative z-10">
                <Image
                  src="/escritorioccs.png?height=700&width=600"
                  width={600}
                  height={700}
                  alt="Profissional CC Studios"
                  className="rounded-2xl object-cover"
                  priority
                />

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#4bb6ef]/30 rounded-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#4bb6ef]/30 rounded-2xl"></div>

                {/* Stats floating card */}
                <motion.div
                  className="absolute -right-20 top-1 bg-[#111827]/80 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow-xl"
                  initial={{ x: 100, opacity: 0 }}
                  animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center">
                      <ArrowUpRight className="h-5 w-5 text-[#4bb6ef]" />
                    </div>
                    <div>
                      <p className="text-[#4bb6ef] font-bold text-xl">+320%</p>
                      <p className="text-xs text-gray-400">Aumento em conversões</p>
                    </div>
                  </div>
                </motion.div>

                {/* Results floating card */}
                <motion.div
                  className="absolute -left-28 bottom-1/4 bg-[#111827]/80 backdrop-blur-md p-4 rounded-xl border border-gray-800 shadow-xl"
                  initial={{ x: -100, opacity: 0 }}
                  animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-[#4bb6ef]" />
                    </div>
                    <div>
                      <p className="text-[#4bb6ef] font-bold text-xl">45x ROI</p>
                      <p className="text-xs text-gray-400">Média dos clientes</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background glow */}
              <div className="absolute -inset-4 bg-[#4bb6ef]/5 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center">
            <div className="w-1.5 h-3 bg-[#4bb6ef] rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-[#0a0f18]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                <span className="text-[#4bb6ef] font-medium text-sm">Soluções Completas</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Serviços <GradientText>Premium</GradientText> para seu Negócio
              </h2>

              <p className="text-gray-300 text-lg">
                Com mais de 6 anos de experiência nos Estados Unidos, a{" "}
                <span className="text-[#4bb6ef] font-semibold">CCSTUDIOS</span> chega ao Brasil com soluções
                customizadas e de alto desempenho para cada serviço e cliente.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <ScrollReveal>
            <div className="mt-20 flex justify-center">
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-white/5 rounded-md px-8 py-6 text-lg group"
              >
                Ver todos os serviços
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Section */}
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
                <span className="text-[#4bb6ef] font-medium text-sm">Comparativo</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Por que escolher a <GradientText>CCSTUDIOS</GradientText>?
              </h2>

              <p className="text-gray-300 text-lg">
                Entenda como nossa abordagem se diferencia da concorrência e por que somos a escolha certa para
                impulsionar seu negócio.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ComparisonSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="relative py-32 bg-[#0a0f18]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                <span className="text-[#4bb6ef] font-medium text-sm">Resultados Comprovados</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Casos de <GradientText>Sucesso</GradientText>
              </h2>

              <p className="text-gray-300 text-lg">
                Com nossa expertise e experiência, nossos clientes tiveram suas expectativas superadas. Conheça algumas
                histórias de transformação digital que realizamos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successCases.map((caseItem, index) => (
              <ScrollReveal key={caseItem.id} delay={index * 0.1}>
                <SuccessCase
                  index={caseItem.id}
                  title={caseItem.title}
                  logo={caseItem.logo}
                  image={caseItem.image}
                  description={caseItem.description}
                  results={caseItem.results}
                  highlightedText={caseItem.highlightedText}
                  stats={caseItem.stats}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 flex justify-center">
              <Button className="bg-transparent border border-[#4bb6ef] text-[#4bb6ef] hover:bg-[#4bb6ef] hover:text-white transition-all duration-300 px-8 py-6 text-lg rounded-md group">
                Ver todos os casos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Geographic Reach Section */}
      <section className="relative py-32 bg-[#0e1420] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                <span className="text-[#4bb6ef] font-medium text-sm">Presença Global</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dos <GradientText>Estados Unidos</GradientText> ao <GradientText>Sul do Brasil</GradientText>
              </h2>

              <p className="text-gray-300 text-lg">
                Nossa experiência internacional nos permite trazer as melhores práticas globais para o seu negócio
                local.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <LocationMap type="usa" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Experiência <GradientText>Internacional</GradientText>
                </h3>

                <p className="text-gray-300 text-lg">
                  A <span className="text-[#4bb6ef] font-semibold">CCSTUDIOS</span> tem clientes por todo o continente
                  americano, nos Estados Unidos e em mais de 6 estados no Brasil!
                </p>

                <p className="text-gray-300">
                  Nossa experiência é aplicada em diversos segmentos: produtos para área civil, venda de veículos e
                  produtos automotivos, serviços de importação e exportação de produtos, estética, e mais outros.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard value="30+" label="Clientes Atendidos" variant="premium" />
                  <StatCard value="R$ 2M+" label="Em Tráfego Pago" variant="premium" />
                  <StatCard value="6+" label="Estados no Brasil" variant="premium" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                  <span className="text-[#4bb6ef] font-medium text-sm">Presença Nacional</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Cases de Sucesso <br />
                  <GradientText>por todo o continente!</GradientText>
                </h3>

                <p className="text-gray-300">
                  Nossa metodologia comprovada tem ajudado empresas de diferentes segmentos a alcançarem resultados
                  excepcionais em marketing digital, com estratégias personalizadas para cada mercado regional.
                </p>

                <Button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white px-8 py-6 text-lg rounded-md group">
                  Conheça nossa metodologia
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2" delay={0.2}>
              <LocationMap type="brazil" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

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
                    Pronto para <GradientText>transformar</GradientText> seu negócio?
                  </h2>

                  <p className="text-gray-300 text-lg">
                    Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa a alcançar resultados
                    extraordinários com nossas estratégias de marketing digital personalizadas.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white px-8 py-6 text-lg rounded-md group min-w-[200px]">
                    Fale Conosco
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-white/5 rounded-md px-8 py-6 text-lg"
                  >
                    Ver Portfólio
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

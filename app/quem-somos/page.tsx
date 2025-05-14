"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { LocationMap } from "@/components/location-map"

export default function QuemSomosPage() {
  const values = [
    {
      title: "Resultados",
      description:
        "Nosso foco principal é gerar resultados mensuráveis e significativos para nossos clientes. Trabalhamos com metas claras e métricas objetivas.",
    },
    {
      title: "Inovação",
      description:
        "Estamos constantemente atualizados com as últimas tendências e tecnologias para oferecer soluções inovadoras que destacam nossos clientes no mercado.",
    },
    {
      title: "Transparência",
      description:
        "Acreditamos em comunicação clara e honesta. Nossos clientes têm acesso total aos dados e resultados de suas campanhas.",
    },
    {
      title: "Excelência",
      description:
        "Buscamos a excelência em tudo o que fazemos, desde o atendimento ao cliente até a execução técnica de cada projeto.",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                  <span className="text-[#4bb6ef] font-medium text-sm">Nossa História</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Conheça a <GradientText>CCSTUDIOS</GradientText>
                </h1>

                <p className="text-gray-300 text-lg">
                  Fundada em 2018, a CC Studios nasceu com a missão de transformar o marketing digital no Brasil,
                  trazendo estratégias inovadoras e resultados mensuráveis para empresas de todos os portes.
                </p>

                <p className="text-gray-300">
                  Nossa jornada começou nos Estados Unidos, onde adquirimos experiência internacional e conhecimento das
                  melhores práticas globais. Hoje, aplicamos essa expertise para impulsionar negócios em todo o Brasil,
                  combinando estratégias comprovadas com um profundo entendimento do mercado local.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                  <StatCard value="2018" label="Ano de Fundação" variant="premium" />
                  <StatCard value="30+" label="Clientes Atendidos" variant="premium" />
                  <StatCard value="6+" label="Anos de Experiência" variant="premium" />
                  <StatCard value="2" label="Países de Atuação" variant="premium" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <Image
                  src="/banners/FORM 01.png?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Equipe CC Studios"
                  className="rounded-2xl object-cover"
                />
                <div className="absolute -inset-4 bg-[#4bb6ef]/5 rounded-full blur-[100px] -z-10"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                <span className="text-[#4bb6ef] font-medium text-sm">Nossos Valores</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Princípios que <GradientText>Guiam</GradientText> Nosso Trabalho
              </h2>

              <p className="text-gray-300 text-lg">
                Nossos valores fundamentais definem quem somos e como trabalhamos para entregar resultados excepcionais
                para nossos clientes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-[#111827]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center mb-6 text-[#4bb6ef] font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* National Presence Section */}
      <section className="relative py-32 bg-[#0a0f18]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
                <span className="text-[#4bb6ef] font-medium text-sm">Presença Nacional</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dos <GradientText>Estados Unidos</GradientText> ao <GradientText>Brasil</GradientText>
              </h2>

              <p className="text-gray-300 text-lg">
                Nossa experiência internacional nos permite trazer as melhores práticas globais para o seu negócio
                local, com atuação em diversos estados brasileiros e nos Estados Unidos.
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
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Presença <GradientText>Nacional</GradientText>
                </h3>

                <p className="text-gray-300">
                  Nossa metodologia comprovada tem ajudado empresas de diferentes segmentos a alcançarem resultados
                  excepcionais em marketing digital, com estratégias personalizadas para cada mercado regional.
                </p>

                <p className="text-gray-300">
                  Atendemos clientes em São Paulo, Rio de Janeiro, Minas Gerais, Paraná, Santa Catarina, Rio Grande do
                  Sul e outros estados, sempre com o mesmo padrão de excelência e resultados.
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
                    Pronto para <GradientText>transformar</GradientText> seu negócio?
                  </h2>

                  <p className="text-gray-300 text-lg">
                    Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa a alcançar resultados
                    extraordinários com nossas estratégias personalizadas.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white px-8 py-6 text-lg rounded-md group min-w-[200px]">
                    Fale Conosco
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

"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

function BlogPostCard({ title, excerpt, date, image, slug }: BlogPostProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <motion.div
        className="group relative bg-gradient-to-br from-[#111827] to-[#0e1420] rounded-2xl overflow-hidden h-full border border-gray-800/50"
        whileHover={{ y: -5 }}
      >
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/60 to-transparent"></div>
        </div>

        <div className="p-8 relative">
          <p className="text-[#4bb6ef] text-sm mb-3">{date}</p>
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#4bb6ef] transition-colors">{title}</h3>
          <p className="text-gray-300 mb-6">{excerpt}</p>
          <div className="flex items-center text-[#4bb6ef] font-medium group-hover:translate-x-2 transition-transform duration-300">
            <span>Ler mais</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Remarketing: O que é e Como Usar para Aumentar suas Vendas",
      excerpt:
        "Descubra como o remarketing pode ajudar a recuperar clientes potenciais e aumentar significativamente suas taxas de conversão.",
      date: "agosto 18, 2024",
      image: "/blog/BLOG-REMKT.png?height=400&width=600",
      slug: "remarketing-o-que-e-como-usar",
    },
    {
      title: "Como Criar um Funil de Vendas Eficiente no Marketing Digital",
      excerpt:
        "Aprenda a estruturar um funil de vendas eficaz que converta visitantes em leads qualificados e, finalmente, em clientes fiéis.",
      date: "abril 25, 2024",
      image: "/blog/BLOG-FUNIL.png?height=400&width=600",
      slug: "como-criar-funil-vendas-eficiente",
    },
    {
      title: "Como Fazer um Planejamento de Marketing Digital para Pequenas e Médias Empresas",
      excerpt:
        "Um guia completo para PMEs desenvolverem estratégias de marketing digital eficientes mesmo com orçamentos limitados.",
      date: "março 5, 2024",
      image: "/blog/BLOG-PLANEJAMENTO.png?height=400&width=600",
      slug: "planejamento-marketing-digital-pmes",
    },
    {
      title: "A Importância da Experiência do Usuário (UX) para o Sucesso do seu Site",
      excerpt:
        "Entenda por que a experiência do usuário é fundamental para o sucesso do seu site e como implementar melhorias efetivas.",
      date: "fevereiro 20, 2024",
      image: "/blog/BLOG-UX.png?height=400&width=600",
      slug: "importancia-experiencia-usuario-ux",
    },
    {
      title: "Marketing Digital: O que é e Por que sua Empresa Precisa?",
      excerpt:
        "Uma introdução completa ao marketing digital e os motivos pelos quais sua empresa não pode ficar de fora dessa estratégia.",
      date: "janeiro 12, 2024",
      image: "/blog/BLOG-MKT.png?height=400&width=600",
      slug: "marketing-digital-o-que-e",
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
                <span className="text-[#4bb6ef] font-medium text-sm">Conhecimento</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Blog <GradientText>CCSTUDIOS</GradientText>
              </h1>

              <p className="text-gray-300 text-lg">
                Insights, dicas e estratégias de marketing digital para ajudar seu negócio a crescer e se destacar no
                mercado.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <BlogPostCard
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  image={post.image}
                  slug={post.slug}
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
                Ver mais artigos
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Section */}
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

              <div className="relative z-10 p-16 text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Receba nossos <GradientText>conteúdos</GradientText> exclusivos
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    Inscreva-se em nossa newsletter e receba as últimas tendências, dicas e estratégias de marketing
                    digital diretamente na sua caixa de entrada.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder="Seu melhor email"
                      className="flex-1 px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
                    />
                    <Button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white px-8 py-4 rounded-md">
                      Inscrever-se
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

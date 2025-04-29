"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}

function FAQItem({ question, answer, isOpen, toggleOpen }: FAQItemProps) {
  return (
    <div className="mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-6 rounded-xl bg-[#111827]/50 backdrop-blur-sm border border-gray-800/50 text-left text-white hover:border-[#4bb6ef]/30 transition-all duration-300"
      >
        <span className="text-lg font-medium">{question}</span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <div className="w-8 h-8 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center">
              <Minus className="h-5 w-5 text-[#4bb6ef]" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#4bb6ef]/10 flex items-center justify-center">
              <Plus className="h-5 w-5 text-[#4bb6ef]" />
            </div>
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-[#111827]/30 backdrop-blur-sm rounded-b-xl border-x border-b border-gray-800/50 text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Quais serviços a CCS oferece?",
      answer:
        "A CC Studios oferece uma gama completa de serviços de marketing digital, incluindo gestão de mídias sociais, marketing de conteúdo, SEO, campanhas de tráfego pago (Google Ads, Facebook Ads, Instagram Ads), desenvolvimento web, email marketing, análise de dados e consultoria estratégica personalizada para cada negócio.",
    },
    {
      question: "Como funciona o processo de contratação da CCS?",
      answer:
        "Nosso processo começa com uma reunião de diagnóstico gratuita para entender seus objetivos. Em seguida, desenvolvemos uma proposta personalizada com estratégias e orçamento. Após a aprovação, realizamos uma reunião de onboarding para definir KPIs, cronograma e iniciar a implementação das estratégias definidas.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "O tempo para resultados varia conforme o serviço e o mercado. Campanhas de tráfego pago podem mostrar resultados imediatos, enquanto estratégias de SEO e marketing de conteúdo geralmente levam de 3 a 6 meses para apresentar resultados significativos. Fornecemos relatórios mensais detalhados para acompanhar o progresso desde o início.",
    },
    {
      question: "A CCS atende empresas de todos os tamanhos?",
      answer:
        "Sim, trabalhamos com empresas de todos os portes, desde startups até grandes corporações. Nossas estratégias são personalizadas para atender às necessidades específicas e orçamentos de cada cliente, garantindo o melhor retorno sobre o investimento independentemente do tamanho do negócio.",
    },
    {
      question: "Como é feito o acompanhamento dos resultados das campanhas?",
      answer:
        "Utilizamos ferramentas avançadas de análise de dados para monitorar o desempenho em tempo real. Fornecemos dashboards personalizados e relatórios detalhados mensais, além de reuniões regulares de acompanhamento para discutir resultados, insights e ajustes estratégicos necessários para otimizar o desempenho.",
    },
    {
      question: "Posso ter um contato direto com a equipe que cuida da minha conta?",
      answer:
        "Absolutamente! Cada cliente tem um gerente de conta dedicado e acesso direto à equipe responsável pelo projeto. Mantemos comunicação constante via e-mail, telefone e reuniões regulares. Também oferecemos um canal de suporte prioritário para questões urgentes, garantindo que você nunca fique sem resposta.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-32 bg-[#0a0f18]">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
              <span className="text-[#4bb6ef] font-medium text-sm">Tire suas dúvidas</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <GradientText>PERGUNTAS FREQUENTES</GradientText>
            </h2>

            <p className="text-gray-300 text-lg">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços e como podemos ajudar seu negócio a
              crescer.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Não encontrou o que procurava?</p>
            <button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white px-8 py-4 rounded-md transition-all duration-300">
              Entre em contato
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

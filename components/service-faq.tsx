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
  gradient?: "blue" | "purple" | "green" | "orange"
}

function FAQItem({ question, answer, isOpen, toggleOpen, gradient = "blue" }: FAQItemProps) {
  const textColor = {
    blue: "text-[#4bb6ef]",
    purple: "text-[#8a63d2]",
    green: "text-[#4cd5b6]",
    orange: "text-[#ff9966]",
  }

  const bgColor = {
    blue: "bg-[#4bb6ef]/20",
    purple: "bg-[#8a63d2]/20",
    green: "bg-[#4cd5b6]/20",
    orange: "bg-[#ff9966]/20",
  }

  const bgColorLight = {
    blue: "bg-[#4bb6ef]/10",
    purple: "bg-[#8a63d2]/10",
    green: "bg-[#4cd5b6]/10",
    orange: "bg-[#ff9966]/10",
  }

  return (
    <div className="mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-6 rounded-xl bg-[#111827]/50 backdrop-blur-sm border border-gray-800/50 text-left text-white hover:border-gray-700 transition-all duration-300"
      >
        <span className="text-lg font-medium">{question}</span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <div className={`w-8 h-8 rounded-full ${bgColor[gradient]} flex items-center justify-center`}>
              <Minus className={`h-5 w-5 ${textColor[gradient]}`} />
            </div>
          ) : (
            <div className={`w-8 h-8 rounded-full ${bgColorLight[gradient]} flex items-center justify-center`}>
              <Plus className={`h-5 w-5 ${textColor[gradient]}`} />
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

interface ServiceFAQProps {
  title: string
  subtitle: string
  description: string
  faqs: {
    question: string
    answer: string
  }[]
  gradient?: "blue" | "purple" | "green" | "orange"
}

const gradientColors = {
  blue: "from-[#4bb6ef] to-[#2b88ff]",
  purple: "from-[#8a63d2] to-[#6240a3]",
  green: "from-[#4cd5b6] to-[#30b392]",
  orange: "from-[#ff9966] to-[#e07a5f]",
}

export function ServiceFAQ({ title, subtitle, description, faqs, gradient = "blue" }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-32 bg-[#0e1420]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4bb6ef] mr-2"></span>
              <span className="text-[#4bb6ef] font-medium text-sm">{subtitle}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? <GradientText key={i}>{word}</GradientText> : <span key={i}>{word} </span>,
                )}
            </h2>

            <p className="text-gray-300 text-lg">{description}</p>
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
                gradient={gradient}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Não encontrou o que procurava?</p>
            <button
              className={`bg-gradient-to-r ${gradientColors[gradient]} hover:opacity-90 text-white px-8 py-4 rounded-md transition-all duration-300`}
            >
              Entre em contato
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

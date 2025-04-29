"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"

interface ServiceFeatureProps {
  icon: ReactNode
  title: string
  description: string
  gradient?: "blue" | "purple" | "green" | "orange"
}

function ServiceFeature({ icon, title, description, gradient = "blue" }: ServiceFeatureProps) {
  const gradientColors = {
    blue: "from-[#4bb6ef] to-[#3a9fd8]",
    purple: "from-[#8a63d2] to-[#6a4db3]",
    green: "from-[#4cd5b6] to-[#2bb39b]",
    orange: "from-[#ff9966] to-[#ff7e47]",
  }

  const glowColor = {
    blue: "group-hover:bg-[#4bb6ef]/10",
    purple: "group-hover:bg-[#8a63d2]/10",
    green: "group-hover:bg-[#4cd5b6]/10",
    orange: "group-hover:bg-[#ff9966]/10",
  }

  const textColor = {
    blue: "text-[#4bb6ef]",
    purple: "text-[#8a63d2]",
    green: "text-[#4cd5b6]",
    orange: "text-[#ff9966]",
  }

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-[#111827] to-[#0e1420] rounded-2xl p-8 border border-gray-800/50 overflow-hidden h-full"
      whileHover={{ y: -5 }}
    >
      {/* Background glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColors[gradient]}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20">
        <div
          className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${gradientColors[gradient]}/20 to-transparent transform origin-top-right scale-0 group-hover:scale-100 transition-transform duration-500`}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`w-16 h-16 rounded-2xl bg-[#0a0f18] ${glowColor[gradient]} flex items-center justify-center mb-6 transition-colors duration-300`}
        >
          <div className={textColor[gradient]}>{icon}</div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

        <p className="text-gray-400 mb-8 flex-grow">{description}</p>
      </div>
    </motion.div>
  )
}

interface ServiceFeaturesProps {
  title: string
  subtitle: string
  description: string
  features: {
    icon: ReactNode
    title: string
    description: string
  }[]
  gradient?: "blue" | "purple" | "green" | "orange"
}

export function ServiceFeatures({ title, subtitle, description, features, gradient = "blue" }: ServiceFeaturesProps) {
  return (
    <section className="relative py-32 bg-[#0a0f18]">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ServiceFeature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={gradient}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

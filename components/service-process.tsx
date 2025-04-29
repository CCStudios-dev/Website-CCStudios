"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  gradient?: "blue" | "purple" | "green" | "orange"
}

function ProcessStep({ number, title, description, gradient = "blue" }: ProcessStepProps) {
  const gradientColors = {
    blue: "from-[#4bb6ef] to-[#3a9fd8]",
    purple: "from-[#8a63d2] to-[#6a4db3]",
    green: "from-[#4cd5b6] to-[#2bb39b]",
    orange: "from-[#ff9966] to-[#ff7e47]",
  }

  return (
    <div className="relative">
      {/* Connector line */}
      {number < 4 && (
        <div className="absolute top-16 left-16 w-full h-px bg-gradient-to-r from-gray-800 to-transparent z-0 hidden md:block"></div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={`w-32 h-32 rounded-full bg-[#111827] border border-gray-800 flex items-center justify-center mb-6 bg-gradient-to-br ${gradientColors[gradient]}/10`}
        >
          <span
            className={`text-5xl font-bold bg-gradient-to-r ${gradientColors[gradient]} text-transparent bg-clip-text`}
          >
            {number}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

interface ServiceProcessProps {
  title: string
  subtitle: string
  description: string
  steps: {
    title: string
    description: string
  }[]
  gradient?: "blue" | "purple" | "green" | "orange"
}

export function ServiceProcess({ title, subtitle, description, steps, gradient = "blue" }: ServiceProcessProps) {
  return (
    <section className="relative py-32 bg-[#0e1420]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4bb6ef]/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4bb6ef]/5 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ProcessStep number={index + 1} title={step.title} description={step.description} gradient={gradient} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

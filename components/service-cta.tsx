"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"

interface ServiceCTAProps {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  gradient?: "blue" | "purple" | "green" | "orange"
}

export function ServiceCTA({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  gradient = "blue",
}: ServiceCTAProps) {
  const gradientColors = {
    blue: "from-[#4bb6ef] to-[#3a9fd8]",
    purple: "from-[#8a63d2] to-[#6a4db3]",
    green: "from-[#4cd5b6] to-[#2bb39b]",
    orange: "from-[#ff9966] to-[#ff7e47]",
  }

  return (
    <section className="relative py-32 bg-[#0a0f18]">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1a2234] to-[#0e1420]"></div>

            {/* Decorative elements */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-r ${gradientColors[gradient]}/10 rounded-full blur-[80px]`}
            ></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4bb6ef]/5 rounded-full blur-[80px]"></div>

            <div className="relative z-10 p-16 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {title
                    .split(" ")
                    .map((word, i, arr) =>
                      i === arr.length - 1 ? <GradientText key={i}>{word}</GradientText> : <span key={i}>{word} </span>,
                    )}
                </h2>

                <p className="text-gray-300 text-lg">{description}</p>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  className={`bg-gradient-to-r ${gradientColors[gradient]} hover:opacity-90 text-white px-8 py-6 text-lg rounded-md group min-w-[200px]`}
                >
                  {primaryButtonText}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-white/5 rounded-md px-8 py-6 text-lg"
                >
                  {secondaryButtonText}
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

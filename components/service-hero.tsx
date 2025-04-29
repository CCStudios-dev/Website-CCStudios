"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  gradient?: "blue" | "purple" | "green" | "orange"
}

export function ServiceHero({ title, subtitle, description, image, gradient = "blue" }: ServiceHeroProps) {
  const gradientColors = {
    blue: "from-[#4bb6ef] to-[#3a9fd8]",
    purple: "from-[#8a63d2] to-[#6a4db3]",
    green: "from-[#4cd5b6] to-[#2bb39b]",
    orange: "from-[#ff9966] to-[#ff7e47]",
  }

  const glowColor = {
    blue: "bg-[#4bb6ef]/5",
    purple: "bg-[#8a63d2]/5",
    green: "bg-[#4cd5b6]/5",
    orange: "bg-[#ff9966]/5",
  }

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0a0f18] pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-0 right-0 w-[800px] h-[800px] ${glowColor[gradient]} rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${glowColor[gradient]} rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3`}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientColors[gradient]} mr-2`}></span>
              <span
                className={`font-medium text-sm bg-gradient-to-r ${gradientColors[gradient]} text-transparent bg-clip-text`}
              >
                {subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">{title}</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-lg">{description}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className={`bg-gradient-to-r ${gradientColors[gradient]} hover:opacity-90 text-white rounded-md px-8 py-6 text-lg group`}
              >
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
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              <Image
                src={image || "/placeholder.svg"}
                width={600}
                height={600}
                alt="Serviço ilustração"
                className="rounded-2xl object-cover"
                priority
              />

              {/* Decorative elements */}
              <div
                className={`absolute -top-6 -right-6 w-32 h-32 border-2 border-opacity-30 border-gradient-to-r ${gradientColors[gradient]} rounded-2xl`}
              ></div>
              <div
                className={`absolute -bottom-6 -left-6 w-32 h-32 border-2 border-opacity-30 border-gradient-to-r ${gradientColors[gradient]} rounded-2xl`}
              ></div>
            </div>

            {/* Background glow */}
            <div className={`absolute -inset-4 ${glowColor[gradient]} rounded-full blur-[100px] -z-10`}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

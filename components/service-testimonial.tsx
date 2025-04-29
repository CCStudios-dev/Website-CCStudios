"use client"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Quote } from "lucide-react"

interface ServiceTestimonialProps {
  quote: string
  author: string
  position: string
  company: string
  image: string
  logo: string
  gradient?: "blue" | "purple" | "green" | "orange"
}

export function ServiceTestimonial({
  quote,
  author,
  position,
  company,
  image,
  logo,
  gradient = "blue",
}: ServiceTestimonialProps) {
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
    <section className="relative py-32 bg-[#0a0f18]">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="bg-[#111827]/50 backdrop-blur-sm rounded-3xl border border-gray-800/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Column */}
              <div className="relative h-full min-h-[400px] lg:min-h-0">
                <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18]/80 via-transparent to-transparent"></div>
              </div>

              {/* Content Column */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradientColors[gradient]} flex items-center justify-center mb-8`}
                >
                  <Quote className="h-8 w-8 text-white" />
                </div>

                <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8">"{quote}"</p>

                <div className="flex items-center">
                  <div className="mr-6">
                    <p className="text-white font-bold text-lg">{author}</p>
                    <p className="text-gray-400">
                      {position}, {company}
                    </p>
                  </div>

                  <div className="ml-auto">
                    <div className="bg-[#0a0f18]/80 p-3 rounded-lg">
                      <Image
                        src={logo || "/placeholder.svg"}
                        alt={company}
                        width={120}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

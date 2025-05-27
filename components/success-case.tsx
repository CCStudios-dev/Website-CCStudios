"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SuccessCaseStat {
  value: string
  label: string
}

interface SuccessCaseProps {
  title: string
  logo: string
  image: string
  description: string
  results: string
  highlightedText: string
  index: number
  stats: SuccessCaseStat[]
}

export function SuccessCase({
  title,
  logo,
  image,
  description,
  results,
  highlightedText,
  index,
  stats,
}: SuccessCaseProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-500 h-full flex flex-col",
        isHovered ? "shadow-2xl shadow-[#4bb6ef]/20" : "shadow-xl",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/95 to-transparent z-10"></div>

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={cn(
            "object-cover transition-all duration-700 brightness-[0.3]",
            isHovered ? "scale-110 brightness-[0.4]" : "scale-100",
          )}
        />
      </div>

      <div className="relative z-20 p-8 md:p-10 h-full flex flex-col">
        <div className="mb-6 flex justify-between items-start">
          <div className="bg-[#111827]/80 backdrop-blur-sm p-4 rounded-xl inline-block">
            <Image
              src={logo || "/placeholder.svg"}
              alt={title}
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="bg-[#4bb6ef]/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-[#4bb6ef] font-bold text-xl border border-[#4bb6ef]/20">
            {index}
          </div>
        </div>

        <div className="mt-auto space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            <p className="text-white text-xl font-semibold">
              {results} <span className="text-[#4bb6ef] font-bold">{highlightedText}</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[#4bb6ef] font-bold text-xl">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button
  asChild
  className={cn(
    "mt-6 bg-transparent border border-[#4bb6ef] text-[#4bb6ef] hover:bg-[#4bb6ef] hover:text-white transition-all duration-300 group-hover:pl-7",
    isHovered ? "pl-7" : "pl-6",
  )}
>
  <a href="/contato">
    Saiba mais
    <ChevronRight
      className={cn(
        "ml-2 h-4 w-4 transition-all duration-300",
        isHovered ? "translate-x-1" : "translate-x-0"
      )}
    />
  </a>
</Button>

        </div>
      </div>
    </motion.div>
  )
}

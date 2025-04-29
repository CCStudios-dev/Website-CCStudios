"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        className="group relative bg-gradient-to-br from-[#111827] to-[#0e1420] rounded-2xl p-8 border border-gray-800/50 overflow-hidden h-full"
        whileHover={{ y: -5 }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4bb6ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#4bb6ef]/20 to-transparent transform origin-top-right scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="w-16 h-16 rounded-2xl bg-[#0a0f18] group-hover:bg-[#4bb6ef]/10 flex items-center justify-center mb-6 transition-colors duration-300">
            <div className="text-[#4bb6ef]">{icon}</div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

          <p className="text-gray-400 mb-8 flex-grow">{description}</p>

          <div className="flex items-center text-[#4bb6ef] font-medium group-hover:translate-x-2 transition-transform duration-300">
            <span>Saiba mais</span>
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

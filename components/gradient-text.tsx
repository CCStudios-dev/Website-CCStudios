"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GradientTextProps {
  children: ReactNode
}

export function GradientText({ children }: GradientTextProps) {
  return (
    <motion.span
      className="bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8] text-transparent bg-clip-text inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  )
}

"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  variant?: "default" | "premium"
}

export function StatCard({ value, label, variant = "default" }: StatCardProps) {
  return (
    <motion.div
      className={cn(
        "p-4 rounded-xl",
        variant === "premium" ? "bg-[#111827]/80 backdrop-blur-sm border border-gray-800/50" : "",
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p
        className={cn("font-bold mb-1", variant === "premium" ? "text-[#4bb6ef] text-3xl" : "text-[#4bb6ef] text-2xl")}
      >
        {value}
      </p>
      <p className={cn("text-sm", variant === "premium" ? "text-gray-300" : "text-gray-400")}>{label}</p>
    </motion.div>
  )
}

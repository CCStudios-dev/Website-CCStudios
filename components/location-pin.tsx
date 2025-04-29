"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LocationPinProps {
  x: number
  y: number
  delay?: number
}

export function LocationPin({ x, y, delay = 0 }: LocationPinProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.5, type: "spring" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div
          className={cn(
            "w-3 h-3 bg-[#4bb6ef] rounded-full transition-all duration-300",
            isHovered ? "transform scale-150" : "",
          )}
        />
        <div
          className={cn(
            "absolute -inset-1 rounded-full bg-[#4bb6ef]/30 animate-ping",
            isHovered ? "opacity-100" : "opacity-50",
          )}
        />
      </div>
    </motion.div>
  )
}

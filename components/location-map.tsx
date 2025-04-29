"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface LocationPinProps {
  x: number
  y: number
  delay: number
  size?: "sm" | "md" | "lg"
}

function LocationPin({ x, y, delay, size = "md" }: LocationPinProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  const pulseClasses = {
    sm: "-inset-1",
    md: "-inset-1.5",
    lg: "-inset-2",
  }

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.5, type: "spring" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} bg-[#4bb6ef] rounded-full transition-all duration-300`}
          animate={{ scale: isHovered ? 1.5 : 1 }}
        />
        <motion.div
          className={`absolute ${pulseClasses[size]} rounded-full bg-[#4bb6ef]/30`}
          animate={{
            opacity: [0.7, 0.2, 0.7],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}

interface LocationMapProps {
  type: "usa" | "brazil"
}

export function LocationMap({ type }: LocationMapProps) {
  // USA map pins
  const usaPins = [
    { x: 47, y: 39, delay: 0, size: "md" as const },
    { x: 40, y: 48, delay: 1, size: "lg" as const },
    { x: 65, y: 45, delay: 2, size: "md" as const },
    { x: 38, y: 55, delay: 3, size: "lg" as const },
    { x: 26, y: 47, delay: 4, size: "md" as const },
    { x: 72, y: 52, delay: 5, size: "md" as const },
    { x: 45, y: 58, delay: 6, size: "lg" as const },
    { x: 50, y: 62, delay: 7, size: "md" as const },
    { x: 55, y: 60, delay: 8, size: "md" as const },
    { x: 70, y: 66, delay: 9, size: "md" as const },
    { x: 67, y: 59, delay: 9, size: "md" as const },
    { x: 62, y: 59, delay: 9, size: "md" as const },
    { x: 64, y: 50, delay: 9, size: "md" as const },
    { x: 31, y: 55, delay: 9, size: "md" as const },
  ]

  // Brazil map pins
  const brazilPins = [
    { x: 56, y: 25, delay: 0, size: "md" as const },
    { x: 50, y: 32, delay: 1, size: "lg" as const },
    { x: 66, y: 28, delay: 2, size: "md" as const },
    { x: 48, y: 48, delay: 3, size: "lg" as const },
    { x: 60, y: 55, delay: 4, size: "md" as const },
    { x: 70, y: 60, delay: 5, size: "md" as const },
    { x: 56, y: 66, delay: 6, size: "md" as const },
    { x: 52, y: 76, delay: 7, size: "md" as const },
    { x: 65, y: 55, delay: 8, size: "md" as const },
    { x: 48, y: 78, delay: 9, size: "lg" as const },
    { x: 72, y: 52, delay: 6, size: "md" as const },
    { x: 75, y: 57, delay: 6, size: "md" as const },
    { x: 71, y: 55, delay: 8, size: "md" as const },
  ]

  const pins = type === "usa" ? usaPins : brazilPins
  const mapSrc = type === "usa" ? "/MAPA USA.png?height=500&width=600" : "/MAPA BR.png?height=500&width=600"
  const mapAlt = type === "usa" ? "Mapa dos Estados Unidos" : "Mapa do Brasil"

  return (
    <div className="relative rounded-3xl overflow-hidden border border-gray-800/50 bg-[#111827]/30 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4bb6ef]/5 to-transparent"></div>

      <div className="relative h-[500px] w-full">
        <Image src={mapSrc || "/placeholder.svg"} alt={mapAlt} fill className="object-contain p-8" />

        {pins.map((pin, index) => (
          <LocationPin key={`${type}-pin-${index}`} x={pin.x} y={pin.y} delay={pin.delay} size={pin.size} />
        ))}
      </div>
    </div>
  )
}

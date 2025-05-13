
"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ClientLogoCarouselProps {
  logos: { src: string; alt: string }[]
}

export function ClientLogoCarousel({ logos }: ClientLogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollAmount = 0

    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
        scrollAmount = 0
      } else {
        scrollAmount += 1
        container.scrollLeft = scrollAmount
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  const duplicatedLogos = [...logos, ...logos] // duplicado para scroll infinito

  return (
    <div className="relative overflow-hidden py-12 bg-[#0a0f18]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18] via-transparent to-[#0a0f18] z-10 pointer-events-none"></div>

      <div
        ref={containerRef}
        className="flex gap-16 items-center whitespace-nowrap overflow-hidden scroll-smooth"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="min-w-[200px] h-20 bg-[#111827]/80 backdrop-blur-sm rounded-xl flex items-center justify-center px-6"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function ComparisonSlider() {
  const [activeTab, setActiveTab] = useState(0)

  const categories = [
    { name: "Velocidade", id: 0 },
    { name: "Atendimento", id: 1 },
    { name: "Conversão", id: 2 },
    { name: "Resultados", id: 3 },
  ]

  const comparisonData = [
    // Velocidade
    {
      ccstudios: {
        score: 95,
        features: [
          "Implementação ágil de campanhas",
          "Resposta rápida às mudanças de mercado",
          "Otimização contínua em tempo real",
        ],
      },
      competitors: {
        score: 40,
        features: [
          "Processos burocráticos e lentos",
          "Demora na implementação de mudanças",
          "Análises mensais ou trimestrais apenas",
        ],
      },
    },
    // Atendimento
    {
      ccstudios: {
        score: 90,
        features: [
          "Atendimento personalizado e exclusivo",
          "Gerente de conta dedicado",
          "Reuniões semanais de acompanhamento",
        ],
      },
      competitors: {
        score: 35,
        features: [
          "Atendimento padronizado e genérico",
          "Múltiplos clientes por gerente",
          "Comunicação limitada e burocrática",
        ],
      },
    },
    // Conversão
    {
      ccstudios: {
        score: 100,
        features: [
          "Foco em resultados mensuráveis",
          "CRM integrado para melhor conversão",
          "Otimização contínua baseada em dados",
        ],
      },
      competitors: {
        score: 25,
        features: ["Foco em métricas de vaidade", "Sistemas desconectados", "Estratégias genéricas sem personalização"],
      },
    },
    // Resultados
    {
      ccstudios: {
        score: 98,
        features: [
          "ROI médio de 45x para clientes",
          "Redução média de 50% no custo por lead",
          "Aumento médio de 320% em conversões",
        ],
      },
      competitors: {
        score: 30,
        features: [
          "ROI inconsistente e não garantido",
          "Foco em tráfego sem qualificação",
          "Métricas de vaidade sem impacto no negócio",
        ],
      },
    },
  ]

  const currentData = comparisonData[activeTab]

  return (
    <div className="bg-[#111827]/50 backdrop-blur-sm rounded-3xl border border-gray-800/50 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-800/50">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex-1 py-5 text-center transition-all duration-300 ${
              activeTab === category.id
                ? "bg-[#4bb6ef]/10 text-[#4bb6ef] font-medium"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CC Studios Column */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                <span className="text-[#4bb6ef]">CC</span>STUDIOS
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-[#4bb6ef] font-bold text-xl">{currentData.ccstudios.score}%</span>
                <div className="w-3 h-3 rounded-full bg-[#4bb6ef]"></div>
              </div>
            </div>

            <div className="h-4 w-full bg-[#1a2234] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${currentData.ccstudios.score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              ></motion.div>
            </div>

            <div className="space-y-4 pt-4">
              {currentData.ccstudios.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <div className="w-5 h-5 rounded-full bg-[#4bb6ef]/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#4bb6ef]" />
                    </div>
                  </div>
                  <p className="text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitors Column */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#ff3366]">CONCORRENTES</h3>

              <div className="flex items-center gap-2">
                <span className="text-[#ff3366] font-bold text-xl">{currentData.competitors.score}%</span>
                <div className="w-3 h-3 rounded-full bg-[#ff3366]"></div>
              </div>
            </div>

            <div className="h-4 w-full bg-[#1a2234] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff3366] to-[#cc2952] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${currentData.competitors.score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              ></motion.div>
            </div>

            <div className="space-y-4 pt-4">
              {currentData.competitors.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <div className="w-5 h-5 rounded-full bg-[#ff3366]/20 flex items-center justify-center">
                      <X className="h-3 w-3 text-[#ff3366]" />
                    </div>
                  </div>
                  <p className="text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

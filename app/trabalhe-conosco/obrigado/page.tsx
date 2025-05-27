"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft, Heart, Users, Clock, Mail, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThanksJobPage() {
  const [currentStep, setCurrentStep] = useState(0)

  // Add data-page attribute to body to hide header/footer
  useEffect(() => {
    document.body.setAttribute("data-page", "job-application")

    // Cleanup function to remove attribute when component unmounts
    return () => {
      document.body.removeAttribute("data-page")
    }
  }, [])

  // Animation steps
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 1000)
    const timer2 = setTimeout(() => setCurrentStep(2), 2000)
    const timer3 = setTimeout(() => setCurrentStep(3), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f18] via-[#0e1420] to-[#1a1f2e] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-8">
                <Image src="/LogoCCS.png" alt="CC Studios Logo" width={200} height={50} />
              </div>

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                    className="absolute inset-0 rounded-full border-2 border-green-500"
                  />
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Candidatura{" "}
                  <span className="bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8] bg-clip-text text-transparent">
                    Enviada!
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-6">Obrigado por se candidatar à nossa vaga! 🚀</p>
              </motion.div>

              {/* Steps Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4 text-gray-300">
                  <motion.div
                    initial={{ backgroundColor: "#374151" }}
                    animate={{ backgroundColor: currentStep >= 1 ? "#10b981" : "#374151" }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    {currentStep >= 1 ? (
                      <CheckCircle className="h-5 w-5 text-white" />
                    ) : (
                      <span className="text-sm">1</span>
                    )}
                  </motion.div>
                  <span className={currentStep >= 1 ? "text-white" : "text-gray-400"}>
                    Candidatura recebida com sucesso
                  </span>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <motion.div
                    initial={{ backgroundColor: "#374151" }}
                    animate={{ backgroundColor: currentStep >= 2 ? "#10b981" : "#374151" }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    {currentStep >= 2 ? (
                      <CheckCircle className="h-5 w-5 text-white" />
                    ) : (
                      <span className="text-sm">2</span>
                    )}
                  </motion.div>
                  <span className={currentStep >= 2 ? "text-white" : "text-gray-400"}>
                    Análise do perfil em andamento
                  </span>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <motion.div
                    initial={{ backgroundColor: "#374151" }}
                    animate={{ backgroundColor: currentStep >= 3 ? "#10b981" : "#374151" }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    {currentStep >= 3 ? (
                      <CheckCircle className="h-5 w-5 text-white" />
                    ) : (
                      <span className="text-sm">3</span>
                    )}
                  </motion.div>
                  <span className={currentStep >= 3 ? "text-white" : "text-gray-400"}>
                    Entraremos em contato em breve
                  </span>
                </div>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-[#1a1f2e]/50 p-4 rounded-lg border border-gray-800">
                  <Clock className="h-6 w-6 text-[#4bb6ef] mb-2" />
                  <h3 className="text-white font-semibold mb-1">Tempo de Resposta</h3>
                  <p className="text-gray-400 text-sm">Até 3 dias úteis</p>
                </div>

                <div className="bg-[#1a1f2e]/50 p-4 rounded-lg border border-gray-800">
                  <Users className="h-6 w-6 text-[#4bb6ef] mb-2" />
                  <h3 className="text-white font-semibold mb-1">Próximos Passos</h3>
                  <p className="text-gray-400 text-sm">Entrevista online ou presencial</p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8] hover:opacity-90 text-white px-8 py-3"
                >
                  <Link href="/trabalhe-conosco">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Ver Outras Vagas
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 px-8 py-3"
                >
                  <Link href="/">Voltar ao Início</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Illustration/Contact */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#0e1420] p-8 rounded-2xl border border-gray-800">
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4">
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8] p-3 rounded-full"
                  >
                    <Heart className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                <div className="absolute -top-4 -right-4">
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                    className="bg-gradient-to-r from-[#8a63d2] to-[#6a4db3] p-3 rounded-full"
                  >
                    <Users className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Obrigado pela sua inscrição!</h3>
                    <p className="text-gray-300">
                      Recebemos seus dados com sucesso e <br/>ficamos felizes pelo seu interesse<br/>em fazer parte do nosso time.<br/>
Agora vamos analisar cuidadosamente todas as candidaturas. Caso o seu perfil esteja alinhado com os requisitos da vaga, entraremos em contato para os próximos passos do processo seletivo.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 pt-6 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-4">Fique atento ao seu e-mail e <br/>WhatsApp nos próximos dias!<br/>Boa sorte e até breve!</h4>

                    
                    
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4bb6ef]/20 to-[#8a63d2]/20 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

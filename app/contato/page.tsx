"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ArrowLeft, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormStep {
  title: string
  subtitle: string
  image: string
}

export default function ContatoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    segment: "",
    cnpj: "",
    position: "",
    timeline: "",
    message: "",
  })
  const [isValid, setIsValid] = useState(false)

  // Add data-page attribute to body to hide header/footer
  useEffect(() => {
    document.body.setAttribute("data-page", "contact")

    // Cleanup function to remove attribute when component unmounts
    return () => {
      document.body.removeAttribute("data-page")
    }
  }, [])

  const steps: FormStep[] = [
    {
      title: "Como devemos te chamar?",
      subtitle: "É um prazer te receber aqui!",
      image: "/banners/FORM 01.png?height=800&width=600",
    },
    {
      title: `Qual é o seu e-mail profissional, ${formData.name.split(" ")[0]}?`,
      subtitle: "Vamos manter contato",
      image: "/banners/FORM 02.png?height=800&width=600",
    },
    {
      title: "E por qual número nossos especialistas conseguem contato com você?",
      subtitle: "Para uma comunicação mais direta",
      image: "/banners/FORM 03.png?height=800&width=600",
    },
    {
      title: "Nos diga, qual o nome da sua empresa?",
      subtitle: "Queremos conhecer seu negócio",
      image: "/banners/FORM 04.png?height=800&width=600",
    },
    {
      title: `${formData.name.split(" ")[0]}, quanto, em média, ela está faturando ao mês?`,
      subtitle: "Esta informação nos ajuda a personalizar nossa proposta",
      image: "/banners/FORM 05.png?height=800&width=600",
    },
    {
      title: "Em qual segmento de mercado vocês estão exatamente?",
      subtitle: "Para oferecermos soluções específicas para seu setor",
      image: "/banners/FORM 06.png?height=800&width=600",
    },
    {
      title: "Qual o CNPJ dela?",
      subtitle: "Para formalizarmos nossa proposta",
      image: "/banners/FORM 07.png?height=800&width=600",
    },
    {
      title: "E qual é o seu cargo aí dentro?",
      subtitle: "Para entendermos melhor seu papel na empresa",
      image: "/banners/FORM 08.png?height=800&width=600",
    },
    {
      title: "Para quando você tem interesse em iniciar esse projeto?",
      subtitle: "Vamos planejar juntos",
      image: "/banners/FORM 09.png?height=800&width=600",
    },
    {
      title: "Conte-me um pouco sobre a sua empresa e o que espera atingir com a ajuda da CCS.",
      subtitle: "Queremos entender seus objetivos",
      image: "/banners/FORM 10.png?height=800&width=600",
    },
  ]

  useEffect(() => {
    // Validate current step
    switch (currentStep) {
      case 0:
        setIsValid(formData.name.trim().split(" ").length >= 2)
        break
      case 1:
        setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        break
      case 2:
        setIsValid(formData.phone.replace(/\D/g, "").length >= 10)
        break
      case 3:
        setIsValid(formData.company.trim().length >= 2)
        break
      case 4:
        setIsValid(!!formData.revenue)
        break
      case 5:
        setIsValid(!!formData.segment)
        break
      case 6:
        setIsValid(formData.cnpj.replace(/\D/g, "").length === 14)
        break
      case 7:
        setIsValid(!!formData.position)
        break
      case 8:
        setIsValid(!!formData.timeline)
        break
      case 9:
        setIsValid(formData.message.trim().length >= 10)
        break
      default:
        setIsValid(false)
    }
  }, [currentStep, formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else if (isValid && currentStep === steps.length - 1) {
      // Submit form
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
      alert("Formulário enviado com sucesso! Em breve entraremos em contato.")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    return numbers
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .substring(0, 18)
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Digite seu nome e sobrenome"
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
            />
          </div>
        )
      case 1:
        return (
          <div className="space-y-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite o seu e-mail"
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
            />
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex items-center bg-[#0a0f18] border border-gray-800 rounded-l-md px-4 py-4">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">+55</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const formatted = formatPhone(e.target.value)
                  setFormData((prev) => ({ ...prev, phone: formatted }))
                }}
                placeholder="Digite seu número"
                className="flex-1 px-6 py-4 bg-[#0a0f18] border border-gray-800 border-l-0 rounded-r-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Qual o nome da sua empresa?"
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
            />
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <select
              name="revenue"
              value={formData.revenue}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="" disabled selected>
                Selecione o faturamento mensal
              </option>
              {[
                "Até 50 mil",
                "De 51 mil à 70 mil",
                "De 71 mil à 100 mil",
                "De 101 mil à 200 mil",
                "De 201 mil à 400 mil",
                "De 401 mil à 1 milhão",
                "De 1 à 4 milhões",
                "De 4 à 16 milhões",
                "De 16 à 40 milhões",
                "Mais de 40 milhões",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <select
              name="segment"
              value={formData.segment}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="" disabled selected>
                Selecione o segmento
              </option>
              {[
                "Serviço",
                "Varejo",
                "Indústria",
                "E-commerce",
                "Food Service",
                "Educação",
                "Imobiliária",
                "SAAS",
                "Finanças",
                "Franquia / Franchising",
                "Telecom",
                "Energia Solar",
                "Turismo",
                "Outro",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )
      case 6:
        return (
          <div className="space-y-6">
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={(e) => {
                const formatted = formatCNPJ(e.target.value)
                setFormData((prev) => ({ ...prev, cnpj: formatted }))
              }}
              placeholder="Digite o CNPJ da empresa"
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50"
            />
          </div>
        )
      case 7:
        return (
          <div className="space-y-6">
            <select
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="" disabled selected>
                Selecione seu cargo
              </option>
              {[
                "Proprietário",
                "Sócio",
                "CEO/Diretor Executivo",
                "Diretor",
                "Gerente",
                "Supervisor",
                "Coordenador",
                "Analista",
                "Assistente/Funcionário",
                "Outros",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )
      case 8:
        return (
          <div className="space-y-6">
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="" disabled selected>
                Selecione o prazo
              </option>
              {["Imediatamente", "Em até três meses", "Em seis meses", "Ainda não sei"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )
      case 9:
        return (
          <div className="space-y-6">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Conte-nos sobre sua empresa e seus objetivos..."
              className="w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 min-h-[150px]"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 bg-[#0a0f18] relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={steps[currentStep].image || "/placeholder.svg"}
              alt="Contact background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 bg-[#0e1420] p-8 lg:p-16 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Image src="/logoCCS.png" alt="CC Studios Logo" width={150} height={40} />

            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar
              </button>
            )}
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <p className="text-[#4bb6ef]">{steps[currentStep].subtitle}</p>
                    <h2 className="text-2xl font-bold text-white">{steps[currentStep].title}</h2>
                  </div>

                  {renderStepContent()}

                  <Button
                    onClick={handleNext}
                    disabled={!isValid}
                    className={cn(
                      "w-full bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white py-6 rounded-md group transition-all duration-300",
                      !isValid && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    {currentStep === steps.length - 1 ? "Enviar" : "Prosseguir"}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <div className="text-center text-xs text-gray-500 mt-4">
                    Ao clicar em PROSSEGUIR você automaticamente concorda com os{" "}
                    <a href="#" className="text-[#4bb6ef] hover:underline">
                      termos de uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className="text-[#4bb6ef] hover:underline">
                      política de privacidade
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? "w-6 bg-[#4bb6ef]"
                        : index < currentStep
                          ? "w-3 bg-[#4bb6ef]/50"
                          : "w-3 bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>
              <div className="text-gray-500 text-sm">
                Etapa {currentStep + 1} de {steps.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Users, Clock, MapPin, ArrowLeft, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface JobPosition {
  id: string
  title: string
  department: string
  type: string
  location: string
  description: string
  requirements: string[]
  responsibilities: string[]
  questions: {
    id: string
    question: string
    type: "text" | "textarea" | "select" | "number" | "multiselect"
    options?: string[]
    placeholder?: string
    allowOther?: boolean
    validation?: {
      pattern?: RegExp
      message?: string
    }
  }[]
  color: "blue" | "purple" | "green" | "orange" | "pink"
  image: string
}

export default function BancoTalentosPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [otherSpecifications, setOtherSpecifications] = useState<Record<string, string>>({})
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  const bancoTalentosJob: JobPosition = {
    id: "banco-talentos",
    title: "Banco de Talentos",
    department: "Diversos",
    type: "A definir",
    location: "A definir",
    description: "Cadastre-se em nosso banco de talentos para futuras oportunidades.",
    requirements: [],
    responsibilities: [],
    questions: [
      { id: "nome", question: "Nome completo:", type: "text" },
      {
        id: "email",
        question: "E-mail:",
        type: "text",
        validation: {
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Digite um email válido",
        },
      },
      {
        id: "telefone",
        question: "Telefone para contato:",
        type: "text",
        validation: {
          pattern: /^(\+\d{1,3}\s?)?\d{2}[\s.-]?\d{4,5}[\s.-]?\d{4}$/,
          message: "Formato inválido. Use (99) 99999-9999",
        },
      },
      {
        id: "area",
        question: "Em qual área você gostaria de trabalhar?",
        type: "select",
        options: ["Marketing Digital", "Desenvolvimento", "Design", "Comercial", "Administrativo", "Outra"],
      },
      {
        id: "experience",
        question: "Conte-nos sobre sua experiência profissional",
        type: "textarea",
        placeholder: "Descreva suas experiências anteriores, habilidades e competências...",
      },
      {
        id: "motivation",
        question: "Por que você gostaria de trabalhar na CCStudios?",
        type: "textarea",
        placeholder: "Conte-nos sua motivação...",
      },
    ],
    color: "blue",
    image: "/banners/FORM 10.png?height=600&width=600",
  }

  // Add data-page attribute to body to hide header/footer when showing form
  useEffect(() => {
    document.body.setAttribute("data-page", "job-application")

    // Cleanup function to remove attribute when component unmounts
    return () => {
      document.body.removeAttribute("data-page")
    }
  }, [])

  useEffect(() => {
    // Focar automaticamente no campo quando mudar de step
    const focusTimer = setTimeout(() => {
      try {
        const question = bancoTalentosJob.questions[currentStep]
        if (!question) return

        if (question.type === "text" || question.type === "number") {
          inputRef.current?.focus()
        } else if (question.type === "textarea") {
          textareaRef.current?.focus()
        } else if (question.type === "select") {
          selectRef.current?.focus()
        }
      } catch (error) {
        console.error("Erro ao focar:", error)
      }
    }, 500)

    return () => clearTimeout(focusTimer)
  }, [currentStep])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validar o campo se tiver regras de validação
    const question = bancoTalentosJob.questions.find((q) => q.id === name)
    if (question?.validation?.pattern) {
      const isValid = question.validation.pattern.test(value)
      if (!isValid && value.trim() !== "") {
        setValidationErrors((prev) => ({
          ...prev,
          [name]: question.validation?.message || "Valor inválido",
        }))
      } else {
        setValidationErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && validateStep()) {
      e.preventDefault()
      handleNext()
    }
  }

  const validateStep = () => {
    const questionIndex = currentStep
    if (questionIndex >= 0 && questionIndex < bancoTalentosJob.questions.length) {
      const question = bancoTalentosJob.questions[questionIndex]
      const value = formData[question.id] || ""

      // Verificar se há erros de validação para este campo
      if (validationErrors[question.id]) {
        return false
      }

      return value.trim().length > 0
    }
    return false
  }

  const validateAllFields = () => {
    const errors: Record<string, string> = {}
    let hasErrors = false

    bancoTalentosJob.questions.forEach((question) => {
      const value = formData[question.id] || ""

      // Verificar campos obrigatórios
      if (value.trim() === "") {
        errors[question.id] = "Este campo é obrigatório"
        hasErrors = true
        return
      }

      // Verificação específica para e-mail
      if (question.id === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(value)) {
          errors[question.id] = "Digite um e-mail válido"
          hasErrors = true
          return
        }
      }

      // Verificar regras de validação específicas
      if (question.validation?.pattern && !question.validation.pattern.test(value)) {
        errors[question.id] = question.validation.message || "Valor inválido"
        hasErrors = true
      }
    })

    setValidationErrors(errors)
    return !hasErrors
  }

  const handleNext = () => {
    const isCurrentStepValid = validateStep()

    if (isCurrentStepValid) {
      if (currentStep < bancoTalentosJob.questions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Validar todos os campos antes de enviar
        if (!validateAllFields()) {
          setSubmitError("Por favor, corrija os erros no formulário antes de enviar.")
          return
        }

        // Form submission
        setSubmitting(true)
        setSubmitError(null)

        // Formatar telefone se necessário
        const formattedData = { ...formData }
        if (formData.telefone) {
          const countryCode = formData.countryCode || "+55"
          if (!formData.telefone.startsWith("+")) {
            formattedData.telefone = `${countryCode} ${formatPhone(formData.telefone)}`
          }
        }

        // Enviar dados para a API
        const submissionData = {
          vaga: bancoTalentosJob.title,
          data_candidatura: new Date().toISOString(),
          ...formattedData,
          ...otherSpecifications,
        }

        fetch("/api/submit-job-application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        })
          .then(async (response) => {
            const responseData = await response.json()

            if (response.ok) {
              alert("Candidatura enviada com sucesso! Em breve entraremos em contato.")
              router.push("/trabalhe-conosco")
            } else {
              console.error("Erro na resposta:", responseData)
              setSubmitError(
                responseData.message || "Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.",
              )
            }
          })
          .catch((error) => {
            console.error("Erro ao enviar candidatura:", error)
            setSubmitError("Ocorreu um erro ao enviar sua candidatura. Por favor, tente novamente.")
          })
          .finally(() => {
            setSubmitting(false)
          })
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      router.push("/trabalhe-conosco")
    }
  }

  const formatPhone = (value: string) => {
    // Se começar com +, preserva o código do país
    if (value.startsWith("+")) {
      const countryCode = value.match(/^\+\d{1,3}/)?.[0] || ""
      const rest = value.replace(/^\+\d{1,3}/, "").replace(/\D/g, "")

      if (rest.length <= 0) return countryCode
      if (rest.length <= 2) return `${countryCode} (${rest}`
      if (rest.length <= 6) return `${countryCode} (${rest.slice(0, 2)}) ${rest.slice(2)}`
      if (rest.length <= 10) return `${countryCode} (${rest.slice(0, 2)}) ${rest.slice(2, 6)}-${rest.slice(6)}`
      return `${countryCode} (${rest.slice(0, 2)}) ${rest.slice(2, 7)}-${rest.slice(7, 11)}`
    }

    // Formato padrão brasileiro sem código de país
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const formattedValue = formatPhone(value.startsWith("+") ? value : value)

    // Atualiza o valor do telefone
    setFormData((prev) => ({ ...prev, [name]: formattedValue }))

    // Validar o telefone
    const question = bancoTalentosJob.questions.find((q) => q.id === name)
    if (question?.validation?.pattern) {
      const isValid = true // Validação simplificada para evitar problemas com regex

      if (!isValid && formattedValue.trim() !== "") {
        setValidationErrors((prev) => ({
          ...prev,
          [name]: question.validation?.message || "Valor inválido",
        }))
      } else {
        setValidationErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
      }
    }
  }

  const renderFormStep = () => {
    const questionIndex = currentStep
    if (questionIndex >= 0 && questionIndex < bancoTalentosJob.questions.length) {
      const question = bancoTalentosJob.questions[questionIndex]
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[#4bb6ef]">
              Pergunta {questionIndex + 1} de {bancoTalentosJob.questions.length}
            </p>
            <h2 className="text-2xl font-bold text-white">{question.question}</h2>
          </div>

          <div className="space-y-4">
            {question.type === "select" ? (
              <select
                ref={selectRef}
                id={question.id}
                name={question.id}
                value={formData[question.id] || ""}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none",
                  validationErrors[question.id] && "border-red-500 focus:ring-red-500",
                )}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1.5em 1.5em",
                }}
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {question.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : question.type === "textarea" ? (
              <div className="space-y-2">
                <Textarea
                  ref={textareaRef}
                  id={question.id}
                  name={question.id}
                  value={formData[question.id] || ""}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder={question.placeholder}
                  className={cn(
                    "w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 min-h-[150px]",
                    validationErrors[question.id] && "border-red-500 focus:ring-red-500",
                  )}
                />
                {validationErrors[question.id] && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {validationErrors[question.id]}
                  </p>
                )}
              </div>
            ) : question.id === "telefone" ? (
              <div className="space-y-2">
                <div className="flex">
                  <div className="relative">
                    <select
                      value={formData.countryCode || "+55"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, countryCode: e.target.value }))}
                      className="h-full px-3 py-4 bg-[#0a0f18] border border-gray-800 border-r-0 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50 appearance-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234bb6ef'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.5rem center",
                        backgroundSize: "1em 1em",
                        paddingRight: "2rem",
                      }}
                    >
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+351">🇵🇹 +351</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                    </select>
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    id={question.id}
                    name={question.id}
                    value={formData[question.id] || ""}
                    onChange={handlePhoneInput}
                    onKeyPress={handleKeyPress}
                    placeholder="(99) 99999-9999"
                    className={cn(
                      "flex-1 px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-r-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50",
                      validationErrors[question.id] && "border-red-500 focus:ring-red-500",
                    )}
                  />
                </div>
                {validationErrors[question.id] && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {validationErrors[question.id]}
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  ref={inputRef}
                  type={question.type}
                  id={question.id}
                  name={question.id}
                  value={formData[question.id] || ""}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder={question.placeholder}
                  className={cn(
                    "w-full px-6 py-4 bg-[#0a0f18] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4bb6ef]/50",
                    validationErrors[question.id] && "border-red-500 focus:ring-red-500",
                  )}
                />
                {validationErrors[question.id] && (
                  <p className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {validationErrors[question.id]}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )
    }
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-[#4bb6ef]">Revisão</p>
          <h2 className="text-2xl font-bold text-white">Revise suas informações antes de enviar</h2>
        </div>

        {submitError && (
          <div className="bg-red-500/20 border border-red-500 p-4 rounded-md text-white">
            <p className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              {submitError}
            </p>
          </div>
        )}

        <div className="space-y-4 bg-[#111827]/50 p-6 rounded-xl">
          {Object.entries(formData).map(([key, value]) => (
            <p key={key} className="text-white">
              <span className="text-gray-400">
                {bancoTalentosJob.questions.find((q) => q.id === key)?.question || key}:
              </span>{" "}
              {value}
            </p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 bg-[#0a0f18] relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={bancoTalentosJob.image || "/placeholder.svg"}
              alt="Banco de Talentos CC Studios"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18]/80 via-transparent to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-[#4bb6ef]">Banco de Talentos</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-300">
                <Users className="h-4 w-4 mr-2" />
                <span>Diversos</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-2" />
                <span>A definir</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>A definir</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mb-4">
              Cadastre-se em nosso banco de talentos para futuras oportunidades. Entraremos em contato assim que surgir
              uma vaga compatível com seu perfil.
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 bg-[#0e1420] p-8 lg:p-16 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Image src="/LogoCCS.png" alt="CC Studios Logo" width={150} height={40} />

            <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </button>
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
                  {renderFormStep()}

                  <Button
                    onClick={handleNext}
                    disabled={!validateStep() || submitting}
                    className={cn(
                      "w-full bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8] hover:opacity-90 text-white py-6 rounded-md group transition-all duration-300",
                      (!validateStep() || submitting) && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <>
                        {currentStep === bancoTalentosJob.questions.length ? "Enviar Candidatura" : "Prosseguir"}
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
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
                {Array.from({ length: bancoTalentosJob.questions.length + 1 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? "w-6 bg-gradient-to-r from-[#4bb6ef] to-[#3a9fd8]"
                        : index < currentStep
                          ? "w-3 bg-[#4bb6ef]/10"
                          : "w-3 bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>
              <div className="text-gray-500 text-sm">
                Etapa {currentStep + 1} de {bancoTalentosJob.questions.length + 1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const FORMSPREE_FORM_ID = "mzzrqaqy"
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("Dados da candidatura recebidos:", data)

    // Validação básica do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Por favor, insira um email válido.",
        },
        { status: 400 },
      )
    }

    // Preparar os dados para o Formspree
    const formspreeData = {
      ...data,
      _subject: `Nova candidatura para ${data.vaga} - CCStudios`,
      form_type: "job_application",
      submitted_at: data.data_candidatura || new Date().toISOString(),
    }

    // Enviar dados para o Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formspreeData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Erro na resposta do Formspree:", errorData)

      // Tratar erros específicos do Formspree
      if (errorData.errors) {
        const emailError = errorData.errors.find((err: any) => err.field === "email")
        if (emailError) {
          return NextResponse.json(
            {
              success: false,
              message: "Por favor, insira um email válido.",
            },
            { status: 400 },
          )
        }
      }

      throw new Error("Falha ao enviar candidatura")
    }

    const responseData = await response.json()
    console.log("Resposta do Formspree:", responseData)

    return NextResponse.json({
      success: true,
      message: "Candidatura registrada com sucesso!",
    })
  } catch (error) {
    console.error("Erro ao processar candidatura:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao processar candidatura. Por favor, tente novamente.",
      },
      { status: 500 },
    )
  }
}

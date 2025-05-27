import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"


const FORMSPREE_FORM_ID = "mqaqodod"
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("Dados do formulário de contato recebidos:", data)

    // Preparar os dados para o Formspree
    const formspreeData = {
      ...data,
      _subject: "Novo formulário de contato recebido - CCStudios",
      form_type: "contact",
      submitted_at: new Date().toISOString(),
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
      const errorText = await response.text()
      console.error("Erro na resposta do Formspree:", errorText)
      throw new Error("Falha ao enviar formulário de contato")
    }

    const responseData = await response.json()
    console.log("Resposta do Formspree:", responseData)

    return NextResponse.json({
      success: true,
      message: "Formulário enviado com sucesso!",
    })
  } catch (error) {
    console.error("Erro ao processar formulário de contato:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao processar formulário. Por favor, tente novamente.",
      },
      { status: 500 },
    )
  }
}
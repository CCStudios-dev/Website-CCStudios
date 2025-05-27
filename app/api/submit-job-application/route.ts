import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"


const FORMSPREE_FORM_ID = "mzzrqaqy"
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("Dados da candidatura recebidos:", data)

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
      const errorText = await response.text()
      console.error("Erro na resposta do Formspree:", errorText)
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
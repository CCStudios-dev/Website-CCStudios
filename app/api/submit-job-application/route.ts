import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import {
  createMondayItem,
  mapJobApplicationToMondayColumns,
} from "@/lib/monday"

const FORMSPREE_FORM_ID = "mzzrqaqy"
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`
const MONDAY_BOARD_ID = process.env.MONDAY_BOARD_ID || "9431427743"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("Dados da candidatura recebidos:", data)

    // ✅ Validação mínima obrigatória
    if (!data.nome || !data.email || !data.vaga) {
      return NextResponse.json(
        {
          success: false,
          message: "Nome, email e vaga são obrigatórios.",
        },
        { status: 400 },
      )
    }

    // ✅ Validar e-mail com regex
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

    // ✅ Preparar dados para backup no Formspree
    const formspreeData = {
      ...data,
      _subject: `Nova candidatura para ${data.vaga} - CCStudios`,
      form_type: "job_application",
      submitted_at: data.data_candidatura || new Date().toISOString(),
    }

    // ✅ Enviar backup ao Formspree
    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formspreeData),
    })

    if (!formspreeResponse.ok) {
      const errorData = await formspreeResponse.json()
      console.error("Erro na resposta do Formspree:", errorData)

      const emailError = errorData.errors?.find(
        (err: any) => err.field === "email",
      )
      if (emailError) {
        return NextResponse.json(
          {
            success: false,
            message: "Email inválido no envio ao Formspree.",
          },
          { status: 400 },
        )
      }
    }

    // ✅ Enviar dados para o Monday.com
    try {
      const columnValues = mapJobApplicationToMondayColumns(data)
      const itemName = `${data.nome} - ${data.vaga || "Banco de Talentos"}`
      const mondayResponse = await createMondayItem(
        MONDAY_BOARD_ID,
        itemName,
        columnValues,
      )
      console.log("Monday.com response:", mondayResponse)
    } catch (mondayError) {
      console.error("Erro ao enviar para Monday.com:", mondayError)
      // Mesmo com erro no Monday, a submissão não falha
    }

    return NextResponse.json({
      success: true,
      message: "Candidatura registrada com sucesso!",
    })
  } catch (error) {
    console.error("Erro ao processar candidatura:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao processar candidatura. Tente novamente mais tarde.",
      },
      { status: 500 },
    )
  }
}

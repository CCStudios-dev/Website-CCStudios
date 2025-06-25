/**
 * Integração com a API do Monday.com
 */
const MONDAY_API_URL = "https://api.monday.com/v2"

/**
 * Cria um novo item no board do Monday.com
 */
export async function createMondayItem(
  boardId: string,
  itemName: string,
  columnValues: Record<string, any>
) {
  try {
    const formattedColumnValues = JSON.stringify(columnValues)

    const query = `
      mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId, 
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
        }
      }
    `

    const response = await fetch(MONDAY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.MONDAY_API_TOKEN || "",
        "API-Version": "2023-10"
      },
      body: JSON.stringify({
        query,
        variables: {
          boardId,
          itemName,
          columnValues: formattedColumnValues,
        },
      }),
    })

    const data = await response.json()

    if (data.errors) {
      console.error("Monday.com API error:", data.errors)
      throw new Error(data.errors[0]?.message || "Erro ao criar item no Monday.com")
    }

    return data.data.create_item
  } catch (error) {
    console.error("Erro ao criar item no Monday.com:", error)
    throw error
  }
}

/**
 * Mapeia os dados do formulário para as colunas do Monday.com
 */
export function mapJobApplicationToMondayColumns(
  formData: Record<string, any>
): Record<string, any> {
  const getLabel = (value: string, options: string[]) => {
    const val = value?.toLowerCase() || ""
    return options.find((opt) => val.includes(opt.toLowerCase())) || options[0]
  }

  const normalizeVaga = (vaga: string): string => {
    const mapaVagas: Record<string, string> = {
      "Gestor de Projetos": "Gestor de Projetos",
      "Gestor de Tráfego Pago": "Gestor de Tráfego Pago",
      "Atendimento ao Cliente": "Atendimento ao Cliente CS",
      "Atendimento ao Cliente CS": "Atendimento ao Cliente CS",
      "SDR": "SDR (Pré-Vendas)",
      "Pré-Vendas": "SDR (Pré-Vendas)",
      "Social Media": "Social Media",
      "Videomaker": "Videomaker",
    }

    for (const chave in mapaVagas) {
      if ((vaga || "").toLowerCase().includes(chave.toLowerCase())) {
        return mapaVagas[chave]
      }
    }

    return "Banco de Talentos"
  }

  const dataAtual = new Date().toISOString().split("T")[0]

  return {
    text_mkrvkq7e: formData.nome || "",
    numeric_mkrvj4c3: Number(formData.idade || 0),
    text_mkrv849f: formData.cidade_estado || "",
    text_mkrvb312: formData.telefone || "",
    email_mkrv3fj4: {
      email: formData.email || "",
      text: formData.email || "",
    },
    text_mkrvcr4w: formData.instagram || "",
    text_mkrv1ahw: formData.linkedin || "",

    color_mkrvhg6h: {
      label: getLabel(formData.trabalha, ["SIM", "NÃO", "FREELANCER"]),
    },

    numeric_mkrvcz3v: Number(
      formData.clientes_leads_ativos ||
      formData.clientes_ativos ||
      formData.clientes ||
      0
    ),
    text_mkrvecxs:
      formData.tempo_experiencia ||
      formData.tempo_trafego ||
      formData.tempo_atendimento ||
      formData.tempo_social_media ||
      formData.tempo_vendas ||
      "",
    text_mks36zsr:
      formData.tipos_experiencia ||
      formData.tipos_experiencia_pratica ||
      formData.atividades_prevenda ||
      formData.canais_atendimento ||
      "Não informado",

    long_text_mkrvym3z:
      formData.dominio_ferramentas ||
      formData.ferramentas ||
      formData.ferramentas_crm ||
      "Não informado",
    long_text_mkrvksdm: formData.plataformas || "Não informado",
    long_text_mkrvfa9: formData.nichos || "Não informado",

    text_mkrvp6tx: formData.pretensao_salarial || formData.remuneracao || "",
    color_mkrvfs6v: {
      label:
        ["PJ", "CLT", "MEI", "INDIFERENTE"].find((label) =>
          (formData.modelo_contratacao || "")
            .toLowerCase()
            .includes(label.toLowerCase())
        ) || "INDIFERENTE",
    },

    color_mkrvrqx3: {
      label:
        ["HÍBRIDO", "SIM", "REMOTO"].find((label) =>
          (formData.presencial || "")
            .toLowerCase()
            .includes(label.toLowerCase())
        ) || "REMOTO",
    },

    numeric_mkrvbvah: Number(formData.investimento || 0),

    long_text_mkrvvhbt: formData.desafio || formData.motivacao || "—",
    long_text_mkrvpz7j:
      formData.resolucao_situacao_dificil ||
      formData.estrategia_qualificacao ||
      formData.estrategia_reclamacao ||
      formData.estrategia_nicho ||
      formData.estrategia_lista_leads ||
      formData.estrategia_ausentes ||
      "—",
    long_text_mkrvpt95:
      formData.execucao_acao_pratica ||
      formData.estrategia_engajamento ||
      formData.estrategia_retencao ||
      formData.estrategia_cpa ||
      "—",

    link_mkrv6jjv: {
      url: formData.portfolio || "",
      text: formData.portfolio || "",
    },

    color_mks630c0: { label: normalizeVaga(formData.vaga) },

    status: { label: "Formulário Recebido" },

    data: {
      date: dataAtual,
    },
  }
}

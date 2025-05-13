import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0f18] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/LogoCCS.png" alt="CC Studios Logo" width={150} height={40} />
            </Link>
            <p className="text-gray-400 mb-6">
              Soluções personalizadas de marketing digital para impulsionar seu negócio com estratégias eficientes e
              resultados mensuráveis.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#4bb6ef]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#4bb6ef]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#4bb6ef]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos/trafego-pago" className="text-gray-400 hover:text-[#4bb6ef]">
                  Tráfego Pago
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/desenvolvimento-sites-landing-pages"
                  className="text-gray-400 hover:text-[#4bb6ef]"
                >
                  Desenvolvimento de Sites e Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/servicos/conteudo" className="text-gray-400 hover:text-[#4bb6ef]">
                  Conteúdo
                </Link>
              </li>
              <li>
                <Link href="/servicos/crm" className="text-gray-400 hover:text-[#4bb6ef]">
                  CRM
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#4bb6ef]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-gray-400 hover:text-[#4bb6ef]">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#4bb6ef]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-[#4bb6ef]">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#4bb6ef] mr-3 mt-0.5" />
                <span className="text-gray-400">R. 700, 401 Sala 202 - Centro, Balneário Camboriú - 88330618</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#4bb6ef] mr-3" />
                <span className="text-gray-400">+55 (27) 99613-6747</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#4bb6ef] mr-3" />
                <span className="text-gray-400">marketing@ccstudios.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CC Studios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

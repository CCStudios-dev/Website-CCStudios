"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0e1420]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logoCCS.png" alt="CC Studios Logo" width={150} height={40} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-white transition-colors hover:text-[#4bb6ef]">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-white transition-colors hover:text-[#4bb6ef] flex items-center gap-1">
              Serviços
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#111827] border-gray-800">
              <Link href="/servicos/trafego-pago">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  Tráfego Pago
                </DropdownMenuItem>
              </Link>
              <Link href="/servicos/desenvolvimento-sites-landing-pages">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  Desenvolvimento de Sites e Landing Pages
                </DropdownMenuItem>
              </Link>
              <Link href="/servicos/conteudo">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  Conteúdo
                </DropdownMenuItem>
              </Link>
              <Link href="/servicos/crm">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  CRM
                </DropdownMenuItem>
              </Link>
              <Link href="/servicos">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  Ver todos os serviços
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/quem-somos" className="text-sm font-medium text-white transition-colors hover:text-[#4bb6ef]">
            Quem Somos
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white transition-colors hover:text-[#4bb6ef]">
            Blog
          </Link>
          <Link
            href="/trabalhe-conosco"
            className="text-sm font-medium text-white transition-colors hover:text-[#4bb6ef]"
          >
            Trabalhe Conosco
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contato">
            <Button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white">Contato</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827] border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-white hover:text-[#4bb6ef] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="text-sm font-medium text-white mb-2">Serviços</p>
              <div className="pl-4 space-y-2">
                <Link
                  href="/servicos/trafego-pago"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tráfego Pago
                </Link>
                <Link
                  href="/servicos/desenvolvimento-sites-landing-pages"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Desenvolvimento de Sites e Landing Pages
                </Link>
                <Link
                  href="/servicos/conteudo"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Conteúdo
                </Link>
                <Link
                  href="/servicos/crm"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CRM
                </Link>
                <Link
                  href="/servicos"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ver todos os serviços
                </Link>
              </div>
            </div>
            <Link
              href="/quem-somos"
              className="block text-sm font-medium text-white hover:text-[#4bb6ef] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium text-white hover:text-[#4bb6ef] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/trabalhe-conosco"
              className="block text-sm font-medium text-white hover:text-[#4bb6ef] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trabalhe Conosco
            </Link>
            <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white">Contato</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

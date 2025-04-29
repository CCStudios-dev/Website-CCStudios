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
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Logo CCS (1).png" alt="CC Studios Logo" width={150} height={40} />
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
              <Link href="/servicos/marketing-digital">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  Marketing Digital
                </DropdownMenuItem>
              </Link>
              <Link href="/servicos/desenvolvimento-web">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  Desenvolvimento Web
                </DropdownMenuItem>
              </Link>
              <Link href="/servicos/email-marketing">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  Email Marketing
                </DropdownMenuItem>
              </Link>
              <Link href="/servicos/crm">
                <DropdownMenuItem className="text-white hover:text-[#4bb6ef] hover:bg-[#1a2234] cursor-pointer">
                  CRM
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
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white">Contato</Button>
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
                  href="/servicos/marketing-digital"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Marketing Digital
                </Link>
                <Link
                  href="/servicos/desenvolvimento-web"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Desenvolvimento Web
                </Link>
                <Link
                  href="/servicos/email-marketing"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Email Marketing
                </Link>
                <Link
                  href="/servicos/crm"
                  className="block text-sm text-gray-300 hover:text-[#4bb6ef]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CRM
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
            <Button className="w-full bg-[#4bb6ef] hover:bg-[#3a9fd8] text-white">Contato</Button>
          </div>
        </div>
      )}
    </header>
  )
}

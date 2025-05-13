import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

import "@/app/globals.css"

export const metadata = {
  title: "CCStudios - A melhor agência de Marketing Digital",
  description:
    "Soluções personalizadas de marketing digital para impulsionar seu negócio com estratégias eficientes e resultados mensuráveis.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0e1420] font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

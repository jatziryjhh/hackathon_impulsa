"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">IMPULSA</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/estudiantes" className="text-sm font-medium transition-colors hover:text-primary">
            Estudiantes
          </Link>
          <Link href="/empresas" className="text-sm font-medium transition-colors hover:text-primary">
            Empresas
          </Link>
          <Link href="/becas" className="text-sm font-medium transition-colors hover:text-primary">
            Becas
          </Link>
          <Link href="/blockchain" className="text-sm font-medium transition-colors hover:text-primary">
            Blockchain
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Iniciar Sesión
          </Button>
          <Button size="sm" className="rounded-full">
            Comenzar
          </Button>
        </div>
      </div>
    </nav>
  )
}

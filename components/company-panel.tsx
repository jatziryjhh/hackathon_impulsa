"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Download, Sparkles, TrendingUp, Users } from "lucide-react"

const sponsoredScholarships = [
  {
    id: 1,
    student: "María González",
    career: "Ingeniería en Software",
    amount: 5000,
    date: "2024-01-15",
    nftId: "STELLAR-NFT-001",
  },
  {
    id: 2,
    student: "Carlos Rodríguez",
    career: "Ciencias de Datos",
    amount: 4500,
    date: "2024-02-20",
    nftId: "STELLAR-NFT-002",
  },
  {
    id: 3,
    student: "Ana Martínez",
    career: "Diseño UX/UI",
    amount: 3500,
    date: "2024-03-10",
    nftId: "STELLAR-NFT-003",
  },
]

export function CompanyPanel() {
  const totalInvested = sponsoredScholarships.reduce((sum, s) => sum + s.amount, 0)

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold">Panel de Empresas</h1>
        <p className="text-lg text-muted-foreground">Gestiona tus becas patrocinadas y accede a beneficios fiscales</p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Invertido</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalInvested.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">En becas tokenizadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Estudiantes Apoyados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sponsoredScholarships.length}</div>
            <p className="text-xs text-muted-foreground">Becas activas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">NFTs Adquiridos</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sponsoredScholarships.length}</div>
            <p className="text-xs text-muted-foreground">En blockchain Stellar</p>
          </CardContent>
        </Card>
      </div>

      {/* Company Profile */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Perfil Corporativo
          </CardTitle>
          <CardDescription>Información de tu empresa en la plataforma</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Nombre de la Empresa</p>
              <p className="text-lg font-semibold">TechCorp Solutions</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Sector</p>
              <p className="text-lg font-semibold">Tecnología e Innovación</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Wallet Stellar</p>
              <p className="font-mono text-sm">GAXYZ...ABC123</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Miembro desde</p>
              <p className="text-lg font-semibold">Enero 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sponsored Scholarships */}
      <Card>
        <CardHeader>
          <CardTitle>Becas Patrocinadas</CardTitle>
          <CardDescription>Lista de NFTs de becas que has patrocinado</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sponsoredScholarships.map((scholarship) => (
              <div
                key={scholarship.id}
                className="flex flex-col gap-4 rounded-lg border border-border p-4 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-semibold">{scholarship.student}</h3>
                    <Badge variant="secondary" className="gap-1">
                      <Sparkles className="h-3 w-3" />
                      NFT
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{scholarship.career}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>Monto: ${scholarship.amount.toLocaleString()}</span>
                    <span>•</span>
                    <span>Fecha: {new Date(scholarship.date).toLocaleDateString("es-ES")}</span>
                    <span>•</span>
                    <span className="font-mono">{scholarship.nftId}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver NFT
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Recibo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tax Benefits */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Beneficios Fiscales</CardTitle>
          <CardDescription>Descarga recibos deducibles de impuestos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="mb-3 text-sm font-medium text-primary">
              Todas tus donaciones están verificadas en blockchain y son deducibles de impuestos
            </p>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Descargar Reporte Anual
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

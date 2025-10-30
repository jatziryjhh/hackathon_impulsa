"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Upload, Sparkles, CheckCircle2, Clock, AlertCircle } from "lucide-react"

type ApplicationStatus = "pending" | "verified" | "active"

export function StudentPanel() {
  const [status, setStatus] = useState<ApplicationStatus>("pending")
  const [formData, setFormData] = useState({
    name: "",
    career: "",
    university: "",
    amount: "",
    video: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setStatus("verified")
  }

  const generateNFT = () => {
    setStatus("active")
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold">Panel de Estudiantes</h1>
        <p className="text-lg text-muted-foreground">Solicita tu beca tokenizada y accede a oportunidades educativas</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Solicitud de Beca
            </CardTitle>
            <CardDescription>Completa el formulario para solicitar tu beca tokenizada</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input
                  id="name"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="career">Carrera</Label>
                  <Input
                    id="career"
                    placeholder="Ingeniería en Sistemas"
                    value={formData.career}
                    onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="university">Universidad</Label>
                  <Input
                    id="university"
                    placeholder="Universidad Nacional"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Monto Solicitado (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="5000"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Carta de Motivación</Label>
                <Textarea
                  id="motivation"
                  placeholder="Cuéntanos por qué mereces esta beca..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="video">Video de Presentación (Opcional)</Label>
                <div className="flex items-center gap-3">
                  <Button type="button" variant="outline" className="w-full bg-transparent">
                    <Upload className="mr-2 h-4 w-4" />
                    Subir Video
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Máximo 2 minutos, formato MP4 o MOV</p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar Solicitud
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Estado de Solicitud</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <StatusBadge status={status} />

              <div className="space-y-3 text-sm">
                <StatusStep
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  label="Solicitud Enviada"
                  active={status !== "pending"}
                />
                <StatusStep
                  icon={<Clock className="h-4 w-4" />}
                  label="Verificación"
                  active={status === "verified" || status === "active"}
                />
                <StatusStep icon={<Sparkles className="h-4 w-4" />} label="Beca Activa" active={status === "active"} />
              </div>

              {status === "verified" && (
                <Button onClick={generateNFT} className="w-full" size="lg">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generar NFT de Beca
                </Button>
              )}

              {status === "active" && (
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-medium text-primary">¡Felicitaciones! Tu beca NFT ha sido generada</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p>Las solicitudes son verificadas en 24-48 horas</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p>Tu beca será tokenizada como NFT en Stellar</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: ApplicationStatus }) {
  const config = {
    pending: { label: "Pendiente", variant: "secondary" as const, icon: Clock },
    verified: { label: "Verificado", variant: "default" as const, icon: CheckCircle2 },
    active: { label: "Beca Activa", variant: "default" as const, icon: Sparkles },
  }

  const { label, variant, icon: Icon } = config[status]

  return (
    <Badge variant={variant} className="w-full justify-center gap-2 py-2">
      <Icon className="h-4 w-4" />
      {label}
    </Badge>
  )
}

function StatusStep({ icon, label, active }: { icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${active ? "text-foreground" : "text-muted-foreground"}`}>
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${active ? "bg-primary text-primary-foreground" : "bg-muted"}`}
      >
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </div>
  )
}

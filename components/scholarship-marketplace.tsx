"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Search, TrendingUp, Sparkles } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const scholarships = [
  {
    id: 1,
    name: "María González",
    career: "Ingeniería en Software",
    university: "Universidad Tecnológica",
    amount: 5000,
    raised: 3500,
    image: "/diverse-female-student.png",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    career: "Ciencias de Datos",
    university: "Instituto Politécnico",
    amount: 4500,
    raised: 4500,
    image: "/male-student-portrait.png",
  },
  {
    id: 3,
    name: "Ana Martínez",
    career: "Diseño UX/UI",
    university: "Universidad de Artes",
    amount: 3500,
    raised: 2100,
    image: "/female-designer-portrait.png",
  },
  {
    id: 4,
    name: "Luis Fernández",
    career: "Blockchain Development",
    university: "Universidad Digital",
    amount: 6000,
    raised: 1800,
    image: "/male-developer-portrait.png",
  },
  {
    id: 5,
    name: "Sofia Torres",
    career: "Inteligencia Artificial",
    university: "Instituto de Tecnología",
    amount: 5500,
    raised: 4200,
    image: "/female-tech-student-portrait.jpg",
  },
  {
    id: 6,
    name: "Diego Ramírez",
    career: "Ciberseguridad",
    university: "Universidad Nacional",
    amount: 4800,
    raised: 3600,
    image: "/male-cybersecurity-student-portrait.jpg",
  },
]

export function ScholarshipMarketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [careerFilter, setCareerFilter] = useState("all")

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.career.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCareer = careerFilter === "all" || scholarship.career === careerFilter
    return matchesSearch && matchesCareer
  })

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold">Marketplace de Becas</h1>
        <p className="text-lg text-muted-foreground">Descubre y patrocina talento joven a través de NFTs en Stellar</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o carrera..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={careerFilter} onValueChange={setCareerFilter}>
          <SelectTrigger className="w-full sm:w-[240px]">
            <SelectValue placeholder="Filtrar por carrera" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las carreras</SelectItem>
            <SelectItem value="Ingeniería en Software">Ingeniería en Software</SelectItem>
            <SelectItem value="Ciencias de Datos">Ciencias de Datos</SelectItem>
            <SelectItem value="Diseño UX/UI">Diseño UX/UI</SelectItem>
            <SelectItem value="Blockchain Development">Blockchain Development</SelectItem>
            <SelectItem value="Inteligencia Artificial">Inteligencia Artificial</SelectItem>
            <SelectItem value="Ciberseguridad">Ciberseguridad</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Scholarship Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredScholarships.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>

      {filteredScholarships.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">No se encontraron becas con los filtros seleccionados</p>
        </div>
      )}
    </div>
  )
}

function ScholarshipCard({ scholarship }: { scholarship: (typeof scholarships)[0] }) {
  const progress = (scholarship.raised / scholarship.amount) * 100
  const isFullyFunded = progress >= 100

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={scholarship.image || "/placeholder.svg"}
            alt={scholarship.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          {isFullyFunded && (
            <Badge className="absolute right-3 top-3 gap-1 bg-secondary">
              <Sparkles className="h-3 w-3" />
              Financiada
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="mb-1 text-lg font-semibold">{scholarship.name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>{scholarship.career}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{scholarship.university}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progreso</span>
            <span className="font-semibold">
              ${scholarship.raised.toLocaleString()} / ${scholarship.amount.toLocaleString()}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <TrendingUp className="h-3 w-3" />
            <span>{progress.toFixed(0)}% financiado</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button className="w-full" disabled={isFullyFunded}>
          {isFullyFunded ? "Beca Completa" : "Patrocinar esta Beca"}
        </Button>
      </CardFooter>
    </Card>
  )
}

"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Building2, Coins } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,114,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(111,0,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,114,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,114,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
          >
            <Coins className="h-4 w-4" />
            Powered by Stellar Blockchain
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl"
          >
            Impulsa el Futuro con{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Becas Tokenizadas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-xl text-muted-foreground text-balance md:text-2xl"
          >
            Transparencia, educación y blockchain para los empleos del mañana
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group rounded-full text-base">
              <Link href="/estudiantes">
                <GraduationCap className="mr-2 h-5 w-5" />
                Soy Estudiante
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full text-base">
              <Link href="/empresas">
                <Building2 className="mr-2 h-5 w-5" />
                Soy Empresa
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base bg-transparent">
              <Link href="/becas">Ver Becas</Link>
            </Button>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3"
        >
          <FeatureCard
            icon={<GraduationCap className="h-6 w-6" />}
            title="Para Estudiantes"
            description="Solicita becas tokenizadas y accede a oportunidades educativas verificadas en blockchain"
          />
          <FeatureCard
            icon={<Building2 className="h-6 w-6" />}
            title="Para Empresas"
            description="Patrocina talento joven con transparencia total y beneficios fiscales verificables"
          />
          <FeatureCard
            icon={<Coins className="h-6 w-6" />}
            title="Blockchain Stellar"
            description="Trazabilidad completa, transparencia garantizada y NFTs que certifican cada beca"
          />
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

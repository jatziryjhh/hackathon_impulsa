"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { ScholarshipMarketplace } from "@/components/scholarship-marketplace";
import init, { calcular_beca_neta, validar_monto_beca, saludo_estudiante } from "../../rust/becas_rust/pkg/becas_rust.js";

export default function BecasPage() {

  // ← Aquí va tu useEffect
  useEffect(() => {
    async function runRust() {
      await init();

      const monto = 50000;
      const comision = 5;

      if (validar_monto_beca(monto)) {
        console.log("Monto válido!");
        console.log("Monto neto para el estudiante:", calcular_beca_neta(monto, comision));
      }

      console.log(saludo_estudiante("Jovanna", "Ingeniería"));
    }

    runRust();
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <ScholarshipMarketplace />
      </div>
    </main>
  );
}
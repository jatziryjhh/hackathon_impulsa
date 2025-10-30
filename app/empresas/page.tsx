import { Navigation } from "@/components/navigation"
import { CompanyPanel } from "@/components/company-panel"

export default function EmpresasPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <CompanyPanel />
      </div>
    </main>
  )
}

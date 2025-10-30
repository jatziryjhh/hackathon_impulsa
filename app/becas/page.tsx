import { Navigation } from "@/components/navigation"
import { ScholarshipMarketplace } from "@/components/scholarship-marketplace"

export default function BecasPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <ScholarshipMarketplace />
      </div>
    </main>
  )
}

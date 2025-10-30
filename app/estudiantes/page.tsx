import { Navigation } from "@/components/navigation"
import { StudentPanel } from "@/components/student-panel"

export default function EstudiantesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <StudentPanel />
      </div>
    </main>
  )
}

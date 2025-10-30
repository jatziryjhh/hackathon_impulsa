import { Navigation } from "@/components/navigation"
import { BlockchainTransparency } from "@/components/blockchain-transparency"

export default function BlockchainPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <BlockchainTransparency />
      </div>
    </main>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, ExternalLink, Shield, Clock } from "lucide-react"

const recentTransactions = [
  {
    id: 1,
    type: "Beca Creada",
    student: "María González",
    amount: 5000,
    hash: "0x1a2b3c4d5e6f7g8h9i0j",
    timestamp: "2024-03-15T10:30:00",
    status: "confirmed",
  },
  {
    id: 2,
    type: "Patrocinio",
    company: "TechCorp Solutions",
    amount: 5000,
    hash: "0x9i8h7g6f5e4d3c2b1a0j",
    timestamp: "2024-03-15T11:45:00",
    status: "confirmed",
  },
  {
    id: 3,
    type: "NFT Generado",
    nftId: "STELLAR-NFT-001",
    hash: "0xaabbccddeeff00112233",
    timestamp: "2024-03-15T12:00:00",
    status: "confirmed",
  },
  {
    id: 4,
    type: "Beca Creada",
    student: "Carlos Rodríguez",
    amount: 4500,
    hash: "0x3344556677889900aabb",
    timestamp: "2024-03-16T09:15:00",
    status: "pending",
  },
]

const nftMetadata = {
  name: "IMPULSA Scholarship NFT #001",
  description: "Beca tokenizada para María González - Ingeniería en Software",
  attributes: [
    { trait_type: "Student", value: "María González" },
    { trait_type: "Career", value: "Ingeniería en Software" },
    { trait_type: "University", value: "Universidad Tecnológica" },
    { trait_type: "Amount", value: "5000 USD" },
    { trait_type: "Sponsor", value: "TechCorp Solutions" },
    { trait_type: "Issue Date", value: "2024-03-15" },
    { trait_type: "Network", value: "Stellar" },
  ],
}

export function BlockchainTransparency() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold">Transparencia Blockchain</h1>
        <p className="text-lg text-muted-foreground">Todas las transacciones verificadas en la red Stellar</p>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transactions">Transacciones Recientes</TabsTrigger>
          <TabsTrigger value="metadata">Metadatos NFT</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Historial de Transacciones
              </CardTitle>
              <CardDescription>Registro inmutable de todas las operaciones en la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex flex-col gap-3 rounded-lg border border-border p-4 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant={tx.status === "confirmed" ? "default" : "secondary"}>
                          {tx.status === "confirmed" ? (
                            <>
                              <CheckCircle2 className="mr-1 h-3 w-3" />
                              Confirmado
                            </>
                          ) : (
                            <>
                              <Clock className="mr-1 h-3 w-3" />
                              Pendiente
                            </>
                          )}
                        </Badge>
                        <span className="font-semibold">{tx.type}</span>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        {"student" in tx && <p>Estudiante: {tx.student}</p>}
                        {"company" in tx && <p>Empresa: {tx.company}</p>}
                        {"nftId" in tx && <p className="font-mono">NFT ID: {tx.nftId}</p>}
                        {"amount" in tx && <p>Monto: ${tx.amount.toLocaleString()}</p>}
                        <p className="font-mono text-xs">Hash: {tx.hash}</p>
                        <p className="text-xs">{new Date(tx.timestamp).toLocaleString("es-ES")}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver en Stellar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metadata" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Metadatos del NFT</CardTitle>
              <CardDescription>Información almacenada en el NFT de beca tokenizada</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                <pre className="overflow-x-auto">{JSON.stringify(nftMetadata, null, 2)}</pre>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {nftMetadata.attributes.map((attr, index) => (
                  <div key={index} className="rounded-lg border border-border bg-card p-3">
                    <p className="text-xs font-medium text-muted-foreground">{attr.trait_type}</p>
                    <p className="mt-1 font-semibold">{attr.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verificación en Blockchain</CardTitle>
              <CardDescription>Cómo verificar la autenticidad de un NFT de beca</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </div>
                <p>Copia el hash de la transacción desde el historial</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </div>
                <p>Visita el explorador de bloques de Stellar</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </div>
                <p>Verifica los metadatos y la autenticidad del NFT</p>
              </div>
              <Button className="mt-4 w-full sm:w-auto">
                <ExternalLink className="mr-2 h-4 w-4" />
                Abrir Explorador Stellar
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

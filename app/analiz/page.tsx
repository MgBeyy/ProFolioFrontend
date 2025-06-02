import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"
import CompetencyAnalysis from "@/components/competency/competency-analysis"
import ProtectedRoute from "@/components/protected-route"

export default function AnalizPage() {
  return (
    <ProtectedRoute>
      <div className="container py-10">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
              Yetkinlik Analizi
            </h1>
            <p className="text-gray-600 md:text-xl">
              Kariyer gelişiminiz için güçlü ve geliştirilmesi gereken yönlerinizi keşfedin
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-teal-600" />
                <div>
                  <CardTitle>Beceri Analizi</CardTitle>
                  <CardDescription>
                    Özgeçmişiniz ve mülakat performansınıza göre becerilerinizin analizi
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CompetencyAnalysis />
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import InterviewSimulator from "@/components/interview/interview-simulator"
import ProtectedRoute from "@/components/protected-route"

export default function MulakatPage() {
  return (
    <ProtectedRoute>
      <div className="container py-10">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
              Mülakat Simülasyonu
            </h1>
            <p className="text-gray-600 md:text-xl">Gerçekçi mülakat senaryoları ile kendinizi geliştirin</p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-teal-600" />
                <div>
                  <CardTitle>Mülakat Soruları</CardTitle>
                  <CardDescription>
                    Yapay zeka destekli mülakat simülasyonu ile kendinizi değerlendirin ve geri bildirim alın.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <InterviewSimulator />
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  )
}

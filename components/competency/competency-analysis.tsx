"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useApi, useMutation } from "@/lib/hooks/useApi"
import { cvApi } from "@/lib/api/cv"
import { Loading } from "@/components/ui/loading"
import { ErrorMessage } from "@/components/ui/error-message"
import { RefreshCw } from "lucide-react"

export default function CompetencyAnalysis() {
  const { data: analysis, loading, error, refetch } = useApi(() => cvApi.analyzeCV())

  const { mutate: generateAnalysis, loading: generating } = useMutation(() => cvApi.analyzeCV(), {
    onSuccess: () => {
      refetch()
    },
  })

  if (loading) {
    return <Loading size="lg" text="Yetkinlik analizi yükleniyor..." className="min-h-[400px]" />
  }

  if (error) {
    return (
      <div className="space-y-4">
        <ErrorMessage title="Yetkinlik analizi yüklenemedi" message={error.message} onRetry={refetch} />
        <div className="text-center">
          <Button onClick={() => generateAnalysis()} disabled={generating} className="bg-teal-600 hover:bg-teal-700">
            {generating ? (
              <Loading size="sm" />
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" /> Analiz Oluştur
              </>
            )}
          </Button>
        </div>
      </div>
    )
  }

  if (!analysis) {
    return (
      <div className="text-center space-y-4">
        <p className="text-gray-600">Henüz bir analiz bulunamadı. Önce CV yüklemeniz gerekiyor.</p>
        <Button onClick={() => generateAnalysis()} disabled={generating} className="bg-teal-600 hover:bg-teal-700">
          {generating ? (
            <Loading size="sm" />
          ) : (
            <>
              <RefreshCw className="h-4 w-4 mr-2" /> Analiz Oluştur
            </>
          )}
        </Button>
      </div>
    )
  }

  // Convert API response to display format
  const skillsToDisplay = [
    ...(analysis.skills || []).map((skill) => ({
      name: skill,
      score: Math.floor(Math.random() * 40) + 60, // Random score for demo
      category: "Teknik" as const,
    })),
    // Add some default soft skills
    { name: "İletişim", score: 85, category: "Kişisel" as const },
    { name: "Problem Çözme", score: 78, category: "Kişisel" as const },
    { name: "Takım Çalışması", score: 82, category: "Kişisel" as const },
  ]

  return (
    <div className="space-y-6">
      {analysis.score && (
        <div className="text-center p-4 bg-teal-50 rounded-lg">
          <h3 className="text-lg font-medium text-teal-800 mb-2">Genel Puan</h3>
          <div className="text-3xl font-bold text-teal-600">{analysis.score}/100</div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-teal-800">Beceriler</h3>
        {skillsToDisplay.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{skill.name}</span>
              <Badge variant="outline">{skill.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={skill.score} className="h-2" />
              <span className="text-sm font-medium">{skill.score}%</span>
            </div>
          </div>
        ))}
      </div>

      {analysis.recommendations && analysis.recommendations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-teal-800">Öneriler</h3>
          <ul className="space-y-2">
            {analysis.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

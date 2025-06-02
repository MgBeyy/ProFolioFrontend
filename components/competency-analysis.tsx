"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, BookOpen } from "lucide-react"

type AnalysisType = "skills" | "personality" | "progress" | "recommendations"

// Sample data for skills analysis
const skillsData = [
  { name: "JavaScript", value: 85, category: "Teknik" },
  { name: "React", value: 78, category: "Teknik" },
  { name: "SQL", value: 65, category: "Teknik" },
  { name: "İletişim", value: 90, category: "Kişisel" },
  { name: "Problem Çözme", value: 82, category: "Kişisel" },
  { name: "Takım Çalışması", value: 88, category: "Kişisel" },
  { name: "Python", value: 72, category: "Teknik" },
  { name: "Liderlik", value: 75, category: "Kişisel" },
  { name: "Node.js", value: 68, category: "Teknik" },
  { name: "Proje Yönetimi", value: 80, category: "Kişisel" },
]

// Sample data for personality analysis
const personalityData = [
  { trait: "Analitik Düşünce", score: 85, description: "Verileri analiz etme ve mantıklı sonuçlar çıkarma yeteneği" },
  { trait: "İletişim", score: 90, description: "Fikirleri açık ve etkili bir şekilde ifade etme yeteneği" },
  { trait: "Liderlik", score: 75, description: "Bir ekibi yönlendirme ve motive etme yeteneği" },
  { trait: "Uyumluluk", score: 88, description: "Değişen durumlara adapte olma yeteneği" },
  { trait: "Yaratıcılık", score: 70, description: "Yenilikçi fikirler ve çözümler üretme yeteneği" },
]

// Sample data for progress analysis
const progressData = [
  { month: "Ocak", technical: 65, soft: 70 },
  { month: "Şubat", technical: 68, soft: 72 },
  { month: "Mart", technical: 72, soft: 75 },
  { month: "Nisan", technical: 75, soft: 78 },
  { month: "Mayıs", technical: 80, soft: 82 },
]

// Sample data for recommendations
const recommendationsData = [
  {
    id: 1,
    title: "SQL Becerilerinizi Geliştirin",
    description: "Veritabanı sorgulama becerilerinizi geliştirmek için online kurslar alabilirsiniz.",
    type: "improvement",
    resources: ["SQL Fundamentals Kursu", "Veritabanı Tasarımı Eğitimi"],
  },
  {
    id: 2,
    title: "Liderlik Becerilerinizi Güçlendirin",
    description:
      "Ekip projelerinde daha fazla liderlik rolü üstlenerek bu alandaki becerilerinizi geliştirebilirsiniz.",
    type: "improvement",
    resources: ["Liderlik Becerileri Webinarı", "Proje Yönetimi Kursu"],
  },
  {
    id: 3,
    title: "JavaScript Becerilerinizi Kullanın",
    description: "Güçlü JavaScript becerilerinizi ön plana çıkaran pozisyonlara başvurabilirsiniz.",
    type: "strength",
    resources: ["Advanced JavaScript Teknikleri", "Modern Web Geliştirme"],
  },
]

export default function CompetencyAnalysis({ type }: { type: AnalysisType }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const renderSkillsAnalysis = () => {
    const categories = Array.from(new Set(skillsData.map((skill) => skill.category)))
    const filteredSkills = selectedCategory
      ? skillsData.filter((skill) => skill.category === selectedCategory)
      : skillsData

    return (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? "bg-teal-600 hover:bg-teal-700" : ""}
          >
            Tümü
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-teal-600 hover:bg-teal-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <Badge variant="outline">{skill.category}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={skill.value} className="h-2" />
                <span className="text-sm font-medium">{skill.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderPersonalityAnalysis = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalityData.map((trait) => (
            <Card key={trait.trait} className="overflow-hidden">
              <div className="h-1 bg-teal-600" style={{ width: `${trait.score}%` }} />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{trait.trait}</h3>
                  <span className="text-sm font-medium">{trait.score}%</span>
                </div>
                <p className="text-sm text-gray-600">{trait.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  const renderProgressAnalysis = () => {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium">Aylık İlerleme</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-teal-600" />
                <span className="text-sm">Teknik Beceriler</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-sm">Kişisel Beceriler</span>
              </div>
            </div>
          </div>
          <div className="h-64 w-full">
            {/* This would be a chart in a real application */}
            <div className="flex h-full items-end gap-4">
              {progressData.map((data) => (
                <div key={data.month} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative flex w-full justify-center">
                    <div className="w-8 bg-blue-500" style={{ height: `${data.soft * 0.6}%` }} />
                    <div className="absolute bottom-0 w-8 bg-teal-600" style={{ height: `${data.technical * 0.6}%` }} />
                  </div>
                  <span className="text-xs">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Teknik Beceriler İlerlemesi</h3>
              <p className="text-sm text-gray-600">
                Son 5 ayda teknik becerilerinizde %23 artış gösterdiniz. Özellikle JavaScript ve React alanlarında
                önemli ilerleme kaydettiniz.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Kişisel Beceriler İlerlemesi</h3>
              <p className="text-sm text-gray-600">
                Son 5 ayda kişisel becerilerinizde %17 artış gösterdiniz. İletişim ve problem çözme becerilerinizde
                önemli gelişmeler var.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const renderRecommendations = () => {
    return (
      <div className="space-y-6">
        {recommendationsData.map((recommendation) => (
          <Card key={recommendation.id} className="overflow-hidden">
            <div className={`h-1 ${recommendation.type === "improvement" ? "bg-amber-500" : "bg-green-500"}`} />
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-full p-2 ${
                    recommendation.type === "improvement"
                      ? "bg-amber-100 text-amber-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {recommendation.type === "improvement" ? (
                    <AlertCircle className="h-5 w-5" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">{recommendation.title}</h3>
                  <p className="text-sm text-gray-600">{recommendation.description}</p>
                  <div className="pt-2">
                    <h4 className="text-sm font-medium mb-1">Önerilen Kaynaklar:</h4>
                    <ul className="space-y-1">
                      {recommendation.resources.map((resource, index) => (
                        <li key={index} className="flex items-center gap-1 text-sm text-teal-600">
                          <BookOpen className="h-3 w-3" />
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const renderContent = () => {
    switch (type) {
      case "skills":
        return renderSkillsAnalysis()
      case "personality":
        return renderPersonalityAnalysis()
      case "progress":
        return renderProgressAnalysis()
      case "recommendations":
        return renderRecommendations()
      default:
        return null
    }
  }

  return <div>{renderContent()}</div>
}

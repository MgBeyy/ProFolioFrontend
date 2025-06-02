"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mic, MicOff, Send, RefreshCw } from "lucide-react"

// Combined questions from all categories
const questions = [
  // General questions
  "Kendinizden bahseder misiniz?",
  "Neden bizim şirketimizde çalışmak istiyorsunuz?",
  "Beş yıl içinde kendinizi nerede görüyorsunuz?",
  "Güçlü ve zayıf yönleriniz nelerdir?",
  "Baskı altında nasıl çalışırsınız?",

  // Technical questions
  "React'te state ve props arasındaki fark nedir?",
  "REST API nedir ve nasıl çalışır?",
  "Asenkron programlama nedir ve JavaScript'te nasıl uygulanır?",
  "Git'te merge ve rebase arasındaki fark nedir?",
  "Big O notasyonu nedir ve neden önemlidir?",

  // Behavioral questions
  "Zorlu bir ekip üyesiyle nasıl başa çıktınız?",
  "Bir projede başarısız olduğunuz bir durumu anlatın. Ne öğrendiniz?",
  "Bir sorunu çözmek için inisiyatif aldığınız bir durumu anlatın.",
  "Bir ekip içinde liderlik rolü üstlendiğiniz bir durumu anlatın.",
  "Sıkı bir teslim tarihiyle nasıl başa çıktınız?",
]

// Sample feedback for demonstration
const sampleFeedback = [
  "Cevabınız oldukça kapsamlı ve iyi yapılandırılmış.",
  "Daha fazla spesifik örnek verebilirsiniz.",
  "Teknik terimleri doğru kullanıyorsunuz, bu iyi.",
  "Cevabınızı daha kısa ve öz tutabilirsiniz.",
  "Deneyimlerinizden daha fazla bahsedebilirsiniz.",
]

export default function InterviewSimulator() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length)
    setAnswer("")
    setFeedback(null)
    setIsSubmitted(false)
  }

  const handleSubmit = () => {
    // In a real application, this would send the answer to an AI for analysis
    // For demo purposes, we'll just show a random feedback
    const randomFeedback = sampleFeedback[Math.floor(Math.random() * sampleFeedback.length)]
    setFeedback(randomFeedback)
    setIsSubmitted(true)
  }

  const toggleRecording = () => {
    // In a real application, this would start/stop speech recognition
    setIsRecording(!isRecording)
    if (isRecording) {
      // Simulate adding some text when stopping recording
      setAnswer((prev) => prev + " Ses kaydından eklenen metin.")
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-teal-50 border-teal-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-teal-800 mb-2">Soru:</h3>
          <p className="text-gray-700">{currentQuestion}</p>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-teal-800">Cevabınız:</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleRecording}
            className={`flex items-center gap-1 ${isRecording ? "text-red-500" : ""}`}
          >
            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            {isRecording ? "Kaydı Durdur" : "Sesli Yanıtla"}
          </Button>
        </div>
        <Textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Cevabınızı buraya yazın..."
          className="min-h-[150px]"
          disabled={isSubmitted}
        />
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setAnswer("")}
            disabled={!answer || isSubmitted}
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" /> Temizle
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!answer || isSubmitted}
            className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
          >
            <Send className="h-4 w-4" /> Gönder
          </Button>
        </div>
      </div>

      {feedback && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-2">AI Geri Bildirimi:</h3>
            <p className="text-gray-700">{feedback}</p>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end">
        <Button onClick={handleNextQuestion} className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1">
          Sonraki Soru <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Mic, MicOff, Send, RefreshCw, Play } from "lucide-react"
import { useMutation } from "@/lib/hooks/useApi"
import { interviewApi } from "@/lib/api/interview"
import { Loading } from "@/components/ui/loading"
import type { InterviewStartResponse, NextQuestionResponse, FinishInterviewResponse } from "@/lib/types"

export default function InterviewSimulator() {
  const [interviewData, setInterviewData] = useState<InterviewStartResponse | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<string>("")
  const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(null)
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isInterviewFinished, setIsInterviewFinished] = useState(false)
  const [finalFeedback, setFinalFeedback] = useState<FinishInterviewResponse | null>(null)

  const { mutate: startInterview, loading: startingInterview } = useMutation(() => interviewApi.startInterview(), {
    onSuccess: (data) => {
      setInterviewData(data)
      setCurrentQuestion(data.question)
      setCurrentQuestionId(data.question_id)
      setIsSubmitted(false)
      setFeedback(null)
    },
  })

  const { mutate: getNextQuestion, loading: gettingNextQuestion } = useMutation(
    (data: { interview_id: number; question_id: number; answer?: string }) => interviewApi.getNextQuestion(data),
    {
      onSuccess: (data: NextQuestionResponse) => {
        setCurrentQuestion(data.question)
        setCurrentQuestionId(data.question_id)
        setFeedback(data.feedback || null)
        setAnswer("")
        setIsSubmitted(false)
      },
    },
  )

  const { mutate: finishInterview, loading: finishingInterview } = useMutation(
    (data: { interview_id: number; question_id: number; answer?: string }) => interviewApi.finishInterview(data),
    {
      onSuccess: (data: FinishInterviewResponse) => {
        setFinalFeedback(data)
        setIsInterviewFinished(true)
      },
    },
  )

  const handleStartInterview = () => {
    startInterview()
  }

  const handleSubmitAnswer = () => {
    if (interviewData && currentQuestionId && answer.trim()) {
      getNextQuestion({
        interview_id: interviewData.interview_id,
        question_id: currentQuestionId,
        answer: answer.trim(),
      })
      setIsSubmitted(true)
    }
  }

  const handleFinishInterview = () => {
    if (interviewData && currentQuestionId) {
      finishInterview({
        interview_id: interviewData.interview_id,
        question_id: currentQuestionId,
        answer: answer.trim(),
      })
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (isRecording) {
      setAnswer((prev) => prev + " Ses kaydından eklenen metin.")
    }
  }

  const resetInterview = () => {
    setInterviewData(null)
    setCurrentQuestion("")
    setCurrentQuestionId(null)
    setAnswer("")
    setFeedback(null)
    setIsSubmitted(false)
    setIsInterviewFinished(false)
    setFinalFeedback(null)
  }

  if (isInterviewFinished && finalFeedback) {
    return (
      <div className="space-y-6">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-green-800 mb-4">Mülakat Tamamlandı! 🎉</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-green-700 mb-2">Genel Geri Bildirim:</h4>
                <p className="text-gray-700">{finalFeedback.overall_feedback}</p>
              </div>
              {finalFeedback.score && (
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Puanınız:</h4>
                  <p className="text-2xl font-bold text-green-600">{finalFeedback.score}/100</p>
                </div>
              )}
              {finalFeedback.recommendations && finalFeedback.recommendations.length > 0 && (
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Öneriler:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {finalFeedback.recommendations.map((rec, index) => (
                      <li key={index} className="text-gray-700">
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Button onClick={resetInterview} className="bg-teal-600 hover:bg-teal-700">
            Yeni Mülakat Başlat
          </Button>
        </div>
      </div>
    )
  }

  if (!interviewData) {
    return (
      <div className="space-y-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Mülakat Simülasyonuna Hoş Geldiniz</h3>
            <p className="text-gray-700 mb-4">
              Yapay zeka destekli mülakat simülasyonumuza başlamak için aşağıdaki butona tıklayın.
            </p>
            <Button
              onClick={handleStartInterview}
              disabled={startingInterview}
              className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2"
            >
              {startingInterview ? <Loading size="sm" /> : <Play className="h-4 w-4" />}
              Mülakatı Başlat
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="bg-teal-50 border-teal-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-teal-800 mb-2">Soru:</h3>
          <p className="text-gray-700">{currentQuestion}</p>
        </CardContent>
      </Card>

      {feedback && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Önceki Cevabınız İçin Geri Bildirim:</h3>
            <p className="text-gray-700">{feedback}</p>
          </CardContent>
        </Card>
      )}

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
          disabled={gettingNextQuestion || finishingInterview}
        />
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setAnswer("")}
            disabled={!answer || gettingNextQuestion || finishingInterview}
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" /> Temizle
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={handleSubmitAnswer}
              disabled={!answer || gettingNextQuestion || finishingInterview}
              className="bg-teal-600 hover:bg-teal-700 flex items-center gap-1"
            >
              {gettingNextQuestion ? (
                <Loading size="sm" />
              ) : (
                <>
                  <Send className="h-4 w-4" /> Sonraki Soru
                </>
              )}
            </Button>
            <Button
              onClick={handleFinishInterview}
              disabled={!answer || gettingNextQuestion || finishingInterview}
              variant="outline"
              className="flex items-center gap-1"
            >
              {finishingInterview ? <Loading size="sm" /> : "Mülakatı Bitir"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

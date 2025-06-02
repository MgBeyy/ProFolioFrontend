import { apiClient } from "./client"
import type { InterviewQuestion, InterviewSession, InterviewAnswer, PaginatedResponse } from "@/lib/types"

export const interviewsApi = {
  async getQuestions(category?: string, difficulty?: string): Promise<InterviewQuestion[]> {
    const params = new URLSearchParams()
    if (category) params.append("category", category)
    if (difficulty) params.append("difficulty", difficulty)

    const response = await apiClient.get<InterviewQuestion[]>(`/interviews/questions?${params.toString()}`)
    return response.data
  },

  async startSession(): Promise<InterviewSession> {
    const response = await apiClient.post<InterviewSession>("/interviews/sessions")
    return response.data
  },

  async getSession(id: string): Promise<InterviewSession> {
    const response = await apiClient.get<InterviewSession>(`/interviews/sessions/${id}`)
    return response.data
  },

  async getSessions(page = 1, limit = 10): Promise<PaginatedResponse<InterviewSession>> {
    const response = await apiClient.get<PaginatedResponse<InterviewSession>>(
      `/interviews/sessions?page=${page}&limit=${limit}`,
    )
    return response.data
  },

  async submitAnswer(sessionId: string, questionId: string, answer: string): Promise<InterviewAnswer> {
    const response = await apiClient.post<InterviewAnswer>(`/interviews/sessions/${sessionId}/answers`, {
      questionId,
      answer,
    })
    return response.data
  },

  async completeSession(sessionId: string): Promise<InterviewSession> {
    const response = await apiClient.put<InterviewSession>(`/interviews/sessions/${sessionId}/complete`)
    return response.data
  },

  async getRandomQuestion(): Promise<InterviewQuestion> {
    const response = await apiClient.get<InterviewQuestion>("/interviews/questions/random")
    return response.data
  },
}

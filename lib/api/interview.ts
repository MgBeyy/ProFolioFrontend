import { apiClient } from "./client"
import type {
  InterviewStartResponse,
  NextQuestionRequest,
  NextQuestionResponse,
  FinishInterviewRequest,
  FinishInterviewResponse,
} from "@/lib/types"

export const interviewApi = {
  async startInterview(): Promise<InterviewStartResponse> {
    return apiClient.get<InterviewStartResponse>("/api/cvgen/start_interview/")
  },

  async getNextQuestion(data: NextQuestionRequest): Promise<NextQuestionResponse> {
    return apiClient.post<NextQuestionResponse>("/api/cvgen/next_question/", data)
  },

  async finishInterview(data: FinishInterviewRequest): Promise<FinishInterviewResponse> {
    return apiClient.post<FinishInterviewResponse>("/api/cvgen/finish_interview/", data)
  },
}

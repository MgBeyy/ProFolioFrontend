import { apiClient } from "./client"
import type {
  InterviewStartResponse,
  NextQuestionRequest,
  NextQuestionResponse,
  FinishInterviewRequest,
  FinishInterviewResponse,
  ApiResponse,
} from "@/lib/types"

export const interviewApi = {
  async startInterview(): Promise<ApiResponse<InterviewStartResponse>> {
    return apiClient.get<ApiResponse<InterviewStartResponse>>("/api/cvgen/start_interview/")
  },

  async getNextQuestion(data: NextQuestionRequest): Promise<ApiResponse<NextQuestionResponse>> {
    return apiClient.post<ApiResponse<NextQuestionResponse>>("/api/cvgen/next_question/", data)
  },

  async finishInterview(data: FinishInterviewRequest): Promise<ApiResponse<FinishInterviewResponse>> {
    return apiClient.post<ApiResponse<FinishInterviewResponse>>("/api/cvgen/finish_interview/", data)
  },
}

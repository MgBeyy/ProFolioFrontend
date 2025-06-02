import { apiClient } from "./client"
import type { SkillAnalysis, AnalyzedSkill, Recommendation } from "@/lib/types"

export const analysisApi = {
  async getSkillAnalysis(): Promise<SkillAnalysis> {
    const response = await apiClient.get<SkillAnalysis>("/analysis/skills")
    return response.data
  },

  async generateSkillAnalysis(): Promise<SkillAnalysis> {
    const response = await apiClient.post<SkillAnalysis>("/analysis/skills/generate")
    return response.data
  },

  async getRecommendations(): Promise<Recommendation[]> {
    const response = await apiClient.get<Recommendation[]>("/analysis/recommendations")
    return response.data
  },

  async getSkillTrends(skillName: string, period = "6m"): Promise<AnalyzedSkill[]> {
    const response = await apiClient.get<AnalyzedSkill[]>(`/analysis/skills/${skillName}/trends?period=${period}`)
    return response.data
  },
}

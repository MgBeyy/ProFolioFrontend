import { apiClient } from "./client"
import type { Resume, PersonalInfo, Education, Experience, Skill, PaginatedResponse } from "@/lib/types"

export const resumesApi = {
  async getResumes(page = 1, limit = 10): Promise<PaginatedResponse<Resume>> {
    const response = await apiClient.get<PaginatedResponse<Resume>>(`/resumes?page=${page}&limit=${limit}`)
    return response.data
  },

  async getResume(id: string): Promise<Resume> {
    const response = await apiClient.get<Resume>(`/resumes/${id}`)
    return response.data
  },

  async createResume(data: Partial<Resume>): Promise<Resume> {
    const response = await apiClient.post<Resume>("/resumes", data)
    return response.data
  },

  async updateResume(id: string, data: Partial<Resume>): Promise<Resume> {
    const response = await apiClient.put<Resume>(`/resumes/${id}`, data)
    return response.data
  },

  async deleteResume(id: string): Promise<void> {
    await apiClient.delete(`/resumes/${id}`)
  },

  async uploadResume(file: File): Promise<Resume> {
    const response = await apiClient.upload<Resume>("/resumes/upload", file)
    return response.data
  },

  async updatePersonalInfo(resumeId: string, data: PersonalInfo): Promise<Resume> {
    const response = await apiClient.put<Resume>(`/resumes/${resumeId}/personal-info`, data)
    return response.data
  },

  async addEducation(resumeId: string, data: Omit<Education, "id">): Promise<Resume> {
    const response = await apiClient.post<Resume>(`/resumes/${resumeId}/education`, data)
    return response.data
  },

  async updateEducation(resumeId: string, educationId: string, data: Partial<Education>): Promise<Resume> {
    const response = await apiClient.put<Resume>(`/resumes/${resumeId}/education/${educationId}`, data)
    return response.data
  },

  async deleteEducation(resumeId: string, educationId: string): Promise<Resume> {
    const response = await apiClient.delete<Resume>(`/resumes/${resumeId}/education/${educationId}`)
    return response.data
  },

  async addExperience(resumeId: string, data: Omit<Experience, "id">): Promise<Resume> {
    const response = await apiClient.post<Resume>(`/resumes/${resumeId}/experience`, data)
    return response.data
  },

  async updateExperience(resumeId: string, experienceId: string, data: Partial<Experience>): Promise<Resume> {
    const response = await apiClient.put<Resume>(`/resumes/${resumeId}/experience/${experienceId}`, data)
    return response.data
  },

  async deleteExperience(resumeId: string, experienceId: string): Promise<Resume> {
    const response = await apiClient.delete<Resume>(`/resumes/${resumeId}/experience/${experienceId}`)
    return response.data
  },

  async addSkill(resumeId: string, data: Omit<Skill, "id">): Promise<Resume> {
    const response = await apiClient.post<Resume>(`/resumes/${resumeId}/skills`, data)
    return response.data
  },

  async updateSkill(resumeId: string, skillId: string, data: Partial<Skill>): Promise<Resume> {
    const response = await apiClient.put<Resume>(`/resumes/${resumeId}/skills/${skillId}`, data)
    return response.data
  },

  async deleteSkill(resumeId: string, skillId: string): Promise<Resume> {
    const response = await apiClient.delete<Resume>(`/resumes/${resumeId}/skills/${skillId}`)
    return response.data
  },
}

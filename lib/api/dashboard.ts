import { apiClient } from "./client"
import type { DashboardStats, Activity } from "@/lib/types"

export const dashboardApi = {
  async getStats(): Promise<DashboardStats> {
    const response = await apiClient.get<DashboardStats>("/dashboard/stats")
    return response.data
  },

  async getRecentActivity(limit = 10): Promise<Activity[]> {
    const response = await apiClient.get<Activity[]>(`/dashboard/activity?limit=${limit}`)
    return response.data
  },
}

import { apiClient } from "./client"
import type { CVUploadResponse, CVAnalysis } from "@/lib/types"

export const cvApi = {
  async uploadCV(file: File): Promise<CVUploadResponse> {
    return apiClient.upload<CVUploadResponse>("/api/cvgen/upload_cv/", file)
  },

  async analyzeCV(): Promise<CVAnalysis> {
    return apiClient.get<CVAnalysis>("/api/cvgen/analyze_cv/")
  },

  async generateCVPDF(): Promise<Blob> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/cvgen/generate_cv/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      },
    )

    if (!response.ok) {
      throw new Error("Failed to generate CV PDF")
    }

    return response.blob()
  },
}

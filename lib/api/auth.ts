import { apiClient } from "./client"
import type {
  User,
  LoginCredentials,
  RegisterData,
  AuthResponse,
  TokenRefreshResponse,
  UserUpdateData,
} from "@/lib/types"

export const authApi = {
  async register(data: RegisterData): Promise<void> {
    await apiClient.post("/api/acco/register/", data)
  },

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>("/api/acco/login/", credentials)

    if (response.access && response.refresh) {
      apiClient.setTokens(response.access, response.refresh)
    }

    return response
  },

  async refreshToken(refreshToken: string): Promise<TokenRefreshResponse> {
    const response = await apiClient.post<TokenRefreshResponse>("/api/acco/token/refresh/", {
      refresh: refreshToken,
    })

    if (response.access) {
      // Update only the access token
      const currentRefresh = localStorage.getItem("refresh_token")
      if (currentRefresh) {
        apiClient.setTokens(response.access, currentRefresh)
      }
    }

    return response
  },

  async getCurrentUser(): Promise<User> {
    return apiClient.get<User>("/api/acco/user/")
  },

  async updateUser(data: UserUpdateData): Promise<User> {
    return apiClient.put<User>("/api/acco/user/", data)
  },

  async deleteUser(): Promise<void> {
    await apiClient.delete("/api/acco/user/")
  },

  async logout(refreshToken: string): Promise<void> {
    try {
      await apiClient.post("/api/acco/logout/", { refresh: refreshToken })
    } finally {
      apiClient.clearTokens()
    }
  },

  async sendEmailVerification(email: string): Promise<void> {
    await apiClient.get("/api/acco/verify_email/", { email })
  },

  async verifyEmail(token: string): Promise<void> {
    await apiClient.get(`/verify_email/?token=${token}`)
  },

  async sendPasswordReset(email: string): Promise<void> {
    await apiClient.get("/api/acco/reset_password/", { email })
  },

  async verifyPasswordResetToken(token: string): Promise<void> {
    await apiClient.get(`/reset_password/?token=${token}`)
  },

  async confirmPasswordReset(token: string, password: string): Promise<void> {
    await apiClient.put(`/reset_password/?token=${token}`, { password })
  },
}

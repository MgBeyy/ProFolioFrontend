"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User, LoginCredentials, RegisterData } from "@/lib/types"
import { authApi } from "@/lib/api/auth"
import type { ApiError } from "@/lib/api/client"



export const DEMO_CREDENTIALS = {
  email: 'demo@example.com',
  password: '123456',
}



interface AuthContextType {
  user: User | null
  login: (credentials: LoginCredentials) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => Promise<void>
  isLoading: boolean
  error: ApiError | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<ApiError | null>(null)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const accessToken = localStorage.getItem("access_token")
        if (accessToken) {
          const currentUser = await authApi.getCurrentUser()
          setUser(currentUser)
        }
      } catch (error) {
        // Token might be invalid, clear it
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setError(null)
    setIsLoading(true)

    try {
      const authResponse = await authApi.login(credentials)

      // Get user info after successful login
      const currentUser = await authApi.getCurrentUser()
      setUser(currentUser)
    } catch (error) {
      const apiError = error as ApiError
      setError(apiError)
      throw apiError
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: RegisterData): Promise<void> => {
    setError(null)
    setIsLoading(true)

    try {
      await authApi.register(data)
      // After registration, user needs to verify email or login
    } catch (error) {
      const apiError = error as ApiError
      setError(apiError)
      throw apiError
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    try {
      const refreshToken = localStorage.getItem("refresh_token")
      if (refreshToken) {
        await authApi.logout(refreshToken)
      }
    } catch (error) {
      // Ignore logout errors
    } finally {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading, error }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

"use client"

import { useState, useEffect } from "react"
import { ApiError } from "@/lib/types"

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
}

interface UseApiOptions {
  immediate?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: ApiError) => void
}

export function useApi<T>(apiCall: () => Promise<T>, options: UseApiOptions = {}) {
  const { immediate = true, onSuccess, onError } = options

  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: immediate,
    error: null,
  })

  const execute = async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const data = await apiCall()
      setState({ data, loading: false, error: null })
      onSuccess?.(data)
      return data
    } catch (error) {
      const apiError = error instanceof ApiError ? error : new ApiError("Unknown error", "UNKNOWN")
      setState((prev) => ({ ...prev, loading: false, error: apiError }))
      onError?.(apiError)
      throw apiError
    }
  }

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [])

  return {
    ...state,
    execute,
    refetch: execute,
  }
}

export function useMutation<T, P = void>(apiCall: (params: P) => Promise<T>, options: UseApiOptions = {}) {
  const { onSuccess, onError } = options

  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const mutate = async (params?: P) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const data = await apiCall(params as P)
      setState({ data, loading: false, error: null })
      onSuccess?.(data)
      return data
    } catch (error) {
      const apiError = error instanceof ApiError ? error : new ApiError("Unknown error", "UNKNOWN")
      setState((prev) => ({ ...prev, loading: false, error: apiError }))
      onError?.(apiError)
      throw apiError
    }
  }

  return {
    ...state,
    mutate,
  }
}

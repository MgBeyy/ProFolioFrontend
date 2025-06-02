export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
    timeout: 10000,
  },
  auth: {
    tokenKey: "auth_token",
    refreshTokenKey: "refresh_token",
  },
  app: {
    name: "ProFolio",
    version: "1.0.0",
  },
  features: {
    enableMockData: process.env.NODE_ENV === "development",
    enableAnalytics: process.env.NODE_ENV === "production",
  },
}

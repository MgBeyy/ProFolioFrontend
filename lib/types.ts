// User types
export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  avatar?: string
  createdAt: string
  updatedAt: string
  is_active?: boolean
  date_joined?: string
}

// Authentication types
export interface LoginCredentials {
  username: string
  password: string
}

export interface RegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
  first_name?: string
  last_name?: string
}

export interface AuthResponse {
  access: string
  refresh: string
  user?: User
}

export interface TokenRefreshRequest {
  refresh: string
}

export interface TokenRefreshResponse {
  access: string
}

// CV/Resume types
export interface Resume {
  id: string
  userId: string
  title: string
  fileName?: string
  fileUrl?: string
  status: "draft" | "completed" | "analyzing"
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  createdAt: string
  updatedAt: string
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  title: string
  summary: string
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export interface Skill {
  id: string
  name: string
  level: "Başlangıç" | "Orta" | "İleri" | "Uzman"
  category: "Teknik" | "Kişisel"
  score?: number
}

export interface CVUploadResponse {
  message: string
  file_id?: string
  analysis?: CVAnalysis
}

export interface CVAnalysis {
  skills: string[]
  experience: string[]
  education: string[]
  recommendations: string[]
  score?: number
}

// Interview types
export interface InterviewQuestion {
  id: string
  question: string
  category: "general" | "technical" | "behavioral"
  difficulty: "easy" | "medium" | "hard"
}

export interface InterviewSession {
  id: string
  userId: string
  questions: InterviewQuestion[]
  answers: InterviewAnswer[]
  status: "active" | "completed"
  startedAt: string
  completedAt?: string
}

export interface InterviewAnswer {
  id: string
  questionId: string
  answer: string
  feedback?: string
  score?: number
  submittedAt: string
}

export interface InterviewStartResponse {
  interview_id: number
  question_id: number
  question: string
  skill?: string
  message?: string
}

export interface NextQuestionRequest {
  interview_id: number
  question_id: number
  answer?: string
}

export interface NextQuestionResponse {
  question: string
  correct_part?: string
  wrong_part?: string
  degree?: number
  question_id?: number
  feedback?: string
  analysis?: string
  message?: string
}

export interface FinishInterviewRequest {
  interview_id: number
  question_id: number
  answer?: string
}

export interface FinishInterviewResponse {
  message: string
  overall_feedback: string
  score?: number
  recommendations?: string[]
}

// Analysis types
export interface SkillAnalysis {
  id: string
  userId: string
  skills: AnalyzedSkill[]
  overallScore: number
  recommendations: Recommendation[]
  createdAt: string
}

export interface AnalyzedSkill {
  name: string
  score: number
  category: "Teknik" | "Kişisel"
  trend: "improving" | "stable" | "declining"
}

export interface Recommendation {
  id: string
  title: string
  description: string
  type: "improvement" | "strength"
  priority: "high" | "medium" | "low"
  resources: Resource[]
}

export interface Resource {
  title: string
  url: string
  type: "course" | "article" | "video" | "book"
}

// Dashboard types
export interface DashboardStats {
  resumeCount: number
  interviewCount: number
  skillScore: number
  achievementCount: number
  recentActivity: Activity[]
}

export interface Activity {
  id: string
  type: "resume_created" | "interview_completed" | "skill_improved"
  title: string
  description: string
  timestamp: string
}

// Password reset types
export interface PasswordResetRequest {
  email: string
}

export interface PasswordResetConfirm {
  token: string
  password: string
}

// Email verification types
export interface EmailVerificationRequest {
  email: string
}

// User update types
export interface UserUpdateData {
  email: string
  first_name: string
  last_name: string
}

// API Response types
export interface ApiResponse<T> {
  result: string
  message: string
  data: T
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export class ApiError extends Error {
  detail?: string
  code?: string
  status?: number

  constructor(message: string, code?: string, status?: number, detail?: string) {
    super(message)
    this.name = 'ApiError'
    this.code = code
    this.status = status
    this.detail = detail
  }
}

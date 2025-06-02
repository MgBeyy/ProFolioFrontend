import type { Resume, InterviewQuestion, SkillAnalysis, DashboardStats } from "@/lib/types"

export const mockResumes: Resume[] = [
  {
    id: "1",
    userId: "demo-user-1",
    title: "Yazılım Geliştirici CV",
    status: "completed",
    personalInfo: {
      firstName: "Demo",
      lastName: "Kullanıcı",
      email: "demo@profolio.com",
      phone: "+90 555 123 4567",
      location: "İstanbul, Türkiye",
      title: "Senior Yazılım Geliştirici",
      summary: "Deneyimli yazılım geliştirici...",
    },
    education: [
      {
        id: "1",
        school: "İstanbul Teknik Üniversitesi",
        degree: "Lisans",
        field: "Bilgisayar Mühendisliği",
        startDate: "2018-09",
        endDate: "2022-06",
      },
    ],
    experience: [
      {
        id: "1",
        company: "Tech Company",
        position: "Senior Developer",
        location: "İstanbul",
        startDate: "2022-07",
        endDate: "",
        description: "React ve Node.js ile web uygulamaları geliştirme...",
      },
    ],
    skills: [
      { id: "1", name: "JavaScript", level: "İleri", category: "Teknik", score: 85 },
      { id: "2", name: "React", level: "İleri", category: "Teknik", score: 78 },
      { id: "3", name: "İletişim", level: "İleri", category: "Kişisel", score: 90 },
    ],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
]

export const mockQuestions: InterviewQuestion[] = [
  {
    id: "1",
    question: "Kendinizden bahseder misiniz?",
    category: "general",
    difficulty: "easy",
  },
  {
    id: "2",
    question: "React'te state ve props arasındaki fark nedir?",
    category: "technical",
    difficulty: "medium",
  },
  {
    id: "3",
    question: "Zorlu bir ekip üyesiyle nasıl başa çıktınız?",
    category: "behavioral",
    difficulty: "medium",
  },
]

export const mockSkillAnalysis: SkillAnalysis = {
  id: "1",
  userId: "demo-user-1",
  skills: [
    { name: "JavaScript", score: 85, category: "Teknik", trend: "improving" },
    { name: "React", score: 78, category: "Teknik", trend: "stable" },
    { name: "SQL", score: 65, category: "Teknik", trend: "improving" },
    { name: "İletişim", score: 90, category: "Kişisel", trend: "stable" },
    { name: "Problem Çözme", score: 82, category: "Kişisel", trend: "improving" },
    { name: "Takım Çalışması", score: 88, category: "Kişisel", trend: "stable" },
  ],
  overallScore: 81,
  recommendations: [
    {
      id: "1",
      title: "SQL Becerilerinizi Geliştirin",
      description: "Veritabanı sorgulama becerilerinizi geliştirmek için online kurslar alabilirsiniz.",
      type: "improvement",
      priority: "high",
      resources: [
        { title: "SQL Fundamentals", url: "#", type: "course" },
        { title: "Database Design", url: "#", type: "course" },
      ],
    },
  ],
  createdAt: "2024-01-01T00:00:00Z",
}

export const mockDashboardStats: DashboardStats = {
  resumeCount: 1,
  interviewCount: 3,
  skillScore: 81,
  achievementCount: 2,
  recentActivity: [
    {
      id: "1",
      type: "resume_created",
      title: "Özgeçmiş Oluşturuldu",
      description: "Yeni özgeçmişiniz başarıyla oluşturuldu",
      timestamp: "2024-01-01T10:00:00Z",
    },
    {
      id: "2",
      type: "interview_completed",
      title: "Mülakat Tamamlandı",
      description: "Teknik mülakat simülasyonu tamamlandı",
      timestamp: "2024-01-01T09:00:00Z",
    },
  ],
}

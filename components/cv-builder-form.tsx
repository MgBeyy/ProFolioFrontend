"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Plus, Trash2, Save } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Education = {
  id: string
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

type Experience = {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
}

type Skill = {
  id: string
  name: string
  level: string
}

export default function CvBuilderForm() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    summary: "",
  })

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    },
  ])

  const [experience, setExperience] = useState<Experience[]>([
    {
      id: "1",
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ])

  const [skills, setSkills] = useState<Skill[]>([
    {
      id: "1",
      name: "",
      level: "Orta",
    },
  ])

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPersonalInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleEducationChange = (id: string, field: keyof Education, value: string) => {
    setEducation((prev) => prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const handleExperienceChange = (id: string, field: keyof Experience, value: string) => {
    setExperience((prev) => prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const handleSkillChange = (id: string, field: keyof Skill, value: string) => {
    setSkills((prev) => prev.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)))
  }

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        school: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
      },
    ])
  }

  const removeEducation = (id: string) => {
    if (education.length > 1) {
      setEducation((prev) => prev.filter((edu) => edu.id !== id))
    }
  }

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ])
  }

  const removeExperience = (id: string) => {
    if (experience.length > 1) {
      setExperience((prev) => prev.filter((exp) => exp.id !== id))
    }
  }

  const addSkill = () => {
    setSkills((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: "",
        level: "Orta",
      },
    ])
  }

  const removeSkill = (id: string) => {
    if (skills.length > 1) {
      setSkills((prev) => prev.filter((skill) => skill.id !== id))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ personalInfo, education, experience, skills })
    // For demo purposes, we'll just show an alert
    alert("Özgeçmiş oluşturuldu! Kontrol panelinde görüntüleyebilirsiniz.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Özgeçmiş Oluştur</CardTitle>
        <CardDescription>
          Aşağıdaki formu doldurarak profesyonel bir özgeçmiş oluşturun. Yapay zeka, bilgilerinizi analiz ederek size
          özel öneriler sunacak.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-teal-800">Kişisel Bilgiler</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Ad</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Soyad</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Konum</Label>
                <Input
                  id="location"
                  name="location"
                  value={personalInfo.location}
                  onChange={handlePersonalInfoChange}
                  placeholder="İstanbul, Türkiye"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Unvan</Label>
                <Input
                  id="title"
                  name="title"
                  value={personalInfo.title}
                  onChange={handlePersonalInfoChange}
                  placeholder="Yazılım Geliştirici"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">Özet</Label>
              <Textarea
                id="summary"
                name="summary"
                value={personalInfo.summary}
                onChange={handlePersonalInfoChange}
                placeholder="Kendinizi kısaca tanıtın..."
                className="min-h-[100px]"
                required
              />
            </div>
          </div>

          <Separator />

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-teal-800">Eğitim</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addEducation}
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" /> Ekle
              </Button>
            </div>

            {education.map((edu, index) => (
              <div key={edu.id} className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Eğitim #{index + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEducation(edu.id)}
                    disabled={education.length === 1}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`school-${edu.id}`}>Okul</Label>
                    <Input
                      id={`school-${edu.id}`}
                      value={edu.school}
                      onChange={(e) => handleEducationChange(edu.id, "school", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`degree-${edu.id}`}>Derece</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                      placeholder="Lisans, Yüksek Lisans, vb."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`field-${edu.id}`}>Alan</Label>
                    <Input
                      id={`field-${edu.id}`}
                      value={edu.field}
                      onChange={(e) => handleEducationChange(edu.id, "field", e.target.value)}
                      placeholder="Bilgisayar Mühendisliği"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor={`startDate-${edu.id}`}>Başlangıç</Label>
                      <Input
                        id={`startDate-${edu.id}`}
                        type="month"
                        value={edu.startDate}
                        onChange={(e) => handleEducationChange(edu.id, "startDate", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`endDate-${edu.id}`}>Bitiş</Label>
                      <Input
                        id={`endDate-${edu.id}`}
                        type="month"
                        value={edu.endDate}
                        onChange={(e) => handleEducationChange(edu.id, "endDate", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-teal-800">İş Deneyimi</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addExperience}
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" /> Ekle
              </Button>
            </div>

            {experience.map((exp, index) => (
              <div key={exp.id} className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Deneyim #{index + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExperience(exp.id)}
                    disabled={experience.length === 1}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`company-${exp.id}`}>Şirket</Label>
                    <Input
                      id={`company-${exp.id}`}
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`position-${exp.id}`}>Pozisyon</Label>
                    <Input
                      id={`position-${exp.id}`}
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(exp.id, "position", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`location-${exp.id}`}>Konum</Label>
                    <Input
                      id={`location-${exp.id}`}
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                      placeholder="İstanbul, Türkiye"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor={`expStartDate-${exp.id}`}>Başlangıç</Label>
                      <Input
                        id={`expStartDate-${exp.id}`}
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`expEndDate-${exp.id}`}>Bitiş</Label>
                      <Input
                        id={`expEndDate-${exp.id}`}
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                        placeholder="Devam Ediyor"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`description-${exp.id}`}>İş Tanımı</Label>
                  <Textarea
                    id={`description-${exp.id}`}
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                    placeholder="Görev ve sorumluluklarınızı açıklayın..."
                    className="min-h-[100px]"
                    required
                  />
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Skills */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-teal-800">Yetenekler</h3>
              <Button type="button" variant="outline" size="sm" onClick={addSkill} className="flex items-center gap-1">
                <Plus className="h-4 w-4" /> Ekle
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center gap-2">
                  <div className="flex-1">
                    <Input
                      value={skill.name}
                      onChange={(e) => handleSkillChange(skill.id, "name", e.target.value)}
                      placeholder="Yetenek adı"
                      required
                    />
                  </div>
                  <div className="w-32">
                    <Select value={skill.level} onValueChange={(value) => handleSkillChange(skill.id, "level", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seviye" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Başlangıç">Başlangıç</SelectItem>
                        <SelectItem value="Orta">Orta</SelectItem>
                        <SelectItem value="İleri">İleri</SelectItem>
                        <SelectItem value="Uzman">Uzman</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSkill(skill.id)}
                    disabled={skills.length === 1}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">İptal</Button>
        <Button type="submit" className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2" onClick={handleSubmit}>
          <Save className="h-4 w-4" /> Özgeçmişi Oluştur
        </Button>
      </CardFooter>
    </Card>
  )
}

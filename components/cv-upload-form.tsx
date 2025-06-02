"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, File, Check, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CvUploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile.type === "application/pdf") {
        setFile(droppedFile)
        setUploadStatus("idle")
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      setUploadStatus("idle")
    }
  }

  const handleUpload = () => {
    if (file) {
      // Simulate upload process
      setTimeout(() => {
        setUploadStatus("success")
      }, 1500)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Özgeçmiş Yükle</CardTitle>
        <CardDescription>
          PDF formatında özgeçmişinizi yükleyin. Yapay zeka özgeçmişinizi analiz edecek ve kişiselleştirilmiş öneriler
          sunacak.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div
          className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors ${
            isDragging ? "border-teal-500 bg-teal-50" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {file ? (
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-teal-100 p-3">
                <File className="h-6 w-6 text-teal-600" />
              </div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-gray-100 p-3">
                <Upload className="h-6 w-6 text-gray-600" />
              </div>
              <p className="font-medium">Dosyayı buraya sürükleyin veya tıklayın</p>
              <p className="text-sm text-gray-500">Desteklenen format: PDF</p>
              <input type="file" accept=".pdf" className="hidden" id="cv-upload" onChange={handleFileChange} />
              <Button variant="outline" onClick={() => document.getElementById("cv-upload")?.click()} className="mt-2">
                Dosya Seç
              </Button>
            </div>
          )}
        </div>

        {uploadStatus === "success" && (
          <Alert className="bg-green-50 border-green-200">
            <Check className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Yükleme Başarılı</AlertTitle>
            <AlertDescription className="text-green-700">
              Özgeçmişiniz başarıyla yüklendi. Analiz sonuçlarınız hazırlanıyor.
            </AlertDescription>
          </Alert>
        )}

        {uploadStatus === "error" && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Yükleme Hatası</AlertTitle>
            <AlertDescription>Özgeçmişiniz yüklenirken bir hata oluştu. Lütfen tekrar deneyin.</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" disabled={!file}>
          İptal
        </Button>
        <Button
          className="bg-teal-600 hover:bg-teal-700"
          disabled={!file || uploadStatus === "success"}
          onClick={handleUpload}
        >
          {uploadStatus === "success" ? "Yüklendi" : "Özgeçmişi Yükle"}
        </Button>
      </CardFooter>
    </Card>
  )
}

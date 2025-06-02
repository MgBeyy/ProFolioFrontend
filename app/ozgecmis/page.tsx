import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText } from "lucide-react"
import CvUploadForm from "@/components/cv/cv-upload-form"
import CvBuilderForm from "@/components/cv-builder-form"
import ProtectedRoute from "@/components/protected-route"

export default function OzgecmisPage() {
  return (
    <ProtectedRoute>
      <div className="container py-10">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
              Özgeçmiş Oluşturma
            </h1>
            <p className="text-gray-600 md:text-xl">Özgeçmişinizi yükleyin veya sıfırdan oluşturun</p>
          </div>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                <span>Özgeçmiş Yükle</span>
              </TabsTrigger>
              <TabsTrigger value="create" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Özgeçmiş Oluştur / Düzenle</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="mt-6">
              <CvUploadForm />
            </TabsContent>
            <TabsContent value="create" className="mt-6">
              <CvBuilderForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}

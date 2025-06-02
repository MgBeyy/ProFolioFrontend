import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, MessageSquare, BarChart3, User } from "lucide-react"
import DashboardOverview from "@/components/dashboard-overview"
import ProtectedRoute from "@/components/protected-route"

export default function PanelPage() {
  return (
    <ProtectedRoute>
      <div className="container py-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">Kontrol Paneli</h1>
            <p className="text-gray-600">Kariyer gelişiminizi takip edin ve ilerleyişinizi görüntüleyin</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Genel Bakış</span>
              </TabsTrigger>
              <TabsTrigger value="resumes" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Özgeçmişlerim</span>
              </TabsTrigger>
              <TabsTrigger value="interviews" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Mülakatlarım</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profilim</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <DashboardOverview />
            </TabsContent>

            <TabsContent value="resumes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Özgeçmişlerim</CardTitle>
                  <CardDescription>
                    Oluşturduğunuz ve yüklediğiniz tüm özgeçmişleri görüntüleyin ve yönetin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <p>Henüz bir özgeçmiş oluşturmadınız veya yüklemediniz.</p>
                    <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Özgeçmiş Oluştur</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mülakatlarım</CardTitle>
                  <CardDescription>Tamamladığınız mülakat simülasyonlarını ve sonuçlarını görüntüleyin</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <p>Henüz bir mülakat simülasyonu tamamlamadınız.</p>
                    <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Mülakat Simülasyonu Başlat</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profilim</CardTitle>
                  <CardDescription>Kişisel bilgilerinizi ve hesap ayarlarınızı yönetin</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <p>Profil bilgilerinizi güncellemek için lütfen giriş yapın.</p>
                    <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Giriş Yap</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}

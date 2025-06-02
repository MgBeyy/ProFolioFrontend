import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, BarChart3, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Özgeçmişler</CardTitle>
          <FileText className="h-4 w-4 text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0</div>
          <p className="text-xs text-gray-500">Oluşturulan özgeçmiş sayısı</p>
          <Link href="/ozgecmis">
            <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-xs">Özgeçmiş Oluştur</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Mülakatlar</CardTitle>
          <MessageSquare className="h-4 w-4 text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0</div>
          <p className="text-xs text-gray-500">Tamamlanan mülakat sayısı</p>
          <Link href="/mulakat">
            <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-xs">Mülakat Simülasyonu</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Yetkinlik Puanı</CardTitle>
          <BarChart3 className="h-4 w-4 text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">-</div>
          <p className="text-xs text-gray-500">Henüz analiz yapılmadı</p>
          <Link href="/analiz">
            <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-xs">Yetkinlik Analizi</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Başarılar</CardTitle>
          <Award className="h-4 w-4 text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0</div>
          <p className="text-xs text-gray-500">Kazanılan başarı sayısı</p>
          <Button className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-500 text-xs cursor-not-allowed">
            Başarılar Kilitli
          </Button>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Hoş Geldiniz!</CardTitle>
          <CardDescription>
            KariyerAI'ya hoş geldiniz. Kariyer gelişiminiz için yapay zeka destekli araçlarımızı kullanmaya başlayın.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Link href="/ozgecmis">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Özgeçmiş Oluştur
                </Button>
              </Link>
              <Link href="/mulakat">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Mülakat Simülasyonu
                </Button>
              </Link>
              <Link href="/analiz">
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Yetkinlik Analizi
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Başlangıç Rehberi</CardTitle>
          <CardDescription>KariyerAI'yı kullanmaya başlamak için aşağıdaki adımları takip edin.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-700">1</div>
              <div>
                <h4 className="font-medium">Özgeçmişinizi Oluşturun</h4>
                <p className="text-sm text-gray-500">
                  Özgeçmişinizi yükleyin veya sıfırdan oluşturun. Yapay zeka özgeçmişinizi analiz edecek.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-700">2</div>
              <div>
                <h4 className="font-medium">Mülakat Simülasyonu Yapın</h4>
                <p className="text-sm text-gray-500">
                  Gerçekçi mülakat senaryoları ile kendinizi geliştirin ve özgüveninizi artırın.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-700">3</div>
              <div>
                <h4 className="font-medium">Yetkinlik Analizinizi Görüntüleyin</h4>
                <p className="text-sm text-gray-500">
                  Güçlü ve geliştirilmesi gereken yönlerinizi keşfedin, kişiselleştirilmiş öneriler alın.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

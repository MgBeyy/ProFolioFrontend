import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"

export default function HakkimizdaPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">Hakkımızda</h1>
          <p className="text-gray-600 md:text-xl">
            ProFolio ile kariyer yolculuğunuzda size rehberlik etmek için buradayız
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            ProFolio, yapay zeka teknolojisini kullanarak bireylerin kariyer gelişimlerini destekleyen yenilikçi bir
            platformdur. Amacımız, her bireyin potansiyelini keşfetmesine ve kariyer hedeflerine ulaşmasına yardımcı
            olmaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-teal-100 p-3">
                  <Target className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Misyonumuz</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Yapay zeka destekli araçlarla bireylerin kariyer potansiyellerini ortaya çıkarmak ve profesyonel
                gelişimlerini hızlandırmak.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-teal-100 p-3">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Vizyonumuz</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Türkiye'de kariyer gelişimi alanında öncü platform olmak ve her bireyin hayalindeki kariyere ulaşmasını
                sağlamak.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-teal-100 p-3">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Ekibimiz</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Deneyimli kariyer uzmanları, yazılım geliştiricileri ve yapay zeka mühendislerinden oluşan tutkulu bir
                ekip.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-teal-100 p-3">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Değerlerimiz</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Şeffaflık, güvenilirlik, yenilikçilik ve kullanıcı odaklılık temel değerlerimizdir.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Neden ProFolio?</CardTitle>
            <CardDescription>Kariyer gelişiminiz için ProFolio'yu tercih etmenizin nedenleri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-teal-800 mb-2">Yapay Zeka Destekli</h3>
                <p className="text-sm text-gray-600">
                  En son AI teknolojileri ile kişiselleştirilmiş analiz ve öneriler
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-teal-800 mb-2">Kolay Kullanım</h3>
                <p className="text-sm text-gray-600">Sezgisel arayüz ile hızlı ve etkili kariyer gelişimi</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-teal-800 mb-2">Sürekli Gelişim</h3>
                <p className="text-sm text-gray-600">İlerlemenizi takip edin ve sürekli gelişim sağlayın</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

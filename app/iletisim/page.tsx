import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function IletisimPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">İletişim</h1>
          <p className="text-gray-600 md:text-xl">Sorularınız için bizimle iletişime geçin</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Bize Ulaşın</CardTitle>
              <CardDescription>Mesajınızı gönderin, en kısa sürede size dönüş yapalım</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ad</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Soyad</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Konu</Label>
                <Input id="subject" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea id="message" placeholder="Mesajınızı buraya yazın..." className="min-h-[120px]" required />
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Mesaj Gönder</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>İletişim Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-2">
                    <Mail className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium">E-posta</p>
                    <p className="text-sm text-gray-600">info@profolio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-2">
                    <Phone className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-sm text-gray-600">+90 212 555 0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-2">
                    <MapPin className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-sm text-gray-600">
                      Maslak Mahallesi, Büyükdere Caddesi
                      <br />
                      No: 123, Sarıyer/İstanbul
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-2">
                    <Clock className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium">Çalışma Saatleri</p>
                    <p className="text-sm text-gray-600">
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sık Sorulan Sorular</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-teal-800 mb-1">Platform ücretsiz mi?</h4>
                  <p className="text-sm text-gray-600">
                    Temel özellikler ücretsizdir. Premium özellikler için uygun fiyatlı planlarımız mevcuttur.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-teal-800 mb-1">Verilerim güvende mi?</h4>
                  <p className="text-sm text-gray-600">
                    Evet, tüm verileriniz şifrelenerek güvenli sunucularda saklanmaktadır.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-teal-800 mb-1">Mobil uygulama var mı?</h4>
                  <p className="text-sm text-gray-600">
                    Şu anda web platformumuz mobil uyumludur. Mobil uygulama yakında yayınlanacaktır.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

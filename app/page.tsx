import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, MessageSquare, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-teal-800">
                  Kariyerinizi Yapay Zeka ile Geliştirin
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Özgeçmiş oluşturma, mülakat simülasyonu ve kişisel yetkinlik analizi ile kariyer yolculuğunuzda bir
                  adım öne çıkın.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/ozgecmis">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Hemen Başla <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/hakkimizda">
                  <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    Daha Fazla Bilgi
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Kariyer Gelişimi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                Platformumuzun Özellikleri
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Yapay zeka destekli araçlarımızla kariyer gelişiminizi hızlandırın
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-teal-100 p-3">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-800">Özgeçmiş Oluşturma</h3>
              <p className="text-center text-gray-600">
                Profesyonel özgeçmişinizi kolayca oluşturun veya mevcut özgeçmişinizi yükleyin ve AI analizi alın.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-teal-100 p-3">
                <MessageSquare className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-800">Mülakat Simülasyonu</h3>
              <p className="text-center text-gray-600">
                Gerçekçi mülakat senaryoları ile kendinizi geliştirin ve özgüveninizi artırın.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-teal-100 p-3">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-800">Yetkinlik Analizi</h3>
              <p className="text-center text-gray-600">
                Kişisel yetkinliklerinizi analiz edin ve gelişim alanlarınızı keşfedin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                Nasıl Çalışır?
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Üç basit adımda kariyer gelişiminizi hızlandırın
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">1</div>
              <h3 className="text-xl font-bold text-teal-800">Özgeçmişinizi Yükleyin</h3>
              <p className="text-center text-gray-600">
                PDF olarak özgeçmişinizi yükleyin veya platformumuzdaki formu kullanarak oluşturun.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">2</div>
              <h3 className="text-xl font-bold text-teal-800">AI Analizi Alın</h3>
              <p className="text-center text-gray-600">
                Yapay zeka özgeçmişinizi analiz eder ve kişiselleştirilmiş öneriler sunar.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">3</div>
              <h3 className="text-xl font-bold text-teal-800">Gelişiminizi İzleyin</h3>
              <p className="text-center text-gray-600">
                Mülakat simülasyonları ve yetkinlik analizleri ile kariyer gelişiminizi takip edin.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/ozgecmis">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Şimdi Deneyin <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                Kullanıcılarımız Ne Diyor?
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Platformumuzun kullanıcılarından geri bildirimler
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-600 italic">
                "Bu platform sayesinde özgeçmişimi profesyonel bir şekilde hazırladım ve mülakat simülasyonları ile
                kendimi geliştirdim. İş görüşmemde çok daha özgüvenli hissettim."
              </p>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-teal-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-teal-200" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Ayşe Yılmaz</h4>
                  <p className="text-sm text-gray-600">Yazılım Geliştirici</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-600 italic">
                "Yetkinlik analizi sayesinde gelişmem gereken alanları keşfettim. Mülakat simülasyonundaki SQL
                sorularına hazırlıklı gitmem iş teklifini almamda büyük rol oynadı."
              </p>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-teal-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-teal-200" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Mehmet Kaya</h4>
                  <p className="text-sm text-gray-600">Veri Analisti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Kariyerinizde Bir Adım Öne Çıkın
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hemen ücretsiz hesap oluşturun ve yapay zeka destekli kariyer araçlarımızı kullanmaya başlayın.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/kayit">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  Ücretsiz Hesap Oluştur
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

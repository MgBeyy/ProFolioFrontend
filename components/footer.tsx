import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-teal-600">ProFolio</h3>
            <p className="text-sm text-gray-600">
              Yapay zeka destekli kariyer geliştirme platformu. Özgeçmiş oluşturma, mülakat simülasyonu ve yetkinlik
              analizi.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ozgecmis" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Özgeçmiş Oluşturma
                </Link>
              </li>
              <li>
                <Link href="/mulakat" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Mülakat Simülasyonu
                </Link>
              </li>
              <li>
                <Link href="/analiz" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Yetkinlik Analizi
                </Link>
              </li>
              <li>
                <Link href="/panel" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Kontrol Paneli
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Şirket</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/kariyer" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-600 hover:text-teal-600 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Yasal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gizlilik" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kullanim-kosullari" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>© 2025 ProFolio. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

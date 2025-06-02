"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, LogOut, User } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-teal-600">ProFolio</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {!user && (
            <>
              <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="text-sm font-medium hover:text-teal-600 transition-colors">
                İletişim
              </Link>
            </>
          )}
          {user && (
            <>
              <Link href="/ozgecmis" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Özgeçmiş
              </Link>
              <Link href="/mulakat" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Mülakat Simülasyonu
              </Link>
              <Link href="/analiz" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Yetkinlik Analizi
              </Link>
              <Link href="/panel" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Kontrol Paneli
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/panel">Kontrol Paneli</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/giris">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Giriş Yap
                </Button>
              </Link>
              <Link href="/kayit">
                <Button className="bg-teal-600 hover:bg-teal-700">Kayıt Ol</Button>
              </Link>
            </div>
          )}
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            {!user && (
              <>
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Ana Sayfa
                </Link>
                <Link
                  href="/hakkimizda"
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Hakkımızda
                </Link>
                <Link
                  href="/iletisim"
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                  onClick={toggleMenu}
                >
                  İletişim
                </Link>
              </>
            )}
            {user && (
              <>
                <Link
                  href="/ozgecmis"
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Özgeçmiş
                </Link>
                <Link
                  href="/mulakat"
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Mülakat Simülasyonu
                </Link>
                <Link
                  href="/analiz"
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Yetkinlik Analizi
                </Link>
                <Link
                  href="/panel"
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Kontrol Paneli
                </Link>
              </>
            )}
            <div className="flex flex-col gap-2 pt-2 border-t">
              {user ? (
                <>
                  <div className="text-sm text-gray-600">
                    Hoş geldiniz, {user.firstName} {user.lastName}
                  </div>
                  <Button variant="outline" onClick={handleLogout} className="w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    Çıkış Yap
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/giris" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                      Giriş Yap
                    </Button>
                  </Link>
                  <Link href="/kayit" onClick={toggleMenu}>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Kayıt Ol</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-serif font-bold text-lg md:text-xl">柔</span>
            </div>
            <span className="font-serif font-bold text-lg md:text-xl text-foreground">Club de Judo Ikikata</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Historia
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Únete Ahora
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Historia
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Únete Ahora
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

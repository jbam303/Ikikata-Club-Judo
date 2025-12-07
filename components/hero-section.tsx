"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToHistory = () => {
    const element = document.getElementById("historia")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/ikikata.jpeg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-sm border border-accent/30">
              <span className="text-accent-foreground font-serif text-sm md:text-base">道 - El Camino del Judo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight text-balance">
              Tradición, Disciplina y Excelencia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Descubre el arte marcial japonés que transforma cuerpo y mente
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-8 py-6 w-full sm:w-auto"
            >
              Comienza Tu Viaje
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToHistory}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base md:text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
            >
              Nuestra Historia
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToHistory}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-primary-foreground" />
        </button>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export function HistorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="historia" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=japanese+traditional+pattern+waves)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <span className="text-accent font-serif text-sm md:text-base uppercase tracking-wider">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
                Ikikata: Una familia unida por la pasión del judo
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                Fundado en 2024, Ikikata es un club joven que nace con una visión clara: crear una familia donde el judo sea más que un deporte, sea un estilo de vida que nos une y fortalece.
              </p>
              <p className="text-base md:text-lg">
                Aunque estamos comenzando nuestro camino, ya compartimos los valores fundamentales del judo tradicional japonés y las enseñanzas del maestro Jigoro Kano. En Ikikata, cada practicante es parte de una familia que crece junta, apoyándose mutuamente en cada entrenamiento.
              </p>
              <p className="text-base md:text-lg">
                Nuestro nombre, Ikikata (生き方), significa "forma de vida" en japonés. Esto refleja nuestra filosofía: el judo no es solo lo que hacemos en el tatami, sino cómo vivimos cada día con respeto, disciplina y camaradería. Prometemos una gran trayectoria juntos.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent">2024</div>
                <div className="text-sm text-muted-foreground mt-1">Año de Fundación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent">1</div>
                <div className="text-sm text-muted-foreground mt-1">Familia Unida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent">∞</div>
                <div className="text-sm text-muted-foreground mt-1">Pasión y Compromiso</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-4/5 rounded-sm overflow-hidden shadow-2xl">
              <img src="/historic-judo-dojo-black-and-white-vintage-trainin.jpg" alt="Dojo histórico" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

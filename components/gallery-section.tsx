"use client"

import { useEffect, useRef, useState } from "react"

interface GalleryImage {
  url: string
  title: string
  delay: number
}

const galleryImages: GalleryImage[] = [
  {
    url: "/judo-throw-technique-ippon-seoi-nage.jpg",
    title: "Técnicas de Proyección",
    delay: 0,
  },
  {
    url: "/judo-competition-tournament-judoka-fighting.jpg",
    title: "Competiciones",
    delay: 200,
  },
  {
    url: "/judo-children-training-kids-learning.jpg",
    title: "Clases Infantiles",
    delay: 400,
  },
  {
    url: "/judo-belt-ceremony-grading-black-belt.jpg",
    title: "Ceremonias de Cinturón",
    delay: 600,
  },
  {
    url: "/judo-groundwork-newaza-technique.jpg",
    title: "Trabajo en Suelo",
    delay: 800,
  },
  {
    url: "/judo-meditation-dojo-respect-bow.jpg",
    title: "Meditación y Respeto",
    delay: 1000,
  },
]

function GalleryCard({ image, index }: { image: GalleryImage; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, image.delay)
        }
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [image.delay])

  return (
    <div
      ref={cardRef}
      className={`group relative aspect-4/3 rounded-sm overflow-hidden shadow-lg transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <img
        src={image.url || "/placeholder.svg"}
        alt={image.title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-primary-foreground">
        <h3 className="font-serif font-semibold text-lg md:text-xl">{image.title}</h3>
      </div>
    </div>
  )
}

export function GallerySection() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="galeria" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent font-serif text-sm md:text-base uppercase tracking-wider">Galería</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Momentos que Definen Nuestra Comunidad
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Cada imagen cuenta una historia de dedicación, superación y camaradería
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <GalleryCard key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

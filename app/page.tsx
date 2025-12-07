import { HeroSection } from "@/components/hero-section"
import { HistorySection } from "@/components/history-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HistorySection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}

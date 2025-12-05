import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { AppShowcase } from "@/components/app-showcase"
import { PetShowcase } from "@/components/pet-showcase"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <PetShowcase />
      <Footer />
    </main>
  )
}

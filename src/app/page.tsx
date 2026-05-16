import { Scene } from '@/components/3d/Scene'
import { Hero } from '@/components/ui/Hero'
import { Solutions } from '@/components/ui/Solutions'
import { Footer } from '@/components/ui/Footer'
import { ClientsSection } from '@/components/ui/ClientsSection'
import { HomeAbout } from '@/components/ui/HomeAbout'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Hero />
        <HomeAbout />
        <Solutions />
        <ClientsSection />
        <Footer />
      </div>
    </main>
  )
}

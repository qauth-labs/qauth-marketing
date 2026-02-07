import { createFileRoute } from '@tanstack/react-router'

import { Benefits } from '../components/sections/benefits'
import { Features } from '../components/sections/features'
import { Footer } from '../components/sections/footer'
import { Header } from '../components/sections/header'
import { Hero } from '../components/sections/hero'
import { Integration } from '../components/sections/integration'
import { Roadmap } from '../components/sections/roadmap'
import { Waitlist } from '../components/sections/waitlist'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <Roadmap />
      <Integration />
      <Benefits />
      <Waitlist />
      <Footer />
    </main>
  )
}

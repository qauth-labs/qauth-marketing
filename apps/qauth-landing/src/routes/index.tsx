import { createFileRoute } from '@tanstack/react-router'

import { CTA } from '../components/sections/cta'
import { Deploy } from '../components/sections/deploy'
import { Features } from '../components/sections/features'
import { Footer } from '../components/sections/footer'
import { Header } from '../components/sections/header'
import { Hero } from '../components/sections/hero'
import { Integration } from '../components/sections/integration'
import { PQC } from '../components/sections/pqc'
import { StandardsBar } from '../components/sections/standards-bar'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <>
      <div aria-hidden className="grid-lines" />
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground" id="main-content">
        <Header />
        <Hero />
        <StandardsBar />
        <Features />
        <Integration />
        <PQC />
        <Deploy />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

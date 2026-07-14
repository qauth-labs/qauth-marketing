import { createFileRoute } from '@tanstack/react-router'

import { AgentAuth } from '../components/sections/agent-auth'
import { Benefits } from '../components/sections/benefits'
import { CTA } from '../components/sections/cta'
import { Deploy } from '../components/sections/deploy'
import { Features } from '../components/sections/features'
import { Footer } from '../components/sections/footer'
import { Header } from '../components/sections/header'
import { Hero } from '../components/sections/hero'
import { Integration } from '../components/sections/integration'
import { OAuthCore } from '../components/sections/oauth-core'
import { PQC } from '../components/sections/pqc'
import { StandardsBar } from '../components/sections/standards-bar'
import { Waitlist } from '../components/sections/waitlist'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <>
      <div aria-hidden className="grid-lines" />
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground" id="main-content">
        <Hero />
        <StandardsBar />
        <Features />
        <OAuthCore />
        <AgentAuth />
        <Integration />
        <PQC />
        <Deploy />
        <Benefits />
        <Waitlist />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

import { createFileRoute } from '@tanstack/react-router'

import { Footer } from '../components/sections/footer'
import { Header } from '../components/sections/header'
import { Roadmap } from '../components/sections/roadmap'

export const Route = createFileRoute('/roadmap')({
  component: RoadmapPage,
  head: () => ({
    meta: [
      {
        title: 'Development Status — QAuth',
      },
      {
        name: 'description',
        content:
          'Track QAuth’s build progress toward a post-quantum ready, OAuth 2.1 compliant identity platform — milestones, current status, and target release.',
      },
    ],
  }),
})

function RoadmapPage() {
  return (
    <>
      <div aria-hidden className="grid-lines" />
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground" id="main-content">
        <Roadmap asPageTitle />
      </main>
      <Footer />
    </>
  )
}

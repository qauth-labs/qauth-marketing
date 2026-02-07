# QAuth Landing Page

## Project Context

**Project Name:** QAuth Landing Page
**Type:** Marketing Landing Page / Product Showcase
**Purpose:** Showcase QAuth - a post-quantum ready authentication platform

## Core Goals

1. **Visual Impact:** Create a distinctive, memorable landing page that communicates security and innovation
2. **Developer Trust:** Establish credibility with security engineers and developers through professional presentation
3. **Clear Value Proposition:** Communicate post-quantum security benefits without sacrificing developer experience
4. **Lead Generation:** Capture waitlist signups for private alpha access

## Key Requirements

- **No Database:** Static landing page, waitlist form can use external service (e.g., Resend, ConvertKit)
- **Performance:** Fast load times, optimized assets
- **Accessibility:** WCAG 2.1 AA compliance
- **SEO:** Proper meta tags, Open Graph, structured data

---

# Design System

## Brand Identity

**QAuth** represents security, innovation, and developer-first design. The visual language should communicate:

- **Trust:** Professional, enterprise-grade appearance
- **Innovation:** Cutting-edge, forward-looking aesthetic
- **Simplicity:** Clean, uncluttered, easy to scan
- **Technical Competence:** Code-first, developer-friendly

## Design Direction

**Aesthetic:** Dark, sophisticated, security-focused with warm accent colors (orange/amber)

- **Primary Background:** Deep dark (#0D0D0D to #1A1A1A)
- **Accent Color:** Warm orange/amber (#F97316 to #FB923C)
- **Text:** High contrast white/gray hierarchy
- **Code Blocks:** Darker panels with syntax highlighting
- **Feel:** Professional, trustworthy, cutting-edge

## Color Palette

### Primary Colors

| Token             | Value     | Usage                         |
| ----------------- | --------- | ----------------------------- |
| `--background`    | `#0D0D0D` | Page background               |
| `--foreground`    | `#FAFAFA` | Primary text                  |
| `--card`          | `#1A1A1A` | Card backgrounds, elevated UI |
| `--card-elevated` | `#262626` | Nested cards, hover states    |
| `--border`        | `#262626` | Borders, dividers             |
| `--border-subtle` | `#1F1F1F` | Subtle separators             |

### Accent Colors

| Token                  | Value     | Usage                      |
| ---------------------- | --------- | -------------------------- |
| `--primary`            | `#F97316` | CTAs, links, highlights    |
| `--primary-hover`      | `#FB923C` | Hover state for primary    |
| `--primary-foreground` | `#0D0D0D` | Text on primary background |

### Text Colors

| Token                | Value     | Usage                   |
| -------------------- | --------- | ----------------------- |
| `--foreground`       | `#FAFAFA` | Headings, primary text  |
| `--muted-foreground` | `#A3A3A3` | Body text, descriptions |
| `--muted`            | `#737373` | Subtle text, captions   |

### Status Colors

| Token       | Value     | Usage                      |
| ----------- | --------- | -------------------------- |
| `--success` | `#22C55E` | Completed, positive states |
| `--warning` | `#EAB308` | In progress, caution       |
| `--info`    | `#3B82F6` | Informational              |
| `--error`   | `#EF4444` | Errors, destructive        |

## Typography

### Font Stack

```css
--font-display: 'Cabinet Grotesk', 'Satoshi', system-ui, sans-serif;
--font-body: 'Geist', 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Name      | Size     | Weight | Line Height | Usage             |
| --------- | -------- | ------ | ----------- | ----------------- |
| `display` | 4rem     | 700    | 1.1         | Hero headline     |
| `h1`      | 3rem     | 700    | 1.2         | Section titles    |
| `h2`      | 2rem     | 600    | 1.3         | Subsection titles |
| `h3`      | 1.25rem  | 600    | 1.4         | Card titles       |
| `body`    | 1rem     | 400    | 1.6         | Body text         |
| `body-lg` | 1.125rem | 400    | 1.6         | Lead paragraphs   |
| `small`   | 0.875rem | 400    | 1.5         | Captions, labels  |
| `code`    | 0.875rem | 400    | 1.5         | Code blocks       |

## Spacing System

Based on 4px grid:

| Token | Value | Usage                 |
| ----- | ----- | --------------------- |
| `xs`  | 4px   | Tight spacing         |
| `sm`  | 8px   | Small gaps            |
| `md`  | 16px  | Default spacing       |
| `lg`  | 24px  | Section padding       |
| `xl`  | 32px  | Large gaps            |
| `2xl` | 48px  | Section margins       |
| `3xl` | 64px  | Major section spacing |
| `4xl` | 96px  | Hero spacing          |

## Responsive Breakpoints

| Breakpoint | Width  | Usage            |
| ---------- | ------ | ---------------- |
| `sm`       | 640px  | Mobile landscape |
| `md`       | 768px  | Tablet           |
| `lg`       | 1024px | Desktop          |
| `xl`       | 1280px | Large desktop    |
| `2xl`      | 1536px | Extra large      |

---

# Page Sections

## 1. Hero Section

- Headline: "Post-Quantum Ready Authentication"
- Subheadline describing headless-first, OAuth 2.1 compliant platform
- CTA buttons: "Get Started" (primary), "View Docs" (secondary)
- Code preview showing installation/configuration
- Links: "Open Source", "Self Hosted"

## 2. Core Features

- Post-Quantum Security (CRYSTALS-Kyber, ML-DSA)
- Headless-First architecture
- Dev Experience (typed SDKs, local testing)
- OAuth 2.1 & OIDC compliance

## 3. Development Status / Roadmap

- Visual progress tracker with milestones
- Target Release: Q2 2026
- Statuses: Completed, In Progress, Planned

## 4. Simple Integration

- Code example showing middleware usage
- Feature highlights: Type-safe, Zero-config, Edge-ready

## 5. Benefits Grid

- Lightweight
- Fully Customizable
- Quantum Resistant

## 6. Waitlist CTA

- "Join the Revolution"
- Email signup form
- Privacy-focused messaging

## 7. Footer

- Navigation links
- Social links
- Version indicator

---

# Content & Copy

## Voice & Tone

### Brand Voice

QAuth speaks with:

- **Authority:** Confident, knowledgeable about security
- **Clarity:** Technical but accessible
- **Forward-thinking:** Innovative, ahead of the curve
- **Developer-friendly:** Speaks the language of engineers

### Tone Principles

- Professional but not corporate
- Technical but not intimidating
- Confident but not arrogant
- Concise and direct

## Section Content

### Hero Section

**Headline:** "Post-Quantum Ready Authentication"

**Subheadline (keep under 150 chars):**
"The headless-first identity platform built for the next era of cryptography. Fully OAuth 2.1 compliant, developer-friendly, and secure by design."

**CTAs:**

- Primary: "Get Started"
- Secondary: "View Docs"

**Supporting links:**

- "Open Source"
- "Self Hosted"

**Code Preview:**

```bash
# Install the QAuth SDK
npm install @qauth/sdk

# Initialize secure client
```

```typescript
const qauth = new QAuthClient({
  clientId: process.env.QAUTH_CLIENT_ID,
  algorithm: 'CRYSTALS-Kyber', // Quantum-safe
  headless: true,
})

// Ready to authenticate
await client.authenticate()
```

### Core Features

1. **Post-Quantum Security**

   - Title: "Post-Quantum Security"
   - Description: "Future-proof cryptography implementing NIST-standardized algorithms like CRYSTALS-Kyber."

2. **Headless-First**

   - Title: "Headless-First"
   - Description: "Complete API control. Build your own UI, we handle the complex security primitives."

3. **Dev Experience**

   - Title: "Dev Experience"
   - Description: "Typed SDKs, comprehensive docs, and local testing with dev mode that just works."

4. **OAuth 2.1 & OIDC**
   - Title: "OAuth 2.1 & OIDC"
   - Description: "Fully compliant with modern standards. Easy integration, enterprise-ready."

### Development Status / Roadmap

**Section Title:** "Development Status"

**Target Release:** "Target Release: Q2 2026"

**Milestones:**

| Milestone                           | Description                                                                | Status      |
| ----------------------------------- | -------------------------------------------------------------------------- | ----------- |
| Project Foundation                  | Repository setup, CI/CD pipeline, architecture design                      | Completed   |
| User Registration & Email Verification | Core user flows, database, email verification flow                        | Completed   |
| Login & JWT Tokens                  | Implementing secure token issuance, refresh rotation, and session management | In Progress |
| OAuth 2.1 Flow                      | Authorization code flow with PKCE                                          | Planned     |
| Developer Portal & Release          | Dashboard, API keys management, and public release                         | Planned     |

### Simple Integration

**Title:** "Simple Integration"

**Description:** "Don't rewrite your entire stack. QAuth drops into your existing framework with minimal configuration. Whether it's Next.js, Go, or Python, we provide typed SDKs that respect your workflow."

**Features:**

- "Type-safe by default"
- "Zero config middleware"
- "Edge-ready latency"

**Code Example:**

```typescript
import { QAuthMiddleware } from '@qauth/nextjs'

// Protect your routes with quantum-safe auth
export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
}

export default QAuthMiddleware({
  tokenFresh: 24 * 60 * 60,
  cookieShared: 'strict-quantum',
  refreshAt: 0.25,
  customTest: (req) => {
    return !req.headers['x-skip-auth']
  },
})

const route = createRoute({
  requireAuth: true,
  resources: ['documents', { status: 49 }],
})
```

### Benefits Grid

1. **Lightweight**

   - Title: "Lightweight"
   - Description: "Unlike bloated auth libraries, QAuth's SDK is a single dependency with < 5KB runtime payload."

2. **Fully Customizable**

   - Title: "Fully Customizable"
   - Description: "No rigid flows or pre-built components. Build your login experience in React, Vue, or Vanilla."

3. **Quantum Resistant**
   - Title: "Quantum Resistant"
   - Description: "All data is protected using lattice-based cryptography. We are built for a 50+ year horizon today."

### Waitlist CTA

**Title:** "Join the Revolution"

**Description:** "We are currently in private alpha. Be the first to know when we launch the public beta and secure your spot."

**Placeholder:** "Enter your email address"

**Button:** "Join Waitlist"

**Privacy note:** "No spam. Unsubscribe anytime."

### Footer

**Links:**

- GitHub
- Documentation
- Twitter/X

**Copyright:** "2026 QAuth Labs. All rights reserved. Built with quantum-grade encryption."

**Version:** "Alpha 0.1"

## Writing Guidelines

### Headlines

- Use active voice
- Keep under 6 words when possible
- Focus on benefits, not features
- Use title case

### Body Copy

- Keep paragraphs short (2-3 sentences)
- Lead with the benefit
- Use second person ("you", "your")
- Avoid jargon without explanation
- Target reading level: Technical professionals

### CTAs

- Use action verbs: "Get", "Start", "Join", "View"
- Create urgency where appropriate
- Be specific: "Join Waitlist" vs "Submit"

### Code Examples

- Keep examples concise and realistic
- Show the happy path
- Use meaningful variable names
- Add comments for clarity
- Highlight key features

## Terminology

### Use

- "Post-quantum" (hyphenated)
- "Headless-first" (hyphenated)
- "OAuth 2.1" (with version)
- "SDK" (not "sdk")
- "API" (not "api")

### Avoid

- "Revolutionary" (overused)
- "Best-in-class" (vague)
- "Cutting-edge" (cliche)
- "Seamless" (overused in tech)
- "Leverage" (use "use" instead)

## SEO Considerations

### Meta Title (50-60 chars)

"QAuth - Post-Quantum Ready Authentication Platform"

### Meta Description (150-160 chars)

"The headless-first identity platform built for quantum-resistant security. OAuth 2.1 compliant, developer-friendly, open source."

### Keywords (natural integration)

- Post-quantum authentication
- Quantum-resistant auth
- Headless authentication
- OAuth 2.1 provider
- Developer authentication platform
- CRYSTALS-Kyber authentication

---

# Implementation Patterns

## TanStack Start Specifics

### Route Configuration

```typescript
// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'QAuth - Post-Quantum Ready Authentication' },
      {
        name: 'description',
        content:
          'The headless-first identity platform built for the next era of cryptography.',
      },
    ],
  }),
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
```

### Server Functions (Waitlist)

```typescript
// src/lib/actions.ts
import { createServerFn } from '@tanstack/start'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

export const joinWaitlist = createServerFn({ method: 'POST' })
  .validator(waitlistSchema)
  .handler(async ({ data }) => {
    // In production, integrate with email service
    console.log('Waitlist signup:', data.email)

    // Example: Resend integration
    // await resend.contacts.create({
    //   email: data.email,
    //   audienceId: process.env.RESEND_AUDIENCE_ID,
    // });

    return { success: true }
  })
```

## Component Patterns

### Section Components

Each major section should be its own component:

```typescript
// src/components/sections/hero.tsx
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">{/* Hero content */}</div>
    </section>
  )
}
```

### Code Block Component

```typescript
// src/components/shared/code-block.tsx
import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  code: string
  lang: 'typescript' | 'bash' | 'json'
  filename?: string
}

export async function CodeBlock({ code, lang, filename }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: 'vitesse-dark', // Or custom theme
  })

  return (
    <div className="rounded-lg overflow-hidden bg-[#1a1a1a]">
      {filename && (
        <div className="px-4 py-2 border-b border-white/10 text-sm text-muted-foreground">
          {filename}
        </div>
      )}
      <div
        className="p-4 overflow-x-auto text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
```

### Status Badges

```typescript
// Completed
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
  <IconCheck className="size-3" />
  Completed
</span>

// In Progress
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
  <IconLoader className="size-3 animate-spin" />
  In Progress
</span>

// Planned
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-muted/10 text-muted-foreground">
  <IconCircle className="size-3" />
  Planned
</span>
```

## Animation Guidelines

### Framer Motion Variants

```typescript
// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
}

// Stagger children
const stagger = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

// Scale in
const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
}
```

### Transitions

- Default: `transition-colors duration-200`
- Hover states: `transition-all duration-300`
- Page transitions: `duration-500 ease-out`

### Micro-interactions

- Button hover: Scale 1.02, slight brightness increase
- Card hover: Border color shift to primary/50
- Link hover: Underline animation, color shift
- Icon hover: Subtle rotation or bounce

## Visual Effects

### Gradients

```css
/* Hero gradient overlay */
.gradient-hero {
  background: radial-gradient(
    ellipse 80% 50% at 50% -20%,
    rgba(249, 115, 22, 0.15),
    transparent
  );
}

/* Card glow effect */
.glow-primary {
  box-shadow: 0 0 60px -15px rgba(249, 115, 22, 0.3);
}
```

### Backgrounds

```css
/* Subtle grid pattern */
.bg-grid {
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

---

# Performance & SEO Checklist

## Performance

- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Check bundle size
- [ ] Verify image optimization
- [ ] Test on slow 3G throttling
- [ ] Check for layout shifts (CLS)
- [ ] Lazy load below-fold images
- [ ] Self-host fonts with `font-display: swap`
- [ ] Preload critical assets

## SEO

- [ ] Proper heading hierarchy (single h1)
- [ ] Meta description under 160 characters
- [ ] Open Graph tags for social sharing
- [ ] Structured data (Organization, SoftwareApplication)
- [ ] Canonical URL
- [ ] Sitemap.xml
- [ ] Robots.txt

## Accessibility

- [ ] All interactive elements keyboard accessible
- [ ] Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Alt text for images or `aria-hidden` for decorative
- [ ] Color contrast ratios meet WCAG 2.1 AA (4.5:1 for text)
- [ ] Visible focus indicators
- [ ] Skip links for main content navigation

---

# Do's and Don'ts

## Do

- Use generous whitespace
- Maintain consistent border radius (rounded-lg = 0.5rem)
- Use subtle hover states
- Keep text hierarchy clear
- Use the primary color sparingly for emphasis

## Don't

- Use more than 2-3 colors per section
- Create busy, cluttered layouts
- Use harsh color transitions
- Forget dark mode considerations (already dark theme)
- Overuse animations

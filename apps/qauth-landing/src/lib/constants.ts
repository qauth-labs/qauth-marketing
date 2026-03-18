export const SITE = {
  name: 'QAuth',
  version: 'v0.0.1-alpha',
  releaseTag: '2026.Q1 Alpha Release',
  targetRelease: 'Q2 2026',
} as const

export const CORE_FEATURES = [
  {
    title: 'Post-Quantum Security',
    description: 'Future-proof cryptography implementing NIST-standardized algorithms like CRYSTALS-Kyber.',
  },
  {
    title: 'Headless-First',
    description: 'Complete API control. Build your own UI, we handle the complex security primitives.',
  },
  {
    title: 'Dev Experience',
    description: 'Typed SDKs, comprehensive docs, and local testing with dev mode that just works.',
  },
  {
    title: 'OAuth 2.1 & OIDC',
    description: 'Fully compliant with modern standards. Easy integration, enterprise-ready.',
  },
] as const

export type RoadmapStatus = 'completed' | 'in-progress' | 'planned'

export const ROADMAP_MILESTONES: Array<{
  title: string
  description: string
  status: RoadmapStatus
  viewCodeHref?: string
}> = [
  {
    title: 'Project Foundation',
    description: 'Repository setup, CI/CD pipeline, architecture design',
    status: 'completed',
  },
  {
    title: 'User Registration & Email Verification',
    description: 'Core user flows, database, email verification flow',
    status: 'completed',
  },
  {
    title: 'Login & JWT Tokens',
    description: 'Implementing secure token issuance, refresh rotation, and session management',
    status: 'in-progress',
    viewCodeHref: 'https://github.com/qauth-labs/qauth',
  },
  {
    title: 'OAuth 2.1 Flow',
    description: 'Authorization code flow with PKCE',
    status: 'planned',
  },
  {
    title: 'Developer Portal & Release',
    description: 'Dashboard, API keys management, and public release',
    status: 'planned',
  },
]

export const BENEFITS = [
  {
    title: 'Lightweight',
    description: "Unlike bloated auth libraries, QAuth's SDK is a single dependency with < 5KB runtime payload.",
  },
  {
    title: 'Fully Customizable',
    description: 'No rigid flows or pre-built components. Build your login experience in React, Vue, or Vanilla.',
  },
  {
    title: 'Quantum Resistant',
    description: 'All data is protected using lattice-based cryptography. We are built for a 50+ year horizon today.',
  },
] as const

export const INTEGRATION_CHECKLIST = ['Type-safe by default', 'Zero-config middleware', 'Edge-ready latency'] as const

export const HERO_CODE = `# Install the QAuth SDK
npm install @qauth-labs/sdk

# Initialize secure client
const qauth = new QAuthClient({
&nbsp;&nbsp;clientId: process.env.QAUTH_CLIENT_ID,
&nbsp;&nbsp;algorithm: "CRYSTALS-Kyber", // Quantum-safe
&nbsp;&nbsp;headless: true,
});

// Ready to authenticate
await client.authenticate();`

export const INTEGRATION_CODE = `import { QAuthMiddleware } from "@qauth-labs/nextjs";

// Protect your routes with quantum-safe auth
export const config = {
  matcher: ["/dashboard/:path*", "/api/protected/:path*"],
};

export default QAuthMiddleware({
&nbsp;&nbsp;tokenFresh: 24 * 60 * 60,
&nbsp;&nbsp;cookieShared: "strict-quantum",
&nbsp;&nbsp;refreshAt: 0.25,
&nbsp;&nbsp;customTest: (req) => {
&nbsp;&nbsp;&nbsp;&nbsp;return !req.headers["x-skip-auth"];
&nbsp;&nbsp;&nbsp;&nbsp;},
});`

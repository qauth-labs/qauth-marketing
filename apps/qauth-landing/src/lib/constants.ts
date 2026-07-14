export const SITE = {
  nearTermStatus: 'Near-Term Roadmap: Complete',
  longTermTarget: 'Long-Term Platform: Wallet Federation + PQC',
} as const

export type RoadmapStatus = 'completed' | 'in-progress' | 'planned'

export const ROADMAP_MILESTONES: Array<{
  title: string
  description: string
  status: RoadmapStatus
  viewCodeHref?: string
}> = [
  {
    title: 'OAuth 2.1 & OIDC Core',
    description:
      'Authorization code flow with mandatory PKCE, client_credentials and refresh token grants, dynamic client registration, discovery, and JWKS.',
    status: 'completed',
    viewCodeHref: 'https://github.com/qauth-labs/qauth',
  },
  {
    title: 'MCP & Agent-Native Authorization',
    description:
      'RFC 8693 on-behalf-of token exchange, agent scope modes, step-up authentication, and a resource-server SDK validated end-to-end with Claude Code.',
    status: 'completed',
    viewCodeHref: 'https://github.com/qauth-labs/qauth',
  },
  {
    title: 'Production Hardening',
    description:
      'CSRF protection, security headers, secure cookies, structured logging, metrics, and Redis-backed failed-login lockout.',
    status: 'completed',
  },
  {
    title: 'Environment-Aware Authorization',
    description:
      'Dev, staging, and production treated as a fail-safe policy dimension across the authorization server.',
    status: 'completed',
  },
  {
    title: 'Identifier Abstraction Migration',
    description: 'The foundational migration that gates wallet federation and post-quantum signing.',
    status: 'planned',
  },
  {
    title: 'Wallet Federation',
    description: 'EUDI Wallet support via OID4VC/SIOPv2 as a first-class upstream identity source. No committed date.',
    status: 'planned',
  },
  {
    title: 'Post-Quantum Hybrid Signing',
    description: 'ML-DSA-65 hybrid signing alongside Ed25519, targeted for Phase 5, 2027.',
    status: 'planned',
  },
]

export const BENEFITS = [
  {
    title: 'Lightweight',
    description:
      'Unlike bloated identity platforms, self-host QAuth with a single docker compose up. Protecting an MCP server? Drop in @qauth-labs/mcp-guard — one integration path among several.',
  },
  {
    title: 'Fully Customizable',
    description: 'No rigid flows or pre-built components. Build your login experience in React, Vue, or Vanilla.',
  },
  {
    title: 'Built for the Long Haul',
    description:
      'Crypto-agile by design today, with ML-DSA-65 post-quantum hybrid signing targeted for 2027. Your integration stays stable as cryptography evolves.',
  },
] as const

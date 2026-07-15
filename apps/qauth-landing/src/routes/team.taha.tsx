import { createFileRoute } from '@tanstack/react-router'

import { Footer } from '../components/sections/footer'
import { Header } from '../components/sections/header'

export const Route = createFileRoute('/team/taha')({
  component: TahaPage,
  head: () => ({
    meta: [
      {
        title: 'Muhammed Taha Ayan — QAuth',
      },
      {
        name: 'description',
        content:
          'Muhammed Taha Ayan (アヤン・ムハンマド・タハ) — creator of QAuth. Identity (IAM) and AI engineer based in Yokohama, Japan. Contact, portfolio, and links.',
      },
    ],
  }),
})

const CONTACTS = [
  { label: 'Email', value: 'taha@qauth.dev', href: 'mailto:taha@qauth.dev' },
  { label: 'Phone / 電話', value: '+81 80-9524-3454', href: 'tel:+818095243454' },
  { label: 'LinkedIn', value: 'linkedin.com/in/tahaayan', href: 'https://www.linkedin.com/in/tahaayan/' },
  { label: 'GitHub', value: 'github.com/EsTharian', href: 'https://github.com/EsTharian' },
] as const

type Entry = {
  title: string
  role: string
  period: string
  href?: string
  bullets: Array<{ ja: string; en: string }>
}

const EXPERIENCE: Array<Entry> = [
  {
    title: 'Akinon — エンタープライズ EC SaaS',
    role: 'Core Product Engineer / Frontend Team Lead',
    period: '2019 – 2026',
    href: 'https://docs.akinon.com/akinon-ui',
    bullets: [
      {
        ja: '全社アイデンティティ基盤を OAuth 2.1 / OIDC / OID4VC へ再構築するアーキテクチャを主導(ADR 4本、ポスト量子対応設計)。全製品・全パートナーが対象。',
        en: 'Led the architecture (4 ADRs) to re-platform the company-wide identity system — all products and partners — onto OAuth 2.1 / OIDC / OID4VC with a post-quantum-ready design.',
      },
      {
        ja: 'コード生成・テスト・デプロイ自動化のためのエージェント型 AI システムを設計。大規模フロントエンド移行の規約を AI エージェント/スキルとして体系化し、カバレッジ 90% 超のテストで担保。',
        en: 'Architected agentic AI systems for code generation, testing, and deployment automation; codified large-scale migration rules as custom AI agents and skills, backed by a >90%-coverage test suite.',
      },
      {
        ja: '全製品・パートナーが利用する拡張プラットフォーム「Akinon UI」を構築(CLI、React UI Kit、サンドボックス化されたマイクロフロントエンドを実行する UI Protocol)。コア製品のマイクロフロントエンド再構築(Turborepo + Vite + Module Federation)を設計・主導。',
        en: 'Built Akinon UI — the extension platform used across all products and partners (CLI, React UI Kit, and a postMessage UI Protocol running partner extensions as sandboxed micro-frontends) — and designed the micro-frontend re-platform of the core product (Turborepo + Vite + Module Federation).',
      },
      {
        ja: '5〜10名のエンジニアチームを複数率い、Samsung、LC Waikiki など10社以上のグローバル EC サイトを提供。',
        en: 'Led multiple 5–10 engineer teams delivering 10+ enterprise storefronts for global brands including Samsung and LC Waikiki.',
      },
    ],
  },
]

const PROJECTS: Array<Entry> = [
  {
    title: 'QAuth',
    role: 'Author / 開発者',
    period: '2025 – 現在',
    href: 'https://github.com/qauth-labs/qauth',
    bullets: [
      {
        ja: 'エージェント時代のためのオープンソース OAuth 2.1 / OIDC 認可サーバー(Apache-2.0)。PKCE 必須の認可コードフロー、トークン発行・失効、イントロスペクション(RFC 7662)、ディスカバリ、動的クライアント登録、レルムによるマルチテナント分離を実装。',
        en: 'Open-source OAuth 2.1 / OIDC authorization server for the agent era (Apache-2.0): authorization-code flow with mandatory PKCE, token issuance / revocation, introspection (RFC 7662), discovery, dynamic client registration, and multi-tenant realms.',
      },
      {
        ja: 'エージェント認可を実装:RFC 8693 トークン交換による on-behalf-of 委任、ステップアップ認証、リソースサーバー SDK(@qauth-labs/mcp-guard)— Claude Code を実クライアントとして E2E 検証済み。',
        en: 'Agent-native authorization: RFC 8693 on-behalf-of token exchange, step-up authentication, and a resource-server SDK (@qauth-labs/mcp-guard) — validated end-to-end with Claude Code as a live MCP client.',
      },
      {
        ja: 'クリプトアジャイルな署名レイヤーによるポスト量子対応設計(ML-DSA-65 + Ed25519 ハイブリッド、NIST FIPS 204)。OpenID Foundation コントリビューター、NGI Zero(NLnet)助成に応募中。',
        en: 'Crypto-agile signing layer toward post-quantum (hybrid ML-DSA-65 + Ed25519, NIST FIPS 204). OpenID Foundation contributor; NGI Zero (NLnet) grant application submitted.',
      },
    ],
  },
  {
    title: 'Majordomo',
    role: 'Builder / 単独開発',
    period: '2026 – 現在',
    bullets: [
      {
        ja: 'Raspberry Pi・VPS・GPU ワークステーションの3ノード私設メッシュ上で稼働する、常時稼働のマルチエージェント AI プラットフォームを単独で設計・構築・運用。',
        en: 'Solo-built and operate an always-on multi-agent AI platform spanning a 3-node private mesh (Raspberry Pi, VPS, GPU workstation).',
      },
      {
        ja: 'OAuth 2.1 で保護された長期メモリサービス(MCP / Streamable HTTP、Qdrant ベクトル検索)を構築。自作の QAuth を本番 IdP として運用 — RFC 7662 / 8707 / 9728 準拠のトークンイントロスペクションとマルチテナント分離。',
        en: 'Built an OAuth 2.1-protected long-term memory service (MCP over Streamable HTTP, Qdrant vector search), authorized by a self-hosted QAuth instance in production — token introspection and multi-tenant isolation per RFC 7662 / 8707 / 9728.',
      },
      {
        ja: 'IETF / OpenID Foundation の標準化動向を毎日追跡し、QAuth への適合性影響を LLM で評価・起票する standards-watch パイプラインを構築。',
        en: 'Built a daily standards-watch pipeline tracking IETF / OpenID Foundation activity and drafting QAuth conformance issues via an LLM harness.',
      },
    ],
  },
  {
    title: 'Sidre',
    role: 'Tech Lead',
    period: '2025 – 現在',
    href: 'https://staging.sidre.app/',
    bullets: [
      {
        ja: 'アラビア語ファーストのイスラーム・デジタル図書館(12,400冊以上)。Elasticsearch + CAMeLBERT + MADAMIRA による高再現率の形態素検索、LLM 分類タクソノミー、AI エージェント駆動の開発ワークフローを構築。6名のクロスファンクショナルチームを率いる。',
        en: 'Arabic-first Islamic digital library (12,400+ books): high-recall morphological search (Elasticsearch + CAMeLBERT + MADAMIRA), an LLM classification taxonomy, and an AI-agent-driven development workflow. Leads a cross-functional team of 6.',
      },
    ],
  },
  {
    title: 'Medaris',
    role: 'Product Manager',
    period: '2025 – 現在',
    href: 'https://github.com/amel-tech',
    bullets: [
      {
        ja: 'イスラーム教育機関向けのオープンソース学習管理プラットフォーム(amel-tech)。',
        en: 'Open-source learning platform for madrasah education, built at amel-tech.',
      },
    ],
  },
]

function EntryCard({ entry }: { entry: Entry }) {
  const { title, role, period, href, bullets } = entry
  const body = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-[12px] text-[oklch(0.72_0.008_90)]">
          {role} · {period}
        </span>
      </div>
      <ul className="mt-3 flex list-disc flex-col gap-2 pl-4">
        {bullets.map(({ ja, en }) => (
          <li key={ja}>
            <p className="text-[14px] text-[oklch(0.75_0.008_90)] leading-[1.7]">{ja}</p>
            <p className="mt-0.5 text-[13px] text-[oklch(0.68_0.008_90)] leading-[1.6]">{en}</p>
          </li>
        ))}
      </ul>
    </>
  )
  const className =
    'rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
  return href ? (
    <a className={`block ${className}`} href={href} rel="noopener noreferrer" target="_blank">
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  )
}

function TahaPage() {
  return (
    <>
      <div aria-hidden className="grid-lines" />
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground" id="main-content">
        <section className="mx-auto max-w-[800px] px-6 pt-32 pb-20">
          {/* Identity */}
          <p className="font-sans font-semibold text-[12px] text-[oklch(0.72_0.008_90)] uppercase tracking-[0.08em]">Team</p>
          <h1 className="mt-3 font-semibold text-4xl tracking-tight">Muhammed Taha Ayan</h1>
          <p className="mt-1 text-[oklch(0.75_0.008_90)] text-xl">アヤン・ムハンマド・タハ</p>
          <p className="mt-4 text-[15px] text-[oklch(0.75_0.008_90)] leading-[1.7]">
            QAuth 開発者 — アイデンティティ(IAM)&amp; AI エンジニア · 横浜(日本)
            <br />
            Creator of QAuth — Identity (IAM) &amp; AI Engineer · Yokohama, Japan
          </p>

          {/* Contact */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {CONTACTS.map(({ label, value, href }) => (
              <a
                className="rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={href}
                key={label}
                {...(href.startsWith('https') ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
              >
                <span className="block font-sans font-semibold text-[12px] text-[oklch(0.72_0.008_90)] uppercase tracking-[0.08em]">
                  {label}
                </span>
                <span className="mt-1 block text-[14px] text-foreground">{value}</span>
              </a>
            ))}
          </div>

          {/* About */}
          <h2 className="mt-14 font-semibold text-2xl tracking-tight">自己紹介 / About</h2>
          <p className="mt-4 text-[15px] text-[oklch(0.75_0.008_90)] leading-[1.8]">
            トルコ出身のソフトウェアエンジニア(経験10年以上)。OAuth 2.1 / OpenID Connect
            をプロトコルレベルから実装するアイデンティティ基盤(IAM)と、エージェント型 AI システム・AI
            ネイティブ開発ワークフローを専門としています。オープンソース認可サーバー QAuth の開発者、OpenID Foundation
            コントリビューター。現在は横浜を拠点に活動中。技術・人文知識・国際業務ビザまたは高度専門職(HSP)ビザの
            スポンサーとなっていただける企業を探しています — お気軽にご連絡ください。
          </p>
          <p className="mt-3 text-[14px] text-[oklch(0.68_0.008_90)] leading-[1.8]">
            Software engineer from Türkiye (10+ years), specialized in identity infrastructure built from the protocol
            up (OAuth 2.1 / OpenID Connect) and in agentic AI systems and AI-native development workflows. Creator of
            the open-source authorization server QAuth; OpenID Foundation contributor. Based in Yokohama. Looking for
            an employer to sponsor an Engineer/Specialist in Humanities (技術・人文知識・国際業務) or Highly Skilled
            Professional (HSP) visa — feel free to reach out.
          </p>

          {/* Experience */}
          <h2 className="mt-14 font-semibold text-2xl tracking-tight">経歴 / Experience</h2>
          <div className="mt-6 flex flex-col gap-4">
            {EXPERIENCE.map((entry) => (
              <EntryCard entry={entry} key={entry.title} />
            ))}
          </div>

          {/* Projects */}
          <h2 className="mt-14 font-semibold text-2xl tracking-tight">プロジェクト / Projects</h2>
          <div className="mt-6 flex flex-col gap-4">
            {PROJECTS.map((entry) => (
              <EntryCard entry={entry} key={entry.title} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

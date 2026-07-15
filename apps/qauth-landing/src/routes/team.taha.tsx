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
          'Muhammed Taha Ayan (アヤン・ムハンマド・タハ) — creator of QAuth. Identity and web engineer based in Yokohama, Japan. Contact, portfolio, and links.',
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

const PROJECTS = [
  {
    title: 'QAuth',
    role: 'Creator & Lead / 開発者',
    descriptionJa:
      'エージェント時代のためのオープンソース OAuth 2.1 認可サーバー。RFC 8693 トークン交換によるエージェント委任、MCP 対応、ポスト量子暗号へのクリプトアジリティを備えています。',
    descriptionEn:
      'Open-source OAuth 2.1 authorization server for the agent era — on-behalf-of delegation via RFC 8693 token exchange, MCP support, and a crypto-agile core built toward post-quantum signing.',
    href: 'https://github.com/qauth-labs/qauth',
  },
  {
    title: 'Medaris',
    role: 'Product Manager / プロダクトマネージャー',
    descriptionJa: 'イスラーム教育機関向けのオープンソース学習管理プラットフォーム(amel-tech)。',
    descriptionEn: 'Open-source learning platform for madrasah education, built at amel-tech.',
    href: 'https://github.com/amel-tech',
  },
  {
    title: 'Sidre',
    role: 'Engineer / エンジニア',
    descriptionJa: 'アラビア語ファーストのイスラーム・デジタル図書館。12,400 冊以上の書籍を収録。',
    descriptionEn: 'Arabic-first Islamic digital library with 12,400+ books and 340+ authors.',
    href: 'https://staging.sidre.app/',
  },
] as const

function TahaPage() {
  return (
    <>
      <div aria-hidden className="grid-lines" />
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground" id="main-content">
        <section className="mx-auto max-w-[800px] px-6 pt-32 pb-20">
          {/* Identity */}
          <p className="font-sans font-semibold text-[12px] text-muted-foreground uppercase tracking-[0.08em]">Team</p>
          <h1 className="mt-3 font-semibold text-4xl tracking-tight">Muhammed Taha Ayan</h1>
          <p className="mt-1 text-muted-foreground text-xl">アヤン・ムハンマド・タハ</p>
          <p className="mt-4 text-[15px] text-muted-foreground leading-[1.7]">
            QAuth 開発者 — アイデンティティ &amp; Web エンジニア · 横浜(日本)
            <br />
            Creator of QAuth — Identity &amp; Web Engineer · Yokohama, Japan
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
                <span className="block font-sans font-semibold text-[11px] text-muted-foreground uppercase tracking-[0.08em]">
                  {label}
                </span>
                <span className="mt-1 block text-[14px] text-foreground">{value}</span>
              </a>
            ))}
          </div>

          {/* About */}
          <h2 className="mt-14 font-semibold text-2xl tracking-tight">自己紹介 / About</h2>
          <p className="mt-4 text-[15px] text-muted-foreground leading-[1.8]">
            トルコ出身のソフトウェアエンジニア。OAuth 2.1 / OpenID Connect
            を中心としたアイデンティティ基盤と、React を中心とした Web
            フロントエンド・EC プラットフォーム開発を専門としています。現在は横浜を拠点に、オープンソースの認可サーバー
            QAuth を開発しています。日本国内での就労機会にも関心があります — お気軽にご連絡ください。
          </p>
          <p className="mt-3 text-[14px] text-muted-foreground/80 leading-[1.8]">
            Software engineer from Türkiye, specialized in identity infrastructure (OAuth 2.1 / OpenID Connect) and
            React-based web frontends for e-commerce. Currently based in Yokohama, building the open-source
            authorization server QAuth. Open to opportunities in Japan — feel free to reach out.
          </p>

          {/* Projects */}
          <h2 className="mt-14 font-semibold text-2xl tracking-tight">プロジェクト / Projects</h2>
          <div className="mt-6 flex flex-col gap-4">
            {PROJECTS.map(({ title, role, descriptionJa, descriptionEn, href }) => (
              <a
                className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={href}
                key={title}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <span className="text-[12px] text-muted-foreground">{role}</span>
                </div>
                <p className="mt-2 text-[14px] text-muted-foreground leading-[1.7]">{descriptionJa}</p>
                <p className="mt-1 text-[13px] text-muted-foreground/70 leading-[1.6]">{descriptionEn}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

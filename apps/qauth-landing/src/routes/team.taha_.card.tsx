import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team/taha_/card')({
  component: TahaCardPage,
  head: () => ({
    meta: [
      {
        title: 'アヤン・ムハンマド・タハ — 名刺',
      },
      // Unlisted personal card — keep it out of search indexes
      {
        name: 'robots',
        content: 'noindex, nofollow',
      },
    ],
  }),
})

function TahaCardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-10 text-foreground" lang="ja">
      <div className="w-full max-w-[420px] rounded-2xl border border-border bg-card p-8 text-center shadow-xl">
        {/* Identity */}
        <img alt="QAuth" className="mx-auto h-10 w-auto" src="/logo.svg" />
        <h1 className="mt-6 font-semibold text-3xl tracking-tight">アヤン・ムハンマド・タハ</h1>
        <p className="mt-1 text-[13px] text-muted-foreground">Muhammed Taha Ayan</p>
        <p className="mt-3 text-[15px] text-muted-foreground leading-[1.7]">
          QAuth 開発者
          <br />
          アイデンティティ &amp; Web エンジニア · 横浜
        </p>

        {/* Contact */}
        <div className="mt-5 flex flex-col gap-1 text-[14px]">
          <a className="text-foreground transition-colors hover:text-primary" href="mailto:taha@qauth.dev">
            taha@qauth.dev
          </a>
          <a className="text-foreground transition-colors hover:text-primary" href="tel:+818095243454">
            080-9524-3454
          </a>
        </div>

        {/* Visa status */}
        <div className="mt-7 rounded-lg border border-primary/40 bg-primary/10 px-5 py-4">
          <p className="font-sans font-semibold text-[11px] text-muted-foreground uppercase tracking-[0.08em]">
            在留資格
          </p>
          <p className="mt-2 font-semibold text-[17px] leading-[1.6]">無職・家族滞在ビザ保持者</p>
          <p className="mt-1 text-[13px] text-muted-foreground leading-[1.7]">
            資格外活動許可は申請中です。
            <br />
            日本での就労機会を探しています。
          </p>
        </div>

        {/* QR */}
        <div className="mx-auto mt-7 w-fit rounded-xl bg-white p-3">
          <img alt="qauth.dev/team/taha の QR コード" className="h-52 w-52" src="/team-taha-qr.svg" />
        </div>
        <p className="mt-3 text-[13px] text-muted-foreground leading-[1.7]">
          プロフィール・ポートフォリオ・各種リンクはこちら
          <br />
          <span className="text-foreground">qauth.dev/team/taha</span>
        </p>
      </div>
    </main>
  )
}

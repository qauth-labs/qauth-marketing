import IconBook2 from '@tabler/icons-react/dist/esm/icons/IconBook2.mjs'
import IconBrandGolang from '@tabler/icons-react/dist/esm/icons/IconBrandGolang.mjs'
import IconBrandNodejs from '@tabler/icons-react/dist/esm/icons/IconBrandNodejs.mjs'
import IconBrandPython from '@tabler/icons-react/dist/esm/icons/IconBrandPython.mjs'
import IconCreditCard from '@tabler/icons-react/dist/esm/icons/IconCreditCard.mjs'
import IconLayoutGrid from '@tabler/icons-react/dist/esm/icons/IconLayoutGrid.mjs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@qauth/ui'

export function Default() {
  return (
    <Tabs className="max-w-2xl" defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">
          <IconLayoutGrid />
          Overview
        </TabsTrigger>
        <TabsTrigger value="pricing">
          <IconCreditCard />
          Pricing
        </TabsTrigger>
        <TabsTrigger value="docs">
          <IconBook2 />
          Docs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-muted-foreground">
          QAuth is a post-quantum-ready OAuth 2.1 and OpenID Connect server. Self-host it next to your database, or
          run it on QAuth Cloud — the same open-source core either way.
        </p>
      </TabsContent>
      <TabsContent value="pricing">
        <p className="text-muted-foreground">
          Free for up to 10,000 monthly active users. Usage-based pricing after that, with no per-connection fees.
        </p>
      </TabsContent>
      <TabsContent value="docs">
        <p className="text-muted-foreground">
          Guides, a full API reference, and drop-in SDKs for Node.js, Python, and Go.
        </p>
      </TabsContent>
    </Tabs>
  )
}

export function Line() {
  return (
    <Tabs className="max-w-2xl" defaultValue="pricing">
      <TabsList variant="line">
        <TabsTrigger value="overview">
          <IconLayoutGrid />
          Overview
        </TabsTrigger>
        <TabsTrigger value="pricing">
          <IconCreditCard />
          Pricing
        </TabsTrigger>
        <TabsTrigger value="docs">
          <IconBook2 />
          Docs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-muted-foreground">
          QAuth is a post-quantum-ready OAuth 2.1 and OpenID Connect server you can self-host in minutes.
        </p>
      </TabsContent>
      <TabsContent value="pricing">
        <p className="text-muted-foreground">
          Free for up to 10,000 monthly active users. Usage-based pricing after that, with no per-connection fees.
        </p>
      </TabsContent>
      <TabsContent value="docs">
        <p className="text-muted-foreground">
          Guides, a full API reference, and drop-in SDKs for Node.js, Python, and Go.
        </p>
      </TabsContent>
    </Tabs>
  )
}

export function Vertical() {
  return (
    <Tabs className="max-w-2xl" defaultValue="node" orientation="vertical">
      <TabsList>
        <TabsTrigger value="node">
          <IconBrandNodejs />
          Node.js
        </TabsTrigger>
        <TabsTrigger value="python">
          <IconBrandPython />
          Python
        </TabsTrigger>
        <TabsTrigger value="go">
          <IconBrandGolang />
          Go
        </TabsTrigger>
      </TabsList>
      <TabsContent value="node">
        <pre className="border bg-muted/50 px-3 py-2 font-mono text-foreground text-xs">npm install @qauth/sdk</pre>
      </TabsContent>
      <TabsContent value="python">
        <pre className="border bg-muted/50 px-3 py-2 font-mono text-foreground text-xs">pip install qauth</pre>
      </TabsContent>
      <TabsContent value="go">
        <pre className="border bg-muted/50 px-3 py-2 font-mono text-foreground text-xs">
          go get github.com/qauth-labs/qauth-go
        </pre>
      </TabsContent>
    </Tabs>
  )
}

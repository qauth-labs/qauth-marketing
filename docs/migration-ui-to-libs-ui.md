# Migration Plan: Shadcn UI Components to `@qauth/ui`

**Goal:** Move all shadcn UI components from `apps/qauth-landing/src/components/ui/` into `libs/ui/` to centralize shared components across the monorepo.

**Status:** Plan only (not yet executed).

---

## 1. Scope

| Source | Target |
|--------|--------|
| `apps/qauth-landing/src/components/ui/*` (60 files) | `libs/ui/src/components/ui/*` |
| `@/lib/utils` (cn) usage in those files | `libs/ui/src/lib/utils.ts` (already exists) |
| App imports `@/components/ui/*` | App imports `@qauth/ui` |

**Out of scope (stay in app):**

- `apps/qauth-landing/src/components/component-example.tsx` — page/section component; only its **imports** change to `@qauth/ui`.
- App-specific sections (e.g. hero, features) — only their UI imports change.
- `apps/qauth-landing/src/lib/utils.ts` — keep if other app utils exist; remove or reduce if only `cn` was used (can re-export from `@qauth/ui` for convenience).

---

## 2. Dependencies

### 2.1 Current usage in UI components

From scanning `apps/qauth-landing/src/components/ui/`:

| Package | Used by |
|---------|--------|
| `class-variance-authority` | button, input-group, navigation-menu, field, item, empty, alert, badge, toggle, toggle-group, button-group, sidebar |
| `radix-ui` | most primitives (Slot, Dialog, Select, Separator, etc.) |
| `clsx` + `tailwind-merge` | via `cn` in every component |
| `@base-ui/react` | combobox |
| `@tabler/icons-react` | many (icons inside components) |
| `cmdk` | command |
| `react-day-picker` | calendar |
| `embla-carousel-react` | carousel |
| `input-otp` | input-otp |
| `react-resizable-panels` | resizable |
| `recharts` | chart |
| `sonner` | sonner |
| `vaul` | drawer |
| `next-themes` | sonner (useTheme) |

**App-only dependency:**

- `@/hooks/use-mobile` — used only by **sidebar.tsx**. Options:
  - **A)** Move `use-mobile` into `libs/ui` (or a small `libs/hooks`) and export it; then sidebar can live in `libs/ui`.
  - **B)** Keep sidebar in the app and move the rest to `libs/ui` (sidebar keeps importing from `@/components/ui` for Button, etc. — then app re-exports those from `@qauth/ui` or sidebar stays coupled to app).

Recommendation: **A** — move `use-mobile` to `libs/ui` (or `libs/hooks`) so sidebar can live in `libs/ui` and the app stays thin.

### 2.2 `libs/ui/package.json` changes

- **Keep:** `react`, `react-dom` as `peerDependencies`.
- **Add as `dependencies`** (needed by source in `libs/ui`):
  - `class-variance-authority`
  - `clsx`
  - `tailwind-merge`
  - `radix-ui`
  - `@base-ui/react`
  - `@tabler/icons-react`
  - `cmdk`
  - `date-fns` (if any component uses it)
  - `react-day-picker`
  - `embla-carousel-react`
  - `input-otp`
  - `react-resizable-panels`
  - `recharts`
  - `sonner`
  - `vaul`
- **Optional / peer:** `next-themes` if sonner stays in lib (otherwise make theme optional or peer).

Versions should match or be compatible with `apps/qauth-landing/package.json`.

---

## 3. Import path changes

### 3.1 Inside `libs/ui` (each moved file)

| Current (in app) | New (in libs/ui) |
|------------------|-------------------|
| `import { cn } from '@/lib/utils'` | `import { cn } from '../../lib/utils'` (from `libs/ui/src/components/ui/`) |
| `import { Button } from '@/components/ui/button'` | `import { Button } from './button'` |
| `import { toggleVariants } from '@/components/ui/toggle'` | `import { toggleVariants } from './toggle'` |
| (same for any `@/components/ui/...`) | `./<filename>` (same folder `components/ui`) |

**Sidebar special case:**  
`import { useIsMobile } from '@/hooks/use-mobile'` → either move hook to `libs/ui` (e.g. `libs/ui/src/hooks/use-mobile.ts`) and use relative import, or keep sidebar in app (see 2.1).

### 3.2 In `apps/qauth-landing`

| Current | New |
|---------|-----|
| `from '@/components/ui/button'` | `from '@qauth/ui'` (or `from '@qauth/ui'` and use named export `Button`) |
| `from '@/components/ui/card'` etc. | `from '@qauth/ui'` |
| `from '@/lib/utils'` (for `cn` only) | `from '@qauth/ui'` (lib already exports `cn`) |

Use a single entry point: `import { Button, Card, cn, ... } from '@qauth/ui'`.

---

## 4. Move order (avoid broken internal refs)

Respect internal UI dependency order when copying/editing files.

1. **Leaf components (no internal `@/components/ui` imports)**  
   Copy first and fix only `@/lib/utils` → relative `lib/utils`:  
   accordion, alert, aspect-ratio, avatar, badge, breadcrumb, button, card, checkbox, collapsible, context-menu, dropdown-menu, input, input-otp, kbd, label, menubar, navigation-menu, progress, popover, radio-group, resizable, scroll-area, select, separator, skeleton, slider, switch, table, tabs, textarea, toggle, tooltip, alert-dialog (after button), empty, chart, drawer, hover-card.

2. **Components that import other UI components**  
   Then copy and fix both `@/lib/utils` and `@/components/ui/*` → relative:  
   - button-group (separator)  
   - item (separator)  
   - field (label, separator)  
   - input-group (button, input, textarea)  
   - pagination (button)  
   - dialog (button)  
   - sheet (button)  
   - carousel (button)  
   - calendar (button, buttonVariants)  
   - toggle-group (toggleVariants from toggle)  
   - command (dialog, input-group)  
   - combobox (button, input-group)  
   - sidebar (button, input, separator, sheet, skeleton, tooltip + use-mobile)

3. **Sonner**  
   Depends on `next-themes`; either add as peer/dependency in `libs/ui` or leave in app. If moved, replace `useTheme` usage as needed.

---

## 5. File layout in `libs/ui`

```
libs/ui/
├── package.json          # add dependencies (see 2.2)
├── src/
│   ├── index.ts          # barrel: export all components + cn
│   ├── lib/
│   │   └── utils.ts      # keep as-is (cn)
│   ├── components/
│   │   └── ui/           # all 60 shadcn components here
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   └── hooks/            # optional: if moving use-mobile
│       └── use-mobile.ts
├── tsconfig.json
└── project.json
```

- Copy every file from `apps/qauth-landing/src/components/ui/*.tsx` into `libs/ui/src/components/ui/`.
- In each file, apply the import replacements from section 3.1.
- If `use-mobile` is moved, add `libs/ui/src/hooks/use-mobile.ts` and point sidebar to it.

---

## 6. Barrel export: `libs/ui/src/index.ts`

Export every public component and variant from the new `components/ui` files.

Examples:

```ts
export { cn } from './lib/utils'
export { Button, buttonVariants } from './components/ui/button'
export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from './components/ui/card'
export { Input } from './components/ui/input'
// ... one line per component file, including all named exports (e.g. Select, SelectTrigger, SelectContent, ...)
```

Generate the full list by scanning each `components/ui/*.tsx` for `export { ... }` and `export function/const`.

---

## 7. App-side steps (`apps/qauth-landing`)

1. **package.json**  
   Add: `"@qauth/ui": "workspace:*"` (or your monorepo’s workspace protocol).

2. **Replace imports**  
   - In `component-example.tsx` and any other file under `apps/qauth-landing/src` that imports from `@/components/ui/*` or `@/lib/utils` (for UI): switch to `import { ... } from '@qauth/ui'`.
   - Remove any remaining `@/components/ui` and (if only for cn) `@/lib/utils` for UI.

3. **Delete local UI folder**  
   Remove `apps/qauth-landing/src/components/ui/` (all files).

4. **utils**  
   If `apps/qauth-landing/src/lib/utils.ts` only exported `cn`, remove it or re-export from `@qauth/ui`:  
   `export { cn } from '@qauth/ui'`.

5. **Path/config**  
   - `tsconfig.base.json` already has `@qauth/ui` and `@qauth/ui/*` paths; no change needed unless you add subpath exports.
   - If you use shadcn `components.json`, update `utils` to point to `@qauth/ui` or `@qauth/ui/lib/utils` so future `npx shadcn add` targets the lib (optional).

---

## 8. Tailwind / build

- **Tailwind:** Ensure the app’s Tailwind (or Vite) content config includes `libs/ui/src/**/*.{ts,tsx}` so classes used in `@qauth/ui` are not purged. If your setup uses a single app Tailwind that builds the app (and the lib is source-only), include the lib path in `content` (or equivalent).
- **TypeScript:** Build or typecheck both `libs/ui` and `apps/qauth-landing` after the move; fix any missing exports or path errors.

---

## 9. Execution checklist (short)

- [ ] Add dependencies to `libs/ui/package.json`.
- [ ] (Optional) Move `use-mobile` to `libs/ui` (or shared lib) and fix sidebar import.
- [ ] Create `libs/ui/src/components/ui/` and copy all 60 files from `apps/qauth-landing/src/components/ui/`.
- [ ] In each copied file: replace `@/lib/utils` with relative `../../lib/utils`, and `@/components/ui/...` with `./...`.
- [ ] Update `libs/ui/src/index.ts` with full barrel exports.
- [ ] In `apps/qauth-landing`: add `@qauth/ui` dependency; replace all `@/components/ui/*` and UI-related `@/lib/utils` with `@qauth/ui`; delete `apps/qauth-landing/src/components/ui/`.
- [ ] Adjust Tailwind content to include `libs/ui` if needed.
- [ ] Run build + typecheck for `libs/ui` and `apps/qauth-landing` and fix remaining issues.

---

## 10. Edge cases

- **sidebar + use-mobile:** Decide once (move hook vs keep sidebar in app) and apply consistently.
- **sonner + next-themes:** Either add to `libs/ui` or leave sonner in app and only move simpler components.
- **component-example.tsx:** Only import path changes; no file move.
- **Circular deps:** `libs/ui` must not import from `apps/qauth-landing`; only app imports from lib.
- **Icons:** `@tabler/icons-react` will be a dependency of `libs/ui`; all consuming apps will get it transitively or can use the same version.

This plan centralizes all shadcn UI under `libs/ui` while keeping the app as a thin consumer of `@qauth/ui`.

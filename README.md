# QAuth Marketing

Monorepo for QAuth's marketing web properties.

## Applications

| App                   | Directory            | Technology                | Description            |
| --------------------- | -------------------- | ------------------------- | ---------------------- |
| **Landing Page**      | `apps/qauth-landing` | React 19 + TanStack Start | Marketing landing page |

## Shared Libraries

| Library | Directory | Description                          |
| ------- | --------- | ------------------------------------ |
| **UI**  | `libs/ui` | Shared shadcn/ui components          |

## Tech Stack

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| React 19         | UI Framework             |
| TypeScript 5.9+  | Type Safety              |
| Vite 7           | Build Tool               |
| TanStack Start   | SSR / Routing            |
| TanStack Router  | File-based routes        |
| Shadcn UI        | Component Library        |
| Tailwind CSS 4   | Styling                  |
| Nx               | Monorepo tooling         |
| Biome/Ultracite  | Lint & Format            |

## Project Structure

```
qauth-marketing/
├── apps/
│   └── qauth-landing/       # Landing page (TanStack Start)
│       ├── src/
│       │   ├── components/
│       │   ├── routes/
│       │   ├── hooks/
│       │   └── lib/
│       └── project.json
├── libs/
│   └── ui/                  # Shared UI components
│       ├── src/
│       │   ├── lib/
│       │   └── index.ts
│       └── project.json
├── .claude/
│   ├── CLAUDE.md            # Monorepo guidelines
│   └── rules/
│       └── landing.md       # Landing page specifics
└── nx.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (package manager)

### Installation

```bash
git clone <repository-url>
cd qauth-marketing
bun install
```

### Development

```bash
# Start development server
bun run dev

# Or using Nx
bun x nx dev qauth-landing
```

## Available Commands

```bash
# Root scripts
bun run dev          # Start dev server (qauth-landing)
bun run build        # Production build
bun run preview      # Preview production build
bun run test         # Run tests
bun run lint         # Lint
bun run format       # Format (ultracite fix)
bun run check        # Check (ultracite check)

# Nx commands
bun x nx dev qauth-landing       # Dev server
bun x nx build qauth-landing     # Build
bun x nx lint qauth-landing      # Lint
bun x nx run-many -t build       # Build all
bun x nx affected -t test        # Test affected
```

## Code Quality

Linting and formatting use **Biome** via **Ultracite**:

```bash
bun x ultracite fix   # Auto-fix issues
bun x ultracite check # Check for issues
```

## Development Guidelines

See `.claude/` for detailed guidelines:

- `CLAUDE.md` - Monorepo-wide rules and standards
- `rules/landing.md` - Landing page specific guidelines

## License

Proprietary - MAPLEFJORD OÜ

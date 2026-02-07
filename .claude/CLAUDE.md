# QAuth Marketing Monorepo

Marketing-focused monorepo for QAuth's public-facing web properties.

## Applications

| App             | Directory            | Technology                | Purpose                |
| --------------- | -------------------- | ------------------------- | ---------------------- |
| **Landing**     | `apps/qauth-landing` | React 19 + TanStack Start | Marketing landing page |

## Shared Libraries

| Library | Directory | Purpose                                         |
| ------- | --------- | ----------------------------------------------- |
| **UI**  | `libs/ui` | Shared shadcn/ui components across all projects |

---

## Technology Stack

### Web Applications

| Category  | Technology                                   |
| --------- | -------------------------------------------- |
| Framework | React 19+ with TanStack Start (SSR)          |
| Routing   | TanStack Router (file-based)                 |
| Styling   | TailwindCSS v4 + shadcn/ui (radix-lyra style) |
| Icons     | Tabler Icons                                 |
| Forms     | Zod validation                               |
| Build     | Vite 7 + Nx                                  |
| Testing   | Vitest + Testing Library                     |

### Code Quality

| Tool       | Purpose                    |
| ---------- | -------------------------- |
| Ultracite  | Linting and formatting     |
| Biome      | Underlying linting engine  |
| TypeScript | Strict mode type checking  |

---

## Monorepo Structure

```
qauth-marketing/
├── apps/
│   └── qauth-landing/         # Marketing landing page
│       ├── src/
│       │   ├── components/    # App-specific components
│       │   ├── routes/        # TanStack Router pages
│       │   ├── hooks/         # Custom React hooks
│       │   └── lib/           # Utilities and helpers
│       └── project.json       # Nx project config
│
├── libs/
│   └── ui/                    # Shared UI components
│       ├── src/
│       │   ├── components/    # shadcn/ui components
│       │   └── lib/           # Shared utilities (cn, etc.)
│       └── project.json
│
├── .claude/
│   ├── CLAUDE.md              # Monorepo-wide rules (this file)
│   └── rules/
│       └── landing.md         # Landing page specific rules
│
├── nx.json                    # Nx workspace config
├── tsconfig.base.json         # Base TypeScript config
└── biome.jsonc                # Biome/Ultracite config
```

---

## Path Aliases

All apps and libs use consistent path aliases:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

For shared UI library imports:

```typescript
import { Button } from '@qauth/ui'
```

---

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors

<!-- nx configuration end-->

## Nx Commands

```bash
# Development
bun x nx dev <project>          # Start dev server
bun x nx dev qauth-landing      # Example: Start landing dev server

# Build
bun x nx build <project>        # Build specific project
bun x nx run-many -t build      # Build all projects

# Test
bun x nx test <project>         # Run tests
bun x nx run-many -t test       # Run all tests

# Lint
bun x nx lint <project>         # Lint specific project
bun x nx run-many -t lint       # Lint all projects

# Affected (only changed projects)
bun x nx affected -t build      # Build affected projects
bun x nx affected -t test       # Test affected projects
```

---

# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting.

## Quick Reference

- **Format code**: `bun x ultracite fix`
- **Check for issues**: `bun x ultracite check`
- **Diagnose setup**: `bun x ultracite doctor`

Biome (the underlying engine) provides robust linting and formatting. Most issues are automatically fixable.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Styling and TailwindCSS

- Use `size-*` instead of `w-* h-*`
- Try to avoid using `max-w-*`. Use `container` in sections, separate into grid if `max-w-*` is necessary in child elements
- Don't use margins, use `flex` or `grid` with `gap-*`
- Use `grid gap-*` instead of `space-y-*`

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components
- Prefer not using useEffect
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy
  - Add labels for form inputs
  - Include keyboard event handlers alongside mouse events
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)

### Framework-Specific Guidance

**React 19+:**

- Use ref as a prop instead of `React.forwardRef`

---

## Testing

- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

---

# Git Workflow

## Commit Messages

Follow **Conventional Commits** format:

```
<type>(<scope>): <subject>
```

### Commit Types

- `feat:` - New feature or section
- `fix:` - Bug fix
- `style:` - Styling changes (CSS, design tweaks)
- `refactor:` - Code refactoring
- `chore:` - Dependencies, config changes
- `docs:` - Documentation updates

### Examples

```
feat(landing): add animated code preview
style(ui): improve button hover states
fix(landing): resolve form submission error
refactor(ui): extract shared Button component
chore(deps): update TanStack Start to latest
```

## Branch Strategy

- `main` - Production-ready code
- `feature/*` - Feature branches (new sections, major changes)
- `fix/*` - Bug fix branches

---

# File Naming Conventions

## Components

- Use kebab-case for files: `feature-card.tsx`, `code-block.tsx`
- Use PascalCase for exports: `export function FeatureCard() {}`

## Routes

- Follow TanStack Start conventions
- `__root.tsx` for root layout
- `index.tsx` for main page

## Assets

- Use descriptive names: `hero-code-preview.png`
- Use kebab-case: `og-image.png`, `favicon.ico`

---

# Component Guidelines

## File Structure

```typescript
// Imports (external, then internal, then types)
import { motion } from 'framer-motion'
import { IconShield } from '@tabler/icons-react'

import { cn } from '@/lib/utils'

import type { FeatureProps } from './types'

// Component
export function Feature({ title, description, icon }: FeatureProps) {
  return (
    // JSX
  )
}

// Keep component files focused - one main export per file
```

## Props Interface

```typescript
// Define props with TypeScript interfaces
interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

// Use destructuring with defaults
export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  // ...
}
```

## Styling Patterns

```typescript
// Use cn() utility for conditional classes
import { cn } from '@/lib/utils'

function Button({ variant = 'primary', className, ...props }) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-lg font-medium transition-colors',
        variant === 'primary' && 'bg-primary text-primary-foreground',
        variant === 'secondary' && 'bg-card border border-border',
        className
      )}
      {...props}
    />
  )
}
```

---

# Dependency Management

## Before Adding Dependencies

1. **Check if necessary** - Can it be done with existing tools?
2. **Verify version** - Check npm for latest stable version
3. **Check bundle size** - Use bundlephobia.com
4. **Review maintenance** - Is the package actively maintained?
5. **Check license** - Ensure compatible license

## Updating Dependencies

```bash
# Check for updates
bun outdated

# Update specific package
bun update <package-name>

# Update all (careful)
bun update
```

---

# Security Best Practices

- Never commit `.env` files
- Validate all form inputs
- Use HTTPS in production
- Keep dependencies updated
- Review security advisories
- Always validate server-side

---

Most formatting and common issues are automatically fixed by Biome. Run `bun x ultracite fix` before committing to ensure compliance.

# Nova Project Structure

This document explains the structure of the Nova monorepo and how everything fits together.

## Repository Structure

```
nova/
├── apps/                    # Applications
│   ├── docs/               # Storybook documentation
│   │   ├── .storybook/    # Storybook configuration
│   │   └── src/           # Stories and documentation
│   └── playground/         # Development playground
│       └── src/           # Test application
│
├── packages/               # Shared packages
│   ├── core/              # Core UI components
│   │   ├── src/
│   │   │   ├── button/   # Button component
│   │   │   ├── card/     # Card component
│   │   │   ├── input/    # Input component
│   │   │   ├── label/    # Label component
│   │   │   ├── theme/    # Theme provider
│   │   │   ├── lib/      # Utilities
│   │   │   ├── styles.css # Global styles
│   │   │   └── index.ts  # Package exports
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsup.config.ts
│   │   └── tailwind.config.ts
│   │
│   ├── tokens/            # Design tokens
│   │   ├── src/
│   │   │   ├── colors.ts # Color palette
│   │   │   ├── tokens.ts # Spacing, typography, etc.
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── hooks/             # React hooks
│       ├── src/
│       │   ├── use-media-query.ts
│       │   ├── use-local-storage.ts
│       │   ├── use-debounce.ts
│       │   ├── use-click-outside.ts
│       │   └── index.ts
│       └── package.json
│
├── .changeset/            # Versioning and changelogs
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # pnpm workspaces
├── package.json          # Root package.json
├── tsconfig.base.json    # Base TypeScript config
└── vitest.config.ts      # Test configuration
```

## Package Details

### @nova/core

The main component library. Contains all UI components built with:
- **Radix UI** for accessible primitives
- **Tailwind CSS** for styling
- **class-variance-authority** for variant management
- **TypeScript** for type safety

**Key exports:**
- UI Components: Button, Card, Input, Label, etc.
- ThemeProvider and useTheme hook
- Utility functions (cn)

### @nova/tokens

Design tokens that define the visual language:
- **Colors**: Primary, gray, semantic colors (success, warning, danger, info)
- **Spacing**: Consistent spacing scale
- **Typography**: Font sizes, weights, families
- **Shadows**: Box shadow scale
- **Border radius**: Consistent corner radius values

### @nova/hooks

Reusable React hooks:
- **useMediaQuery**: Responsive design helper
- **useLocalStorage**: Persistent state management
- **useDebounce**: Debounce values
- **useClickOutside**: Detect outside clicks

## Development Workflow

### Initial Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

```bash
# Run playground app (hot reload)
pnpm dev

# Run Storybook
pnpm storybook

# Run tests
pnpm test

# Run tests in watch mode
cd packages/core && pnpm test:watch
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @nova/core build
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## Key Technologies

- **Turborepo**: Monorepo build system with caching
- **pnpm**: Fast, efficient package manager with workspaces
- **TypeScript**: Type safety across all packages
- **Vite**: Fast build tool for playground
- **Vitest**: Modern test framework
- **Storybook**: Component documentation
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Changesets**: Version management and changelogs

## Adding New Components

1. Create component directory in `packages/core/src/`
2. Implement component with TypeScript
3. Export from `packages/core/src/index.ts`
4. Write tests in component directory
5. Create Storybook story in `apps/docs/src/stories/`
6. Update documentation

Example structure:
```
packages/core/src/my-component/
├── my-component.tsx
├── my-component.test.tsx
└── index.ts
```

## Publishing

```bash
# Create a changeset
pnpm changeset

# Version packages
pnpm changeset version

# Publish to npm
pnpm changeset publish
```

## Design Principles

1. **Accessibility First**: All components must be keyboard navigable and screen reader friendly
2. **Composition over Configuration**: Prefer compound components over prop drilling
3. **Type Safety**: Full TypeScript support with exported types
4. **Tree-shakeable**: Use proper exports for optimal bundle sizes
5. **Customizable**: Easy theming and style overrides

## Color System

Nova uses a professional blue-based color palette:

- **Primary**: Blue (#3b82f6) - Trust and professionalism
- **Success**: Emerald (#10b981) - Positive actions
- **Warning**: Amber (#f59e0b) - Caution states
- **Danger**: Red (#ef4444) - Destructive actions
- **Info**: Sky (#0ea5e9) - Informational content
- **Gray**: Neutral tones with blue tint

All colors meet WCAG 2.1 AA contrast requirements.

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Update Storybook documentation
5. Run `pnpm lint` and `pnpm type-check`
6. Submit a pull request

## License

MIT

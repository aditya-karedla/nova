# Nova 🌟

> Enterprise-grade React component library for professional applications

Nova is a comprehensive, accessible, and customizable React component library built on top of Radix UI primitives and styled with Tailwind CSS. Designed for professional and enterprise-grade applications with a focus on developer experience, accessibility, and visual excellence.

## Features

- 🎨 **Professional Design System** - Carefully crafted color palette optimized for enterprise applications
- ♿ **Accessibility First** - WCAG 2.1 AA compliant components with comprehensive ARIA support
- 🎭 **Theming** - Built-in light/dark mode with full customization support
- 📦 **Tree-shakeable** - Import only what you need for optimal bundle sizes
- 🔧 **TypeScript** - Fully typed API with excellent IDE support
- 📚 **Comprehensive Documentation** - Interactive Storybook with live examples
- ⚡ **Performance** - Optimized for production with minimal runtime overhead

## Packages

- `@aditya-karedla/core` - Core UI components
- `@aditya-karedla/tokens` - Design tokens (colors, spacing, typography)
- `@aditya-karedla/hooks` - Reusable React hooks

## Getting Started

```bash
# Install core package
npm install @aditya-karedla/core

# or with pnpm
pnpm add @aditya-karedla/core

# or with yarn
yarn add @aditya-karedla/core
```

## Quick Example

```tsx
import { Button, Card, Input } from "@aditya-karedla/core";

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome to Nova</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your name" />
      </Card.Content>
      <Card.Footer>
        <Button>Get Started</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Development

This monorepo uses Turborepo, pnpm, and TypeScript.

```bash
# Install dependencies
pnpm install

# Run development mode
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Start Storybook
pnpm storybook
```

## Documentation

Visit our [Storybook documentation](https://nova-ui-docs.vercel.app) for interactive component examples and guides.

## License

MIT © Nova UI

## Status

🚧 **Alpha** - Under active development

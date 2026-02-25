# Nova

**Enterprise-Grade React Component Library**

Nova is a comprehensive, accessible, and highly customizable React component library engineered for professional and enterprise-grade applications. Built upon Radix UI primitives and styled with Tailwind CSS, Nova delivers a robust foundation for modern web applications with an emphasis on developer experience, accessibility standards, and visual excellence.

## Key Features

- **Professional Design System** - Meticulously crafted color palette and design tokens optimized for enterprise applications
- **Accessibility First** - WCAG 2.1 AA compliant components with comprehensive ARIA support and keyboard navigation
- **Advanced Theming** - Built-in light and dark mode support with extensive customization capabilities
- **Optimized Bundle Size** - Tree-shakeable architecture allowing selective imports for minimal production footprint
- **TypeScript Native** - Fully typed API with comprehensive IntelliSense and type safety
- **Extensive Documentation** - Interactive Storybook documentation with live examples and implementation guides
- **Production-Ready Performance** - Optimized components with minimal runtime overhead and efficient rendering

## Package Architecture

The Nova library is organized as a monorepo containing the following packages:

- **`@aditya-karedla/core`** - Core UI component library with production-ready components
- **`@aditya-karedla/tokens`** - Design system tokens including colors, spacing, and typography scales
- **`@aditya-karedla/hooks`** - Collection of reusable React hooks for common functionality

## Installation

Install the core package using your preferred package manager:

```bash
# npm
npm install @aditya-karedla/core

# pnpm
pnpm add @aditya-karedla/core

# yarn
yarn add @aditya-karedla/core
```

## Usage Example

The following demonstrates basic implementation of Nova components:

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

## Development Environment

This project utilizes a monorepo architecture powered by Turborepo, pnpm workspace management, and TypeScript.

### Development Commands

```bash
# Install project dependencies
pnpm install

# Start development environment
pnpm dev

# Build all packages for production
pnpm build

# Execute test suite
pnpm test

# Launch Storybook documentation server
pnpm storybook
```

## Documentation

Comprehensive documentation with interactive component examples is available in our [Storybook documentation](https://nova-ui-docs.vercel.app).

## License

This project is licensed under the MIT License. See LICENSE file for details.

Copyright © 2026 Nova UI

## Project Status

**Alpha Release** - This library is currently under active development. APIs and components may be subject to change. Production use is not recommended at this time.

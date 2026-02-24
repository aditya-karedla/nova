# @nova/core

> Core UI components for the Nova design system

A collection of accessible, customizable React components built on Radix UI primitives and styled with Tailwind CSS.

## Installation

```bash
npm install @nova/core
# or
pnpm add @nova/core
# or
yarn add @nova/core
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Usage

### Setup

Import the CSS file in your application entry point:

```tsx
import '@nova/core/styles.css';
```

Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from '@nova/core';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Components

#### Button

```tsx
import { Button } from '@nova/core';

function Example() {
  return (
    <>
      <Button variant="default">Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      
      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </>
  );
}
```

#### Input

```tsx
import { Input, Label } from '@nova/core';

function Example() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input 
        id="email" 
        type="email" 
        placeholder="Enter your email"
      />
    </div>
  );
}
```

#### Card

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@nova/core';

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

### Theme

Toggle between light and dark modes:

```tsx
import { useTheme } from '@nova/core';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

### Utilities

The `cn` utility for merging class names:

```tsx
import { cn } from '@nova/core';

const className = cn('base-class', condition && 'conditional-class');
```

## Available Components

- **Button** - Versatile button component with multiple variants
- **Input** - Text input field with validation support
- **Label** - Accessible label component
- **Card** - Container component with header, content, and footer sections
- **ThemeProvider** - Context provider for theme management

## TypeScript

All components are fully typed with TypeScript. Import types as needed:

```tsx
import type { ButtonProps } from '@nova/core';
```

## Accessibility

All components follow WAI-ARIA guidelines and are keyboard navigable with proper focus management.

## Related Packages

- [@nova/tokens](../tokens) - Design tokens and theme configuration
- [@nova/hooks](../hooks) - Reusable React hooks

## License

MIT © Aditya Karedla

# @aditya-karedla/core

> Core UI components for the Nova design system

A collection of accessible, customizable React components built on Radix UI primitives and styled with Tailwind CSS.

## Installation

```bash
npm install @aditya-karedla/core
# or
pnpm add @aditya-karedla/core
# or
yarn add @aditya-karedla/core
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Usage

### Setup

Import the CSS file in your application entry point:

```tsx
import '@aditya-karedla/core/styles.css';
```

Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from '@aditya-karedla/core';

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
import { Button } from '@aditya-karedla/core';

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
import { Input, Label } from '@aditya-karedla/core';

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
} from '@aditya-karedla/core';

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

#### Badge

```tsx
import { Badge } from '@aditya-karedla/core';

function Example() {
  return (
    <>
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Error</Badge>
    </>
  );
}
```

#### Checkbox & Switch

```tsx
import { Checkbox, Switch, Label } from '@aditya-karedla/core';

function Example() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
    </div>
  );
}
```

#### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from '@aditya-karedla/core';

function Example() {
  return (
    <Alert variant="info">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Your changes have been saved.
      </AlertDescription>
    </Alert>
  );
}
```

#### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@aditya-karedla/core';

function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/username.png" alt="User" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  );
}
```

#### Dialog

```tsx
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  Button 
} from '@aditya-karedla/core';

function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description.
          </DialogDescription>
        </DialogHeader>
        <p>Dialog content goes here.</p>
      </DialogContent>
    </Dialog>
  );
}
```

#### Tooltip

```tsx
import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider,
  Button 
} from '@aditya-karedla/core';

function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

### Theme

Toggle between light and dark modes:

```tsx
import { useTheme } from '@aditya-karedla/core';

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
import { cn } from '@aditya-karedla/core';

const className = cn('base-class', condition && 'conditional-class');
```

## Available Components

### Form Components
- **Button** - Versatile button component with multiple variants and sizes
- **Input** - Text input field with validation support
- **Textarea** - Multi-line text input field
- **Label** - Accessible label component for form fields
- **Checkbox** - Checkbox input with custom styling
- **Switch** - Toggle switch for boolean values

### Layout & Display
- **Card** - Container component with header, content, and footer sections
- **Separator** - Horizontal or vertical divider line
- **Avatar** - User profile image with fallback support

### Feedback & Messaging
- **Alert** - Contextual alerts with different variants (info, success, warning, error)
- **Badge** - Small status indicators and labels
- **Tooltip** - Hover information tooltips

### Overlays
- **Dialog** - Modal dialog/popup component
- **ThemeProvider** - Context provider for theme management

## TypeScript

All components are fully typed with TypeScript. Import types as needed:

```tsx
import type { ButtonProps } from '@aditya-karedla/core';
```

## Accessibility

All components follow WAI-ARIA guidelines and are keyboard navigable with proper focus management.

## Related Packages

- [@aditya-karedla/tokens](../tokens) - Design tokens and theme configuration
- [@aditya-karedla/hooks](../hooks) - Reusable React hooks

## License

MIT © Aditya Karedla

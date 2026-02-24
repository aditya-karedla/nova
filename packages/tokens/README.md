# @aditya-karedla/tokens

> Design tokens for the Nova design system

A comprehensive set of design tokens including colors, spacing, typography, and more for building consistent UIs.

## Installation

```bash
npm install @aditya-karedla/tokens
# or
pnpm add @aditya-karedla/tokens
# or
yarn add @aditya-karedla/tokens
```

## Usage

### Colors

Access the complete color palette optimized for enterprise applications:

```tsx
import { colors } from '@aditya-karedla/tokens';

// Primary colors
const primaryBlue = colors.primary[500]; // #3b82f6

// Semantic colors
const successGreen = colors.success[600];
const errorRed = colors.error[600];
const warningOrange = colors.warning[500];
const infoBlue = colors.info[500];

// Neutral grays
const textColor = colors.gray[900];
const borderColor = colors.gray[200];
```

### Complete Color Palette

#### Primary
Professional blue palette (50-950 shades)

#### Semantic Colors
- **Success** - Green tones for positive actions
- **Error** - Red tones for errors and destructive actions
- **Warning** - Orange tones for warnings and alerts
- **Info** - Blue tones for informational messages

#### Neutral
Gray palette with subtle blue tint (50-950 shades)

### Design Tokens

Access spacing, typography, and other design tokens:

```tsx
import { tokens } from '@aditya-karedla/tokens';

// Spacing scale
const spacing = tokens.spacing;
// { xs: '0.25rem', sm: '0.5rem', md: '1rem', ... }

// Border radius
const radius = tokens.borderRadius;
// { sm: '0.25rem', md: '0.5rem', lg: '0.75rem', ... }

// Typography
const fontSize = tokens.fontSize;
// { xs: '0.75rem', sm: '0.875rem', base: '1rem', ... }

// Shadows
const shadow = tokens.shadows;
// { sm: '...', md: '...', lg: '...', ... }
```

### Importing Specific Color Sets

```tsx
import { colors } from '@aditya-karedla/tokens/colors';

const { primary, success, error, warning, info, gray } = colors;
```

## Token Categories

### Colors
- Primary (Blue)
- Gray (Neutral)
- Success (Green)
- Error (Red)
- Warning (Orange)
- Info (Blue)

### Spacing
Consistent spacing scale from `xs` to `3xl`

### Typography
- Font sizes
- Font weights
- Line heights
- Letter spacing

### Border Radius
Consistent corner radius values

### Shadows
Elevation system with multiple shadow levels

## Color Philosophy

All colors in the Nova design system are:
- **WCAG 2.1 AA Compliant** - Ensuring sufficient contrast ratios
- **Professionally Calibrated** - Optimized for enterprise applications
- **Harmonious** - Carefully selected to work well together
- **Accessible** - Designed with color blindness considerations

## TypeScript

All tokens are fully typed with TypeScript:

```tsx
import type { Colors, Tokens } from '@aditya-karedla/tokens';
```

## Usage with Tailwind CSS

These tokens are designed to integrate seamlessly with Tailwind CSS. Reference the colors in your Tailwind configuration:

```js
// tailwind.config.js
import { colors } from '@aditya-karedla/tokens';

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        success: colors.success,
        // ...
      }
    }
  }
}
```

## Related Packages

- [@aditya-karedla/core](../core) - Core UI components that use these tokens
- [@aditya-karedla/hooks](../hooks) - Reusable React hooks

## License

MIT © Aditya Karedla

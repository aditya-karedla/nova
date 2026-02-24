# @nova/hooks

> Reusable React hooks for the Nova design system

A collection of useful React hooks for common UI patterns and behaviors.

## Installation

```bash
npm install @nova/hooks
# or
pnpm add @nova/hooks
# or
yarn add @nova/hooks
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Hooks

### useMediaQuery

Responsive design hook that tracks media query matches.

```tsx
import { useMediaQuery } from '@nova/hooks';

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

**Parameters:**
- `query: string` - CSS media query to match

**Returns:**
- `boolean` - Whether the media query currently matches

### useLocalStorage

Persist state in localStorage with automatic synchronization.

```tsx
import { useLocalStorage } from '@nova/hooks';

function UserPreferences() {
  const [preferences, setPreferences] = useLocalStorage('userPrefs', {
    theme: 'light',
    language: 'en'
  });
  
  return (
    <div>
      <button onClick={() => setPreferences({ ...preferences, theme: 'dark' })}>
        Set Dark Theme
      </button>
    </div>
  );
}
```

**Parameters:**
- `key: string` - localStorage key
- `initialValue: T` - Default value if key doesn't exist

**Returns:**
- `[T, (value: T) => void]` - Current value and setter function

### useDebounce

Debounce a value to limit update frequency.

```tsx
import { useDebounce } from '@nova/hooks';
import { useState } from 'react';

function SearchInput() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  
  // This effect only runs when debouncedSearch changes
  useEffect(() => {
    if (debouncedSearch) {
      performSearch(debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return (
    <input 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

**Parameters:**
- `value: T` - Value to debounce
- `delay: number` - Delay in milliseconds (default: 500)

**Returns:**
- `T` - Debounced value

### useClickOutside

Detect clicks outside of a specified element.

```tsx
import { useClickOutside } from '@nova/hooks';
import { useRef, useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });
  
  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {/* Dropdown content */}
        </div>
      )}
    </div>
  );
}
```

**Parameters:**
- `ref: RefObject<HTMLElement>` - Reference to the element
- `handler: (event: MouseEvent | TouchEvent) => void` - Callback when clicked outside

## TypeScript

All hooks are fully typed with TypeScript for excellent IDE support.

## Browser Support

These hooks work in all modern browsers that support React 18+.

## Related Packages

- [@nova/core](../core) - Core UI components
- [@nova/tokens](../tokens) - Design tokens

## License

MIT © Aditya Karedla

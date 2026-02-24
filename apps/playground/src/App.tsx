import { useState } from "react";
import {
  ThemeProvider,
  useTheme,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Label,
} from "@aditya-karedla/core";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} variant="outline" size="sm">
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}

function AppContent() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(`Hello, ${name}!`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Nova UI</h1>
            <p className="text-muted-foreground">Enterprise React Component Library</p>
          </div>
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to Nova 🌟</CardTitle>
            <CardDescription>
              A comprehensive, accessible, and customizable React component library built for
              professional applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default Button</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🚀</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Example */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Form Example</CardTitle>
                <CardDescription>Try out the form components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" required>
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button type="submit" loading={loading} disabled={!name}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setName("")}>
                  Clear
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>What makes Nova special</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success-600">✓</span>
                  <span>Accessible - WCAG 2.1 AA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-600">✓</span>
                  <span>Customizable - Built with Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-600">✓</span>
                  <span>TypeScript - Fully typed for great DX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-600">✓</span>
                  <span>Tree-shakeable - Import only what you need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-600">✓</span>
                  <span>Dark mode - Built-in theme support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-600">✓</span>
                  <span>Radix UI - Built on accessible primitives</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ using React, TypeScript, Tailwind CSS, and Radix UI</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nova-playground-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

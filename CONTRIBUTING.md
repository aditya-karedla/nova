# Contributing to Nova

Thank you for your interest in contributing to Nova! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/nova.git`
3. Install dependencies: `pnpm install`
4. Create a branch: `git checkout -b feature/my-feature`

## Development Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run playground in development mode
pnpm dev

# Run Storybook
pnpm storybook
```

## Code Standards

### TypeScript

- Use strict TypeScript
- Export all component prop types
- Avoid `any` type unless absolutely necessary
- Use descriptive variable and function names

### React

- Use functional components with hooks
- Follow React best practices
- Use `React.forwardRef` for components that accept refs
- Properly type all props and refs

### Styling

- Use Tailwind CSS utilities
- Follow existing component patterns
- Ensure responsive design
- Support dark mode via theme tokens

### Accessibility

- All interactive elements must be keyboard accessible
- Use semantic HTML
- Include proper ARIA attributes
- Test with screen readers
- Maintain WCAG 2.1 AA compliance

## Component Checklist

When adding a new component:

- [ ] Component implementation with TypeScript
- [ ] Forward refs where appropriate
- [ ] Proper prop types exported
- [ ] Accessibility attributes (ARIA, roles)
- [ ] Keyboard navigation support
- [ ] Dark mode support
- [ ] Responsive design
- [ ] Unit tests with good coverage
- [ ] Storybook story with examples
- [ ] Documentation in story
- [ ] Exported from main index file

## Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Testing Guidelines

- Test component behavior, not implementation
- Test accessibility features
- Test keyboard interactions
- Use Testing Library queries
- Aim for 90%+ coverage on core components

## Documentation

Every component needs:

1. **JSDoc comments** on component and props
2. **Storybook story** with:
   - Default example
   - All variant examples
   - Interactive controls
   - Accessibility notes
3. **Props documentation** (autodocs in Storybook)

## Commit Messages

Follow conventional commits:

```
feat: add Select component
fix: resolve Button loading state bug
docs: update Card component story
style: improve Input focus styles
test: add tests for Label component
refactor: simplify theme provider logic
chore: update dependencies
```

## Pull Request Process

1. Update documentation for any changed functionality
2. Add tests for new features
3. Ensure all tests pass: `pnpm test`
4. Ensure type checking passes: `pnpm type-check`
5. Ensure linting passes: `pnpm lint`
6. Update CHANGELOG using changesets: `pnpm changeset`
7. Submit PR with clear description

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Storybook updated
- [ ] Type checking passes
- [ ] All tests pass
- [ ] Accessibility verified
- [ ] Dark mode tested

## Screenshots (if applicable)
```

## Versioning

We use [Changesets](https://github.com/changesets/changesets) for version management.

```bash
# Create a changeset
pnpm changeset

# Follow prompts to describe your changes
```

## Code Review

All submissions require review. We look for:

- Code quality and consistency
- Test coverage
- Documentation completeness
- Accessibility compliance
- Performance considerations

## Getting Help

- Open an issue for bugs
- Start a discussion for questions
- Check existing issues/PRs first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

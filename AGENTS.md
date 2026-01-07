# AGENTS.md - Development Guidelines for Pomodoro App

## Build & Development Commands

### Core Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

### Running Single Tests
This project currently does not have a test framework configured. To add testing:
1. Install preferred testing library (Jest, Vitest, etc.)
2. Add test script to package.json
3. Update this file with single test commands

## Project Structure

### Technology Stack
- **Frontend**: React 19.2.0 with Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18 with custom design system
- **Language**: JavaScript (JSX)
- **Build Tool**: Vite with React plugin

### Key Directories
- `src/` - React components and styles
- `src/assets/images/` - Static image assets
- `public/` - Public assets (favicon, etc.)
- `assets/images/` - Additional image assets

## Code Style Guidelines

### Imports & Dependencies
- Use ES6 import/export syntax
- Group imports: React hooks first, then local components, then assets
- Use `.jsx` extension for all React components
- Import React hooks individually: `import { useState, useEffect } from 'react'`

### Component Structure
```jsx
// Imports first
import { useState, useEffect } from 'react';
import ComponentName from './ComponentName.jsx';

function ComponentName() {
    // State declarations
    const [state, setState] = useState(initialValue);
    
    // Effects and handlers
    useEffect(() => {
        // Effect logic
    }, []);
    
    const handleAction = () => {
        // Handler logic
    };
    
    // Return JSX
    return (
        <div className="tailwind-classes">
            {/* Component JSX */}
        </div>
    );
}

export default ComponentName;
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ClockTime`, `HeaderOptions`)
- **Files**: PascalCase with `.jsx` extension (e.g., `ClockTime.jsx`)
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE for environment/config values
- **CSS Classes**: kebab-case for custom classes, Tailwind utilities as-is

### State Management
- Use React hooks for local state: `useState`, `useEffect`
- State variables should be descriptive: `isRunning`, `isSettingOption`
- For shared state, consider React Context or prop drilling patterns

### Styling Guidelines
- **Primary**: Use Tailwind CSS utilities
- **Custom CSS**: Define in `src/index.css` within `@theme` block
- **Design Tokens**: Use semantic color names (blue-950, grey-400, etc.)
- **Responsive**: Use Tailwind responsive prefixes and custom clamp values
- **Component Styling**: Prefer utility classes over CSS-in-JS

#### Custom Theme Values
The project uses custom theme variables defined in `index.css`:
- Custom colors: blue-950, blue-900, grey-400, cyan-300, etc.
- Responsive text sizes using clamp() for fluid typography
- Custom spacing values for clock components

### ESLint Configuration
- Follows React hooks and refresh plugin rules
- Custom rule: `no-unused-vars` ignores variables matching `^[A-Z_]` pattern
- ECMAScript 2020+ syntax with JSX support
- Module source type

### File Organization
- Keep components in separate files
- Co-locate related styles and assets
- Use index files for barrel exports when beneficial
- Asset imports should use relative paths from component location

### Error Handling
- No specific error boundary patterns established yet
- Use try-catch for async operations
- Implement loading states for async operations
- Console logging acceptable for development debugging

### Performance Considerations
- Leverage Vite's build optimizations
- Use React.memo for expensive components when needed
- Implement proper dependency arrays in useEffect
- Consider code splitting for larger applications

## Development Workflow

### Before Committing
1. Run `npm run lint` to check code quality
2. Test functionality in development mode
3. Build with `npm run build` to ensure production readiness
4. Preview build with `npm run preview` if needed

### Code Review Checklist
- Component follows established naming conventions
- Imports are properly grouped and ordered
- Tailwind classes are used effectively
- Custom theme variables are utilized appropriately
- State management is appropriate for component complexity
- No console errors in development or production builds

## Adding New Features

### Component Integration
1. Create component file in `src/` with proper naming
2. Import and render in parent component
3. Add any required state management
4. Style with Tailwind utilities or custom theme values
5. Test functionality and responsive behavior

### Styling New Components
- Start with Tailwind utilities
- Use custom theme variables from `@theme` block
- Follow existing color palette and spacing patterns
- Ensure responsive design with proper clamp values

### Asset Management
- Place images in `src/assets/images/` or `assets/images/`
- Import using relative paths
- Use descriptive naming conventions
- Optimize images for web performance

## Testing Strategy (To Be Implemented)

### Recommended Testing Setup
- Unit tests with Vitest or Jest
- Component testing with React Testing Library
- End-to-end testing with Cypress or Playwright
- Type checking with TypeScript (optional but recommended)

### Test File Organization
- Co-locate test files with components: `ComponentName.test.jsx`
- Use `__tests__` directory for larger test suites
- Mock external dependencies and API calls
- Test user interactions and state changes

This AGENTS.md file should be updated as the project evolves and new patterns emerge.
# 🏗️ Frontend Architecture & Component System

## 📁 Folder Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles (Dark Theme)
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components
│   │   ├── Button.tsx    # Button component with variants
│   │   ├── Card.tsx      # Card container component
│   │   └── Input.tsx     # Form input component
│   ├── sections/         # Page section components
│   │   ├── Hero.tsx      # Hero section component
│   │   ├── HeroSection.tsx # Main hero section with gradient design
│   │   └── Services.tsx  # Services showcase component
│   └── index.ts          # Component exports
├── layouts/              # Layout components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── MainLayout.tsx    # Main layout wrapper
├── types/                # TypeScript type definitions
│   └── index.ts          # Common types and interfaces
├── utils/                # Utility functions
│   └── index.ts          # Helper functions
└── hooks/                # Custom React hooks
    └── useForm.ts        # Form state management hook
```

## 🧩 Component System

### Layout Components

- **Header**: Responsive navigation with mobile menu (Dark Theme)
- **Footer**: Site footer with links and social media (Dark Theme)
- **MainLayout**: Wraps content with header and footer

### UI Components

- **Button**: Versatile button with multiple variants and sizes (Dark Theme)
- **Card**: Container component with configurable padding and shadows (Dark Theme)
- **Input**: Form input with validation states and icons (Dark Theme)

### Section Components

- **Hero**: Landing page hero section with CTA (Dark Theme)
- **HeroSection**: Main hero section with gradient design and abstract shapes
- **Services**: Services showcase grid (Dark Theme)

## 🎨 Design Principles

### Dark Theme Implementation

- ✅ **Dark Background**: `bg-gray-900` for main content, `bg-gray-800` for sections
- ✅ **Text Colors**: `text-white` for headings, `text-gray-300` for body text
- ✅ **Accent Colors**: `text-blue-400` for highlights and icons
- ✅ **Form Elements**: Dark inputs with `bg-gray-700` and `border-gray-600`
- ✅ **Cards**: Dark containers with `bg-gray-800` and subtle borders

### Styling Approach

- ✅ Tailwind CSS for utility-first styling
- ✅ No inline styles (clean, maintainable code)
- ✅ Consistent spacing and typography scales
- ✅ Responsive design with mobile-first approach
- ✅ Dark theme optimized for readability and modern aesthetics

### Component Design

- ✅ Reusable and composable components
- ✅ Props-based customization
- ✅ TypeScript for type safety
- ✅ Accessibility considerations (ARIA labels, semantic HTML)
- ✅ Dark theme color scheme consistency

### Layout Philosophy

- ✅ Compact and creative layouts (avoiding single-card full-row)
- ✅ No faded backgrounds or text shadows
- ✅ Clean, modern dark aesthetic
- ✅ Consistent spacing and alignment
- ✅ High contrast for better readability

## 🚀 Usage Examples

### Basic Component Usage

```tsx
import { Button, Card, Input } from '@/components';

// Button with variants
<Button variant="primary" size="lg">Click Me</Button>
<Button variant="outline" size="sm">Secondary</Button>

// Card container
<Card padding="lg" shadow={false}>
  <h2>Content Title</h2>
  <p>Card content goes here</p>
</Card>

// Form input
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Invalid email format"
/>
```

### Layout Usage

```tsx
import MainLayout from "@/layouts/MainLayout";

export default function MyPage() {
  return (
    <MainLayout>
      <section>
        <h1>Page Content</h1>
        {/* Your page content */}
      </section>
    </MainLayout>
  );
}
```

### Custom Hook Usage

```tsx
import { useForm } from "@/hooks/useForm";

const MyForm = () => {
  const form = useForm({
    initialValues: { name: "", email: "" },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.email) errors.email = "Email is required";
      return errors;
    },
    onSubmit: async (values) => {
      // Handle form submission
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <Input
        value={form.values.name}
        onChange={(e) => form.handleChange("name", e.target.value)}
        onBlur={() => form.handleBlur("name")}
        error={form.errors.name}
      />
    </form>
  );
};
```

## 🔧 Development Guidelines

### Adding New Components

1. Create component in appropriate folder (`ui/`, `forms/`, `sections/`)
2. Use TypeScript interfaces for props
3. Follow naming conventions (PascalCase for components)
4. Export from `components/index.ts`
5. Add to documentation
6. **Ensure dark theme color consistency**

### Styling Guidelines

- Use Tailwind utility classes
- Maintain consistent spacing (4, 8, 16, 20, 24, 32, 48, 64)
- Follow dark theme color palette:
  - **Backgrounds**: `bg-gray-900`, `bg-gray-800`, `bg-gray-700`
  - **Text**: `text-white`, `text-gray-300`, `text-gray-400`
  - **Accents**: `text-blue-400`, `border-blue-500`
  - **Borders**: `border-gray-700`, `border-gray-600`
- Ensure responsive behavior
- Maintain high contrast for accessibility

### TypeScript Best Practices

- Define interfaces for all component props
- Use generic types where appropriate
- Export types from `types/index.ts`
- Maintain strict type checking

## 📱 Responsive Design

### Breakpoints

- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Mobile-First Approach

- Start with mobile styles
- Use `md:` and `lg:` prefixes for larger screens
- Ensure touch-friendly interactions
- Test on various device sizes

## ♿ Accessibility

### Standards

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (optimized for dark theme)

### Implementation

- Use proper heading hierarchy
- Provide alt text for images
- Ensure focus indicators
- Test with accessibility tools
- Maintain sufficient contrast ratios in dark theme

## 🧪 Testing & Quality

### Component Testing

- Unit tests for utility functions
- Component rendering tests
- Props validation testing
- Accessibility testing
- Dark theme color scheme validation

### Code Quality

- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Consistent code style
- Dark theme color consistency checks

## 🚀 Performance

### Optimization

- Lazy loading for heavy components
- Memoization where appropriate
- Efficient re-renders
- Bundle size optimization

### Best Practices

- Use React.memo for expensive components
- Implement proper key props
- Avoid unnecessary re-renders
- Optimize images and assets

## 🌙 Dark Theme Features

### Color Scheme

- **Primary Background**: `bg-gray-900` (Main page background)
- **Secondary Background**: `bg-gray-800` (Section backgrounds)
- **Card Background**: `bg-gray-800` (Component containers)
- **Input Background**: `bg-gray-700` (Form elements)
- **Text Primary**: `text-white` (Headings and important text)
- **Text Secondary**: `text-gray-300` (Body text)
- **Text Tertiary**: `text-gray-400` (Helper text and placeholders)
- **Accent**: `text-blue-400` (Highlights and interactive elements)
- **Borders**: `border-gray-700` (Container borders)

### Benefits

- Reduced eye strain in low-light environments
- Modern, professional appearance
- Better focus on content
- Consistent with contemporary design trends
- Improved readability with proper contrast

---

This architecture provides a solid foundation for building scalable, maintainable frontend applications with reusable components, consistent design patterns, and a modern dark theme aesthetic.

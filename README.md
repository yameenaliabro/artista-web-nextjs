# Artista Web Next.js

This document provides a comprehensive overview of the Artista Web Next.js project structure, architecture, and key components.

## Project Overview

**Artista Web** is a modern Next.js application built with TypeScript, featuring a clean architecture with component-based design, state management, and theming capabilities.

### Tech Stack
- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: TanStack Store
- **Data Fetching**: TanStack Query + Axios
- **Code Quality**: Biome (linting, formatting)
- **Theming**: next-themes
- **Icons**: Lucide React

## Directory Structure

```
artista-web-nextjs/
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── actions/               # API actions for TanStack Query (axios-based)
│   ├── app/                   # Next.js App Router directory
│   │   ├── favicon.ico
│   │   ├── layout.tsx         # Root layout component
│   │   ├── provider.tsx       # Root providers wrapper
│   │   ├── _components/       # Private app components
│   │   ├── _layout/           # Layout components
│   │   │   ├── footer.tsx     # Footer component
│   │   │   └── header.tsx     # Header component
│   │   ├── (protected)/       # Protected routes group
│   │   └── (public)/          # Public routes group
│   │       ├── page.tsx       # Root page
│   │       └── _sections/     # Page sections
│   │           └── example.tsx # Example section with counter
│   ├── components/            # Reusable components
│   │   ├── blocks/           # Component blocks
│   │   ├── forms/            # Form components
│   │   ├── providers/        # Context providers
│   │   │   └── theme.tsx     # Theme provider wrapper
│   │   └── ui/               # UI components (shadcn/ui)
│   │       └── button.tsx    # Button component with variants
│   ├── lib/                  # Utility libraries
│   │   ├── fonts.ts          # Font configuration (Geist fonts)
│   │   └── utils.ts          # Utility functions (cn helper)
│   ├── stores/               # State management
│   │   └── count.ts          # Counter store with actions
│   └── styles/               # Global styles
│       └── globals.css       # Global CSS with design tokens
├── biome.json                # Biome configuration
├── components.json           # shadcn/ui configuration
├── next-env.d.ts            # Next.js TypeScript declarations
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── README.md                # Project documentation
└── tsconfig.json            # TypeScript configuration
```

## Key Architecture Patterns

### 1. App Router Structure
- Uses Next.js 15 App Router with TypeScript
- Route groups: `(public)` and `(protected)` for logical organization
- Layout components separated in `_layout/` directory
- Page-specific sections in `_sections/` directories

### 2. Component Organization
- **UI Components**: Basic, reusable components in `src/components/ui/`
- **Layout Components**: Header, footer, and layout-specific components
- **Providers**: Context providers for theming and other global state
- **Blocks & Forms**: Reserved directories for complex component compositions

### 3. State Management
- **TanStack Store**: Lightweight state management for client-side state
- **Example Implementation**: Counter store with increment/decrement actions
- **Type-safe**: Full TypeScript integration

### 4. Styling Architecture
- **Tailwind CSS 4**: Utility-first CSS framework
- **Custom Design System**: Comprehensive color palette and design tokens
- **Dark Mode**: Built-in dark/light theme support with `next-themes`
- **CSS Variables**: Extensive use of CSS custom properties for theming

## Configuration Files

### Package.json Scripts
```json
{
  "dev": "next dev --turbopack",      // Development server with Turbopack
  "build": "next build",              // Production build
  "start": "next start",              // Production server
  "biome:check": "biome check",       // Code quality check
  "biome:write": "biome check --write", // Auto-fix code issues
  "ui:add": "shadcn add"              // Add shadcn/ui components
}
```

### Key Dependencies
- **Core**: React 19.1.0, Next.js 15.4.1
- **UI**: @radix-ui/react-slot, lucide-react, class-variance-authority
- **State**: @tanstack/react-store, @tanstack/react-query
- **Styling**: tailwindcss, clsx, tailwind-merge
- **Developer Tools**: @biomejs/biome, shadcn

### TypeScript Configuration
- **Target**: ES2017
- **Module Resolution**: Bundler
- **Path Mapping**: `~/*` maps to `./src/*`
- **Strict Mode**: Enabled for type safety

### Biome Configuration
- **Formatting**: Tab indentation, double quotes
- **Linting**: Recommended rules enabled
- **VCS Integration**: Git integration enabled
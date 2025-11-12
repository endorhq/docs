# CLAUDE.md - Endor Documentation Project Guide

## Project Overview

This is the documentation site for Endor (https://endor.dev), built with Astro and Starlight. The site is publicly accessible at https://docs.endor.dev.

## Quick Start Commands

```bash
# Install dependencies
pnpm install

# Development server (runs on http://localhost:4321)
pnpm dev

# Type checking and production build
pnpm build

# Preview production build
pnpm preview
```

## Tech Stack

- **Framework**: Astro v4.16.10
- **Documentation Theme**: Starlight v0.29.0
- **UI Components**: Svelte v4.2.19
- **Styling**: Tailwind CSS v3.4.14 with Starlight plugin
- **TypeScript**: v5.6.3
- **Image Optimization**: Sharp v0.32.6

## Project Structure

```
docs/
├── src/
│   ├── assets/           # Images and static assets
│   │   ├── home.webp
│   │   ├── logo-text-dark.png
│   │   ├── logo-text.png
│   │   └── spaceman.png
│   ├── components/       # Svelte components
│   │   ├── StepItem.svelte
│   │   └── StepList.svelte
│   ├── content/          # Documentation content
│   │   ├── config.ts     # Content collection configuration
│   │   └── docs/         # All documentation pages
│   │       ├── cli/      # CLI documentation
│   │       ├── faq/      # FAQ section
│   │       ├── guides/   # User guides
│   │       ├── reference/ # Reference documentation
│   │       └── index.mdx # Home page
│   ├── styles/          # Documentation content
│   │   └── global.css   # Global Tailwind styles
│   └── env.d.ts         # TypeScript environment types
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── posthog.mjs          # Analytics configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## Key Configuration Files

### astro.config.mjs
- Configures Starlight documentation theme
- Sets up sidebar navigation with auto-generated sections
- Integrates Svelte components and Tailwind CSS
- Adds PostHog analytics for production builds
- Configures social media links and branding

### tailwind.config.mjs
- Extends Starlight's Tailwind plugin
- Defines custom color variables (background, text, primary, accent)
- Adds custom neon box-shadow effect
- Scans all component files for class usage

## Documentation Architecture

### Content Organization
- **MDX Support**: Pages can be written in Markdown with JSX components
- **Frontmatter**: Each page requires title and description
- **Sidebar**: Auto-generated from directory structure with customizable ordering
- **Templates**: Special templates like 'splash' for the homepage

### Content Sections
1. **CLI** (`/cli/`): Documentation for the Endor CLI tool
2. **FAQ** (`/faq/`): Frequently asked questions
3. **Guides** (`/guides/`): Step-by-step tutorials (Hello World, Laravel, WordPress)
4. **Reference** (`/reference/`): Technical reference (installed packages, UI interface)

## Development Guidelines

### Creating New Documentation Pages

1. **Standard Pages** (`.md` files):
```markdown
---
title: Page Title
description: Brief description of the page
sidebar:
    order: 1  # Optional: controls sidebar ordering
---

Your content here...
```

2. **Enhanced Pages** (`.mdx` files):
```markdown
---
title: Page Title
description: Brief description
---

import { Card, CardGrid } from '@astrojs/starlight/components';

Your content with React/Svelte components...
```

### Using Custom Components

The project includes custom Svelte components for structured content:

```html
<!-- StepList component for numbered instructions -->
<StepList title="Getting Started">
  <StepItem step={1}>First step description</StepItem>
  <StepItem step={2}>Second step description</StepItem>
</StepList>
```

### Asset Management
- Place images in the appropriate subdirectory under `src/content/docs/`
- Import assets in MDX files: `import videoRef from "./overview/run-mariadb.mp4"`
- Use relative paths for content-specific assets

### Styling
- Use Tailwind CSS classes for styling
- Custom CSS variables available:
  - `--c-background`: Background color
  - `--c-text`: Main text color
  - `--c-text-light`: Light text variant
  - `--c-primary`: Primary brand color
  - `--c-accent`: Accent color
  - `--c-light`: Light color variant

## Production Considerations

### Build Process
1. Runs TypeScript checking with `astro check`
2. Builds static site to `dist/` directory
3. Optimizes images with Sharp
4. Injects PostHog analytics in production

### Environment Detection
- Uses `import.meta.env.PROD` to detect production environment
- Analytics only loaded in production builds

### Social Media & SEO
- Open Graph image configured: `https://docs.endor.dev/og.webp`
- Social links configured for GitHub, Mastodon, Twitter, BlueSky, YouTube, LinkedIn

## Documentation Writing Guidelines

### Writing Style

**Clarity and Audience:**
- State the purpose and audience in the first paragraph
- Use simple, direct language appropriate for the target audience
- Prefer active voice over passive voice
- Define technical terms when first introduced
- Avoid unnecessary jargon

**Structure and Flow:**
- Lead with the main point in each section (Pyramid Principle)
- Use short paragraphs (3-4 sentences max)
- Create a logical narrative that guides the reader
- Ensure each section is complete - incomplete information is worse than none

**Code Examples:**
- All code examples must be complete and ready to run
- Include all necessary imports and setup
- Follow the language's conventions and best practices
- Ensure code inside blocks are properly indented
- Add comments to explain complex parts
- Use the right code block language identifier. For example, "jsonc" for JSON files with comments

**Content Requirements:**
- Explain the "why" before the "how"
- Provide step-by-step instructions for tasks
- Include troubleshooting for common issues. You do not need to cover all possible edge cases
- Reference existing documentation where relevant

**Formatting:**
- Use proper heading hierarchy
- Use bullet points for lists
- Use numbered lists for sequential steps
- Use code blocks with proper language tags
- Use tables for comparing options or listing parameters
- Use tables when describing CLI arguments, configuration properties, API properties, or similar information
- Bold important terms and warnings

### Component Usage
- Use `StepList` and `StepItem` for numbered instructions
- Add titles to `StepList` components for clarity
- Import Starlight components (`Card`, `CardGrid`) when appropriate
- Use video embeds for demonstrations where helpful

## Best Practices

1. **File Naming**: Use kebab-case for file names (e.g., `hello-world.md`)
2. **Images**: Store page-specific images in subdirectories matching the page name
3. **Videos**: Support for MP4 videos with autoplay in documentation
4. **Components**: Use Starlight's built-in components (Card, CardGrid) when possible
5. **Navigation**: Let Starlight auto-generate navigation from file structure
6. **Frontmatter**: Always include title and description for SEO
7. **Consistency**: Always read 2-3 similar documents before editing to match tone and style
8. **Steps**: Use imperative mood for instructions ("Install", "Run", "Check")
9. **Links**: Include links to related content and next steps

## Common Tasks

### Add a New Guide
1. Create a new `.md` or `.mdx` file in `src/content/docs/guides/`
2. Add frontmatter with title and description
3. Create a subdirectory for assets if needed
4. The guide will automatically appear in the sidebar

### Update Navigation Order
Edit the sidebar order in individual page frontmatter:
```yaml
sidebar:
    order: 2
```

### Add Custom Styling
1. Edit `./src/styles/global.css` for global styles
2. Use Tailwind classes in components and MDX files
3. Extend theme in `tailwind.config.mjs` for new design tokens

## Notes

- The project uses Astro's content collections for type-safe content management
- Starlight provides built-in search, dark mode, and responsive design
- The site is optimized for documentation with features like copy code buttons and syntax highlighting
- Git branch structure: Work on feature branches, PR to `main` branch
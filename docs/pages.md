# Adding New Documentation Pages

This guide helps engineering team members contribute documentation to the Endor docs site. You'll learn how to create new pages, use components, manage assets, and test your changes locally. No prior Astro or Starlight experience is required.

## Understanding the Documentation Structure

All documentation content lives in the `src/content/docs/` directory. **The directory structure directly maps to URL structure and sidebar navigation.**

### Content Sections

The documentation is organized into these main sections:

| Directory | Purpose | Example URL |
|-----------|---------|-------------|
| `cli/` | CLI tool documentation | `/cli/overview` |
| `guides/` | Step-by-step tutorials | `/guides/hello` |
| `mcp/` | AI integration guides | `/mcp/overview` |
| `faq/` | Frequently asked questions | `/faq/general` |
| `reference/` | Technical reference | `/reference/installed` |

### URL Mapping

The file path determines the page URL:

- `src/content/docs/cli/setup.mdx` → `https://docs.endor.dev/cli/setup`
- `src/content/docs/guides/hello.md` → `https://docs.endor.dev/guides/hello`
- `src/content/docs/mcp/cursor.mdx` → `https://docs.endor.dev/mcp/cursor`

Sidebar navigation is automatically generated from this structure, so your new pages appear once created.

## Choosing a File Format

You have two format options when creating documentation pages:

### Markdown (.md)

Use `.md` files for simple documentation pages that only need standard Markdown features.

**When to use:**
- Basic documentation with text, headings, lists, code blocks, and images
- No custom components or interactive elements needed
- Simpler content that doesn't require imports

**Example from `src/content/docs/guides/hello.md`:**

```markdown
---
title: Hello World!
description: Step by step guide for running your first PHP program
---

## Running your first PHP app

The LAMP Pod comes pre-configured with everything you need...

```sh
cd /var/www/localhost/htdocs/
mkdir -p example
```
```

### MDX (.mdx)

Use `.mdx` files when you need to import and use components within your documentation.

**When to use:**
- Pages with numbered step instructions (StepList component)
- Pages with card grids or special layouts (CardGrid component)
- Content requiring embedded videos or complex interactive elements
- Any page that needs to import components

**Example from `src/content/docs/cli/setup.mdx`:**

```mdx
---
title: Setup
description: Get Endor CLI running on your machine in minutes
---

import StepList from '../../../components/StepList.svelte';
import StepItem from '../../../components/StepItem.svelte';

Get Endor CLI up and running on your machine...

<StepList title="Install Endor CLI">
  <StepItem step={1}>
    Install Endor globally with npm:

    ```sh
    npm install -g @endorhq/cli
    ```
  </StepItem>
</StepList>
```

**Recommendation:** Start with `.md` unless you specifically need components. You can always rename to `.mdx` later if needed.

## Creating a New Documentation Page

### Step 1: Create the File

Create a new `.md` or `.mdx` file in the appropriate directory under `src/content/docs/`:

```bash
# Example: Creating a new CLI guide
touch src/content/docs/cli/volumes.md

# Example: Creating a new tutorial guide
touch src/content/docs/guides/wordpress.mdx

# Example: Creating a new MCP integration guide
touch src/content/docs/mcp/claude-code.mdx
```

**File naming conventions:**
- **Use kebab-case** (lowercase with hyphens): `hello-world.md`, not `HelloWorld.md`
- Use descriptive names that indicate content: `setup.md`, `networking.md`
- Avoid special characters and spaces

### Step 2: Add Required Frontmatter

Every documentation page **requires frontmatter** at the top of the file. Frontmatter is YAML metadata enclosed by `---` markers.

**Minimum required frontmatter:**

```yaml
---
title: Page Title
description: Brief description of the page
---
```

## Writing Frontmatter

Frontmatter defines your page's metadata and controls how it appears in the sidebar and search results.

### Required Fields

**`title`** (string, required)

The title appears in browser tabs, page headings, search results, and sidebar navigation.

```yaml
title: Setup Endor CLI
```

**Best practices:**
- Keep it concise (2-6 words)
- Make it descriptive and specific
- Use title case for major words

**`description`** (string, required)

The description appears in search results, page summaries, and SEO metadata.

```yaml
description: Get Endor CLI running on your machine in minutes
```

**Best practices:**
- One clear sentence (10-20 words)
- Explain what the page helps users accomplish
- Use active, action-oriented language
- Don't repeat the title verbatim

### Optional Fields

**`sidebar.order`** (number, optional)

Controls the position of your page in the sidebar navigation. Lower numbers appear first.

```yaml
sidebar:
  order: 1
```

**When to use:**
- Setting a logical sequence (like "Overview" as order 1, "Setup" as order 2)
- Placing important pages at the top of a section
- Creating a specific reading order for tutorials

**When not to use:**
- Pages without a specific ordering requirement default to alphabetical order
- Leave unspecified for most pages to avoid maintenance overhead

### Complete Frontmatter Examples

**Simple page with required fields only:**

```yaml
---
title: Hello World
description: Step by step guide for running your first PHP program
---
```

**Page with sidebar ordering:**

```yaml
---
title: Overview
description: Quick introduction to Endor CLI for running services in seconds
sidebar:
  order: 1
---
```

**Home page with special template:**

```yaml
---
title: Welcome to Endor Documentation
description: Get started with Endor
template: splash
hero:
  tagline: Get started using Endor
  actions:
    - text: Read the FAQs
      link: /faq/general
---
```

## Adding Content

After the frontmatter, write your documentation content using Markdown.

**Structure your content with:**

- **Headings**: Use `##` for main sections (the page title is `#`, added automatically)
- **Lists**: Bulleted lists for options, numbered lists for sequential steps
- **Code blocks**: Always specify the language for syntax highlighting
- **Links**: Internal links to related pages, external links to resources

**Example structure:**

```markdown
---
title: Networking
description: Configure network access for Endor services
---

Brief introduction paragraph explaining what this page covers.

## Understanding Network Isolation

Explanation of the concept...

## Enabling Network Access

Step-by-step instructions...

```sh
endor run mariadb --allow-net
```

## Security Considerations

Important notes about network configuration...
```

**Writing style guidelines:**

- **Concise and clear**: Use short sentences and paragraphs
- **Simple vocabulary**: Avoid jargon unless necessary
- **Action-oriented**: Start with verbs in step instructions ("Install", "Run", "Configure")
- **Friendly yet professional**: Approachable without being overly casual
- **American English**: Use US spelling and grammar conventions

For complete writing guidelines, see the [CLAUDE.md file](./CLAUDE.md#documentation-writing-guidelines).

## Using Custom Components

The Endor docs site includes custom Svelte components for enhanced documentation. **These components require `.mdx` file format.**

### StepList and StepItem Components

Use `StepList` and `StepItem` for numbered, sequential instructions with visual step indicators.

**When to use:**
- Installation guides
- Setup procedures
- Multi-step tutorials
- Any sequential process

#### Import the Components

At the top of your `.mdx` file, after the frontmatter, import both components:

```mdx
---
title: Setup Guide
description: Install and configure the application
---

import StepList from '../../../components/StepList.svelte';
import StepItem from '../../../components/StepItem.svelte';
```

**Important:** Adjust the import path based on your file location:
- Files in `src/content/docs/cli/`: Use `../../../components/`
- Files in `src/content/docs/cli/services/`: Use `../../../../components/`
- Files in `src/content/docs/guides/`: Use `../../../components/`

#### Use StepList with StepItem

Wrap your steps in a `<StepList>` component, with each step as a `<StepItem>`:

```mdx
<StepList title="Install Endor CLI">
  <StepItem step={1}>
    Install Endor globally with npm:

    ```sh
    npm install -g @endorhq/cli
    ```
  </StepItem>

  <StepItem step={2}>
    Verify installation by checking available services:

    ```sh
    endor run
    ```

    You should see a list of available services like MariaDB, PostgreSQL, and Redis.
  </StepItem>

  <StepItem step={3}>
    Start your first service:

    ```sh
    endor run mariadb
    ```

    The service boots in less than 5 seconds.
  </StepItem>
</StepList>
```

**Component properties:**

- `title` (StepList): Optional heading for the step sequence
- `step` (StepItem): Required step number (1, 2, 3, etc.)

**Content inside StepItem:**
- Regular Markdown text
- Code blocks with syntax highlighting
- Multiple paragraphs
- Lists and other Markdown elements

## Using Starlight Components

Starlight provides built-in components for enhanced layouts and content presentation.

### Card and CardGrid

Use `Card` and `CardGrid` to create visually appealing card layouts for linking to related content.

**When to use:**
- Overview pages with multiple sections
- Linking to related guides
- Highlighting different options or paths
- Creating visual navigation

#### Import Starlight Components

```mdx
---
title: MCP Overview
description: Integrate Endor with AI tools
---

import { Card, CardGrid } from '@astrojs/starlight/components';
```

#### Create Card Layouts

**Example from `src/content/docs/mcp/overview.mdx`:**

```mdx
## AI Tool Configuration

Choose your AI tool for detailed setup instructions:

<CardGrid>
  <Card title="Claude Code" icon="forward-slash">
    Configure Endor with Claude Code CLI for terminal-based AI development.

    [Setup Guide →](../claude-code)
  </Card>

  <Card title="Cursor" icon="document">
    Integrate Endor with Cursor IDE's Composer Agent for seamless development.

    [Setup Guide →](../cursor)
  </Card>

  <Card title="VSCode" icon="document">
    Enable Endor in Visual Studio Code with built-in MCP management.

    [Setup Guide →](../vscode)
  </Card>
</CardGrid>
```

**Card properties:**
- `title`: Card heading text
- `icon`: Starlight icon name (e.g., "document", "open-book", "forward-slash", "external")

**Available Starlight components:**
- `Card` and `CardGrid`: Card layouts for linking
- `Tabs` and `TabItem`: Tabbed content sections
- `Aside`: Callout boxes for notes, tips, warnings
- `Code`: Enhanced code blocks with features
- `FileTree`: Visual file/directory structures

For a complete list of Starlight components, see the [Starlight Components documentation](https://starlight.astro.build/components/using-components/).

## Managing Assets

Store images and videos close to the content that uses them.

### Asset Organization Convention

**Create a subdirectory matching your page name** to organize assets:

```
src/content/docs/
├── guides/
│   ├── hello.md
│   └── hello/
│       ├── hello-example.png
│       └── demo-video.mp4
├── cli/
│   ├── overview.mdx
│   └── overview/
│       └── run-mariadb.mp4
```

This keeps related files together and makes them easier to manage.

### Using Images in Markdown (.md)

Reference images with relative paths:

```markdown
![Alt text description](hello/hello-example.png)
```

**Best practices:**
- Always include descriptive alt text
- Use relative paths starting from the current file
- Supported formats: `.png`, `.jpg`, `.webp`, `.gif`

### Using Images in MDX (.mdx)

For MDX files, you can import images or use relative paths:

**Option 1: Relative paths (simpler)**

```mdx
![Setup screenshot](setup/installation-screen.png)
```

**Option 2: Import statements (for advanced usage)**

```mdx
import setupImage from './setup/installation-screen.png';

<img src={setupImage.src} alt="Setup screenshot" />
```

### Embedding Videos

**Option 1: YouTube embeds (recommended for external videos)**

```mdx
<iframe width="720" height="450" src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title" frameborder="0" allow="accelerometer; autoplay;
  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
```

**Option 2: Local MP4 files**

```mdx
import videoRef from "./overview/demo.mp4";

<video controls src={videoRef} />
```

**Supported video formats:** `.mp4` (recommended), `.webm`

## Understanding Sidebar Navigation

The sidebar navigation is **automatically generated** from your directory structure. You don't need to manually configure navigation for most pages.

### How Auto-generation Works

When you create a file in a directory configured for auto-generation, it automatically appears in the sidebar:

```
src/content/docs/guides/
├── hello.md          → Appears in "Guides" section
├── wordpress.md      → Appears in "Guides" section
└── laravel.md        → Appears in "Guides" section
```

**Auto-generated directories** (from `astro.config.mjs`):
- `mcp/` - MCP integration guides
- `faq/` - Frequently asked questions
- `reference/` - Technical reference pages
- `guides/` - Tutorial guides
- `cli/services/` - Individual service documentation

### Controlling Sidebar Order

By default, pages appear in **alphabetical order**. To control the order, use `sidebar.order` in your frontmatter:

```yaml
---
title: Overview
description: Introduction to the CLI
sidebar:
  order: 1
---
```

**Example ordering:**
- `overview.mdx` with `order: 1` appears first
- `setup.mdx` with `order: 2` appears second
- `networking.mdx` with `order: 3` appears third
- `commands.mdx` with no order appears after ordered items (alphabetically)

### When Pages Appear in Navigation

Your new page automatically appears in the sidebar when:
1. The file is in an auto-generated directory
2. The file has valid frontmatter with `title` and `description`
3. The development server restarts or detects the file change

## Testing Your Changes Locally

**Always test your documentation locally before committing changes.**

### 1. Start the Development Server

Run the development server to preview your changes:

```bash
npm run dev
```

Or alternatively:

```bash
npm start
```

The site will be available at **http://localhost:4321**.

### 2. View Your Page

Navigate to your new page using the sidebar or by entering the URL directly:

- For `src/content/docs/cli/networking.md` → http://localhost:4321/cli/networking
- For `src/content/docs/guides/hello.md` → http://localhost:4321/guides/hello

### 3. Check These Elements

Verify the following on your page:

| Element | What to Check |
|---------|---------------|
| **Sidebar navigation** | Page appears in the correct section and order |
| **Page title** | Displays correctly in browser tab and page heading |
| **Frontmatter** | Description appears in search results (use search) |
| **Content formatting** | Headings, lists, and text format properly |
| **Code blocks** | Syntax highlighting works for all code examples |
| **Components** | StepList, Cards, and other components render correctly |
| **Images** | All images load and display at correct size |
| **Videos** | Videos play and are properly sized |
| **Links** | All internal and external links work correctly |
| **Responsive design** | Page looks good on mobile (resize browser) |

### 4. Run Type Checking

Before committing, run the build command to check for TypeScript errors and validate your content:

```bash
npm run build
```

This command:
- Runs `astro check` for TypeScript validation
- Verifies frontmatter schema compliance
- Checks for broken links
- Optimizes images
- Validates component usage

**Fix any errors reported before proceeding.**

### 5. Common Issues and Solutions

**Issue: Page doesn't appear in sidebar**
- Ensure frontmatter includes both `title` and `description`
- Verify the file is in an auto-generated directory
- Restart the development server

**Issue: Images don't load**
- Check the relative path from your file to the image
- Verify the image file exists and has the correct extension
- For MDX files, ensure imports use correct paths

**Issue: Components don't render**
- Verify you're using `.mdx` extension, not `.md`
- Check import paths match your file location
- Ensure components are properly closed (matching opening/closing tags)

**Issue: Code blocks lack syntax highlighting**
- Add language identifier after opening backticks: ` ```sh ` or ` ```javascript `

## Submitting Your Documentation

Once you've tested your changes and verified everything works correctly, you're ready to submit.

### 1. Create a Feature Branch

Create a new branch for your changes:

```bash
git checkout -b docs/add-networking-guide
```

**Branch naming conventions:**
- Use `docs/` prefix for documentation changes
- Use descriptive names: `docs/add-mcp-guide`, `docs/update-cli-setup`

### 2. Commit Your Changes

Add and commit your changes with a clear, descriptive message:

```bash
git add src/content/docs/cli/networking.md
git add src/content/docs/cli/networking/
git commit -m "Add CLI networking configuration guide"
```

**Commit message best practices:**
- Start with a verb: "Add", "Update", "Fix", "Remove"
- Be specific about what changed
- Keep it under 72 characters for the first line

### 3. Open a Pull Request

Push your branch and open a pull request to the `main` branch:

```bash
git push origin docs/add-networking-guide
```

Then create a pull request on GitHub with:
- **Title**: Clear summary of what you're adding
- **Description**: Brief explanation of the new documentation and what it covers
- **Context**: Mention any related issues or requests

### 4. Deployment

Once your pull request is reviewed and merged, the documentation site will **automatically deploy**. The CI/CD pipeline handles building and publishing the changes.

## Quick Reference

### File Structure Checklist

- [ ] File in correct directory (`cli/`, `guides/`, `mcp/`, `faq/`, or `reference/`)
- [ ] File uses kebab-case naming
- [ ] Correct extension (`.md` for simple pages, `.mdx` for components)
- [ ] Frontmatter includes `title` and `description`
- [ ] Assets organized in subdirectory matching page name

### Frontmatter Template

```yaml
---
title: Page Title Here
description: One-line description of the page content
sidebar:
  order: 1  # Optional: only if specific ordering needed
---
```

### Component Import Paths

```mdx
# For files in src/content/docs/cli/
import StepList from '../../../components/StepList.svelte';
import StepItem from '../../../components/StepItem.svelte';

# For files in src/content/docs/cli/services/
import StepList from '../../../../components/StepList.svelte';
import StepItem from '../../../../components/StepItem.svelte';

# Starlight components (same for all locations)
import { Card, CardGrid } from '@astrojs/starlight/components';
```

### Testing Commands

```bash
# Start development server
npm run dev

# Run type checking and build
npm run build

# Preview production build
npm run preview
```

## Additional Resources

- **CLAUDE.md**: Complete project guide with writing style guidelines
- **Starlight Documentation**: https://starlight.astro.build/
- **Astro Documentation**: https://docs.astro.build/
- **Example pages**: Review existing pages in `src/content/docs/` for formatting examples
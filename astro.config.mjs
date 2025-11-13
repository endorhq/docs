import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import mermaid from 'astro-mermaid';

import { posthogCode } from './posthog.mjs';

const isProd = import.meta.env.PROD;

// Head tags for the site
let head = [
  // OG image
  {
    tag: 'meta',
    attrs: {
      property: 'og:image',
      content: 'https://docs.endor.dev/og.webp'
    }
  },
];

if (isProd) {
  head.push({
    tag: 'script',
    content: posthogCode
  });
}

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/mcp/overview': {
      status: 302,
      destination: '/cli/mcp/overview',
    },
    '/mcp/claude-code': {
      status: 302,
      destination: '/cli/mcp/claude-code',
    },
    '/mcp/cursor': {
      status: 302,
      destination: '/cli/mcp/cursor',
    },
    '/mcp/goose': {
      status: 302,
      destination: '/cli/mcp/goose',
    },
    '/mcp/vscode': {
      status: 302,
      destination: '/cli/mcp/vscode',
    },
    '/mcp/windsurf': {
      status: 302,
      destination: '/cli/mcp/windsurf',
    },
  },
  integrations: [
    // @see https://github.com/joesaby/astro-mermaid?tab=readme-ov-file#integration-order-important
    mermaid({
      theme: 'forest',
      autoTheme: true
    }),
    starlight({
      title: 'Endor Documentation',
      plugins: [
        starlightLinksValidator(),
        starlightThemeRapide(),
        starlightSidebarTopics([
          {
            label: 'Rover',
            link: '/rover/intro/overview',
            icon: 'seti:bicep',
            items: [
              {
                label: 'Introduction',
                autogenerate: { directory: 'rover/intro' },
              },
              {
                label: 'Key Concepts',
                autogenerate: { directory: 'rover/concepts' },
              },
              {
                label: 'Guides',
                autogenerate: { directory: 'rover/guides' },
              },
              {
                label: 'Reference',
                autogenerate: { directory: 'rover/reference' },
              },
              {
                label: 'Troubleshooting',
                autogenerate: { directory: 'rover/troubleshooting' },
              }
            ],
          },
          {
            label: 'Endor CLI',
            link: '/cli/overview',
            icon: 'forward-slash',
            items: [
              {
                label: 'CLI',
                items: [
                  {
                    label: 'Overview',
                    link: '/cli/overview',
                  },
                  {
                    label: 'Setup',
                    link: '/cli/setup',
                  },
                  {
                    label: 'MCP',
                    autogenerate: { directory: 'cli/mcp' }
                  },
                  {
                    label: 'Networking',
                    link: '/cli/networking',
                  },
                  {
                    label: 'Volumes',
                    link: '/cli/volumes',
                  },
                  {
                    label: 'Commands',
                    link: '/cli/commands',
                  },
                  {
                    label: 'Open a Shell',
                    link: '/cli/shell',
                  },
                  {
                    label: 'Services',
                    autogenerate: { directory: 'cli/services' },
                  }
                ],
              }
            ],
          },
          {
            label: 'Endor Web',
            link: '/faq/',
            icon: 'seti:html',
            items: [
              {
                label: 'FAQ',
                autogenerate: { directory: 'faq' },
              },
              {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
              },
              {
                label: 'Guides',
                autogenerate: { directory: 'guides' },
              },
            ],
          },
        ]),
      ],
      head,
      customCss: [
        './src/styles/global.css'
      ],
      logo: {
        dark: './src/assets/logo-text-dark.png',
        light: './src/assets/logo-text.png',
        alt: 'Endor Logo',
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/endorhq' },
        { icon: 'mastodon', label: 'Mastodon', href: 'https://mastodon.social/@endorhq' },
        { icon: 'twitter', label: 'X', href: 'https://x.com/endorhq' },
        { icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/endorhq.bsky.social' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@endorhq' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/endorhq' },
      ],
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
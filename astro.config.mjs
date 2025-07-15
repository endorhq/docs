import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import starlightThemeRapide from 'starlight-theme-rapide'

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
  integrations: [
    starlight({
      title: 'Endor Documentation',
      plugins: [starlightLinksValidator(), tarlightThemeRapide()],
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
      sidebar: [
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
        },
        {
          label: 'MCP',
          autogenerate: { directory: 'mcp' }
        },
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
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
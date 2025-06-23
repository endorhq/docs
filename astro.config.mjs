import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

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
      head,
      customCss: [
        './src/tailwind.css'
      ],
      logo: {
        dark: './src/assets/logo-text-dark.png',
        light: './src/assets/logo-text.png',
        alt: 'Endor Logo',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/endorhq',
        mastodon: 'https://mastodon.social/@endorhq',
        twitter: 'https://x.com/endorhq',
        blueSky: 'https://bsky.app/profile/endorhq.bsky.social',
        youtube: 'https://www.youtube.com/@endorhq',
        linkedin: 'https://www.linkedin.com/company/endorhq',
      },
      sidebar: [
        {
          label: 'CLI',
          autogenerate: { directory: 'cli' },
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
    tailwind({
      applyBaseStyles: false
    })
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Endor Docs',
      customCss: [
        './src/tailwind.css'
      ],
      social: {
        github: 'https://github.com/endorhq',
      },
      sidebar: [
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

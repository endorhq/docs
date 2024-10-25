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
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
    svelte(),
    tailwind({
      applyBaseStyles: false
    })
  ],
});

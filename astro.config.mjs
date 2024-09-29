import { defineConfig, sharpImageService } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://links.shramko.dev/',
  output: 'server',

  image: {
    service: sharpImageService(),
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),

  integrations: [sitemap()],
});

import { defineConfig, sharpImageService } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  image: {
    service: sharpImageService(),
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
});

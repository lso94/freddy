// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://k-1andorra.com',
  integrations: [sitemap()],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  trailingSlash: 'always'
});

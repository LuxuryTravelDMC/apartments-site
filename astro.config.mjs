// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The real address, used for canonical links. Change it when the domain is known.
  site: 'https://example.com',
  // Clean addresses without a slash at the end: /thessaloniki
  trailingSlash: 'never',
  build: { format: 'file', assets: 'assets' },
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// base/site werden bei Integration-/Subpath-Deploys per Env gesetzt:
//   ASTRO_BASE=/integration/<slug>/  ASTRO_SITE=https://plaintext.ch  npm run build
// Auf Root (Production) bleiben sie leer.
const base = process.env.ASTRO_BASE || '/';
const site = process.env.ASTRO_SITE || undefined;

// https://astro.build/config
export default defineConfig({
  base,
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});

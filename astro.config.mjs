import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://skaredalenfau.no',
  // Referatsiden er slått sammen med møtesiden.
  redirects: { '/referater': '/moter/' },
});

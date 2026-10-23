import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Tomme felt i filene (f.eks. "kontaktperson:") leses som null, derfor nullable overalt.
const tekst = z.string().nullable().optional();

const arbeidsgrupper = defineCollection({
  loader: glob({ pattern: '*.md', base: './innhold/arbeidsgrupper' }),
  schema: z.object({
    navn: z.string(),
    kort: tekst,
    status: tekst,
    kontaktperson: tekst,
    lenke: tekst,
    rekkefolge: z.number().nullable().optional(),
  }),
});

const sider = defineCollection({
  loader: glob({ pattern: '*.md', base: './innhold' }),
  schema: z.object({
    tittel: z.string(),
    ingress: tekst,
    // forside
    bilde: tekst,
    // moter
    neste_mote: z.date().nullable().optional(),
    klokkeslett: tekst,
    sted: tekst,
    // kontakt
    facebook: tekst,
    epost: tekst,
    telefon_leder: tekst,
    // innspill
    vis: z.boolean().nullable().optional(),
    // smarttelefonfri skole
    pdf: tekst,
    // styret
    roller: z
      .array(z.object({ rolle: z.string(), navn: tekst }))
      .nullable()
      .optional(),
  }),
});

export const collections = { arbeidsgrupper, sider };

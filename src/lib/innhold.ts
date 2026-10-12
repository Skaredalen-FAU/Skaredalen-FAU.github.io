import { getCollection, getEntry } from 'astro:content';

export async function hentSide(id: string) {
  const side = await getEntry('sider', id);
  if (!side) throw new Error(`Fant ikke innhold/${id}.md`);
  return side;
}

export async function hentArbeidsgrupper() {
  const grupper = await getCollection('arbeidsgrupper');
  return grupper.sort(
    (a, b) =>
      (a.data.rekkefolge ?? 999) - (b.data.rekkefolge ?? 999) ||
      a.data.navn.localeCompare(b.data.navn, 'nb'),
  );
}

export function formaterDato(dato: Date) {
  return dato.toLocaleDateString('nb-NO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

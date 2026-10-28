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

// Alt som ikke gjenkjennes regnes som aktivt, så en skrivefeil ikke stopper publiseringen.
export function lesStatus(status?: string | null) {
  const tekst = (status ?? '').trim().toLowerCase();
  if (tekst.startsWith('avslutt')) return { navn: 'Avsluttet', klasse: 'avsluttet' };
  if (tekst.startsWith('ferdig')) return { navn: 'Ferdig', klasse: 'avsluttet' };
  if (tekst.includes('oppstart')) return { navn: 'Under oppstart', klasse: 'oppstart' };
  return { navn: 'Aktiv', klasse: '' };
}

export function erAvsluttet(status?: string | null) {
  return lesStatus(status).klasse === 'avsluttet';
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

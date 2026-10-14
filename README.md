# Skåredalen FAU – nettside

Nettsiden ligger på https://skaredalen-fau.github.io og oppdateres automatisk noen minutter etter at en endring er lagret her.

## Slik endrer du innhold

Alt innhold ligger i mappen [`innhold`](innhold). Du trenger ikke installere noe.

1. Åpne filen du vil endre (se tabellen under).
2. Trykk på blyanten øverst til høyre.
3. Gjør endringen.
4. Trykk **Commit changes** og bekreft.

| Vil du endre | Åpne filen |
|---|---|
| En arbeidsgruppe | `innhold/arbeidsgrupper/<gruppenavn>.md` |
| Neste møte og møteinfo | `innhold/moter.md` |
| Årshjulet | `innhold/aarshjul.md` |
| 17. mai | `innhold/17-mai.md` |
| Smarttelefonfri skole (veilederen) | `innhold/smarttelefonfri-skole.md` |
| Styret | `innhold/styret.md` |
| Vedtekter | `innhold/vedtekter.md` |
| E-post, telefon og Facebook-lenke | `innhold/kontakt.md` |
| Teksten på forsiden | `innhold/forside.md` |

## Arbeidsgrupper

Hver gruppe har sin egen fil. Øverst i filen, mellom de to linjene med `---`, står feltene som styrer kortet på oversiktssiden:

```
---
navn: Trygg skolevei
kort: Én setning om hva gruppen jobber med.
status: Aktiv
kontaktperson:
rekkefolge: 1
---
```

- **status** er `Aktiv`, `Under oppstart` eller `Avsluttet`. Avsluttede saker flyttes til en egen liste nederst på siden.
- **kontaktperson** fylles bare inn når personen har sagt ja til å stå med navn. Står feltet tomt, viser siden «Interessert i å bidra? Ta kontakt med FAU.»
- **lenke** brukes bare hvis gruppen har en egen side et annet sted på nettsiden. Da går kortet rett dit.
- Under den nederste `---` skriver du fritt. `## Overskrift` gir en overskrift, og linjer som starter med `- ` blir punktlister.

**Ny gruppe:** Gå til mappen `innhold/arbeidsgrupper`, trykk **Add file → Create new file**, gi den et navn som slutter på `.md` (små bokstaver, bindestrek i stedet for mellomrom, ikke æ/ø/å) og kopier oppsettet fra en av de andre.

## Personvern

Repoet og historikken er åpne for alle. Ikke legg inn navn på barn, telefonnumre, enkeltsaker eller referater. Referater deles i Facebook-gruppen.

## Hvis siden ikke oppdaterer seg

Se under fanen **Actions**. Et rødt kryss betyr som regel en skrivefeil i feltene øverst i en fil, for eksempel et manglende kolon. Den gamle versjonen av siden blir liggende til feilen er rettet.

## Teknisk

Siden er bygget med [Astro](https://astro.build) og publiseres med GitHub Pages. Lokalt: `npm install` og `npm run dev`.

# Arena Consult – første nettsideskisse

Selvstendig, statisk Next.js 16/React 19/TypeScript-prosjekt for en uforpliktende visuell skisse til Arena Consult Foredrag Event Treider. Offentlig testadresse: https://ltj54.github.io/arena-consult/. Dette er ikke en godkjent kundeside eller bestilling.

## Lokalt

Krever Node.js og npm. Kjør `npm install`, `npm run dev`, `npm run lint` og `npm run build` fra prosjektmappen. Åpne adressen som `npm run dev` viser, for eksempel `http://127.0.0.1:3002/`. `npm run build` lager statisk eksport i `out/` med base path `/arena-consult`.

`app/` inneholder siden, CSS og metadata. `docs/` inneholder intern kravspesifikasjon. `AVTALEUTKAST_NETTSIDE_OG_DRIFT.md` er internt og skal ikke sendes til kunde eller legges i offentlig repository.

## Publisering

GitHub Actions bygger og publiserer `out/` på GitHub Pages etter push til `https://github.com/ltj54/arena-consult`. Lokale utviklingskommandoer gjør aldri commit eller push. Nye endringer blir lokale inntil Lars uttrykkelig ber om en ny commit og push.

Ikke legg private e-poster, avtaler, fakturaer, kundebilder uten samtykke eller hemmeligheter i repository. Kontaktskjemaet åpner en ferdig utfylt melding i besøkendes e-postprogram; det sender ikke fra nettsiden. Ingen backend, analyse eller datalagring er opprettet.

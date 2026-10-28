export const services = [
  {
    id: "foredrag",
    title: "Foredrag og konferansiering",
    audience: "FOR ARRANGØRER",
    summary:
      "Arena Consult arbeider med management for foredragsholdere og konferansierer. Beskriv arrangementet, publikumet og rollen du trenger hjelp til å fylle.",
    detail:
      "Det kan være et foredrag i et større program, en konferansier for hele dagen eller en moderator for en samtale på scenen. Oppdraget og aktuelle personer avklares med Finn Jarl.",
    questions: [
      "Hva slags arrangement og publikum gjelder det?",
      "Når og hvor skal det foregå?",
      "Ser du etter foredragsholder, konferansier eller moderator?",
    ],
  },
  {
    id: "sponsor",
    title: "Sponsorarbeid og management",
    audience: "FOR UTØVERE OG SAMARBEIDSPARTNERE",
    summary:
      "Arena Consult arbeider med sponsorarbeid for toppidrettsutøvere og management for foredragsholdere og konferansierer.",
    detail:
      "En henvendelse kan komme fra en utøver som søker samarbeidspartnere, eller fra en virksomhet som vurderer et samarbeid i idretten. Beskriv hvem det gjelder og hva dere ønsker å undersøke.",
    questions: [
      "Hvem gjelder henvendelsen?",
      "Hva slags samarbeid ser dere for dere?",
      "Er det en tidsplan eller et konkret oppdrag?",
    ],
  },
  {
    id: "event",
    title: "Aktiviteter og event",
    audience: "FOR BUTIKKER OG KJØPESENTRE",
    summary:
      "Aktiviteter og konferansiering for butikker og kjøpesentre. Ta kontakt om en åpning, kampanje eller arrangementsdag.",
    detail:
      "Finn Jarl kan diskutere innholdet i et planlagt arrangement med deg. Stedet, målgruppen og det som allerede er bestemt, er nyttig å vite før dere snakker sammen.",
    questions: [
      "Hvor og når skal det skje?",
      "Hvem vil dere nå?",
      "Hva er planlagt, og hva trenger dere hjelp med?",
    ],
  },
  {
    id: "fotball",
    title: "Rådgivning i fotball",
    audience: "FOR SPILLERE, TRENERE OG KLUBBER",
    summary:
      "Finn Jarl tilbyr rådgivning for fotballspillere, trenere og klubber. Beskriv situasjonen og spørsmålet du vil ta opp.",
    detail:
      "Rådgivningen tar utgangspunkt i situasjonen du står i som spiller, trener eller klubb. Ta kontakt med Finn Jarl og fortell hva du ønsker å drøfte.",
    questions: [
      "Hvilken rolle har du i fotballen?",
      "Hva ønsker du råd om?",
      "Er det en frist som påvirker saken?",
    ],
  },
] as const;

export type Service = (typeof services)[number];

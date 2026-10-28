import ServiceTopics from "./ServiceTopics";

const sectionLinks = {
  top: "#topp",
  services: "#tjenester",
  finn: "#finn",
  contact: "#kontakt",
} as const;

function emailFor(subject: string) {
  return "mailto:finnjarl@outlook.com?subject=" + encodeURIComponent("Arena Consult: " + subject);
}

const services = [
  {
    audience: "FOR ARRANGØRER",
    title: "Foredrag og konferansiering",
    description:
      "Du har dato, sted og publikum. Hvem skal holde foredraget, lede programmet eller samle samtalen på scenen? Beskriv arrangementet og hva du trenger.",
    subject: "Foredrag eller konferansiering",
  },
  {
    audience: "FOR UTØVERE OG SAMARBEIDSPARTNERE",
    title: "Sponsorarbeid og management",
    description:
      "Arena Consult arbeider med sponsorarbeid for toppidrettsutøvere og management for folk som opptrer på scenen. Ta kontakt om en profil eller et mulig samarbeid.",
    subject: "Sponsorarbeid eller management",
  },
  {
    audience: "FOR BUTIKKER OG KJØPESENTRE",
    title: "Aktiviteter og event",
    description:
      "Planlegger du en åpning, kampanje eller aktivitetsdag? Fortell hvor det skal skje, hvem dere vil nå og hva slags aktivitet dere ser for dere.",
    subject: "Aktivitet i butikk eller kjøpesenter",
  },
  {
    audience: "FOR SPILLERE, TRENERE OG KLUBBER",
    title: "Rådgivning i fotball",
    description:
      "For deg som står overfor et valg i fotballen og ønsker å snakke med en rådgiver. Skriv noen linjer om situasjonen, så kan Finn Jarl vurdere om han er rett person å spørre.",
    subject: "Rådgivning i fotball",
  },
];

export default function Home() {
  return (
    <>
      <div className="preview-note">
        Uforpliktende visuell skisse. Innhold og uttrykk er ikke godkjent av Finn Jarl Treider.
      </div>

      <header className="site-header" id="topp">
        <a className="brand" href={sectionLinks.top} aria-label="Arena Consult, til toppen">
          <span className="brand-symbol" aria-hidden="true"><span /></span>
          <span>ARENA<br />CONSULT</span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href={sectionLinks.services}>Arbeidsområder</a>
          <a href={sectionLinks.finn}>Finn Jarl</a>
          <a href={sectionLinks.contact}>Kontakt</a>
        </nav>
        <a className="header-contact" href="tel:+4741627277">416 27 277 <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-main">
            <p className="hero-topline">ARENA CONSULT / FOREDRAG EVENT TREIDER</p>
            <h1 id="hero-title">Finn Jarl<br /><em>Treider.</em></h1>
            <div className="hero-bottom">
              <p>Foredrag og konferansiering. Sponsorarbeid for utøvere. Aktiviteter i butikk og kjøpesenter. Rådgivning i fotball.</p>
              <a href={sectionLinks.services} className="round-link" aria-label="Se arbeidsområdene"><span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <ServiceTopics />
        </section>

        <section className="areas" id="tjenester" aria-labelledby="areas-title">
          <div className="section-index"><span>ARBEIDSOMRÅDER</span><span className="index-line" /></div>
          <div className="areas-heading">
            <h2 id="areas-title">Hva gjelder<br />henvendelsen?</h2>
            <p>Beskriv det du planlegger eller vurderer. Det er nok til å starte en samtale.</p>
          </div>
          <div className="area-list">
            {services.map((service) => (
              <article className="area-row" key={service.title}>
                <div className="area-title">
                  <span>{service.audience}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <a
                  href={emailFor(service.subject)}
                  aria-label={`Skriv til Finn Jarl om ${service.subject.toLowerCase()}`}
                >
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="intro" id="finn" aria-labelledby="intro-title">
          <div className="section-index"><span>OM FINN JARL</span><span className="index-line" /></div>
          <div className="intro-body">
            <h2 id="intro-title">Finn Jarl er<br /><i>kontaktpersonen.</i></h2>
            <div className="intro-detail">
              <div>
                <p>Finn Jarl Treider er rådgiver og arbeider også med foredragsholdere, idrettsutøvere og artister i Treider Vivliotech. Der presenteres han med over 30 års erfaring.</p>
                <p>Arena Consult er hans egen virksomhet for foredrag, event, sponsorarbeid og rådgivning i fotball. Du kan ta kontakt med ham direkte.</p>
                <a className="underlined-link" href="https://treidervivliotech.no/nb/vart-team/" target="_blank" rel="noopener noreferrer">Se Finn Jarl hos Treider Vivliotech <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt" aria-labelledby="contact-title">
          <div className="section-index"><span>KONTAKT</span><span className="index-line" /></div>
          <div className="contact-content">
            <div><h2 id="contact-title">Kontakt<br /><i>Finn Jarl.</i></h2></div>
            <div className="contact-actions">
              <p>Oppgi gjerne dato og sted hvis det gjelder et arrangement. For andre henvendelser holder det med noen linjer om hva du ønsker å drøfte.</p>
              <a href="tel:+4741627277" className="contact-primary">416 27 277 <span aria-hidden="true">↗</span></a>
              <a href="mailto:finnjarl@outlook.com?subject=Foresp%C3%B8rsel%20til%20Arena%20Consult" className="contact-secondary">finnjarl@outlook.com <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="contact-bottom"><span>ARENA CONSULT</span><span>FOREDRAG · EVENT · SPORT</span></div>
        </section>
      </main>

      <footer>
        <span>Arena Consult Foredrag Event Treider</span>
        <span>Org.nr. 938 698 171</span>
        <a href={sectionLinks.top}>Til toppen ↑</a>
      </footer>
    </>
  );
}

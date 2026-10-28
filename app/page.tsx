import ServiceTopics from "./ServiceTopics";
import ContactForm from "./ContactForm";

const sectionLinks = {
  top: "#topp",
  services: "#tjenester",
  finn: "#finn",
  contact: "#kontakt",
} as const;

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
            <p className="hero-topline">ARENA CONSULT / FOREDRAG · EVENT · SPORT</p>
            <h1 id="hero-title">Finn Jarl<br /><em>Treider.</em></h1>
            <div className="hero-bottom">
              <p>Skal du finne en foredragsholder, planlegge aktivitet i et kjøpesenter, drøfte et sponsorsamarbeid eller ta opp en sak i fotballen? Finn Jarl Treider er kontaktpersonen i Arena Consult.</p>
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
                  href={sectionLinks.contact}
                  aria-label={`Gå til kontaktskjema for ${service.subject.toLowerCase()}`}
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
                <p>Finn Jarl Treider står som innehaver av Arena Consult. Det er også ham du kontakter om foredrag, event, sponsorarbeid og rådgivning i fotball.</p>
                <p>Fortell kort hva henvendelsen gjelder, så kan dere avklare om han er rett person å snakke med.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt" aria-labelledby="contact-title">
          <div className="section-index"><span>KONTAKT</span><span className="index-line" /></div>
          <div className="contact-content">
            <div><h2 id="contact-title">Kontakt<br /><i>Finn Jarl.</i></h2></div>
            <div className="contact-actions">
              <ContactForm />
              <div className="contact-direct">
                <span>ELLER KONTAKT FINN JARL DIREKTE</span>
                <a href="tel:+4741627277">416 27 277</a>
                <a href="mailto:finnjarl@outlook.com">finnjarl@outlook.com</a>
              </div>
            </div>
          </div>
          <div className="contact-bottom"><span>ARENA CONSULT</span><span>FOREDRAG · EVENT · SPORT</span></div>
        </section>
      </main>

      <footer>
        <span>Arena Consult</span>
        <span>Registrert som Arena Consult Foredrag Event Treider · Org.nr. 938 698 171</span>
        <a href={sectionLinks.top}>Til toppen ↑</a>
      </footer>
    </>
  );
}

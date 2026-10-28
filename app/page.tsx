import ServiceDialog from "./ServiceDialog";
import ContactForm from "./ContactForm";
import { services } from "./services";

const sectionLinks = {
  top: "#topp",
  services: "#tjenester",
  contact: "#kontakt",
} as const;

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
              <p>Arena Consult er Finn Jarl Treiders virksomhet for foredrag, konferansiering, sponsorarbeid, eventaktiviteter og rådgivning i fotball. Kontakt ham direkte om oppdraget ditt.</p>
              <a href={sectionLinks.services} className="round-link" aria-label="Se arbeidsområdene"><span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <aside className="hero-side" aria-label="Arbeidsområder">
            <p className="side-rule">GÅ TIL ARBEIDSOMRÅDE</p>
            <ul className="hero-service-list">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={"#" + service.id}><span>{service.title}</span><span aria-hidden="true">↓</span></a>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="areas" id="tjenester" aria-labelledby="areas-title">
          <div className="section-index"><span>ARBEIDSOMRÅDER</span><span className="index-line" /></div>
          <div className="areas-heading">
            <h2 id="areas-title">Hva gjelder<br />henvendelsen?</h2>
            <p>Beskriv det du planlegger eller vurderer. Det er nok til å starte en samtale.</p>
          </div>
          <div className="area-list">
            {services.map((service) => (
              <article className="area-row" id={service.id} key={service.id}>
                <div className="area-title">
                  <span>{service.audience}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.summary}</p>
                <ServiceDialog service={service} />
              </article>
            ))}
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

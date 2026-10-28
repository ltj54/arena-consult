const services = [
  { number: "01", title: "Foredrag & konferansiering", text: "En tydelig inngang for arrangører som trenger en stemme på scenen, et tema eller en trygg konferansier." },
  { number: "02", title: "Sponsorarbeid & management", text: "Et sted å forklare hvordan utøvere, profiler og samarbeidspartnere kan finne en felles retning." },
  { number: "03", title: "Aktiviteter som engasjerer", text: "Forslag til opplevelser og møteplasser for butikker, kjøpesentre og arrangementer." },
  { number: "04", title: "Rådgivning i fotball", text: "En egen vei inn for trenere, spillere og klubber som ønsker å undersøke et samarbeid." },
];

export default function Home() {
  return (
    <>
      <div className="preview-banner">Uforpliktende nettsideskisse · Innhold og uttrykk er ikke godkjent av virksomheten</div>
      <header className="site-header" id="topp">
        <a className="brand" href="#topp" aria-label="Arena Consult, til toppen"><span className="brand-mark">A<span>.</span></span><span>ARENA<br />CONSULT</span></a>
        <nav aria-label="Hovedmeny"><a href="#retning">Retning</a><a href="#omrader">Områder</a><a href="#kontakt">Kontakt</a></nav>
        <a className="header-cta" href="#kontakt">Start en samtale <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> FOREDRAG · EVENT · RÅDGIVNING</p>
            <h1 id="hero-title">Gode møter<br />starter med <em>mennesker.</em></h1>
            <p className="hero-intro">En mulig ny arena for foredrag, konferansiering, sponsorarbeid og rådgivning — samlet rundt det som skaper kontakt og bevegelse.</p>
            <div className="hero-actions"><a className="button button-light" href="#omrader">Utforsk mulighetene <span aria-hidden="true">↗</span></a><a className="text-link" href="#kontakt">Ta kontakt <span aria-hidden="true">→</span></a></div>
            <p className="hero-note">Første skisse for Arena Consult Foredrag Event Treider</p>
          </div>
          <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="spotlight" /><div className="stage-line" /><span className="art-word">ARENA</span><span className="art-caption">Ideer. Mennesker. Muligheter.</span></div>
        </section>

        <section className="statement" id="retning"><p className="section-kicker">EN TYDELIG EGEN PROFIL</p><div><h2>Én side. Flere innganger.<br /><span>En klar vei videre.</span></h2><p>Den nye siden bør ikke forsøke å være alt på én gang. Den bør hjelpe riktig besøkende å kjenne seg igjen, forstå hva et samarbeid kan handle om og enkelt starte en samtale. Hvilke områder som skal få størst plass, bestemmer Finn.</p></div></section>

        <section className="services" id="omrader"><div className="section-heading"><div><p className="section-kicker">MULIGE TJENESTEOMRÅDER</p><h2>Velg din inngang.</h2></div><p>Fire retninger fra virksomhetens registrerte aktivitet. Tekst, prioritering og eksempler avklares før en endelig side lages.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number} / 04</span><span className="service-arrow" aria-hidden="true">↗</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>

        <section className="feature"><p className="section-kicker">DET SOM GJØR FORSKJELLEN</p><h2>Fra «hva gjør du?»<br />til <em>«dette trenger vi».</em></h2><p>Den ferdige siden kan vise utvalgte temaer, erfaringer, bilder og eksempler — bare materiale Finn selv ønsker å presentere og har godkjent. Målet er relevante henvendelser, ikke mest mulig tekst.</p><div className="feature-rule"><span>01 · Forstå tilbudet</span><span>02 · Se mulighetene</span><span>03 · Ta kontakt</span></div></section>

        <section className="contact" id="kontakt"><div><p className="section-kicker">NESTE STEG</p><h2>Hvilken retning<br />skal vi ta?</h2></div><div className="contact-copy"><p>Dette er en første visuell tanke. En ferdig løsning trenger Finns valg av hovedfokus, innhold og uttrykk. Herfra kan siden gjøres enklere, spissere eller mer personlig.</p><a className="button button-dark" href="mailto:finnjarl@outlook.com?subject=Foresp%C3%B8rsel%20om%20Arena%20Consult">Send en forespørsel <span aria-hidden="true">↗</span></a><p className="contact-note">E-post åpnes i ditt eget e-postprogram. Nettsiden sender ikke skjema eller lagrer opplysninger.</p></div></section>
      </main>
      <footer><span>Arena Consult Foredrag Event Treider · Org.nr. 938 698 171</span><span>Uforpliktende forslag · 2026</span></footer>
    </>
  );
}

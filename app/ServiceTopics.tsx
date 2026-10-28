"use client";

import { useEffect, useRef, useState } from "react";

const topics = [
  {
    title: "Foredrag",
    description:
      "Arena Consult er registrert med management for foredragsholdere. Fortell Finn Jarl hva slags foredrag du ser etter, så kan dere avklare aktuelle temaer og muligheter.",
    details: [
      "Hva slags publikum og tema ser du for deg?",
      "Når og hvor skal foredraget holdes?",
      "Ønsker du ett foredrag eller en del av et større program?",
    ],
    subject: "Foredrag",
  },
  {
    title: "Konferansiering",
    description:
      "Arena Consult er registrert med management for konferansierer. En konferansier kan lede publikum gjennom programmet og introdusere bidragsytere; beskriv opplegget du planlegger for Finn Jarl.",
    details: [
      "Hva slags arrangement planlegger du?",
      "Hvor lenge varer programmet, og hvor mange skal bidra?",
      "Trenger du en konferansier, en moderator eller begge deler?",
    ],
    subject: "Konferansiering",
  },
  {
    title: "Sponsorarbeid",
    description:
      "Arena Consult har sponsorarbeid for toppidrettsutøvere som en del av sin registrerte aktivitet. Det kan gjelde en utøver som søker samarbeidspartnere, eller en virksomhet som ønsker å drøfte et samarbeid i idretten.",
    details: [
      "Hvem gjelder henvendelsen?",
      "Hvilken type samarbeid vurderer dere?",
      "Finnes det en tidsplan eller et konkret arrangement?",
    ],
    subject: "Sponsorarbeid",
  },
  {
    title: "Eventaktiviteter",
    description:
      "Arena Consult er registrert med aktiviteter og konferansiering for butikker og kjøpesentre. Det gir en inngang for deg som planlegger en åpning, kampanje eller aktivitetsdag og vil diskutere innholdet med Finn Jarl.",
    details: [
      "Hvilket sted og hvilken dato gjelder det?",
      "Hvem ønsker dere å nå?",
      "Hva er allerede planlagt, og hva trenger dere hjelp til?",
    ],
    subject: "Eventaktiviteter",
  },
  {
    title: "Fotballrådgivning",
    description:
      "Arena Consult er registrert med rådgivning for fotballspillere, trenere og klubber. Beskriv situasjonen kort, så kan Finn Jarl si om dette er noe han kan bidra med.",
    details: [
      "Er du spiller, trener eller representerer du en klubb?",
      "Hvilket spørsmål eller veivalg ønsker du å drøfte?",
      "Er det en frist som er viktig å kjenne til?",
    ],
    subject: "Fotballrådgivning",
  },
] as const;

type Topic = (typeof topics)[number];

function emailFor(subject: string) {
  return "mailto:finnjarl@outlook.com?subject=" + encodeURIComponent("Arena Consult: " + subject);
}

export default function ServiceTopics() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  useEffect(() => {
    if (!activeTopic) return;
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
  }, [activeTopic]);

  return (
    <>
      <aside className="hero-side" aria-label="Arbeidsområder">
        <p className="side-rule">VELG ET OMRÅDE FOR DETALJER</p>
        <ul className="hero-service-list">
          {topics.map((topic) => (
            <li key={topic.title}>
              <button type="button" onClick={() => setActiveTopic(topic)} aria-haspopup="dialog">
                <span>{topic.title}</span><span aria-hidden="true">+</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <dialog
        ref={dialogRef}
        className="service-dialog"
        aria-labelledby="service-dialog-title"
        aria-describedby="service-dialog-description"
        onClose={() => setActiveTopic(null)}
      >
        {activeTopic && (
          <>
          <button
            type="button"
            className="service-dialog-dismiss"
            aria-label="Lukk vinduet"
            tabIndex={-1}
            onClick={() => dialogRef.current?.close()}
          />
          <div className="service-dialog-inner">
            <div className="service-dialog-top">
              <span>ARENA CONSULT / ARBEIDSOMRÅDE</span>
              <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Lukk vinduet">×</button>
            </div>
            <h2 id="service-dialog-title">{activeTopic.title}</h2>
            <p id="service-dialog-description" className="service-dialog-description">{activeTopic.description}</p>
            <div className="service-dialog-details">
              <h3>Fint å ha med i henvendelsen</h3>
              <ul>{activeTopic.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </div>
            <a
              className="service-dialog-cta"
              href={emailFor(activeTopic.subject)}
            >
              Skriv til Finn Jarl <span aria-hidden="true">↗</span>
            </a>
          </div>
          </>
        )}
      </dialog>
    </>
  );
}

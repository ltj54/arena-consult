"use client";

import { useRef } from "react";
import type { Service } from "./services";

const contactHref = "#kontakt";

export default function ServiceDialog({ service }: Readonly<{ service: Service }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = "dialog-title-" + service.id;
  const descriptionId = "dialog-description-" + service.id;

  return (
    <>
      <button
        className="area-detail-button"
        type="button"
        aria-haspopup="dialog"
        aria-label={"Les mer om " + service.title.toLowerCase()}
        onClick={() => dialogRef.current?.showModal()}
      >
        <span aria-hidden="true">+</span>
      </button>
      <dialog
        ref={dialogRef}
        className="service-dialog"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
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
          <h2 id={titleId}>{service.title}</h2>
          <p id={descriptionId} className="service-dialog-description">{service.detail}</p>
          <div className="service-dialog-details">
            <h3>Fint å ha med i henvendelsen</h3>
            <ul>{service.questions.map((question) => <li key={question}>{question}</li>)}</ul>
          </div>
          <a
            className="service-dialog-cta"
            href={contactHref}
            onClick={() => dialogRef.current?.close()}
          >
            Gå til kontaktskjema <span aria-hidden="true">↓</span>
          </a>
        </div>
      </dialog>
    </>
  );
}

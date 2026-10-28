"use client";

import { useState, type SubmitEvent } from "react";
import { services } from "./services";

const recipient = "finnjarl@outlook.com";

function formValue(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export default function ContactForm() {
  const [emailOpened, setEmailOpened] = useState(false);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = formValue(form, "service");
    const details = [
      ["Navn", formValue(form, "name")],
      ["Bedrift", formValue(form, "business")],
      ["E-post", formValue(form, "email")],
      ["Telefon", formValue(form, "phone")],
      ["Hva gjelder det", service],
      ["Dato", formValue(form, "date")],
      ["Sted", formValue(form, "place")],
      ["Beskrivelse", formValue(form, "message")],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => label + ": " + value)
      .join("\n\n");

    setEmailOpened(true);
    window.location.href =
      "mailto:" + recipient +
      "?subject=" + encodeURIComponent("Arena Consult: " + service) +
      "&body=" + encodeURIComponent(details);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="contact-form-intro">Fortell kort hva henvendelsen gjelder. Felter merket * må fylles ut.</p>
      <div className="contact-form-grid">
        <label><span>Navn *</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Bedrift</span><input name="business" type="text" autoComplete="organization" /></label>
        <label><span>E-post *</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Telefon</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label className="form-wide"><span>Hva gjelder det? *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Velg område</option>
            {services.map((service) => <option key={service.id}>{service.title}</option>)}
          </select>
        </label>
        <label><span>Dato, hvis relevant</span><input name="date" type="date" /></label>
        <label><span>Sted, hvis relevant</span><input name="place" type="text" /></label>
        <label className="form-wide"><span>Beskriv henvendelsen *</span>
          <textarea name="message" rows={5} required />
        </label>
      </div>
      <button className="contact-form-submit" type="submit">Send <span aria-hidden="true">↗</span></button>
      {emailOpened && <output className="contact-form-status" aria-live="polite">Kontroller e-posten som åpnes, og trykk Send i e-postprogrammet.</output>}
    </form>
  );
}

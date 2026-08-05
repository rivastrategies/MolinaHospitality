"use client";

import { FormEvent, useState } from "react";

export function ConsultationForm() {
  const [status, setStatus] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("This form is ready to connect to your preferred CRM or email service. No information has been sent.");
  }
  return (
    <form className="consultation-form" onSubmit={handleSubmit} aria-describedby="form-note form-status">
      <div className="form-grid">
        <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required /></label>
        <label>Restaurant <input name="restaurant" autoComplete="organization" /></label>
        <label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required /></label>
        <label>Phone <input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Number of locations <input name="locations" inputMode="numeric" /></label>
        <label>Preferred contact method <select name="preferredContact" defaultValue=""><option value="" disabled>Select one</option><option>Email</option><option>Phone</option><option>Either</option></select></label>
        <label className="form-wide">Primary challenge <select name="challenge" defaultValue=""><option value="" disabled>Select the closest fit</option><option>Operational consistency</option><option>Leadership and accountability</option><option>Profitability and costs</option><option>Growth and multi-unit systems</option><option>Turnaround or stabilization</option><option>New restaurant opening</option><option>Other</option></select></label>
        <label className="form-wide">Tell us what is happening <span aria-hidden="true">*</span><textarea name="message" rows={6} required /></label>
      </div>
      <p id="form-note" className="form-note">Fields marked * are required. This consultation form is staged for backend integration.</p>
      <button className="button" type="submit">Request a Consultation <span aria-hidden="true">→</span></button>
      <p id="form-status" className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}

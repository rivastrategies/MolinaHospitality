export function ConsultationForm() {
  return (
    <form className="consultation-form" aria-describedby="form-note">
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
      <p id="form-note" className="form-note">Online consultation requests are being activated. Until MHG confirms its receiving inbox, this form will not collect or transmit information.</p>
      <button className="button" type="button" disabled>Online Requests Opening Soon</button>
    </form>
  );
}

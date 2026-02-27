export function renderContact() {
    return `
    <section class="hero fade-in" style="padding-top: 15vh; padding-bottom: 10vh;">
      <div class="container">
        <h2 class="micro-heading" data-i18n="contact_kicker">Strategic Inquiries</h2>
        <div class="grid-2">
          <div>
            <h1 data-i18n="contact_headline" style="max-width: 600px; margin-bottom: 2rem;">MT & MNA Ventures engages selectively with founders, operators, institutional partners, and aligned enterprises.</h1>
            
            <div style="margin-top: 4rem;">
              <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 1rem;" data-i18n="contact_locations_label">Locations</span>
              <ul style="list-style: none; margin: 0; padding: 0;">
                <li data-i18n="contact_loc_1" style="padding-left: 0;">Dubai</li>
                <li data-i18n="contact_loc_2" style="padding-left: 0;">Germany</li>
                <li data-i18n="contact_loc_3" style="padding-left: 0;">United States</li>
              </ul>
            </div>
            
            <div style="margin-top: 3rem;">
              <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;" data-i18n="contact_email_label">Email</span>
              <a href="mailto:connect@mt-mna.com" style="color: var(--text-primary); text-decoration: none; font-size: 1.25rem;">connect@mt-mna.com</a>
            </div>
          </div>
          
          <div>
            <div class="card" style="padding: 3rem; background: var(--secondary-bg);">
              <form class="contact-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
                <input type="text" data-i18n="form_name" placeholder="Name" style="width: 100%; padding: 1rem; background: var(--primary-bg); border: 1px solid var(--divider); color: var(--text-primary); font-family: 'Inter', sans-serif;">
                <input type="text" data-i18n="form_company" placeholder="Company" style="width: 100%; padding: 1rem; background: var(--primary-bg); border: 1px solid var(--divider); color: var(--text-primary); font-family: 'Inter', sans-serif;">
                <div style="display: flex; gap: 1.5rem;">
                  <input type="text" data-i18n="form_position" placeholder="Position" style="width: 100%; padding: 1rem; background: var(--primary-bg); border: 1px solid var(--divider); color: var(--text-primary); font-family: 'Inter', sans-serif;">
                  <input type="text" data-i18n="form_institution" placeholder="Institution" style="width: 100%; padding: 1rem; background: var(--primary-bg); border: 1px solid var(--divider); color: var(--text-primary); font-family: 'Inter', sans-serif;">
                </div>
                <textarea data-i18n="form_message" placeholder="Message" rows="5" style="width: 100%; padding: 1rem; background: var(--primary-bg); border: 1px solid var(--divider); color: var(--text-primary); font-family: 'Inter', sans-serif; resize: none;"></textarea>
                <div style="text-align: right; margin-top: 1rem;">
                  <button type="submit" data-i18n="form_submit" style="background: transparent; border: 1px solid var(--accent-blue); color: var(--text-primary); padding: 1rem 3rem; text-transform: uppercase; letter-spacing: 0.1em; font-family: 'Inter', sans-serif; cursor: pointer; transition: all 0.3s ease;">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

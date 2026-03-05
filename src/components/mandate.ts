export function renderMandate() {
  return `
    <section class="alt-bg fade-in" style="animation-delay: 0.1s; background-color: #ffffff; position: relative; z-index: 10;">
      <div class="container">
        <!-- Logo Strip -->
        <div style="display: flex; align-items: center; justify-content: center; gap: 4rem; margin-bottom: 4rem; padding: 2rem 0; border-bottom: 1px solid var(--divider);">
          <img src="/logo-uc.png" alt="United Creatives" style="height: 80px; object-fit: contain; mix-blend-mode: multiply; opacity: 0.9;">
          <img src="/logo-ul.png" alt="United Law" style="height: 80px; object-fit: contain; mix-blend-mode: multiply; opacity: 0.9;">
          <img src="/logo-otc.png" alt="OTC Technologies" style="height: 80px; object-fit: contain; mix-blend-mode: multiply; opacity: 0.9;">
        </div>
        <span class="micro-heading" data-i18n="mandate_kicker">Our Mandate</span>
        <h2 class="reveal-text" data-i18n="mandate_headline" style="margin-bottom: 3rem; max-width: 900px">We operate beyond capital deployment.<br/>We design enterprise architecture.</h2>
        <div class="grid-2">
          <div>
            <p data-i18n="mandate_p1">MT & MNA Ventures identifies structural opportunity within emerging and evolving markets.</p>
            <p data-i18n="mandate_p2">Where alignment exists, we originate enterprises.<br/>Where potential is present, we acquire and elevate.</p>
          </div>
          <div>
            <p data-i18n="mandate_p3" style="color: var(--text-primary); font-weight: 400">Our mandate is clear:<br/>To design businesses positioned for durability, institutional alignment, and generational scale.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

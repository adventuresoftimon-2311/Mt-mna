export function renderFramework() {
  return `
    <section class="fade-in" style="padding-bottom: 15vh;">
      <div class="container" style="padding-top: var(--spacing-section); padding-bottom: 4rem;">
        <span class="micro-heading" data-i18n="framework_kicker">Institutional Enterprise Framework</span>
        <h2 data-i18n="framework_headline" style="margin-bottom: 0;">Our platform operates through three integrated pillars.</h2>
      </div>
        
      <div class="container">
        <div class="grid-3" style="gap: 2rem;">
        
          <!-- Pillar 1 -->
          <div class="card" style="width: 100%; background: var(--secondary-bg);">
            <h3 data-i18n="framework_1_title" style="font-size: 1.25rem; margin-bottom: 1.5rem;">I. Enterprise Design & Origination</h3>
            <p data-i18n="framework_1_p1" style="color: var(--text-secondary);">We identify high-conviction opportunities and design enterprises positioned for long-term relevance.<br/><br/>This includes:</p>
            <div class="expandable-wrapper">
              <div>
                <ul style="margin: 1.5rem 0; color: var(--text-secondary);">
                  <li data-i18n="framework_1_l1">Strategic market positioning</li>
                  <li data-i18n="framework_1_l2">Governance architecture</li>
                  <li data-i18n="framework_1_l3">Capital structuring</li>
                  <li data-i18n="framework_1_l4">Technology integration</li>
                  <li data-i18n="framework_1_l5">Brand foundation development</li>
                </ul>
                <p data-i18n="framework_1_p2" style="color: var(--text-primary)">Every enterprise is engineered for resilience from inception.</p>
              </div>
            </div>
            <button class="show-more-btn" data-i18n="show_more">+ Show More</button>
          </div>

          <!-- Pillar 2 -->
          <div class="card" style="width: 100%; background: var(--secondary-bg);">
            <h3 data-i18n="framework_2_title" style="font-size: 1.25rem; margin-bottom: 1.5rem;">II. Strategic Acquisition & Enterprise Elevation</h3>
            <p data-i18n="framework_2_p1" style="color: var(--text-secondary);">We acquire high-potential companies with foundational strength and scalable opportunity.<br/><br/>We elevate them through:</p>
            <div class="expandable-wrapper">
              <div>
                <ul style="margin: 1.5rem 0; color: var(--text-secondary);">
                  <li data-i18n="framework_2_l1">Operational refinement</li>
                  <li data-i18n="framework_2_l2">Leadership alignment</li>
                  <li data-i18n="framework_2_l3">Infrastructure integration</li>
                  <li data-i18n="framework_2_l4">Institutional positioning</li>
                </ul>
                <p data-i18n="framework_2_p2" style="color: var(--text-primary)">We transform promising businesses into enduring enterprises.</p>
              </div>
            </div>
            <button class="show-more-btn" data-i18n="show_more">+ Show More</button>
          </div>

          <!-- Pillar 3 -->
          <div class="card" style="width: 100%; background: var(--secondary-bg);">
            <h3 data-i18n="framework_3_title" style="font-size: 1.25rem; margin-bottom: 1.5rem;">III. Structural Integration & Scalable Expansion</h3>
            <p data-i18n="framework_3_p1" style="color: var(--text-secondary);">Scale without structure is fragile.<br/><br/>We embed:</p>
            <div class="expandable-wrapper">
              <div>
                <ul style="margin: 1.5rem 0; color: var(--text-secondary);">
                  <li data-i18n="framework_3_l1">Scalable technical systems</li>
                  <li data-i18n="framework_3_l2">Governance frameworks</li>
                  <li data-i18n="framework_3_l3">Operational discipline</li>
                  <li data-i18n="framework_3_l4">Strategic oversight</li>
                </ul>
                <p data-i18n="framework_3_p2" style="color: var(--text-primary)">Expansion is deliberate.<br/>Endurance is intentional.</p>
              </div>
            </div>
            <button class="show-more-btn" data-i18n="show_more">+ Show More</button>
          </div>
          
        </div>
      </div>
    </section>
  `;
}

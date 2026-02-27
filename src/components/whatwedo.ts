export function renderWhatWeDo() {
  return `
    <section class="hero fade-in" style="padding-top: 15vh; padding-bottom: 10vh;">
      <div class="container">
        <h2 class="micro-heading" data-i18n="wwd_kicker">What We Do</h2>
        <h1 data-i18n="wwd_headline" style="max-width: 900px; margin-bottom: 4rem;">Designing and elevating institutional enterprises.</h1>
        
        <div class="grid-2">
          <!-- Origination -->
          <div class="card" style="background: transparent; border: none; padding: 0; border-top: 1px solid var(--divider); padding-top: 2rem; border-radius: 0; box-shadow: none;">
            <h3 data-i18n="wwd_origination_title">Enterprise Origination</h3>
            <p data-i18n="wwd_origination_p1" style="color: var(--text-primary)">We design enterprises in sectors aligned with structural and technological evolution.</p>
            <div class="expandable-wrapper">
              <div>
                <p data-i18n="wwd_origination_p2">From governance to capital structure to system integration, each enterprise is architected for sustainability.</p>
              </div>
            </div>
            <button class="show-more-btn" data-i18n="show_more">+ Show More</button>
          </div>
          
          <!-- Acquisition -->
          <div class="card" style="background: transparent; border: none; padding: 0; border-top: 1px solid var(--divider); padding-top: 2rem; border-radius: 0; box-shadow: none;">
             <h3 data-i18n="wwd_acquisition_title">Strategic Acquisition</h3>
             <p data-i18n="wwd_acquisition_p1" style="color: var(--text-primary)">We identify companies with strong foundations and untapped structural potential.</p>
             <div class="expandable-wrapper">
               <div>
                 <p data-i18n="wwd_acquisition_p2">Through disciplined integration and strategic repositioning, we elevate them into institutional-ready enterprises.</p>
               </div>
             </div>
             <button class="show-more-btn" data-i18n="show_more">+ Show More</button>
          </div>
          
          <!-- Capital -->
          <div class="card" style="background: transparent; border: none; padding: 0; border-top: 1px solid var(--divider); padding-top: 2rem; border-radius: 0; box-shadow: none;">
             <h3 data-i18n="wwd_capital_title">Capital Alignment</h3>
             <p data-i18n="wwd_capital_p1" style="color: var(--text-primary)">We deploy capital selectively in alignment with structural readiness and long-term enterprise viability.</p>
             <div class="expandable-wrapper">
               <div>
                 <p data-i18n="wwd_capital_p2" style="font-weight: 500;">Capital supports architecture — it does not replace it.</p>
               </div>
             </div>
             <button class="show-more-btn" data-i18n="show_more">+ Show More</button>
          </div>
          
          <!-- Infrastructure -->
          <div class="card" style="background: transparent; border: none; padding: 0; border-top: 1px solid var(--divider); padding-top: 2rem; border-radius: 0; box-shadow: none;">
             <h3 data-i18n="wwd_infra_title">Infrastructure & Systems</h3>
             <p data-i18n="wwd_infra_p1" style="color: var(--text-primary)">Through internal capabilities and OTC Tech, we ensure every enterprise operates on a scalable, resilient foundation.</p>
             <div class="expandable-wrapper">
               <div>
                 <p data-i18n="wwd_infra_p2" style="margin-top: 1rem;">This includes:</p>
                 <ul style="margin-bottom: 2rem;">
                   <li data-i18n="wwd_infra_l1">Technology backbone</li>
                   <li data-i18n="wwd_infra_l2">Governance integration</li>
                   <li data-i18n="wwd_infra_l3">Operational frameworks</li>
                   <li data-i18n="wwd_infra_l4">Strategic oversight</li>
                 </ul>
                 <p data-i18n="wwd_infra_p3" style="font-weight: 500; font-size: 1.1rem; color: var(--text-primary);">Without infrastructure, scale cannot endure.</p>
               </div>
             </div>
             <button class="show-more-btn" data-i18n="show_more">+ Show More</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

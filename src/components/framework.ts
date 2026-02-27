export function renderFramework() {
  return `
    <section class="fade-in" style="animation-delay: 0.2s; padding: 0;">
      <div class="container" style="padding-top: var(--spacing-section); padding-bottom: 2rem;">
        <span class="micro-heading" data-i18n="framework_kicker">Institutional Enterprise Framework</span>
        <h2 data-i18n="framework_headline" style="margin-bottom: 0;">Our platform operates through three integrated pillars.</h2>
      </div>
        
      <div class="horizontal-container" id="framework-scroll-container" style="position: relative; overflow: hidden;">
        <!-- Static Dubai Background -->
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0;">
          <img src="https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=2000" alt="Dubai Architecture" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.35;">
          <div style="position: absolute; inset: 0; background: linear-gradient(100deg, var(--primary-bg) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.2) 100%);"></div>
        </div>

        <div class="horizontal-wrapper" id="framework-scroll-wrapper" style="position: relative; z-index: 1;">
        
          <!-- Pillar 1 -->
          <div class="horizontal-panel" style="position: relative; justify-content: flex-start; padding: 0 10vw;">
            <!-- Huge Background Text (Right Side) -->
            <div style="position: absolute; right: 8vw; top: 50%; transform: translateY(-50%); text-align: right; pointer-events: none; z-index: 0;">
              <span style="display: block; font-size: clamp(100px, 15vw, 250px); font-weight: 800; color: rgba(15, 23, 42, 0.05); line-height: 0.8; letter-spacing: -0.02em;">01</span>
              <span style="display: block; font-size: clamp(30px, 4vw, 60px); font-weight: 600; color: rgba(15, 23, 42, 0.15); text-transform: uppercase;">Design</span>
              <p style="max-width: 400px; margin-left: auto; margin-top: 2rem; color: var(--text-secondary); font-size: 1.1rem; text-align: right; opacity: 0.8;">Building foundational architecture for durable market leadership.</p>
            </div>
            
            <div class="card" style="width: 100%; max-width: 550px; position: relative; z-index: 1; background: rgba(255,255,255,0.8); backdrop-filter: blur(12px);">
              <h3 data-i18n="framework_1_title" style="font-size: 1.25rem; min-height: 50px;">I. Enterprise Design & Origination</h3>
              <p data-i18n="framework_1_p1">We identify high-conviction opportunities and design enterprises positioned for long-term relevance.<br/><br/>This includes:</p>
              <div class="expandable-wrapper">
                <div>
                  <ul style="margin: 1.5rem 0">
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
          </div>

          <!-- Pillar 2 -->
          <div class="horizontal-panel" style="position: relative; justify-content: flex-start; padding: 0 10vw;">
            <!-- Huge Background Text (Right Side) -->
            <div style="position: absolute; right: 8vw; top: 50%; transform: translateY(-50%); text-align: right; pointer-events: none; z-index: 0;">
              <span style="display: block; font-size: clamp(100px, 15vw, 250px); font-weight: 800; color: rgba(15, 23, 42, 0.05); line-height: 0.8; letter-spacing: -0.02em;">02</span>
              <span style="display: block; font-size: clamp(30px, 4vw, 60px); font-weight: 600; color: rgba(15, 23, 42, 0.15); text-transform: uppercase;">Acquire</span>
              <p style="max-width: 400px; margin-left: auto; margin-top: 2rem; color: var(--text-secondary); font-size: 1.1rem; text-align: right; opacity: 0.8;">Strategic elevation of high-potential assets through integration.</p>
            </div>

            <div class="card" style="width: 100%; max-width: 550px; position: relative; z-index: 1; background: rgba(255,255,255,0.8); backdrop-filter: blur(12px);">
              <h3 data-i18n="framework_2_title" style="font-size: 1.25rem; min-height: 50px;">II. Strategic Acquisition & Enterprise Elevation</h3>
              <p data-i18n="framework_2_p1">We acquire high-potential companies with foundational strength and scalable opportunity.<br/><br/>We elevate them through:</p>
              <div class="expandable-wrapper">
                <div>
                  <ul style="margin: 1.5rem 0">
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
          </div>

          <!-- Pillar 3 -->
          <div class="horizontal-panel" style="position: relative; justify-content: flex-start; padding: 0 10vw;">
            <!-- Huge Background Text (Right Side) -->
            <div style="position: absolute; right: 8vw; top: 50%; transform: translateY(-50%); text-align: right; pointer-events: none; z-index: 0;">
              <span style="display: block; font-size: clamp(100px, 15vw, 250px); font-weight: 800; color: rgba(15, 23, 42, 0.05); line-height: 0.8; letter-spacing: -0.02em;">03</span>
              <span style="display: block; font-size: clamp(30px, 4vw, 60px); font-weight: 600; color: rgba(15, 23, 42, 0.15); text-transform: uppercase;">Scale</span>
              <p style="max-width: 400px; margin-left: auto; margin-top: 2rem; color: var(--text-secondary); font-size: 1.1rem; text-align: right; opacity: 0.8;">Embedding deliberate governance and scalable systems for endurance.</p>
            </div>

            <div class="card" style="width: 100%; max-width: 550px; position: relative; z-index: 1; background: rgba(255,255,255,0.8); backdrop-filter: blur(12px);">
              <h3 data-i18n="framework_3_title" style="font-size: 1.25rem; min-height: 50px;">III. Structural Integration & Scalable Expansion</h3>
              <p data-i18n="framework_3_p1">Scale without structure is fragile.<br/><br/>We embed:</p>
              <div class="expandable-wrapper">
                <div>
                  <ul style="margin: 1.5rem 0">
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
      </div>
    </section>
  `;
}

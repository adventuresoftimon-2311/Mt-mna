export function renderLeadership() {
    return `
    <section class="hero fade-in" style="padding-top: 15vh; padding-bottom: 10vh;">
      <div class="container">
        <h2 class="micro-heading" data-i18n="leadership_kicker">Leadership</h2>
        <h1 data-i18n="leadership_headline" style="max-width: 900px; margin-bottom: 2rem;">MT & MNA Ventures is led by strategists and operators with experience across venture development, enterprise structuring, capital markets, and global positioning.</h1>
        
        <p style="margin-top: 4rem; color: var(--text-primary); font-size: 1.1rem;" data-i18n="leadership_phil_intro">Leadership philosophy emphasizes:</p>
        <ul style="margin-bottom: 4rem;">
          <li data-i18n="leadership_phil_l1">Architectural clarity</li>
          <li data-i18n="leadership_phil_l2">Long-term discipline</li>
          <li data-i18n="leadership_phil_l3">Measured execution</li>
          <li data-i18n="leadership_phil_l4">Global perspective</li>
        </ul>

        <div class="grid-3" style="margin-top: 4rem;">
          <!-- Executive 1 -->
          <div style="border: 1px solid var(--divider); padding: 1rem; background: var(--secondary-bg);">
            <div style="width: 100%; aspect-ratio: 1/1; background-color: var(--primary-bg); border: 1px solid var(--divider); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; filter: grayscale(100%);">
              <span style="color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">[ Executive Portrait ]</span>
            </div>
            <h3 data-i18n="lead_exec1_name" style="font-size: 1.25rem; margin-bottom: 0.25rem;">Executive Name</h3>
            <p data-i18n="lead_exec1_title" style="color: var(--accent-blue); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Managing Partner</p>
            <p data-i18n="lead_exec1_bio" style="font-size: 0.95rem; color: var(--text-primary);">Strategic oversight across enterprise architecture and acquisition deployment.</p>
          </div>

          <!-- Executive 2 -->
          <div style="border: 1px solid var(--divider); padding: 1rem; background: var(--secondary-bg);">
            <div style="width: 100%; aspect-ratio: 1/1; background-color: var(--primary-bg); border: 1px solid var(--divider); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; filter: grayscale(100%);">
              <span style="color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">[ Executive Portrait ]</span>
            </div>
            <h3 data-i18n="lead_exec2_name" style="font-size: 1.25rem; margin-bottom: 0.25rem;">Executive Name</h3>
            <p data-i18n="lead_exec2_title" style="color: var(--accent-blue); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Managing Partner</p>
            <p data-i18n="lead_exec2_bio" style="font-size: 0.95rem; color: var(--text-primary);">Focus on capital structuring, institutional integration, and global scalability.</p>
          </div>
          
           <!-- Executive 3 -->
          <div style="border: 1px solid var(--divider); padding: 1rem; background: var(--secondary-bg);">
            <div style="width: 100%; aspect-ratio: 1/1; background-color: var(--primary-bg); border: 1px solid var(--divider); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; filter: grayscale(100%);">
              <span style="color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">[ Executive Portrait ]</span>
            </div>
            <h3 data-i18n="lead_exec3_name" style="font-size: 1.25rem; margin-bottom: 0.25rem;">Executive Name</h3>
            <p data-i18n="lead_exec3_title" style="color: var(--accent-blue); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Managing Partner</p>
            <p data-i18n="lead_exec3_bio" style="font-size: 0.95rem; color: var(--text-primary);">Leading governance frameworks and technical infrastructure origination.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

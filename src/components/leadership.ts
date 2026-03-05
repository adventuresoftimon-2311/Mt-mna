export function renderLeadership() {
  return `
    <section class="hero fade-in" style="padding-top: 15vh; padding-bottom: 10vh;">
      <div class="container">
        <h1 data-i18n="leadership_kicker" style="margin-bottom: 1rem; color: var(--accent-blue); font-size: clamp(3rem, 8vw, 6rem); letter-spacing: 0.05em; text-transform: uppercase;">Leadership</h1>
        <h2 data-i18n="leadership_headline" style="max-width: 900px; margin-bottom: 2rem; font-size: clamp(24px, 3vw, 32px); font-weight: 400; color: var(--text-secondary); text-transform: none; letter-spacing: 0;">MT & MNA Ventures is led by strategists and operators with experience across venture development, enterprise structuring, capital markets, and global positioning.</h2>
        
        <p style="margin-top: 4rem; color: var(--text-primary); font-size: 1.1rem;" data-i18n="leadership_phil_intro">Leadership philosophy emphasizes:</p>
        <ul style="margin-bottom: 4rem;">
          <li data-i18n="leadership_phil_l1">Architectural clarity</li>
          <li data-i18n="leadership_phil_l2">Long-term discipline</li>
          <li data-i18n="leadership_phil_l3">Measured execution</li>
          <li data-i18n="leadership_phil_l4">Global perspective</li>
        </ul>

        <div class="grid-3" style="margin-top: 4rem;">
          <!-- Executive 1 -->
          <div class="card" style="padding: 1.5rem; text-align: left;">
            <div style="width: 100%; aspect-ratio: 1/1; overflow: hidden; margin-bottom: 1.5rem;">
              <img src="https://images.unsplash.com/photo-1541888086055-12b7de04e12e?auto=format&fit=crop&q=80&w=800" alt="Executive Portrait" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%);" class="hover-alive">
            </div>
            <h3 data-i18n="lead_exec1_name" style="font-size: 1.25rem; margin-bottom: 0.25rem;">Executive Name</h3>
            <p data-i18n="lead_exec1_title" style="color: var(--accent-blue); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Managing Partner</p>
            <p data-i18n="lead_exec1_bio" style="font-size: 0.95rem; color: var(--text-primary);">Strategic oversight across enterprise architecture and acquisition deployment.</p>
          </div>

          <!-- Executive 2 -->
          <div class="card" style="padding: 1.5rem; text-align: left;">
            <div style="width: 100%; aspect-ratio: 1/1; overflow: hidden; margin-bottom: 1.5rem;">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Executive Portrait" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%);" class="hover-alive">
            </div>
            <h3 data-i18n="lead_exec2_name" style="font-size: 1.25rem; margin-bottom: 0.25rem;">Executive Name</h3>
            <p data-i18n="lead_exec2_title" style="color: var(--accent-blue); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Managing Partner</p>
            <p data-i18n="lead_exec2_bio" style="font-size: 0.95rem; color: var(--text-primary);">Focus on capital structuring, institutional integration, and global scalability.</p>
          </div>
          
           <!-- Executive 3 -->
          <div class="card" style="padding: 1.5rem; text-align: left;">
            <div style="width: 100%; aspect-ratio: 1/1; overflow: hidden; margin-bottom: 1.5rem;">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Executive Portrait" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%);" class="hover-alive">
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

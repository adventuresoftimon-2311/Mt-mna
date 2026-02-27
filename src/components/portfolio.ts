export function renderPortfolio() {
  return `
    <section class="hero fade-in" style="padding-top: 15vh; padding-bottom: 5vh;">
      <div class="container">
        <h2 class="micro-heading" data-i18n="portfolio_kicker">Portfolio</h2>
        <h1 data-i18n="portfolio_headline" style="max-width: 900px; margin-bottom: 4rem;">Structural investments and engineered enterprises.</h1>
        
        <div class="grid-2">
          <!-- United Creatives -->
          <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
            <div style="height: 200px; overflow: hidden;">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="United Creatives Structure" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="hover-zoom">
            </div>
            <div style="padding: 2.5rem;">
                <h3 data-i18n="port_uc_title" style="margin-bottom: 0.5rem; font-size: 1.5rem;">United Creatives</h3>
                <span style="font-size: 0.8rem; letter-spacing: 0.05em; color: var(--accent-blue); text-transform: uppercase; display: block; margin-bottom: 1.5rem;" data-i18n="port_under">Under MT & MNA Ventures</span>
                <p data-i18n="port_uc_desc" style="color: var(--text-primary); margin-bottom: 0;">A creative-tech ecosystem focused on intellectual property infrastructure and digital licensing systems.</p>
            </div>
          </div>

          <!-- United Law -->
          <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
            <div style="height: 200px; overflow: hidden;">
                <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800" alt="United Law Structure" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="hover-zoom">
            </div>
            <div style="padding: 2.5rem;">
                <h3 data-i18n="port_ul_title" style="margin-bottom: 0.5rem; font-size: 1.5rem;">United Law</h3>
                <span style="font-size: 0.8rem; letter-spacing: 0.05em; color: var(--accent-blue); text-transform: uppercase; display: block; margin-bottom: 1.5rem;" data-i18n="port_under">Under MT & MNA Ventures</span>
                <p data-i18n="port_ul_desc" style="color: var(--text-primary); margin-bottom: 0;">A structured legal framework designed to protect and enforce digital assets at scale.</p>
            </div>
          </div>

          <!-- OTC Tech -->
          <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
            <div style="height: 200px; overflow: hidden;">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" alt="OTC Tech Structure" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="hover-zoom">
            </div>
            <div style="padding: 2.5rem;">
                <h3 data-i18n="port_otc_title" style="margin-bottom: 0.5rem; font-size: 1.5rem;">OTC Tech</h3>
                <span style="font-size: 0.8rem; letter-spacing: 0.05em; color: var(--accent-blue); text-transform: uppercase; display: block; margin-bottom: 1.5rem;" data-i18n="port_under">Under MT & MNA Ventures</span>
                <p data-i18n="port_otc_desc" style="color: var(--text-primary); margin-bottom: 0;">The technical architecture division supporting scalable enterprise systems.</p>
            </div>
          </div>

          <!-- BRAENDZ -->
          <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
            <div style="height: 200px; overflow: hidden;">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="BRAENDZ Structure" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="hover-zoom">
            </div>
            <div style="padding: 2.5rem;">
                <h3 data-i18n="port_braendz_title" style="margin-bottom: 0.5rem; font-size: 1.5rem;">BRAENDZ</h3>
                <span style="font-size: 0.8rem; letter-spacing: 0.05em; color: var(--accent-blue); text-transform: uppercase; display: block; margin-bottom: 1.5rem;" data-i18n="port_under">Under MT & MNA Ventures</span>
                <p data-i18n="port_braendz_desc" style="color: var(--text-primary); margin-bottom: 0;">A strategically acquired enterprise undergoing disciplined repositioning toward institutional growth channels.</p>
            </div>
          </div>
        </div>

        <div style="margin-top: 5rem; text-align: center; border-top: 1px solid var(--divider); padding-top: 3rem;">
           <p data-i18n="portfolio_outro" style="font-size: 1.1rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em;">Portfolio expansion remains selective and strategically aligned.</p>
        </div>
      </div>
    </section>

    <!-- Case Study Timeline -->
    <section class="alt-bg fade-in" style="animation-delay: 0.2s">
      <div class="container">
         <span class="micro-heading" data-i18n="case_study_kicker">Case Study 01</span>
         <h2 style="margin-bottom: 4rem;">BRAENDZ</h2>
         
         <!-- Timeline Structure -->
         <div style="display: flex; justify-content: space-between; position: relative; padding-bottom: 3rem; overflow-x: auto; gap: 2rem;">
            <div style="position: absolute; top: 10px; left: 0; right: 0; height: 1px; background: var(--divider); z-index: 0;"></div>
            
            <div style="position: relative; z-index: 1; flex: 1; min-width: 150px;">
              <div style="width: 20px; height: 20px; background: var(--primary-bg); border: 2px solid var(--accent-blue); border-radius: 50%; margin-bottom: 1.5rem;"></div>
              <p data-i18n="timeline_1" style="font-size: 0.9rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em;">Strategic Identification</p>
            </div>
            
            <div style="position: relative; z-index: 1; flex: 1; min-width: 150px;">
              <div style="width: 20px; height: 20px; background: var(--primary-bg); border: 2px solid var(--accent-blue); border-radius: 50%; margin-bottom: 1.5rem;"></div>
              <p data-i18n="timeline_2" style="font-size: 0.9rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em;">Acquisition</p>
            </div>
            
            <div style="position: relative; z-index: 1; flex: 1; min-width: 150px;">
              <div style="width: 20px; height: 20px; background: var(--primary-bg); border: 2px solid var(--accent-blue); border-radius: 50%; margin-bottom: 1.5rem;"></div>
              <p data-i18n="timeline_3" style="font-size: 0.9rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em;">Restructuring</p>
            </div>
            
            <div style="position: relative; z-index: 1; flex: 1; min-width: 150px;">
              <div style="width: 20px; height: 20px; background: var(--primary-bg); border: 2px solid var(--accent-blue); border-radius: 50%; margin-bottom: 1.5rem;"></div>
              <p data-i18n="timeline_4" style="font-size: 0.9rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em;">Enterprise Alignment</p>
            </div>
            
            <div style="position: relative; z-index: 1; flex: 1; min-width: 150px;">
              <div style="width: 20px; height: 20px; background: var(--accent-blue); border: 2px solid var(--accent-blue); border-radius: 50%; margin-bottom: 1.5rem; box-shadow: 0 0 10px rgba(46, 107, 255, 0.5);"></div>
              <p data-i18n="timeline_5" style="font-size: 0.9rem; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500;">Institutional Launch</p>
            </div>
         </div>
         
         <div style="margin-top: 4rem; display: flex; align-items: center; gap: 2rem;">
            <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.1em;" data-i18n="case_study_assoc">Institutional Associations</span>
            <div style="display: flex; gap: 2rem; color: var(--text-primary); font-size: 1.25rem; font-weight: 600; letter-spacing: 0.05em;">
              <span>KPMG</span>
              <span>PwC</span>
            </div>
         </div>
      </div>
    </section>
  `;
}

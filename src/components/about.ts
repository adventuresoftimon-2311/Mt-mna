export function renderAbout() {
  return `
    <!-- Hero / Intro -->
    <section class="hero fade-in" style="padding-top: 15vh; padding-bottom: 10vh; background-color: var(--primary-bg);">
      <div class="container grid-2" style="align-items: center;">
        <div>
            <h2 class="micro-heading" data-i18n="about_kicker">Who We Are</h2>
            <h1 data-i18n="about_headline" style="margin-bottom: 2rem;">MT & MNA Ventures is a global enterprise design and acquisition platform operating across the UAE, Germany, and the United States.</h1>
            <p class="subtext" data-i18n="about_subtext" style="color: var(--text-primary);">We focus on designing and elevating enterprises positioned for long-term leadership in technology-aligned and structurally evolving sectors.</p>
            
            <p style="margin-top: 3rem; color: var(--text-primary);" data-i18n="about_approach_intro">Our approach integrates:</p>
            <ul style="margin-bottom: 3rem;">
            <li data-i18n="about_approach_l1">Enterprise origination</li>
            <li data-i18n="about_approach_l2">Strategic acquisition</li>
            <li data-i18n="about_approach_l3">Infrastructure development</li>
            <li data-i18n="about_approach_l4">Institutional positioning</li>
            </ul>
            
            <p style="font-size: 1.25rem; color: var(--text-primary); font-weight: 500;" data-i18n="about_approach_outro">We operate with measured conviction and disciplined execution.</p>
        </div>
        <div class="mask-reveal" style="position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08); height: 100%; min-height: 600px;">
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200" alt="Enterprise Architecture" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease;" class="hover-zoom">
        </div>
      </div>
    </section>

    <!-- Positioning -->
    <section class="alt-bg fade-in" style="animation-delay: 0.1s">
      <div class="container">
        <span class="micro-heading" data-i18n="positioning_kicker">Our Positioning</span>
        <div class="grid-2" style="margin-top: 2rem;">
          <div>
            <p data-i18n="positioning_p1" style="color: var(--text-primary); font-size: 1.1rem;">MNA Ventures operates as a traditional venture capital structure focused on growth-stage capital deployment and global investment networks.</p>
          </div>
          <div>
            <p data-i18n="positioning_p2" style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 2rem;">MT & MNA Ventures operates as an enterprise architecture platform — focused on origination, elevation, and structural development.</p>
            <p data-i18n="positioning_p3" style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary);">Different mandate.<br/>Different execution.<br/>Aligned standards.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="fade-in" style="animation-delay: 0.2s">
      <div class="container">
        <span class="micro-heading" data-i18n="principles_kicker">Guiding Principles</span>
        <div class="grid-2" style="margin-top: 2rem;">
          <div>
            <ul>
              <li data-i18n="principles_l1" style="font-size: 1.2rem; color: var(--text-primary);">Durability over speed</li>
              <li data-i18n="principles_l2" style="font-size: 1.2rem; color: var(--text-primary);">Structure over noise</li>
              <li data-i18n="principles_l3" style="font-size: 1.2rem; color: var(--text-primary);">Long-term positioning over short-term optics</li>
              <li data-i18n="principles_l4" style="font-size: 1.2rem; color: var(--text-primary);">Architecture over momentum</li>
            </ul>
          </div>
          <div>
             <p data-i18n="principles_outro" style="font-size: 1.5rem; color: var(--text-primary);">We prioritize enterprises that can operate independently and endure strategically.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

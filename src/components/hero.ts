export function renderHero() {
  return `
    <section class="hero fade-in" style="padding-top: 15vh; padding-bottom: 20vh; position: relative; overflow: hidden; background-color: var(--primary-bg);">
      <div style="position: absolute; top:0; right:0; left:0; bottom:0; background: radial-gradient(circle at right bottom, var(--hero-depth), transparent 70%); z-index: 1;"></div>
      <div class="container grid-2" style="position: relative; z-index: 2; align-items: center;">
        <div>
            <h2 class="micro-heading" data-i18n="hero_kicker" style="margin-bottom: 1.5rem;">We Design Enterprises.</h2>
            <h1 data-i18n="hero_headline" style="margin-bottom: 2rem;">Shaping the Industry Leaders of Tomorrow.</h1>
            <p class="subtext" data-i18n="hero_subtext">MT & MNA Ventures is a global venture platform dedicated to originating, acquiring, and elevating technology-driven enterprises structured for long-term leadership.</p>
            <div class="locations" data-i18n="hero_locations" style="margin-top: 4rem;">Dubai &nbsp;|&nbsp; Germany &nbsp;|&nbsp; United States</div>
        </div>
        <div class="hero-image-wrapper" style="position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1); transform: translateY(0); transition: transform 0.5s ease; height: 100%; min-height: 500px;">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Institutional Architecture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; transition: transform 0.7s ease;" class="hover-zoom">
        </div>
      </div>
    </section>
  `;
}

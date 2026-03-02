export function renderHero() {
  return `
    <section class="hero fade-in" style="height: 100vh; min-height: 800px; padding: 0; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; cursor: pointer;">
      <video class="hero-video" autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(1) contrast(1.1);">
        <source src="./2325093-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 100%); z-index: 1; pointer-events: none;"></div>
      
      <div class="container" style="position: relative; z-index: 2; max-width: 1200px; padding: 0 2rem; display: flex; flex-direction: column; align-items: center;">
        <h1 data-i18n="hero_headline" style="margin-bottom: 2rem; line-height: 1.1;">We Design Enduring Enterprises.</h1>
        <p class="subtext" data-i18n="hero_subtext" style="color: rgba(15, 23, 42, 0.8); font-size: clamp(20px, 2.5vw, 36px); margin: 0; font-weight: 300; letter-spacing: 0.01em;">Shaping the Industry Leaders of Tomorrow.</p>
      </div>
    </section>
  `;
}

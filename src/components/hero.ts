export function renderHero() {
  return `
    <section class="hero fade-in" style="height: 100vh; min-height: 800px; padding: 0; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; cursor: pointer;">
      <video class="hero-video" autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.6) contrast(1.1);">
        <!-- Placeholder tech/institutional video from Mixkit -->
        <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4" type="video/mp4" />
      </video>
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%); z-index: 1; pointer-events: none;"></div>
      
      <div class="container" style="position: relative; z-index: 2; max-width: 1200px; padding: 0 2rem; display: flex; flex-direction: column; align-items: center;">
        <h1 data-i18n="hero_headline" style="color: #FFFFFF; text-shadow: 0 4px 30px rgba(0,0,0,0.8); margin-bottom: 2rem; font-size: clamp(48px, 6vw, 84px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.1;">We Design Enduring Enterprises.</h1>
        <p class="subtext" data-i18n="hero_subtext" style="color: rgba(255,255,255,0.9); font-size: clamp(20px, 2.5vw, 36px); margin: 0; text-shadow: 0 2px 15px rgba(0,0,0,0.5); font-weight: 400; letter-spacing: 0.01em;">Shaping the Industry Leaders of Tomorrow.</p>
      </div>
    </section>
  `;
}

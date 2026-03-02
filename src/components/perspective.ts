export function renderPerspective() {
  return `
    <section class="fade-in" style="animation-delay: 0.4s; padding-bottom: 15vh;">
      <div class="container">
        <span class="micro-heading" data-i18n="perspective_kicker">Our Perspective</span>
        <h2 data-i18n="perspective_headline" style="margin-bottom: 3rem; font-size: clamp(32px, 4vw, 48px); font-weight: 400; max-width: 900px; line-height: 1.4;">The next generation of industry leaders will not be defined by speed alone.</h2>
        
        <p data-i18n="perspective_p1" style="color: var(--text-primary); margin-bottom: 4rem; font-size: 1.1rem;">They will be defined by:</p>
        
        <!-- 4 Column Video Tile Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 4rem;">
          
          <!-- Tile 1 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 3/4; display: flex; align-items: center; justify-content: center; border: none; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);">
            <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: rgba(15,23,42,0.5); z-index: 1;"></div>
            <h3 data-i18n="perspective_l1" style="position: relative; z-index: 2; color: #FFFFFF; text-align: center; font-size: 1.2rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 0 1rem; margin: 0; text-shadow: 0 4px 15px rgba(0,0,0,0.5);">Clarity of structure</h3>
          </div>

          <!-- Tile 2 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 3/4; display: flex; align-items: center; justify-content: center; border: none; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);">
            <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: rgba(15,23,42,0.5); z-index: 1;"></div>
            <h3 data-i18n="perspective_l2" style="position: relative; z-index: 2; color: #FFFFFF; text-align: center; font-size: 1.2rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 0 1rem; margin: 0; text-shadow: 0 4px 15px rgba(0,0,0,0.5);">Technological integration</h3>
          </div>

          <!-- Tile 3 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 3/4; display: flex; align-items: center; justify-content: center; border: none; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);">
            <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: rgba(15,23,42,0.5); z-index: 1;"></div>
            <h3 data-i18n="perspective_l3" style="position: relative; z-index: 2; color: #FFFFFF; text-align: center; font-size: 1.2rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 0 1rem; margin: 0; text-shadow: 0 4px 15px rgba(0,0,0,0.5);">Institutional readiness</h3>
          </div>

          <!-- Tile 4 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 3/4; display: flex; align-items: center; justify-content: center; border: none; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);">
            <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: rgba(15,23,42,0.5); z-index: 1;"></div>
            <h3 data-i18n="perspective_l4" style="position: relative; z-index: 2; color: #FFFFFF; text-align: center; font-size: 1.2rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 0 1rem; margin: 0; text-shadow: 0 4px 15px rgba(0,0,0,0.5);">Strategic foresight</h3>
          </div>

        </div>

        <p data-i18n="perspective_p2" style="font-size: 1.1rem; color: var(--text-primary); text-align: center; max-width: 600px; margin: 0 auto;">Our role is to design and position these enterprises before scale demands correction.</p>
      </div>
    </section>
  `;
}

export function renderCompanies() {
    return `
    <section class="companies-section fade-in" style="padding: 10vh 0; background-color: var(--secondary-bg);">
      <div class="container" style="max-width: 1400px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          
          <!-- United Creatives -->
          <div class="company-tile" style="position: relative; overflow: hidden; aspect-ratio: 9/16; cursor: pointer; border: none; box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);">
            <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.4) contrast(1.2);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-22646-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0) 50%, rgba(15,23,42,0.8) 100%); z-index: 1; pointer-events: none;"></div>
            
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; display: flex; align-items: center; justify-content: center; pointer-events: none;">
                <h3 class="company-title" style="color: #FFFFFF; font-size: clamp(24px, 3vw, 36px); font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; margin: 0; text-shadow: 0 10px 30px rgba(0,0,0,0.8); transition: transform 0.1s ease-out;">United Creatives</h3>
            </div>
          </div>

          <!-- United Law -->
          <div class="company-tile" style="position: relative; overflow: hidden; aspect-ratio: 9/16; cursor: pointer; border: none; box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);">
            <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.4) contrast(1.2);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0) 50%, rgba(15,23,42,0.8) 100%); z-index: 1; pointer-events: none;"></div>
            
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; display: flex; align-items: center; justify-content: center; pointer-events: none;">
                <h3 class="company-title" style="color: #FFFFFF; font-size: clamp(24px, 3vw, 36px); font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; margin: 0; text-shadow: 0 10px 30px rgba(0,0,0,0.8); transition: transform 0.1s ease-out;">United Law</h3>
            </div>
          </div>

          <!-- OTC Tech -->
          <div class="company-tile" style="position: relative; overflow: hidden; aspect-ratio: 9/16; cursor: pointer; border: none; box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);">
            <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.4) contrast(1.2);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-hologram-of-a-planet-in-a-cyber-world-41619-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0) 50%, rgba(15,23,42,0.8) 100%); z-index: 1; pointer-events: none;"></div>
            
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; display: flex; align-items: center; justify-content: center; pointer-events: none;">
                <h3 class="company-title" style="color: #FFFFFF; font-size: clamp(24px, 3vw, 36px); font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; margin: 0; text-shadow: 0 10px 30px rgba(0,0,0,0.8); transition: transform 0.1s ease-out;">OTC Tech</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

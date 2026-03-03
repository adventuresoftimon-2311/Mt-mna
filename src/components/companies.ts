export function renderCompanies() {
  return `
    <section class="companies-section fade-in" style="padding: 10vh 0; background-color: var(--secondary-bg);">
      <div class="container" style="max-width: 1400px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          
          <!-- United Creatives -->
          <div class="card company-tile" style="position: relative; overflow: hidden; aspect-ratio: 16/9; cursor: pointer; padding: 0;">
            <div style="position: absolute; inset: 0; z-index: 0; overflow: hidden; background: #fff;">
                <video id="vid-united-creatives" class="company-anim-video" src="/united-creatives.mp4" muted playsInline preload="auto" style="width: 100%; height: 100%; object-fit: contain; filter: brightness(1) contrast(1);"></video>
            </div>
          </div>

          <!-- United Law -->
          <div class="card company-tile" style="position: relative; overflow: hidden; aspect-ratio: 16/9; cursor: pointer; padding: 0;">
            <div style="position: absolute; inset: 0; z-index: 0; overflow: hidden; background: #fff;">
                <video id="vid-united-law" class="company-anim-video" src="/united-law.mp4" muted playsInline preload="auto" style="width: 100%; height: 100%; object-fit: contain; filter: brightness(1) contrast(1);"></video>
            </div>
          </div>

          <!-- OTC Tech -->
          <div class="card company-tile" style="position: relative; overflow: hidden; aspect-ratio: 16/9; cursor: pointer; padding: 0;">
            <div style="position: absolute; inset: 0; z-index: 0; overflow: hidden; background: #fff;">
                <video id="vid-otc-tech" class="company-anim-video" src="/otc-tech.mp4" muted playsInline preload="auto" style="width: 100%; height: 100%; object-fit: contain; filter: brightness(1) contrast(1);"></video>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

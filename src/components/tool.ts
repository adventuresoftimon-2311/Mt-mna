export function renderTool() {
  return `
    <!-- Audio Element -->
    <audio id="ambient-audio" loop src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3" preload="auto"></audio>

    <section class="hero fade-in" style="height: 100vh; min-height: 800px; padding: 0; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center;">
      <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.4) contrast(1.2);">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-hologram-of-a-planet-in-a-cyber-world-41619-large.mp4" type="video/mp4" />
      </video>
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%); z-index: 1;"></div>
      
      <div class="container" style="position: relative; z-index: 2;">
        <h1 data-i18n="tool_headline" style="color: #FFFFFF; font-size: clamp(40px, 5vw, 70px); text-transform: uppercase; letter-spacing: 0.1em; text-shadow: 0 10px 30px rgba(0,0,0,0.8); margin-bottom: 1rem;">Enterprise Tool</h1>
        <p data-i18n="tool_subtext" style="color: rgba(255,255,255,0.8); font-size: 1.2rem; margin-top: 1rem;">Structural integration and procedural execution.</p>
        <button id="start-audio-btn" class="btn-primary" style="margin-top: 3rem; background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; padding: 1rem 3rem; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">INITIALIZE SYSTEM</button>
      </div>
    </section>

    <section class="fade-in" style="padding: 15vh 0; background-color: var(--secondary-bg);">
      <div class="container" style="max-width: 1400px;">
        <span class="micro-heading" style="color: var(--text-secondary); margin-bottom: 2rem;">Process Flow</span>
        <h2 style="margin-bottom: 4rem; max-width: 800px; font-size: clamp(32px, 4vw, 48px); font-weight: 400; color: var(--text-primary); line-height: 1.3;">Sequential Motion Execution.</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          
          <!-- Step 1 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 4/5;">
            <video autoPlay loop muted playsInline style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-22646-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.8) 100%); z-index: 1;"></div>
            <div style="position: absolute; bottom: 2rem; left: 2rem; z-index: 2; color: white;">
               <span style="display: block; font-size: 0.85rem; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 0.5rem;">01.</span>
               <h3 style="font-size: 1.5rem; text-transform: uppercase; margin: 0; letter-spacing: 0.05em; font-weight: 500;">Upload</h3>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 4/5;">
            <video autoPlay loop muted playsInline style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.8) 100%); z-index: 1;"></div>
            <div style="position: absolute; bottom: 2rem; left: 2rem; z-index: 2; color: white;">
               <span style="display: block; font-size: 0.85rem; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 0.5rem;">02.</span>
               <h3 style="font-size: 1.5rem; text-transform: uppercase; margin: 0; letter-spacing: 0.05em; font-weight: 500;">Scan</h3>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 4/5;">
            <video autoPlay loop muted playsInline style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-tech-house-vibes-130-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.8) 100%); z-index: 1;"></div>
            <div style="position: absolute; bottom: 2rem; left: 2rem; z-index: 2; color: white;">
               <span style="display: block; font-size: 0.85rem; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 0.5rem;">03.</span>
               <h3 style="font-size: 1.5rem; text-transform: uppercase; margin: 0; letter-spacing: 0.05em; font-weight: 500;">Match</h3>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; aspect-ratio: 4/5;">
            <video autoPlay loop muted playsInline style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6);">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-data-center-server-racks-21045-large.mp4" type="video/mp4" />
            </video>
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.8) 100%); z-index: 1;"></div>
            <div style="position: absolute; bottom: 2rem; left: 2rem; z-index: 2; color: white;">
               <span style="display: block; font-size: 0.85rem; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 0.5rem;">04.</span>
               <h3 style="font-size: 1.5rem; text-transform: uppercase; margin: 0; letter-spacing: 0.05em; font-weight: 500;">Evidence</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function bindToolEvents() {
  const audio = document.getElementById('ambient-audio') as HTMLAudioElement;
  const btn = document.getElementById('start-audio-btn');

  if (audio && btn) {
    audio.volume = 0.15; // soft subtle
    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        btn.textContent = "SYSTEM ACTIVE";
        btn.style.background = "var(--accent-blue)";
        btn.style.borderColor = "var(--accent-blue)";
      } else {
        audio.pause();
        btn.textContent = "INITIALIZE SYSTEM";
        btn.style.background = "transparent";
        btn.style.borderColor = "rgba(255,255,255,0.3)";
      }
    });
  }
}

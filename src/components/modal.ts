export function renderModal() {
    return `
    <div id="premium-modal" style="position: fixed; inset: 0; z-index: 9999; display: none; opacity: 0; background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(20px);">
        <!-- Close Button -->
        <button id="close-modal" style="position: absolute; top: 2rem; right: 2rem; background: transparent; border: none; color: white; font-size: 2rem; cursor: pointer; z-index: 10;">&times;</button>
        
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 2rem;">
            <div id="modal-content-card" style="position: relative; width: 100%; max-width: 1200px; aspect-ratio: 16/9; background: #000; box-shadow: 0 40px 100px rgba(0,0,0,0.8); overflow: hidden; transform: scale(0.95);">
                <!-- Video Container -->
                <video id="modal-video" autoPlay loop muted playsInline style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
                    <source src="" type="video/mp4" />
                </video>
                <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%); z-index: 1;"></div>
                
                <!-- Content overlay -->
                <div style="position: absolute; inset: 0; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 4rem;">
                    <h2 id="modal-title" style="color: white; font-size: clamp(32px, 5vw, 64px); font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 2rem; text-shadow: 0 10px 30px rgba(0,0,0,0.8);">Company Name</h2>
                    <p id="modal-desc" style="color: rgba(255,255,255,0.8); font-size: 1.2rem; max-width: 600px; margin-bottom: 4rem; text-shadow: 0 4px 10px rgba(0,0,0,0.8);">Strategic capability overview and structural integration details.</p>
                    <button id="modal-cta-btn" class="btn-primary flex-center" style="background: white; color: black; border: none; padding: 1rem 3rem; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; cursor: pointer; box-shadow: 0 10px 30px rgba(255,255,255,0.2); border-radius: 100px;">Explore Architecture</button>
                </div>
            </div>
        </div>
    </div>
  `;
}

export function bindModalEvents() {
    const modal = document.getElementById('premium-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalVideo = document.getElementById('modal-video') as HTMLVideoElement;
    const modalCard = document.getElementById('modal-content-card');

    if (!modal || !closeBtn || !modalTitle || !modalVideo || !modalCard) return;

    // Define company data mapping
    const companyData: Record<string, { title: string, src: string }> = {
        'United Creatives': {
            title: 'United Creatives',
            src: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-22646-large.mp4'
        },
        'United Law': {
            title: 'United Law',
            src: 'https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4'
        },
        'OTC Tech': {
            title: 'OTC Tech',
            src: 'https://assets.mixkit.co/videos/preview/mixkit-hologram-of-a-planet-in-a-cyber-world-41619-large.mp4'
        }
    };

    // Open Modal Logic
    document.querySelectorAll('.company-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const titleEl = tile.querySelector('.company-title');
            if (!titleEl) return;

            const name = titleEl.textContent?.trim() || '';
            const data = companyData[name];

            if (data) {
                modalTitle.textContent = data.title;
                modalVideo.src = data.src;
                modalVideo.play();

                // Animate In with GSAP
                modal.style.display = 'block';
                // @ts-ignore
                gsap.to(modal, { opacity: 1, duration: 0.4, ease: 'power2.out' });
                // @ts-ignore
                gsap.fromTo(modalCard,
                    { scale: 0.9, y: 50, opacity: 0 },
                    { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: 'expo.out', delay: 0.1 }
                );
            }
        });
    });

    // Close Modal Logic
    const closeModal = () => {
        // @ts-ignore
        gsap.to(modal, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                modal.style.display = 'none';
                modalVideo.pause();
                modalVideo.src = '';
            }
        });
    };

    closeBtn.addEventListener('click', closeModal);

    const ctaBtn = document.getElementById('modal-cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            closeModal();
            if ((window as any).navigateTo) {
                (window as any).navigateTo('tool');
            }
        });
    }

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

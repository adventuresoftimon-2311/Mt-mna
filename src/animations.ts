// Type declarations since we are loading via CDN
declare global {
    const gsap: any;
    const ScrollTrigger: any;
    const Lenis: any;
}

let globalCtx: any;

export function initGlobalAnimations() {
    if (typeof gsap === 'undefined' || typeof Lenis === 'undefined') {
        console.error("GSAP or Lenis not loaded");
        return;
    }

    // 1. SMOOTH SCROLL (Lenis + GSAP sync)
    const lenis = new Lenis({
        lerp: 0.08,
        wheelMultiplier: 0.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Core plugin registration
    gsap.registerPlugin(ScrollTrigger);

    // Force ScrollTrigger to rebuild on refresh due to layout changes
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Expose lenis for global use if needed
    (window as any).lenis = lenis;

    // Custom Cursor removed for V3

    // Scroll triggers for reveals
    initMaskedReveals();
    initTextReveals();

    // Parallax and interactions
    initParallax();
    initMagneticButtons();

    // Entrances and Counters
    initStatCounters();
    initSectionEntrances();
}

export function runPageAnimations(pageName: string) {
    if (globalCtx) {
        globalCtx.revert();
    }

    globalCtx = gsap.context(() => {
        if (pageName === 'home') {
            initHomeAnimations();
        }
    });
}

function initHomeAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Navbar slide down
    tl.from('#main-header', {
        y: -80,
        opacity: 0,
        duration: 0.6,
    }, 0);

    // 2. Hero titles rising
    tl.from('.hero h2', {
        y: 80,
        opacity: 0,
        duration: 0.8,
    }, 0.1);

    tl.from('.hero h1', {
        y: 80,
        opacity: 0,
        duration: 0.8,
    }, 0.15);

    // 3. Hero sub-text and CTA rising
    tl.from('.hero p.subtext', {
        y: 40,
        opacity: 0,
        duration: 0.8,
    }, 0.2);

    tl.from('.hero .locations', {
        y: 30,
        opacity: 0,
        duration: 0.8,
    }, 0.35);

    // 4. Hero Visual Load Effect
    tl.from('.hero-image-wrapper', {
        scale: 1.08,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
    }, 0.3);

    // 5. Hero Zoom scrub
    if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.fromTo('.hero-image-wrapper img',
            { scale: 0.5, opacity: 0.6 },
            {
                scale: 1.0,
                opacity: 1.0,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top bottom',
                    end: 'top center',
                    scrub: true,
                }
            }
        );
    }

    // 6. Init Video Ping-Pong Loops on Company Tiles
    initCompanyVideoLoops();

    // 7. Init Hero Fullscreen Video
    initHeroFullscreen();
}

function initHeroFullscreen() {
    const heroSection = document.querySelector('.hero');
    const heroVideo = document.getElementById('main-hero-video') as HTMLVideoElement;

    if (!heroSection || !heroVideo) return;

    // Apply custom playback speed and ensure it stays through autoplay
    heroVideo.defaultPlaybackRate = 0.75;
    heroVideo.playbackRate = 0.75;

    // Some browsers reset playback rate on loop or play, this forces it
    heroVideo.onplay = () => {
        heroVideo.playbackRate = 0.75;
    };
}

function initCompanyVideoLoops() {
    const vids = [
        { selector: '#vid-united-creatives, .port-vid-uc', speed: 1.0 },
        { selector: '#vid-united-law, .port-vid-ul', speed: 1.2 },
        { selector: '#vid-otc-tech, .port-vid-otc', speed: 1.3 }
    ];

    vids.forEach(v => {
        const videos = document.querySelectorAll(v.selector);

        videos.forEach((video: any) => {
            if (!video) return;

            // Force pause native playback since GSAP will scrub it manually
            video.pause();

            const startAnimation = () => {
                const actualDuration = video.duration || 5.03;
                // Adjust the time it takes to complete one forward sequence by the speed factor
                const tweenDuration = actualDuration / v.speed;

                gsap.fromTo(video,
                    { currentTime: 0 },
                    {
                        currentTime: actualDuration - 0.05, // Slightly before exact end to avoid frame glitching
                        duration: tweenDuration,
                        ease: "sine.inOut", // This provides the exponential smooth slowdown at both ends
                        repeat: -1, // Infinite loop
                        yoyo: true, // Play forwards, then backwards
                    }
                );
            };

            if (video.readyState >= 1) {
                startAnimation();
            } else {
                video.addEventListener('loadedmetadata', startAnimation);
            }
        });
    });
}



export function initMaskedReveals() {
    const masks = gsap.utils.toArray('.mask-reveal');
    masks.forEach((mask: any) => {
        gsap.fromTo(mask,
            { clipPath: "inset(0 50% 0 50%)" },
            {
                clipPath: "inset(0 0% 0 0%)",
                ease: "none",
                scrollTrigger: {
                    trigger: mask,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: true
                }
            }
        );
    });
}

export function initParallax() {
    // Disable parallax fully below 768px
    if (window.matchMedia("(max-width: 768px)").matches) return;

    gsap.utils.toArray('[data-speed]').forEach((el: any) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');

        gsap.to(el, {
            y: () => (ScrollTrigger.maxScroll(window) - (ScrollTrigger.maxScroll(window) * speed)) * -0.1, // Adjusted subtlety
            ease: "none",
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true
            }
        });
    });
}

export function initMagneticButtons() {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const magnets = document.querySelectorAll('.magnetic');

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e: any) => {
            const el = e.currentTarget as HTMLElement;
            const bound = el.getBoundingClientRect();

            const x = e.clientX - bound.left - bound.width / 2;
            const y = e.clientY - bound.top - bound.height / 2;

            gsap.to(el, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        magnet.addEventListener('mouseleave', (e: any) => {
            const el = e.currentTarget as HTMLElement;
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

export function initTextReveals() {
    // Basic word split utility since we don't have SplitText plugin
    const reveals = document.querySelectorAll('.reveal-text');
    reveals.forEach(element => {
        const text = element.textContent || '';
        const words = text.split(' ');
        element.innerHTML = '';

        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = '0.1';
            span.style.filter = 'blur(4px)';
            span.style.display = 'inline-block';
            element.appendChild(span);
        });

        gsap.to((element as HTMLElement).children, {
            opacity: 1,
            filter: 'blur(0px)',
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 30%",
                scrub: true
            }
        });
    });
}

export function initStatCounters() {
    const counters = gsap.utils.toArray('[data-target]');
    counters.forEach((counter: any) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        const suffix = counter.getAttribute('data-suffix') || '';
        const prefix = counter.getAttribute('data-prefix') || '';

        gsap.to(counter, {
            innerHTML: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function () {
                counter.innerHTML = prefix + Math.round(this.targets()[0].innerHTML) + suffix;
            },
            scrollTrigger: {
                trigger: counter,
                start: "top 85%",
                once: true
            }
        });
    });
}

export function initSectionEntrances() {
    // Only target elements that are not explicitly part of another specific reveal
    const sections = gsap.utils.toArray('section:not(.hero) .container > *');

    sections.forEach((el: any) => {
        if (el.classList.contains('reveal-text') || el.classList.contains('horizontal-wrapper')) return;

        gsap.fromTo(el,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    once: true
                }
            }
        );
    });
}

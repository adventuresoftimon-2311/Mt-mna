import { getBlogPosts } from './admin';

export function renderBlogSection() {
    const posts = getBlogPosts();

    if (posts.length === 0) return '';

    const postsHtml = posts.map(post => `
    <div class="card product-tile" style="position: relative; overflow: hidden; padding: 0; min-height: 400px; display: flex; flex-direction: column; justify-content: flex-end; cursor: pointer; border: none;">
      <video autoPlay loop muted playsInline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.5) contrast(1.1);">
        <source src="${post.videoUrl}" type="video/mp4" />
      </video>
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.9) 100%); z-index: 1;"></div>
      
      <div style="position: relative; z-index: 2; padding: 2.5rem; text-align: left;">
        <p style="color: var(--accent-blue); font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">${new Date(post.date).toLocaleDateString()}</p>
        <h3 style="color: #ffffff; font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.2;">${post.title}</h3>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${post.content}</p>
      </div>
    </div>
  `).join('');

    return `
    <section class="insights-section" style="padding-top: 50px;">
      <div class="container">
        <h2 class="micro-heading" style="text-align: center; margin-bottom: 3rem;">Market Insights & Observations</h2>
        <div class="grid-2 product-tile-grid">
          ${postsHtml}
        </div>
      </div>
    </section>
  `;
}

export interface BlogPost {
    id: string;
    title: string;
    videoUrl: string;
    content: string;
    date: string;
}

export function getBlogPosts(): BlogPost[] {
    const data = localStorage.getItem('mt_mna_blog_posts');
    if (!data) {
        // Seed an example article if none exist
        const seed: BlogPost[] = [
            {
                id: '1',
                title: 'The Future of Enterprise Architecture',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-in-the-world-21019-large.mp4',
                content: 'Structural clarity is no longer an advantage; it is a necessity. Enterprises that endure are those built on foundation, not momentum. Our latest insights delve into the engineering of durable capital and governance systems.',
                date: new Date().toISOString()
            }
        ];
        localStorage.setItem('mt_mna_blog_posts', JSON.stringify(seed));
        return seed;
    }
    return JSON.parse(data);
}

export function saveBlogPost(post: BlogPost) {
    const posts = getBlogPosts();
    posts.unshift(post);
    localStorage.setItem('mt_mna_blog_posts', JSON.stringify(posts));
}

export function deleteBlogPost(id: string) {
    let posts = getBlogPosts();
    posts = posts.filter(p => p.id !== id);
    localStorage.setItem('mt_mna_blog_posts', JSON.stringify(posts));
}

let isAuthenticated = false;

export function renderAdmin() {
    if (!isAuthenticated) {
        return `
      <section class="admin-login fade-in" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background-color: var(--primary-bg);">
        <div class="card" style="width: 100%; max-width: 400px; text-align: center;">
          <h2 style="margin-bottom: 2rem;">Platform Access</h2>
          <form id="admin-login-form" style="display: flex; flex-direction: column; gap: 1rem;">
            <input type="text" id="admin-user" placeholder="Username" style="padding: 1rem; border: 1px solid var(--divider); background: var(--secondary-bg); color: var(--text-primary); font-family: inherit; font-size: 1rem; border-radius: 0; outline: none;" required>
            <input type="password" id="admin-pass" placeholder="Password" style="padding: 1rem; border: 1px solid var(--divider); background: var(--secondary-bg); color: var(--text-primary); font-family: inherit; font-size: 1rem; border-radius: 0; outline: none;" required>
            <button type="submit" style="padding: 1rem; background: var(--text-primary); color: var(--primary-bg); border: none; font-family: inherit; font-size: 1rem; font-weight: 600; text-transform: uppercase; cursor: pointer; transition: opacity 0.3s; margin-top: 1rem; border-radius: 0;">Authenticate</button>
            <p id="admin-error" style="color: red; opacity: 0; margin-top: 1rem; font-size: 0.9rem;">Invalid credentials.</p>
          </form>
        </div>
      </section>
    `;
    }

    const posts = getBlogPosts();
    const postsHtml = posts.map(post => `
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border: 1px solid var(--divider); margin-bottom: 1rem; background: var(--card-bg);">
      <div>
        <h3 style="margin: 0; font-size: 1.2rem;">${post.title}</h3>
        <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: var(--text-secondary);">${new Date(post.date).toLocaleDateString()}</p>
      </div>
      <button class="delete-post-btn" data-id="${post.id}" style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: none; cursor: pointer; border-radius: 0; font-family: inherit; text-transform: uppercase; font-size: 0.8rem; font-weight: 600;">Delete</button>
    </div>
  `).join('');

    return `
    <section class="admin-dashboard fade-in" style="min-height: 100vh; padding: 15vh 0; background-color: var(--secondary-bg);">
      <div class="container" style="max-width: 800px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem;">
          <h2>Portal Admin</h2>
          <button id="admin-logout-btn" style="padding: 0.5rem 1rem; background: transparent; border: 1px solid var(--text-primary); color: var(--text-primary); cursor: pointer; border-radius: 0; text-transform: uppercase; font-family: inherit; font-weight: 600; font-size: 0.8rem;">Disconnect</button>
        </div>

        <div class="card" style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1.5rem;">Issue New Insight</h3>
          <form id="add-post-form" style="display: flex; flex-direction: column; gap: 1rem;">
            <input type="text" id="post-title" placeholder="Article Title" style="padding: 1rem; border: 1px solid var(--divider); background: var(--primary-bg); color: var(--text-primary); font-family: inherit; border-radius: 0; outline: none;" required>
            <input type="url" id="post-video" placeholder="Background Video URL (MP4)" style="padding: 1rem; border: 1px solid var(--divider); background: var(--primary-bg); color: var(--text-primary); font-family: inherit; border-radius: 0; outline: none;" required>
            <textarea id="post-content" placeholder="Content Body..." rows="5" style="padding: 1rem; border: 1px solid var(--divider); background: var(--primary-bg); color: var(--text-primary); font-family: inherit; border-radius: 0; outline: none; resize: vertical;" required></textarea>
            <button type="submit" style="padding: 1rem; background: var(--text-primary); color: var(--primary-bg); border: none; font-family: inherit; font-size: 1rem; font-weight: 600; text-transform: uppercase; cursor: pointer; transition: opacity 0.3s; margin-top: 1rem; border-radius: 0;">Publish Article</button>
          </form>
        </div>

        <div>
          <h3 style="margin-bottom: 1.5rem;">Active Insights</h3>
          ${postsHtml || '<p>No insights found.</p>'}
        </div>
      </div>
    </section>
  `;
}

export function bindAdminEvents(reRender: () => void) {
    if (!isAuthenticated) {
        const loginForm = document.getElementById('admin-login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const user = (document.getElementById('admin-user') as HTMLInputElement).value;
                const pass = (document.getElementById('admin-pass') as HTMLInputElement).value;
                const err = document.getElementById('admin-error');

                if (user === 'Admin' && pass === 'Admin123!') {
                    isAuthenticated = true;
                    reRender();
                } else if (err) {
                    err.style.opacity = '1';
                }
            });
        }
    } else {
        const logoutBtn = document.getElementById('admin-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                isAuthenticated = false;
                reRender();
            });
        }

        const addForm = document.getElementById('add-post-form');
        if (addForm) {
            addForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const title = (document.getElementById('post-title') as HTMLInputElement).value;
                const videoUrl = (document.getElementById('post-video') as HTMLInputElement).value;
                const content = (document.getElementById('post-content') as HTMLTextAreaElement).value;

                saveBlogPost({
                    id: Date.now().toString(),
                    title,
                    videoUrl,
                    content,
                    date: new Date().toISOString()
                });

                reRender();
            });
        }

        const deleteBtns = document.querySelectorAll('.delete-post-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = (e.currentTarget as HTMLElement).dataset.id;
                if (id) {
                    deleteBlogPost(id);
                    reRender();
                }
            });
        });
    }
}

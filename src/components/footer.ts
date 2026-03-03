export function renderFooter() {
  return `
    <footer style="padding: 4rem 0; margin-top: 2rem; position: relative; z-index: 100; border-top: 1px solid rgba(15, 23, 42, 0.05); background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
          <div>
            <div class="logo" style="margin-bottom: 1rem">MT & MNA Ventures</div>
            <p style="font-size: 0.85rem; color: var(--text-secondary)">Dubai &nbsp;|&nbsp; Germany &nbsp;|&nbsp; United States</p>
          </div>
          <div>
            <a href="mailto:connect@mt-mna.com" style="color: var(--text-primary); text-decoration: none; font-size: 0.9rem; letter-spacing: 0.05em">connect@mt-mna.com</a>
            <p style="font-size: 0.85rem; margin-top: 1rem; color: var(--text-secondary)">© 2026 MT & MNA Ventures. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}

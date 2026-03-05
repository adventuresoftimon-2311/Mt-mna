export function renderHeader() {
  return `
    <header id="main-header" style="position: sticky; top: 0; z-index: 1000; background: var(--primary-bg); transition: padding 0.3s ease, background-color 0.3s ease, border-bottom 0.3s ease;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="logo">
          <img src="/logo.png" alt="MT & MNA Ventures" id="header-logo" style="height: 90px; transition: height 0.3s ease; object-fit: contain;">
        </div>
        <nav class="nav-links">
          <a href="#" class="nav-item magnetic" data-page="home" data-i18n="nav_home">Home</a>
          <a href="#" class="nav-item magnetic" data-page="about" data-i18n="nav_about">About</a>
          <a href="#" class="nav-item magnetic" data-page="what-we-do" data-i18n="nav_what_we_do">What We Do</a>
          <a href="#" class="nav-item magnetic" data-page="portfolio" data-i18n="nav_portfolio">Portfolio</a>
          <a href="#" class="nav-item magnetic" data-page="leadership" data-i18n="nav_leadership">Leadership</a>
          <a href="#" class="nav-item magnetic" data-page="contact" data-i18n="nav_contact">Contact</a>
        </nav>
        <div class="lang-switcher">
          <button class="lang-btn active" data-lang="en">EN</button>
          <span style="color:var(--divider)">|</span>
          <button class="lang-btn" data-lang="de">DE</button>
          <span style="color:var(--divider)">|</span>
          <button class="lang-btn" data-lang="ar">AR</button>
        </div>
      </div>
    </header>
  `;
}

import './style.css'
import { initI18n, switchLanguage, applyTranslations } from './i18n'
import { initGlobalAnimations, runPageAnimations } from './animations'
import { renderHeader } from './components/header'
import { renderHero } from './components/hero'
import { renderCompanies } from './components/companies'
import { renderMandate } from './components/mandate'
import { renderFramework } from './components/framework'
import { renderPerspective } from './components/perspective'
import { renderVision } from './components/vision'
import { renderFooter } from './components/footer'

import { renderAbout } from './components/about'
import { renderWhatWeDo } from './components/whatwedo'
import { renderPortfolio } from './components/portfolio'
import { renderLeadership } from './components/leadership'
import { renderContact } from './components/contact'

import { renderAdmin, bindAdminEvents } from './components/admin'
import { renderBlogSection } from './components/blog'
import { renderModal, bindModalEvents } from './components/modal'
import { renderTool, bindToolEvents } from './components/tool'

const routes: Record<string, () => string> = {
  'home': () => renderHero() + renderCompanies() + renderMandate() + renderFramework() + renderBlogSection() + renderPerspective() + renderVision(),
  'about': renderAbout,
  'what-we-do': renderWhatWeDo,
  'portfolio': renderPortfolio,
  'leadership': renderLeadership,
  'contact': renderContact,
  'admin': renderAdmin,
  'tool': renderTool,
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="layout">
    ${renderHeader()}
    <main id="main-content">
      ${routes['home']()}
    </main>
    ${renderModal()}
    ${renderFooter()}
  </div>
`

initI18n();
initGlobalAnimations();
bindModalEvents();

// Sticky Header Logic
const header = document.getElementById('main-header');
const logo = document.getElementById('header-logo');

if (header && logo) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '0.5rem 0';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Light Theme sticky background
      header.style.backdropFilter = 'blur(10px)';
      header.style.borderBottom = '1px solid rgba(226, 232, 240, 0.8)'; // Light divider
      logo.style.height = '60px';
    } else {
      header.style.padding = '1rem 0';
      header.style.backgroundColor = 'var(--primary-bg)';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = '1px solid var(--divider)';
      logo.style.height = '90px';
    }
  });
}

// Routing Logic
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

(window as any).navigateTo = (page: string) => {
  if (page && routes[page] && mainContent) {
    const renderCurrentRoute = () => {
      mainContent.innerHTML = routes[page]();
      applyTranslations();
      runPageAnimations(page);

      if (page === 'admin') {
        bindAdminEvents(renderCurrentRoute);
      }
      if (page === 'tool') {
        bindToolEvents();
      }
    };

    renderCurrentRoute();
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Update active nav state
    navItems.forEach(nav => nav.classList.remove('active'));
    // Find and select the active nav if it exists, otherwise leave all unselected
    document.querySelectorAll(`.nav-item[data-page="${page}"]`).forEach(el => el.classList.add('active'));
  }
};

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const page = (e.currentTarget as HTMLElement).dataset.page;
    if (page) {
      (window as any).navigateTo(page);
    }
  });
});

// Run initial animations for home
mainContent!.innerHTML = routes['home']();
runPageAnimations('home');

// Bind language switcher events
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = (e.currentTarget as HTMLElement).dataset.lang;
    if (lang) {
      switchLanguage(lang);
    }
  });
});

// Bind Show More expand logic globally
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.matches('.show-more-btn')) {
    const wrapper = target.previousElementSibling as HTMLElement;
    if (wrapper && wrapper.classList.contains('expandable-wrapper')) {
      wrapper.classList.toggle('expanded');
      const isExpanded = wrapper.classList.contains('expanded');

      // Update the translation key based on state
      target.dataset.i18n = isExpanded ? 'show_less' : 'show_more';
      target.innerHTML = isExpanded ? '- Show Less' : '+ Show More'; // Fallback text

      // Re-apply translation immediately
      applyTranslations();
    }
  }
});

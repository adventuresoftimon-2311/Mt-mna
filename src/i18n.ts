import en from './i18n/en.json';
import de from './i18n/de.json';
import ar from './i18n/ar.json';

const dictionaries: Record<string, Record<string, string>> = { en, de, ar };
let currentLang = 'en';

export function initI18n() {
    const savedLang = localStorage.getItem('site_lang') || 'en';
    switchLanguage(savedLang);
}

export function switchLanguage(lang: string) {
    if (!dictionaries[lang]) return;
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update active state in nav
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if ((btn as HTMLElement).dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    applyTranslations();
}

export function applyTranslations() {
    const dict = dictionaries[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = (el as HTMLElement).dataset.i18n;
        if (key && dict[key]) {
            // Check if it's an input/textarea placeholder or regular element
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                (el as HTMLInputElement).placeholder = dict[key];
            } else if (el.tagName === 'META' && el.getAttribute('name') === 'description') {
                el.setAttribute('content', dict[key]);
            } else {
                el.innerHTML = dict[key];
            }
        }
    });
}

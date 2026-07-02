// Translation dictionary. Each key maps to { pt, en } HTML strings.
// Only user-facing content that genuinely differs between languages is
// listed here — proper nouns (institution names, the citation itself)
// stay identical in both languages, so they're left untranslated in the HTML.
var I18N = {
  'masthead-updated': {
    pt: 'Isabel Ivo · Atualizado 2026',
    en: 'Isabel Ivo · Updated 2026'
  },
  'hero-eyebrow': {
    pt: 'Biotecnóloga — Investigação Laboratorial Clínica',
    en: 'Biotechnologist — Clinical Laboratory Research'
  },
  'hero-role': {
    pt: 'Mestranda em Tecnologias Laboratoriais Clínicas',
    en: 'MSc Candidate in Clinical Laboratory Technologies'
  },
  'hero-photo-alt': {
    pt: 'Retrato de Isabel Ivo',
    en: 'Portrait of Isabel Ivo'
  },
  'sec-research': { pt: 'Investigação', en: 'Research' },
  'sec-education': { pt: 'Educação', en: 'Education' },
  'sec-skills': { pt: 'Competências', en: 'Skills' },
  'sec-publications': { pt: 'Publicações', en: 'Publications' },
  'sec-experience': { pt: 'Experiência profissional', en: 'Professional Experience' },

  'abstract-label': { pt: 'Resumo', en: 'Abstract' },
  'abstract-title': {
    pt: 'Compostos bioativos com potencial anticancerígeno em <em>Humulus lupulus</em> e bagaço de cerveja',
    en: 'Bioactive compounds with anticancer potential in <em>Humulus lupulus</em> and brewer\u2019s spent grain'
  },
  'abstract-desc': {
    pt: 'Revisão sistemática desenvolvida no âmbito da tese de mestrado, na Escola Superior de Saúde de Lisboa (ESSL), 2025–presente.',
    en: 'Systematic review developed as part of the master\u2019s thesis at Escola Superior de Saúde de Lisboa (ESSL), 2025–present.'
  },
  'abstract-li-1': {
    pt: 'Revisão sistemática de literatura científica',
    en: 'Systematic review of scientific literature'
  },
  'abstract-li-2': {
    pt: 'Extração e análise crítica de estudos sobre compostos bioativos',
    en: 'Extraction and critical analysis of studies on bioactive compounds'
  },
  'abstract-li-3': {
    pt: 'Síntese e interpretação de evidência científica sobre potencial anticancerígeno',
    en: 'Synthesis and interpretation of scientific evidence on anticancer potential'
  },
  'ref-kicker': { pt: 'Publicação indexada', en: 'Indexed publication' },

  'edu1-date': { pt: '2024 — presente', en: '2024 — present' },
  'edu1-title': {
    pt: 'Mestrado em Tecnologias Laboratoriais Clínicas',
    en: 'Master\u2019s Degree in Clinical Laboratory Technologies'
  },
  'edu1-note': {
    pt: 'Tese de mestrado em curso.',
    en: 'Master\u2019s thesis in progress.'
  },
  'edu2-title': {
    pt: 'Licenciatura em Biotecnologia',
    en: 'Bachelor\u2019s Degree in Biotechnology'
  },
  'edu3-title': {
    pt: 'Diploma de Formação Avançada em Manipulação e Análise da Expressão Génica',
    en: 'Diploma of Advanced Training in Gene Expression Manipulation and Analysis'
  },

  'skills-col1': { pt: 'Científicas &amp; académicas', en: 'Scientific &amp; academic' },
  'skills-col2': { pt: 'Profissionais', en: 'Professional' },

  'sci-1': { pt: 'Escrita científica e investigação académica', en: 'Scientific writing and academic research' },
  'sci-2': { pt: 'Revisão de literatura e análise de dados', en: 'Literature review and data analysis' },
  'sci-3': { pt: 'Registo e interpretação de dados', en: 'Data recording and interpretation' },
  'sci-4': {
    pt: 'Trabalho laboratorial prático (pipetagem, preparação de amostras)',
    en: 'Hands-on lab work (pipetting, sample preparation)'
  },
  'sci-5': {
    pt: 'Procedimentos básicos de segurança laboratorial',
    en: 'Basic laboratory safety procedures'
  },

  'prof-1': { pt: 'Trabalho em equipa em ambientes dinâmicos', en: 'Teamwork in dynamic environments' },
  'prof-2': { pt: 'Atendimento e comunicação', en: 'Customer service and communication' },
  'prof-3': { pt: 'Gestão de tempo e multitasking', en: 'Time management and multitasking' },
  'prof-4': { pt: 'Resolução de problemas sob pressão', en: 'Problem-solving under pressure' },
  'prof-5': {
    pt: 'Atenção ao detalhe e responsabilidade',
    en: 'Attention to detail and responsibility'
  },

  'lang-pt-item': { pt: '<strong>Português</strong> — Nativo', en: '<strong>Portuguese</strong> — Native' },
  'lang-en-item': { pt: '<strong>Inglês</strong> — Intermédio B2', en: '<strong>English</strong> — Intermediate B2' },

  'exp1-title': { pt: 'Operadora de Caixa', en: 'Cashier' },

  'back-top': { pt: 'Voltar ao topo ↑', en: 'Back to top ↑' },

  'theme-claro': { pt: 'Claro', en: 'Light' },
  'theme-escuro': { pt: 'Escuro', en: 'Dark' }
};

(function () {
  var root = document.documentElement;
  var langToggle = document.getElementById('langToggle');
  var themeToggle = document.getElementById('themeToggle');
  var toggleLabel = document.getElementById('toggleLabel');
  var STORAGE_KEY = 'isabel-cv-lang';

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyLang(lang) {
    root.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (I18N[key]) el.innerHTML = I18N[key][lang];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (I18N[key]) el.setAttribute('alt', I18N[key][lang]);
    });

    // keep the theme toggle label in sync with the active language
    if (toggleLabel) {
      var themeKey = currentTheme() === 'dark' ? 'theme-escuro' : 'theme-claro';
      toggleLabel.textContent = I18N[themeKey][lang];
    }

    if (langToggle) {
      langToggle.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.classList.toggle('is-active', opt.getAttribute('data-lang-option') === lang);
      });
    }

    document.title = lang === 'en'
      ? 'Isabel Ivo — Curriculum Vitae'
      : 'Isabel Ivo — Curriculum Vitae';
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }

  var browserLang = (navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
  applyLang(saved || browserLang);

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var next = root.getAttribute('lang') === 'pt' ? 'en' : 'pt';
      applyLang(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  // expose so the theme toggle script (script.js) can re-sync the label
  // whenever the theme changes, without duplicating the dictionary there
  window.__isabelSyncThemeLabel = function () {
    if (!toggleLabel) return;
    var lang = root.getAttribute('lang') === 'en' ? 'en' : 'pt';
    var themeKey = currentTheme() === 'dark' ? 'theme-escuro' : 'theme-claro';
    toggleLabel.textContent = I18N[themeKey][lang];
  };
})();

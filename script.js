'use strict';

const GSAP_MAX_RETRIES = 25;
const GSAP_RETRY_DELAY_MS = 80;

const GRADIENTS = [
  ['#1a3326', '#204931'],
  ['#204931', '#3a8057'],
  ['#0f1f16', '#1a3326'],
  ['#3a8057', '#204931'],
  ['#2c3e2d', '#3a8057'],
  ['#1a3326', '#0f1f16'],
];

const DEFENSORES_NOMES = [
  { nome: 'Dra Alessandra Andrea Miglioranza' },
  { nome: 'Dra Aline Dionisio Castelo Branco' },
  { nome: 'Dra Aline Pereira de Almeida' },
  { nome: 'Dra Andreia Renata Viana Vilaca dos Santos' },
  { nome: 'Dra Anna Elize Fenoll Amaral' },
  { nome: 'Dr. Antonio Avelino de Almeida Neto' },
  { nome: 'Dra Beatriz Dufflis Fernandes' },
  { nome: 'Dr. Carlos Fabricio Ortmeier Ratacheski' },
  { nome: 'Dra Christianne Gonzalez Leite' },
  { nome: 'Dra Elceni Diogo da Silva' },
  { nome: 'Dra Elcianne Viana de Souza' },
  { nome: 'Dra Elisa Rocha Teixeira Netto' },
  { nome: 'Dra Emira Latife L. Salomao Reis' },
  { nome: 'Dr. Francisco Francelino de Souza' },
  { nome: 'Dr. Frederico Cesar Leao Encarnacao' },
  { nome: 'Dra Hannah Larissa De Carvalho Gurgel' },
  { nome: 'Dra Inaja de Queiroz Maduro' },
  { nome: 'Dr. Izabela Sedlmaier Souza' },
  { nome: 'Dr. Jaime Brasil Filho' },
  { nome: 'Dr. Januario Miranda Lacerda' },
  { nome: 'Dra Jeane Magalhaes Xaud' },
  { nome: 'Dr. Jose Joao Pereira dos Santos' },
  { nome: 'Dr. Jose Roceliton Vito Joca' },
  { nome: 'Dr. Julian Silva Barroso' },
  { nome: 'Dra Juliana Gotardo Heinzen' },
  { nome: 'Dra Lenir Rodrigues' },
  { nome: 'Dra Maria das Gracas Barbosa Soares' },
  { nome: 'Dra Mariana Ribeiro Lorenzi' },
  { nome: 'Dra Mariana Falcao Bastos Costa' },
  { nome: 'Dr. Natanael de Lima Ferreira' },
  { nome: 'Dra Nicole Farias Rodrigues' },
  { nome: 'Dra Noelina dos Santos Chaves Lopes' },
  { nome: 'Dr. Oleno Inacio de Matos' },
  { nome: 'Dra Paula Regina Pinheiro Castro' },
  { nome: 'Dr. Rogenilton Ferreira Gomes' },
  { nome: 'Dr. Ronnie Gabriel Garcia' },
  { nome: 'Dra Rosinha Cardoso Peixoto' },
  { nome: 'Dr. Stelio Dener de Souza Cruz (Licenciado)' },
  { nome: 'Dra Tatyane Alves Costa' },
  { nome: 'Dra Teresinha Lopes da Silva Azevedo' },
  { nome: 'Dra Terezinha Muniz de Souza Cruz' },
  { nome: 'Dr. Thaumaturgo Cezar Moreira do Nascimento' },
  { nome: 'Dr. Vanderlei Oliveira' },
  { nome: 'Dr. Wagner Silva dos Santos' },
  { nome: 'Dr. Wallace Rodrigues' },
  { nome: 'Dr. Wenderson de Sousa Chagas' },
  { nome: 'Dr. Wilson Roi Leite Da Silva' },
  { nome: 'Dr. Cassio Emanuel' },
  { nome: 'Dra Catarina Lopes Maia' },
  { nome: 'Dr. Jean Daniel de Almeida Santos' },
  { nome: 'Dra Helen Beatriz Silvano' },
  { nome: 'Dra Sylvia Annabel Soriano' },
];

const DEFENSORES_FOTOS = [
  'Defensor-01.jpg',
  'Defensor-02.jpg',
  'Defensor-03.jpg',
  'Defensor-04.jpg',
  'Defensor-05.jpg',
  'Defensor-06.jpg',
  'Defensor-07.jpg',
  'Defensor-08.jpg',
  'Defensor-09.jpg',
  'Defensor-10.jpg',
  'Defensor-11.jpg',
  'Defensor-12.jpg',
  'Defensor-13.jpg',
  'Defensor-14.jpg',
  'Defensor-15.jpg',
  'Defensor-16.jpg',
  'Defensor-17.jpg',
  'Defensor-18.jpg',
  'Defensor-19.png',
  'Defensor-20.jpg',
  'Defensor-21.jpg',
  'Defensor-22.jpg',
  'Defensor-23.jpg',
  'Defensor-24.jpg',
  'Defensor-25.jpg',
  'Defensor-26.jpg',
  'Defensor-27.jpg',
  'Defensor-28.jpeg',
  'Defensor-29.jpg',
  'Defensor-30.jpg',
  'Defensor-31.jpg',
  'Defensor-32.jpg',
  'Defensor-33.jpg',
  'Defensor-34.jpeg',
  'Defensor-35.jpeg',
  'Defensor-36.jpg',
  'Defensor-37.jpg',
  'Defensor-38.jpg',
  'Defensor-39.jpg',
  'Defensor-40.jpg',
  'Defensor-41.jpg',
  'Defensor-42.jpg',
  'Defensor-43.jpg',
  'Defensor-44.jpg',
  'Defensor-45.jpg',
  'Defensor-46.jpg',
  'Defensor-47.jpg',
  'Defensor-48.jpg',
  'Defensor-49.jpg',
  'Defensor-50.jpg',
  'Defensor-51.jpg',
  'Defensor-52.jpg',
];

document.addEventListener('DOMContentLoaded', () => {
  gerarCards();
  configurarBotoesCTA();
  configurarLazyGif();
  configurarAcessibilidadeCards();
  configurarMenuHamburguer();
  iniciarExperiencia();
});

/* ─── MENU HAMBÚRGUER ─── */
function configurarMenuHamburguer() {
  const btn = document.querySelector('.hamburger-btn');
  const overlay = document.getElementById('nav-overlay');

  if (!btn || !overlay) return;

  const backdrop = overlay.querySelector('.nav-overlay__backdrop');
  const closeBtn = overlay.querySelector('.nav-overlay__close');
  const links = overlay.querySelectorAll('.nav-overlay__link');

  function abrirMenu() {
    btn.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // foco no primeiro link após animação
    setTimeout(() => {
      const firstLink = overlay.querySelector('.nav-overlay__link');
      if (firstLink) firstLink.focus();
    }, 450);
  }

  function fecharMenu() {
    btn.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    btn.focus();
  }

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    isOpen ? fecharMenu() : abrirMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', fecharMenu);
  if (backdrop) backdrop.addEventListener('click', fecharMenu);

  // Fechar ao clicar em link
  links.forEach((link) => {
    link.addEventListener('click', fecharMenu);
  });

  // Fechar com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      fecharMenu();
    }
  });

  // Trap focus dentro do overlay
  overlay.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = overlay.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ─── EXPERIÊNCIA / ANIMAÇÕES ─── */
function iniciarExperiencia() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    aplicarFallbackSemAnimacao();
    return;
  }

  esperarGSAP();
}

function esperarGSAP(tentativa = 0) {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    iniciarAnimacoes();
    return;
  }

  if (tentativa >= GSAP_MAX_RETRIES) {
    aplicarFallbackSemAnimacao();
    return;
  }

  window.setTimeout(() => esperarGSAP(tentativa + 1), GSAP_RETRY_DELAY_MS);
}

function aplicarFallbackSemAnimacao() {
  document.documentElement.classList.add('no-motion');
  document.querySelectorAll('[data-gsap-hidden]').forEach((el) => {
    el.removeAttribute('data-gsap-hidden');
  });
}

function gerarCards() {
  const grid = document.querySelector('.defensores-grid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();

  DEFENSORES_NOMES.forEach((def, idx) => {
    const grad = GRADIENTS[idx % GRADIENTS.length];
    const numero = String(idx + 1).padStart(2, '0');
    const foto = DEFENSORES_FOTOS[idx] || `Defensor-${numero}.jpg`;
    const article = document.createElement('article');

    article.className = 'defensor-card';
    article.setAttribute('role', 'listitem');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', `Defensor(a) ${def.nome}`);

    article.innerHTML = `
      <div class="defensor-card__img-wrap">
        <div class="defensor-card__placeholder" style="background: linear-gradient(150deg, ${grad[0]}, ${grad[1]});" aria-hidden="true">
          <div class="defensor-card__role-icon">Def. Público</div>
        </div>
        <img
          class="defensor-card__img"
          src="img/defensores/${foto}"
          alt=""
          loading="lazy"
          onerror="this.style.display='none'"
          aria-hidden="true"
        />
        <img
          class="defensor-card__gif"
          src="img/defensores/Defensor-${numero}.gif"
          alt=""
          loading="lazy"
          onerror="this.style.display='none'"
          aria-hidden="true"
        />
        <div class="defensor-card__overlay" aria-hidden="true">
          <p class="defensor-card__name">${def.nome}</p>
        </div>
      </div>
      <div class="defensor-card__footer">
        <p class="defensor-card__footer-name">${def.nome}</p>
      </div>
    `;

    fragment.appendChild(article);
  });

  grid.appendChild(fragment);
}

function iniciarAnimacoes() {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('animations-ready');

  animarHero();
  animarProgramas();
  animarDefensores();
  animarFrase();
  animarHeader();
  animarSectionTexto();
  animarSectionHistoria();
  animarSectionSolidaria();
  animarDefensoresCTA();
}

function animarHero() {
  gsap.set('.hero__eyebrow', { opacity: 0, y: 10 });
  gsap.set('.hero__title-num', { opacity: 0, y: 60 });
  gsap.set('.hero__title-anos, .hero__title-sub, .hero__tagline, .hero__cta, .scroll-indicator', { opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl
    .to('.hero__eyebrow', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
    .to('.hero__title-num', { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out' }, '-=0.3')
    .to('.hero__title-anos', { opacity: 1, duration: 0.7 }, '-=0.6')
    .to('.hero__title-sub', { opacity: 1, duration: 0.7 }, '-=0.4')
    .to('.hero__tagline', { opacity: 1, duration: 0.7 }, '-=0.4')
    .to('.hero__cta', { opacity: 1, duration: 0.5 }, '-=0.3')
    .to('.scroll-indicator', { opacity: 1, duration: 0.6 }, '-=0.2');

  gsap.to('.hero__video', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
}

function animarSectionTexto() {
  const section = document.querySelector('.texto-abertura-section');
  if (!section) return;

  gsap.from('.texto-abertura__inner', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 75%',
      once: true,
    }
  });

  gsap.from('.texto-abertura__body p', {
    opacity: 0,
    y: 20,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 65%',
      once: true,
    }
  });
}

function animarProgramas() {
  document.querySelectorAll('.program-section').forEach((section) => {
    const body = section.querySelector('.program-section__body');
    const visual = section.querySelector('.program-section__visual');
    const deco = section.querySelector('.deco-roman');
    const decoWrapper = section.querySelector('.program-section__deco');

    if (body) {
      gsap.set(body, { opacity: 0, x: -30 });
      body.setAttribute('data-gsap-hidden', 'true');
    }

    if (visual) {
      gsap.set(visual, { opacity: 0, x: 30 });
      visual.setAttribute('data-gsap-hidden', 'true');
    }

    if (deco) {
      gsap.fromTo(deco, { x: 80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true }
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top 70%', once: true },
      onComplete: () => {
        body?.removeAttribute('data-gsap-hidden');
        visual?.removeAttribute('data-gsap-hidden');
      }
    });

    if (body) tl.to(body, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' });
    if (visual) tl.to(visual, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5');

    if (decoWrapper) {
      gsap.to(decoWrapper, {
        y: -60, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    }
  });
}

function animarSectionSolidaria() {
  const section = document.querySelector('.defensoria-solidaria-section');
  if (!section) return;

  gsap.from('.defensoria-solidaria__inner', {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: section, start: 'top 75%', once: true }
  });
}

function animarSectionHistoria() {
  const section = document.querySelector('.historia-section');
  if (!section) return;

  gsap.from('.historia__deco-num', {
    opacity: 0,
    x: -40,
    duration: 1.2,
    ease: 'expo.out',
    scrollTrigger: { trigger: section, start: 'top 80%', once: true }
  });

  gsap.from('.historia__title', {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: section, start: 'top 75%', once: true }
  });

  gsap.from('.historia__body p', {
    opacity: 0,
    y: 18,
    duration: 0.65,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: { trigger: section, start: 'top 65%', once: true }
  });
}

function animarDefensoresCTA() {
  const section = document.querySelector('.defensores-cta-section');
  if (!section) return;

  gsap.from('.defensores-cta__inner', {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: section, start: 'top 75%', once: true }
  });
}

function animarDefensores() {
  gsap.from('.defensores-header', {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.defensores-section',
      start: 'top 75%',
      once: true,
    }
  });

  const cards = document.querySelectorAll('.defensor-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: 20 });
  cards.forEach((card) => card.setAttribute('data-gsap-hidden', 'true'));

  ScrollTrigger.batch(cards, {
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power2.out',
        onComplete: () => batch.forEach((card) => card.removeAttribute('data-gsap-hidden')),
      });
    },
    start: 'top 88%',
    once: true,
  });
}

function animarFrase() {
  const quote = document.querySelector('.frase-quote p');
  if (quote) {
    quote.setAttribute('data-gsap-hidden', 'true');
    gsap.set(quote, { opacity: 0, y: 20 });
  }

  gsap.to('.frase-quote p', {
    opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.frase-section', start: 'top 65%', once: true },
    onComplete: () => quote?.removeAttribute('data-gsap-hidden'),
  });

  gsap.from('.frase-aspas--open', {
    x: -30, opacity: 0, duration: 1, ease: 'power2.out',
    scrollTrigger: { trigger: '.frase-section', start: 'top 70%', once: true }
  });

  gsap.from('.frase-aspas--close', {
    x: 30, opacity: 0, duration: 1, ease: 'power2.out',
    scrollTrigger: { trigger: '.frase-section', start: 'top 70%', once: true }
  });

  gsap.from('.ornamento-linha, .ornamento-rombo', {
    scaleX: 0, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.frase-section', start: 'top 70%', once: true }
  });
}

function animarHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  ScrollTrigger.create({
    start: 100,
    onEnter: () => header.classList.add('scrolled'),
    onLeaveBack: () => header.classList.remove('scrolled'),
  });
}

/* ─── SMOOTH SCROLL ─── */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href || href === '#') return;

  const targetId = href.slice(1);
  const target = document.getElementById(targetId);
  if (!target) return;

  e.preventDefault();

  const headerH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
    10
  ) || 70;

  const top = target.getBoundingClientRect().top + window.scrollY - headerH;
  window.scrollTo({ top, behavior: 'smooth' });
});

/* ─── BOTÕES CTA ─── */
function configurarBotoesCTA() {
  const ctaButtons = document.querySelectorAll('.hero__cta, .program-cta, .defensores-cta__btn');

  ctaButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(btn, { scale: 1.03, duration: 0.2, ease: 'power1.out' });
      }
    });

    btn.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
      }
    });
  });
}

function configurarAcessibilidadeCards() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;

    const card = e.target.closest('.defensor-card');
    if (!card) return;

    e.preventDefault();
    card.classList.toggle('card-active');
  });
}

function configurarLazyGif() {
  const cards = document.querySelectorAll('.defensor-card');

  cards.forEach((card) => {
    const gif = card.querySelector('.defensor-card__gif');
    if (!gif) return;

    let gifLoaded = false;
    const carregarGif = () => { gifLoaded = true; };

    card.addEventListener('mouseenter', carregarGif, { once: true });
    card.addEventListener('focus', carregarGif, { once: true });
  });
}

(function adicionarCSSScrolled() {
  const style = document.createElement('style');
  style.textContent = `
    .site-header.scrolled {
      background: rgba(10, 20, 14, 0.97);
      border-bottom-color: rgba(201, 168, 76, 0.35);
    }
  `;
  document.head.appendChild(style);
})();

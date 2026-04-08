'use strict';

const GSAP_MAX_RETRIES = 25;
const GSAP_RETRY_DELAY_MS = 80;

const DEFENSORES = [
  { nome: 'Ana Paula Ferreira', comarca: 'Boa Vista', iniciais: 'AP' },
  { nome: 'Bruno Menezes', comarca: 'Boa Vista', iniciais: 'BM' },
  { nome: 'Carla Nascimento', comarca: 'Caracaraí', iniciais: 'CN' },
  { nome: 'Daniel Rodrigues', comarca: 'Boa Vista', iniciais: 'DR' },
  { nome: 'Eliane Monteiro', comarca: 'Alto Alegre', iniciais: 'EM' },
  { nome: 'Fábio Costa Lima', comarca: 'Boa Vista', iniciais: 'FC' },
  { nome: 'Graziela Pinheiro', comarca: 'Mucajaí', iniciais: 'GP' },
  { nome: 'Henrique Barbosa', comarca: 'Boa Vista', iniciais: 'HB' },
  { nome: 'Isabela Cardoso', comarca: 'Rorainópolis', iniciais: 'IC' },
  { nome: 'João Paulo Araújo', comarca: 'Boa Vista', iniciais: 'JP' },
  { nome: 'Kátia Oliveira', comarca: 'Caracaraí', iniciais: 'KO' },
  { nome: 'Leonardo Sá', comarca: 'Boa Vista', iniciais: 'LS' },
  { nome: 'Mariana Freitas', comarca: 'Boa Vista', iniciais: 'MF' },
  { nome: 'Nilton Pereira', comarca: 'Mucajaí', iniciais: 'NP' },
  { nome: 'Olga Trindade', comarca: 'Boa Vista', iniciais: 'OT' },
  { nome: 'Paulo Henrique', comarca: 'Alto Alegre', iniciais: 'PH' },
  { nome: 'Quésia Almeida', comarca: 'Boa Vista', iniciais: 'QA' },
  { nome: 'Rafael Nogueira', comarca: 'Rorainópolis', iniciais: 'RN' },
  { nome: 'Sandra Leal', comarca: 'Boa Vista', iniciais: 'SL' },
  { nome: 'Tiago Mendonça', comarca: 'Caracaraí', iniciais: 'TM' },
  { nome: 'Ursula Brandão', comarca: 'Boa Vista', iniciais: 'UB' },
  { nome: 'Vera Cristina', comarca: 'Mucajaí', iniciais: 'VC' },
  { nome: 'Wagner Souza', comarca: 'Boa Vista', iniciais: 'WS' },
  { nome: 'Xavier Fonseca', comarca: 'Alto Alegre', iniciais: 'XF' },
  { nome: 'Yara Campos', comarca: 'Boa Vista', iniciais: 'YC' },
  { nome: 'Zilda Torres', comarca: 'Rorainópolis', iniciais: 'ZT' },
  { nome: 'Adriana Moura', comarca: 'Boa Vista', iniciais: 'AM' },
  { nome: 'Bernardo Lins', comarca: 'Caracaraí', iniciais: 'BL' },
  { nome: 'Cinthia Guimarães', comarca: 'Boa Vista', iniciais: 'CG' },
  { nome: 'Diego Vasconcelos', comarca: 'Mucajaí', iniciais: 'DV' },
  { nome: 'Edna Sampaio', comarca: 'Boa Vista', iniciais: 'ES' },
  { nome: 'Flávio Ramos', comarca: 'Alto Alegre', iniciais: 'FR' },
  { nome: 'Gisele Ribeiro', comarca: 'Boa Vista', iniciais: 'GR' },
  { nome: 'Hugo Cavalcante', comarca: 'Rorainópolis', iniciais: 'HC' },
  { nome: 'Ingrid Sousa', comarca: 'Boa Vista', iniciais: 'IS' },
  { nome: 'José Carlos Melo', comarca: 'Caracaraí', iniciais: 'JC' },
  { nome: 'Larissa Andrade', comarca: 'Boa Vista', iniciais: 'LA' },
  { nome: 'Marcos Teixeira', comarca: 'Mucajaí', iniciais: 'MT' },
  { nome: 'Nadia Braga', comarca: 'Boa Vista', iniciais: 'NB' },
  { nome: 'Oscar Vieira', comarca: 'Alto Alegre', iniciais: 'OV' },
  { nome: 'Patrícia Leão', comarca: 'Boa Vista', iniciais: 'PL' },
  { nome: 'Rodrigo Azevedo', comarca: 'Rorainópolis', iniciais: 'RA' },
  { nome: 'Sílvia Mendes', comarca: 'Boa Vista', iniciais: 'SM' },
  { nome: 'Thiago Correia', comarca: 'Caracaraí', iniciais: 'TC' },
  { nome: 'Umberto Freire', comarca: 'Boa Vista', iniciais: 'UF' },
  { nome: 'Vânia Lustosa', comarca: 'Mucajaí', iniciais: 'VL' },
  { nome: 'Willian Rocha', comarca: 'Boa Vista', iniciais: 'WR' },
  { nome: 'Ximena Figueiredo', comarca: 'Alto Alegre', iniciais: 'XI' },
  { nome: 'Yasmin Duarte', comarca: 'Boa Vista', iniciais: 'YD' },
  { nome: 'Zuleika Prado', comarca: 'Rorainópolis', iniciais: 'ZP' },
  { nome: 'Abner Santana', comarca: 'Boa Vista', iniciais: 'AS' },
  { nome: 'Beatriz Lima', comarca: 'Caracaraí', iniciais: 'BL' },
];

const NOMES_DEFENSORES = [
  'DrÂª Alessandra Andrea Miglioranza',
  'DrÂª Aline DionÃ­sio Castelo Branco',
  'DrÂª Aline Pereira de Almeida',
  'DrÂª Andreia Renata Viana VilaÃ§a dos Santos',
  'DrÂª Anna Elize Fenoll Amaral',
  'Dr. Antonio Avelino de Almeida Neto',
  'DrÂª Beatriz Dufflis Fernandes',
  'Dr. Carlos FabrÃ­cio Ortmeier Ratacheski',
  'DrÂª Christianne Gonzalez Leite',
  'DrÂª Elceni Diogo da Silva',
  'DrÂª Elcianne Viana de Souza',
  'DrÂª Elisa Rocha Teixeira Netto',
  'DrÂª Emira Latife L. SalomÃ£o Reis',
  'Dr. Francisco Francelino de Souza',
  'Dr. Frederico Cesar LeÃ£o EncarnaÃ§Ã£o',
  'DrÂª Hannah Larissa De Carvalho Gurgel',
  'DrÂª InajÃ¡ de Queiroz Maduro',
  'Dr. Izabela Sedlmaier Souza',
  'Dr. Jaime Brasil Filho',
  'Dr. JanuÃ¡rio Miranda Lacerda',
  'DrÂª Jeane MagalhÃ£es Xaud',
  'Dr. JosÃ© JoÃ£o Pereira dos Santos',
  'Dr. JosÃ© Roceliton Vito Joca',
  'Dr. Julian Silva Barroso',
  'DrÂª Juliana Gotardo Heinzen',
  'DrÂª Lenir Rodrigues',
  'DrÂª Maria das GraÃ§as Barbosa Soares',
  'Dra. Mariana Ribeiro Lorenzi',
  'Dra. Mariana FalcÃ£o Bastos Costa',
  'Dr. Natanael de Lima Ferreira',
  'DrÂª Nicole Farias Rodrigues',
  'DrÂª Noelina dos Santos Chaves Lopes',
  'Dr. Oleno InÃ¡cio de Matos',
  'DrÂª Paula Regina Pinheiro Castro',
  'Dr. Rogenilton Ferreira Gomes',
  'Dr. Ronnie Gabriel Garcia',
  'DrÂª Rosinha Cardoso Peixoto',
  'Dr. StÃ©lio Dener de Souza Cruz (Licenciado)',
  'DrÂª Tatyane Alves Costa',
  'DrÂª Teresinha Lopes da Silva Azevedo',
  'DrÂª Terezinha Muniz de Souza Cruz',
  'Dr. Thaumaturgo Cezar Moreira do Nascimento',
  'Dr. Vanderlei Oliveira',
  'Dr. Wagner Silva dos Santos',
  'Dr. Wallace Rodrigues',
  'Dr. Wenderson de Sousa Chagas',
  'Dr. Wilson Roi Leite Da Silva',
  'Dr. CÃ¡ssio Emanuel',
  'DrÂª Catarina Lopes Maia',
  'Dr. Jean Daniel de Almeida Santos',
  'DrÂª Helen Beatriz Silvano',
  'DrÂª Sylvia Annabel Soriano',
];

DEFENSORES.length = 0;
DEFENSORES.push(...NOMES_DEFENSORES.map((nome) => ({ nome })));

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

document.addEventListener('DOMContentLoaded', () => {
  gerarCards();
  configurarBotoesCTA();
  configurarLazyGif();
  configurarAcessibilidadeCards();
  iniciarExperiencia();
});

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
          src="img/defensores/defensor-${numero}.jpg"
          alt=""
          loading="lazy"
          onerror="this.style.display='none'"
          aria-hidden="true"
        />
        <img
          class="defensor-card__gif"
          src="img/defensores/defensor-${numero}.gif"
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
      gsap.fromTo(deco, {
        x: 80,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        }
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        once: true,
      },
      onComplete: () => {
        body?.removeAttribute('data-gsap-hidden');
        visual?.removeAttribute('data-gsap-hidden');
      }
    });

    if (body) {
      tl.to(body, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }

    if (visual) {
      tl.to(visual, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.5');
    }

    if (decoWrapper) {
      gsap.to(decoWrapper, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }
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
  gsap.set(cards, { opacity: 0, y: 20 });
  cards.forEach((card) => card.setAttribute('data-gsap-hidden', 'true'));

  ScrollTrigger.batch(cards, {
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
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
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.frase-section',
      start: 'top 65%',
      once: true,
    },
    onComplete: () => quote?.removeAttribute('data-gsap-hidden'),
  });

  gsap.from('.frase-aspas--open', {
    x: -30,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.frase-section',
      start: 'top 70%',
      once: true,
    }
  });

  gsap.from('.frase-aspas--close', {
    x: 30,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.frase-section',
      start: 'top 70%',
      once: true,
    }
  });

  gsap.from('.ornamento-linha, .ornamento-rombo', {
    scaleX: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.frase-section',
      start: 'top 70%',
      once: true,
    }
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

function configurarBotoesCTA() {
  const ctaButtons = document.querySelectorAll('.hero__cta, .program-cta');

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

    const carregarGif = () => {
      if (gifLoaded) return;
      gifLoaded = true;
    };

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

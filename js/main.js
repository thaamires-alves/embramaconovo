// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===== TABS (Missão / Visão / Valores) =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

// ===== BACK TO TOP =====
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Mensagem enviada!';
      btn.style.background = '#2E7D4F';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = 'Enviar';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

// ===== PRODUCT FILTERS =====
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== HERO DOTS =====
const heroSlides = [
  {
    heading: 'A vida acontece sobre um piso Embramaco',
    sub: 'Revestimentos cerâmicos e porcelanatos de alta qualidade para transformar seu ambiente.'
  },
  {
    heading: 'Inovação em cada detalhe',
    sub: 'Mais de 50 anos criando produtos que unem beleza, resistência e sustentabilidade.'
  },
  {
    heading: 'Presença em todo o mundo',
    sub: 'Exportamos para mais de 200 clientes ativos internacionalmente.'
  }
];

let currentSlide = 0;
const heroHeading = document.querySelector('.hero-content h1');
const heroParagraph = document.querySelector('.hero-content p');
const heroDots = document.querySelectorAll('.hero-dots span');

function goToSlide(idx) {
  currentSlide = idx;
  if (heroHeading) heroHeading.textContent = heroSlides[idx].heading;
  if (heroParagraph) heroParagraph.textContent = heroSlides[idx].sub;
  heroDots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

heroDots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

if (heroHeading) {
  setInterval(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, 4500);
}

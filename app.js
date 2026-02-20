// ===== NALA Beauty Clinic - Premium SPA Application =====

// ===== PRELOADER =====
window.addEventListener('load', function() {
  setTimeout(function() {
    var pl = document.getElementById('preloader');
    if (pl) pl.classList.add('hidden');
  }, 1400);
  initCarousels();
  startHeroTyping();
  initFadeObserver();
});

// ===== SPA NAVIGATION =====
var currentSection = 'home';

function navigateTo(section) {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(s) {
    s.classList.remove('active');
    s.style.opacity = '0';
  });

  var target = document.getElementById('section-' + section);
  if (target) {
    target.classList.add('active');
    setTimeout(function() {
      target.style.opacity = '1';
    }, 50);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-link').forEach(function(l) {
    l.classList.remove('active');
    if (l.getAttribute('data-section') === section) {
      l.classList.add('active');
    }
  });

  currentSection = section;

  var nav = document.getElementById('main-nav');
  if (section === 'home') {
    nav.classList.remove('scrolled');
  } else {
    nav.classList.add('scrolled');
  }

  // Reinit carousels and observers
  setTimeout(function() {
    initCarousels();
    initFadeObserver();
  }, 200);
}

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.querySelector('.nav-toggle').classList.toggle('active');
}

// ===== NAV SCROLL EFFECT =====
window.addEventListener('scroll', function() {
  var nav = document.getElementById('main-nav');
  if (currentSection === 'home') {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

// ===== HERO TYPING EFFECT =====
function startHeroTyping() {
  var text = 'Donde la ciencia, la estética y la longevidad se encuentran';
  var el = document.getElementById('hero-typed');
  if (!el) return;
  var i = 0;
  el.innerHTML = '<span class="cursor"></span>';

  function type() {
    if (i < text.length) {
      el.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
      i++;
      setTimeout(type, 45 + Math.random() * 25);
    }
  }
  setTimeout(type, 1800);
}

// ===== HERO CLICK TO COLOR =====
document.addEventListener('DOMContentLoaded', function() {
  var heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    heroBg.addEventListener('click', function() {
      document.querySelectorAll('.hero-img').forEach(function(img) {
        img.classList.toggle('color');
      });
    });
  }
});

// ===== CAROUSELS - Auto-scroll every 2 seconds =====
var carouselIntervals = [];

function initCarousels() {
  carouselIntervals.forEach(function(id) { clearInterval(id); });
  carouselIntervals = [];

  document.querySelectorAll('.carousel-track').forEach(function(track) {
    var container = track.parentElement;
    if (!container) return;

    // Check if track is in an active section
    var section = track.closest('.section');
    if (section && !section.classList.contains('active')) return;

    var isDragging = false;
    var startX = 0;
    var scrollLeftStart = 0;
    var pauseAuto = false;

    // Auto-scroll every 2 seconds
    var autoId = setInterval(function() {
      if (pauseAuto) return;
      if (!track.children.length) return;
      var cardWidth = track.children[0].offsetWidth || 320;
      var maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;
      var newPos = track.scrollLeft + cardWidth + 20;
      if (newPos >= maxScroll - 10) newPos = 0;
      track.scrollTo({ left: newPos, behavior: 'smooth' });
    }, 2000);
    carouselIntervals.push(autoId);

    // Pause on hover
    track.addEventListener('mouseenter', function() { pauseAuto = true; });
    track.addEventListener('mouseleave', function() { pauseAuto = false; isDragging = false; });

    // Mouse drag
    track.addEventListener('mousedown', function(e) {
      isDragging = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeftStart = track.scrollLeft;
      track.style.scrollBehavior = 'auto';
    });

    track.addEventListener('mouseup', function() {
      isDragging = false;
      track.style.scrollBehavior = '';
    });

    track.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      e.preventDefault();
      var x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeftStart - (x - startX);
    });

    // Touch drag
    var touchStartX = 0;
    var touchScrollLeft = 0;

    track.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
      touchScrollLeft = track.scrollLeft;
      pauseAuto = true;
    }, { passive: true });

    track.addEventListener('touchmove', function(e) {
      var x = e.touches[0].clientX;
      track.scrollLeft = touchScrollLeft - (x - touchStartX);
    }, { passive: true });

    track.addEventListener('touchend', function() {
      setTimeout(function() { pauseAuto = false; }, 3000);
    }, { passive: true });
  });
}

// ===== FADE-UP OBSERVER =====
function initFadeObserver() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-up, .home-block').forEach(function(el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.fade-up, .home-block').forEach(function(el) {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// ===== MODAL =====
function showDetail(card) {
  var modal = document.getElementById('detail-modal');
  var img = card.querySelector('img');
  var h4 = card.querySelector('h4');
  var p = card.querySelector('.card-info p');
  var tag = card.querySelector('.card-tag');

  var modalImg = modal.querySelector('.modal-img');
  modalImg.innerHTML = '<img src="' + (img ? img.src : '') + '" alt="">';

  var modalH3 = modal.querySelector('.modal-info h3');
  modalH3.textContent = h4 ? h4.textContent : '';

  var modalP = modal.querySelector('.modal-info p');
  modalP.textContent = p ? p.textContent : '';

  var modalTag = modal.querySelector('.modal-tag');
  if (modalTag && tag) {
    modalTag.textContent = tag.textContent;
    modalTag.style.display = 'inline-block';
  } else if (modalTag) {
    modalTag.style.display = 'none';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === e.currentTarget) closeModalForce();
}

function closeModalForce() {
  document.getElementById('detail-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== TOAST =====
function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('span').textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 3500);
}

// ===== CONTACT FORM =====
async function handleContactSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type="submit"]');
  var origText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  btn.disabled = true;

  var data = {
    name: form.querySelector('[name="name"]').value,
    email: form.querySelector('[name="email"]').value,
    phone: form.querySelector('[name="phone"]').value,
    service: form.querySelector('[name="service"]').value,
    message: form.querySelector('[name="message"]').value
  };

  try {
    var res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      showToast('Gracias por tu consulta. Nos pondremos en contacto a la brevedad.');
      form.reset();
    }
  } catch (err) {
    showToast('Error al enviar. Intentá nuevamente.');
  }

  btn.innerHTML = origText;
  btn.disabled = false;
}

// ===== KEYBOARD ESC =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModalForce();
});

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', function() {
  if (currentSection !== 'home') return;
  var hero = document.getElementById('hero');
  if (!hero) return;
  var scroll = window.scrollY;
  var imgs = hero.querySelectorAll('.hero-img');
  imgs.forEach(function(img) {
    img.style.transform = 'scale(1.05) translateY(' + (scroll * 0.15) + 'px)';
  });
});

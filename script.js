/* =========================================================
   OCEANMIX – JavaScript
   ========================================================= */

(function() {
  'use strict';

  // =========================================================
  // MOBILE NAV TOGGLE
  // =========================================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('[data-navlinks]');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      });
    });
  }

  // =========================================================
  // REVEAL ON SCROLL (Intersection Observer)
  // =========================================================
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // =========================================================
  // ANIMATED COUNTERS
  // =========================================================
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el, target) {
    let current = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    const update = () => {
      current += step;
      if (current < target) {
        el.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };
    requestAnimationFrame(update);
  }

  // =========================================================
  // FAQ ACCORDION
  // =========================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close others
        faqItems.forEach(other => {
          other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-a')?.classList.remove('open');
        });

        // Toggle current
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          answer.classList.add('open');
        }
      });
    }
  });

  // =========================================================
  // LIGHTBOX GALLERY
  // =========================================================
  const gallery = document.querySelector('[data-gallery]');
  const lightbox = document.querySelector('[data-lightbox]');

  if (gallery && lightbox) {
    const lbImg = lightbox.querySelector('.lb-img');
    const lbCaption = lightbox.querySelector('.lb-caption');
    const lbClose = lightbox.querySelector('.lb-close');
    const lbPrev = lightbox.querySelector('.lb-prev');
    const lbNext = lightbox.querySelector('.lb-next');
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;

    const openLightbox = (index) => {
      currentIndex = index;
      const img = images[index];
      lbImg.src = img.src;
      lbCaption.textContent = img.alt || '';
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      openLightbox(currentIndex);
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % images.length;
      openLightbox(currentIndex);
    };

    images.forEach((img, i) => {
      img.addEventListener('click', () => openLightbox(i));
    });

    lbClose?.addEventListener('click', closeLightbox);
    lbPrev?.addEventListener('click', showPrev);
    lbNext?.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  // =========================================================
  // SMOOTH SCROLL FOR NAV LINKS
  // =========================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId === '#top') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();

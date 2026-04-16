/* ============================================
   BIG MAMA — SCRIPT.JS
   Handles: Navbar scroll, Mobile menu,
            Scroll reveal animations
   ============================================ */

// ===== 1. NAVBAR: Shrink on scroll =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  // Add 'scrolled' class when user scrolls past 60px
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ===== 2. MOBILE MENU: Hamburger toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  // Toggle open state on both button and menu
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


// ===== 3. SCROLL REVEAL ANIMATION =====
// Add 'reveal' class to elements that should animate on scroll
const revealTargets = [
  '.menu-card',
  '.testi-card',
  '.info-card',
  '.about-grid',
  '.about-stats',
  '.menu-cta',
];

// Add the reveal class to all target elements
revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
  });
});

// IntersectionObserver: Watch for elements entering viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'visible' class to trigger CSS animation
      entry.target.classList.add('visible');
      // Stop observing once it's been revealed
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,     // Trigger when 12% of element is visible
  rootMargin: '0px 0px -40px 0px'  // Slightly offset from bottom
});

// Start observing all reveal elements
document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});


// ===== 4. ACTIVE NAV LINK ON SCROLL =====
// Highlight the current section's nav link as user scrolls
const sections  = document.querySelectorAll('section[id]');
const links     = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPos = window.scrollY + 120; // Offset for navbar height

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) {
      current = sec.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.style.color = '';   // Reset
    const href = link.getAttribute('href');
    if (href ===  ⁠#${current ⁠) {
      link.style.color = '#E8272A'; // Highlight active link in red
    }
  });
})
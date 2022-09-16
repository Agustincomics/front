window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});
sr.reveal('.header-content-left', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});
sr.reveal('.header-content-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('#acerca', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor:0.2
});
sr.reveal('.content-left-1', {
  duration: 2000,
  origin: 'left',
  distance: '100px'
});
sr.reveal('.content-right-1', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
});
sr.reveal('.content-left-2', {
  duration: 2000,
  origin: 'bottom',
  delay: 500
});
sr.reveal('.content-right-2', {
  duration: 2000,
  origin: 'right',
  delay: 1000,
});
sr.reveal('.content-right-3', {
  duration: 2000,
  origin: 'right',
  delay: 1000,
});
sr.reveal('.content-left-3', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px'
});
sr.reveal('.btn-proyecto', {
  duration: 2000,
  origin: 'right',
  delay: 1000
});
sr.reveal('.titulo-hard', {
  duration: 2000,
  origin: 'bottom'
});







/* Smoth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
  });
});
});
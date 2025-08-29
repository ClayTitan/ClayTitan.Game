const faders = document.querySelectorAll('.fade-in, .fade-in-game');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

let lastScroll = 0;
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Ignore de très petits mouvements
    if (Math.abs(currentScroll - lastScroll) < 5) return;

    if (currentScroll <= 0) {
        nav.style.top = '0';
        nav.style.opacity = '1';
        lastScroll = currentScroll;
        return;
    }

    if (currentScroll > lastScroll) {
        // Scroll vers le bas -> cacher + fondu
        nav.style.top = '-60px';
        nav.style.opacity = '0.5';
    } else {
        // Scroll vers le haut -> montrer + réapparaît
        nav.style.top = '0';
        nav.style.opacity = '1';
    }

    lastScroll = currentScroll;
});
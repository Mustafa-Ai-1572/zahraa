const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.86;

  revealElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
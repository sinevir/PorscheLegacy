
const cards = document.querySelectorAll('.model-card');

cards.forEach((card) => {
  const image = card.dataset.image;

  // створюємо стиль для псевдоелемента ::after
  const style = document.createElement('style');
  style.innerHTML = `
    .model-card[data-image="${image}"]::after {
      background-image: url(${image});
    }
  `;
  document.head.appendChild(style);
});

    document.head.appendChild(style);
    
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
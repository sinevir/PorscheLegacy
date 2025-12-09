
    const cards = document.querySelectorAll('.model-card');

    cards.forEach((card) => {
      const image = card.getAttribute('data-image');
      card.style.setProperty('--bg-image', `url(${image})`);
      card.addEventListener('mouseenter', () => {
        card.style.setProperty('--bg-image', `url(${image})`);
        card.style.setProperty('--hovering', 'true');
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--hovering', 'false');
      });
      card.querySelector('::after');
      card.style.setProperty('--image', `url(${image})`);
    });

    const style = document.createElement('style');
    style.innerHTML = `
    .model-card::after {
      background-image: var(--bg-image);
    }
  `;
    document.head.appendChild(style);
    
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
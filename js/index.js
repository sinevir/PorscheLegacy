
      const video = document.getElementById('intro-video');
      const title = document.getElementById('title');
      const subtitle = document.getElementById('subtitle');

      setTimeout(() => {
        video.play();
      }, 2000);

      setTimeout(() => {
        title.style.opacity = '1';
      }, 1000);

      setTimeout(() => {
        subtitle.style.opacity = '1';
      }, 4000);
      
      const introVideo = document.getElementById('intro-video');
      if (window.innerWidth <= 720) {
        video.innerHTML = `
      <source src="entrance_video_mobile.mp4" type="video/mp4">
    `;
        video.load();
        video.play();
      }

      const burger = document.getElementById('burger');
      const mobileNav = document.getElementById('mobileNav');

      burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        mobileNav.classList.toggle('open');
      });

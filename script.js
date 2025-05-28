/*=•=•=•=••=•=•=•  Preload  =•=••=•=•=•=•=•=*/
  const preload = document.querySelector('[data-preload]');

  window.addEventListener('load', () => {
    preload.classList.add('loaded');
    document.body.classList.add('loaded');
  });
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/



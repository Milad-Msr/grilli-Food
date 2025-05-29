/*=•=•=•=••=•=•=•  Preload  =•=••=•=•=•=•=•=*/
  const preload = document.querySelector('[data-preload]');

  window.addEventListener('load', () => {
    preload.classList.add('loaded');
    document.body.classList.add('loaded');
  });
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/



/*=•=•=•=••=•=•=•=  Navbar  =•=••=•=•=•=•=•=*/
  const navbar = document.querySelector('[data-navbar]');
  const overlay = document.querySelector('[data-overlay]');
  const navTogglers = document.querySelectorAll('[data-nav-toggler]');

  for (let toggler of navTogglers) {
    toggler.addEventListener('click', () => {
      navbar.classList.toggle('active')
      overlay.classList.toggle('active')
      document.body.classList.toggle('nav-active')
    });
  };
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/




/*=•=•=•=••=•=•=•=  Header  =•=••=•=•=•=•=•=*/
  const header = document.querySelector('[data-header]');

  let lastScrollPos = 0;
  
  const hideHeader = () => {                
    const isScrollBottom = lastScrollPos < window.scrollY;
    isScrollBottom ? header.classList.add('hide') : header.classList.remove('hide')
    lastScrollPos = window.scrollY;
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      header.classList.add('active');
      hideHeader();
    } else {
      header.classList.remove('active');
    };
  });
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/
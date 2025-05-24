/*•=•=•=•=•=•=•=•=•=•=•=•=•=•=•  PRELOAD  •=•=•=•=•=•=•=•=•=•=•=•=•=•=•*/

  const preloader = document.querySelector('[data-preload]');

  window.addEventListener('load', () => {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
  });

/*•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•*/





/*•=•=•=•=•=•=•=•=•=•=•=•=•=•=•  PRELOAD  •=•=•=•=•=•=•=•=•=•=•=•=•=•=•*/

  const addEventOnElements = (elements, eventType, callback) => {
    for (let i = 0 ; i < elements.length ; i++) {
      elements[i].addEventListener(eventType, callback);
    };
  };

  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");

  const toggleNavbar = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  };

  addEventOnElements(navTogglers, 'click', toggleNavbar);

/*•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•*/





/*•=•=•=•=•=•=•=•=•=•=•=•=•=•=•  PRELOAD  •=•=•=•=•=•=•=•=•=•=•=•=•=•=•*/

  const header = document.querySelector("[data-header]");
  let lastScrollpos = 0;

  const hideHeader = () => {
    const isScrollButtom = lastScrollpos < window.scrollY;

    if (isScrollButtom) {
      header.classList.add("hide")
    } else {
      header.classList.remove("hide")
    }

    lastScrollpos = window.scrollY
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      header.classList.add('active');
      hideHeader();
    } else {
      header.classList.remove('active');
    };
  });

/*•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•=•*/
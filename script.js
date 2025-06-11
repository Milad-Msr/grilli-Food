/*=•=•=•=••=•=•=•  Preload  =•=••=•=•=•=•=•=*/
  const preload = document.querySelector("[data-preload]");

  window.addEventListener("load", function () {
    preload.classList.add("loaded");
    document.body.classList.add("loaded");
  });
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/
  

/*=•=•=•=••=•=•=•=  Navbar  =•=••=•=•=•=•=•=*/
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }

  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }

  addEventOnElements(navTogglers, "click", toggleNavbar);
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/


/*=•=•=•=••=•=•=•=  Header  =•=••=•=•=•=•=•=*/
  const header = document.querySelector('[data-header]');

  const backTopBtn = document.querySelector('[data-back-top-btn]')

  let lastScrollPos = 0;
  
  const hideHeader = () => {                
    const isScrollBottom = lastScrollPos < window.scrollY;
    isScrollBottom ? header.classList.add('hide') : header.classList.remove('hide')
    lastScrollPos = window.scrollY;
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      header.classList.add('active');
      backTopBtn.classList.add('active');
      hideHeader();
    } else {
      header.classList.remove('active');
      backTopBtn.classList.remove('active');
    };
  });
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/


/*=•=•=•=•=•=•=•  Hero Slider  •=•=•=•=•=•=•*/
  const heroSlider = document.querySelector('[data-hero-slider]');
  const heroSliderItem = document.querySelectorAll('[data-hero-slider-item]');
  const heroSliderPrevBtn = document.querySelector('[data-prev-btn]');
  const heroSliderNextBtn = document.querySelector('[data-next-btn]');

  let currentSlidePos = 0;      
  let lastActiveSlideItem = heroSliderItem[0];

  const updateSliderPos = () => {
    lastActiveSlideItem.classList.remove('active');
    heroSliderItem[currentSlidePos].classList.add('active');
    lastActiveSlideItem = heroSliderItem[currentSlidePos];
  }

  const slideNext = () => {
    if (currentSlidePos >= heroSliderItem.length - 1) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    };
    updateSliderPos();
  };

  const slidePrev = () => {
    if (currentSlidePos <= 0) { 
      currentSlidePos = heroSliderItem.length - 1;
    } else {
      currentSlidePos--;
    };
    updateSliderPos();
  };
  
  heroSliderNextBtn.addEventListener('click', slideNext);
  heroSliderPrevBtn.addEventListener('click', slideNext);
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/


/*=•=•=•=•=•=•=•  Auto Slider  •=•=•=•=•=•=•*/
  let autoSliderInterval;

  const autoSlide = () => {
    autoSliderInterval = setInterval(() => {
      slideNext();
    }, 7000)
  }

  addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], 'mouseover', () => {
    clearInterval(autoSliderInterval)
  });

  addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], 'mouseout', autoSlide)
  window.addEventListener('load', autoSlide)
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/


/*=•=•=•=•=•=•  Parallax Effect  •=•=•=•=•=•=*/
  const parallaxItems = document.querySelectorAll('[data-parallax-item]');

  let x, y;

  window.addEventListener("mousemove", (event) => {
    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;
    console.log(event)

    x = x - (x * 2);
    y = y - (y * 2);
  
    for (let i = 0; i < parallaxItems.length; i++) {
      x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
      y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
      parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }
  })
/*•=•=•=•=••=•=•=•=••=•=•=•=•=••=•=•=•=••=•=*/
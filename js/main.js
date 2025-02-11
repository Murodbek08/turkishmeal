//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ owl - carousel - 1; @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
$(".owl-carousel-1").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1300,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.2,
    },
    600: {
      items: 1.8,
    },
    1000: {
      items: 4,
    },
  },
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ owl - carousel - 2; @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
$(".owl-carousel-2").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  autoplayTimeout: 1300,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1.5,
    },
    1000: {
      items: 3,
    },
  },
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ owl - carousel - 3; @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
$(".owl-carousel-3").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1300,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2.4,
    },
  },
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ button full cards view more @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
document.addEventListener("DOMContentLoaded", () => {
  const buttonCard = document.getElementById("button");
  const buttonCards = document.getElementById("buttons");

  buttonCard.addEventListener("click", () => {
    buttonCards.classList.toggle("cards");
  });
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ loading @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
const loading = document.getElementById("loading");

const loadingDuration = 3000; // 1.8s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ aos @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
AOS.init();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@ bac to top @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const myBtn = document.getElementById("myBtn");
myBtn.onclick = function () {
  const scrollStep = -window.scrollY / (10 / 180);
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 15);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ navbar shrink @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("header");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

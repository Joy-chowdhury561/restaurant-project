let aboutBtn = document.querySelectorAll(".aboutBtn");
let menuBtn = document.querySelectorAll(".menuBtn");
let bookBtn = document.querySelectorAll(".book");
const aboutSection = document.querySelector(".restaurant-info");
const menuSection = document.querySelector(".menu");
const bookSection = document.querySelector("footer");
const hamBtn = document.querySelector(".hamburger-btn-container");
const closeBtn = document.querySelector(".cross-btn-container");
const navBlur = document.querySelector(".nav-blur");
const homeBtn = document.querySelectorAll(".homeBtn");
const homeSection = document.querySelector(".hero-image");
const seekFill = document.querySelector(".seek-fill");
let breakFast = document.querySelector(".breakfast");
let dinner = document.querySelector(".dinner");
let lunch = document.querySelector(".lunch");
breakFast.addEventListener("click", () => {
  seekFill.style.left = "0%";
});
lunch.addEventListener("click", () => {
  seekFill.style.left = "35%";
});

dinner.addEventListener("click", () => {
  seekFill.style.left = "67%";
});
function scrollToHome() {
  homeSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
function scrollToAbout() {
  aboutSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
function scrollToMenu() {
  menuSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
function scrollToBooking() {
  bookSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
homeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToHome();
    closeAside();
  });
});
aboutBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToAbout();
    closeAside();
  });
});
menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToMenu();
    closeAside();
  });
});
bookBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToBooking();
    closeAside();
  });
});

function openAside() {
  document.querySelector("aside").style.transform = "translateX(0%)";
  document.querySelector(".nav-blur").style.display = "block";
}
function closeAside() {
  document.querySelector("aside").style.transform = "translateX(100%)";
  document.querySelector(".nav-blur").style.display = "none";
}
hamBtn.addEventListener("click", () => {
  openAside();
});
closeBtn.addEventListener("click", () => {
  closeAside();
});
navBlur.addEventListener("click", () => {
  closeAside();
});
const arrowBtn = document.querySelector(".arrow-btn-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    arrowBtn.classList.add("show");
  } else {
    arrowBtn.classList.remove("show");
  }
});

arrowBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// scroll animaitons
let cards = document.querySelectorAll(".restaurant-info .cards");
let isRunning = false;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      if (entry.target.classList.contains("animating-info")) {
          let a = 0;
          let b = 0;
          let timer1 = setInterval(() => {
            a++;
            document.querySelector(".info-1 h1").innerText = a;
            if (a === 7) {
              clearInterval(timer1);
            }
          }, 400);
          let timer2 = setInterval(() => {
            b++;
            document.querySelector(".info-2 h1").innerText = b;
            if (b === 38) {
              clearInterval(timer2);
              document.querySelector(".info-2 h1").innerText = b + "+";
            }
          }, 70);
          isRunning = true;
        }
    });
  },
  { threshold: 0.5 },
);

document
  .querySelectorAll(
    " .nav h1, .nav ul, .left-info, .rotating-plate, .about,.menu-heading,.menu-options,footer,.animating-info",
  )
  .forEach((el) => observer.observe(el));

let itemCards = document.querySelectorAll(".item-card");
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 1 },
);
cards.forEach((card) => {
  observer2.observe(card);
});
itemCards.forEach((card) => {
  observer2.observe(card);
});

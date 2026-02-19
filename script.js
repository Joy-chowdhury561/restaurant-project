const bookBtns = document.querySelectorAll(".book-table");
const navH1 = document.querySelector("nav h1");
const bookingSection = document.querySelector("footer");
const hamBtn = document.querySelector(".hamburger-container");
const sidebar = document.querySelector("aside");
const closeBtn = document.querySelector(".close-btn-container");
const navBlur = document.querySelector(".navblur");
const homeBtn = document.getElementById("side-home");
const aboutBtn = document.getElementById("side-about");
const menuBtn = document.getElementById("side-menu");
const pagesBtn = document.getElementById("sidepages");
const heroImg = document.querySelector("#hero-image");
const menuSection = document.querySelector("#menu");
const aboutSection = document.querySelector("#about");
const pages = document.querySelectorAll(".page");
const bigMsg = document.querySelector(".big-msg");
const rotatingPlate = document.querySelector(".rotating-plate");
const aboutOptions = document.querySelector(".about-options");
const infoCards = document.querySelectorAll(".info-cards");
const images = document.querySelector(".images");
const aboutText = document.querySelector(".about-text");
const animatingInfo = document.querySelector(".animating-info");
const animatingInfoNumber = document.querySelectorAll(".animating-info h1");
const firstNum = animatingInfoNumber[0];
const secondNum = animatingInfoNumber[1];
const menuHeading = document.querySelector("#menu h2");
const chefArea = document.querySelector(".chefs");
const form = document.querySelector("form");
const itemCards = document.querySelectorAll(".item-card");
bookBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    bookingSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeSidebar();
  });
});
function openSidebar() {
  sidebar.style.transform = "translateX(0%)";
  navBlur.style.display = "block";
}
function closeSidebar() {
  sidebar.style.transform = "translateX(100%)";
  navBlur.style.display = "none";
}

hamBtn.addEventListener("click", () => {
  openSidebar();
});
closeBtn.addEventListener("click", () => {
  closeSidebar();
});
navBlur.addEventListener("click", () => {
  closeSidebar();
});
homeBtn.addEventListener("click", () => {
  heroImg.scrollIntoView({
    behavior:"smooth",
    block: "start",
  });
  closeSidebar();
});
menuBtn.addEventListener("click", () => {
  menuSection.scrollIntoView({
    behavior:"smooth",
    block: "start"
    
  });
  closeSidebar();
});
aboutBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView({
    behavior:"smooth",
    block: "start"
  });
  closeSidebar();
});
let a = false;

pagesBtn.addEventListener("click", () => {
  pages.forEach((page) => {
    page.classList.toggle("add");
  });
});

//observe animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target === heroImg) {
        navH1.classList.add("show");
        hamBtn.classList.add("show");
        bigMsg.classList.add("show");
        rotatingPlate.classList.add("show");
      }

      if (entry.target === aboutOptions) {
        infoCards.forEach((card) => card.classList.add("show"));
      }

      if (entry.target === images) {
        images.classList.add("show");
      }

      if (entry.target === aboutText) {
        aboutText.classList.add("show");
      }
      if (entry.target === animatingInfo) {
        observer.unobserve(animatingInfo);
        let count = 0;
        let count2 = 0;

        const interval = setInterval(() => {
          firstNum.innerText = count;
          count++;

          if (count > 7) {
            clearInterval(interval);
          }
        }, 300);

        const interval2 = setInterval(() => {
          secondNum.innerText = count2;
          count2++;

          if (count2 > 50) {
            clearInterval(interval2);
          }
        }, 51);
      }

      if (entry.target === menuHeading) {
        menuHeading.classList.add("show");
      }
      if (entry.target === chefArea) {
        chefArea.classList.add("show");
      }
      if (entry.target === form) {
        form.classList.add("show");
      }
    });
  },
  { threshold: 0.5 },
);
observer.observe(heroImg);
observer.observe(aboutOptions);
observer.observe(images);
observer.observe(aboutText);
observer.observe(animatingInfo);
observer.observe(menuHeading);
observer.observe(chefArea);
observer.observe(form);


const observer2=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
      })
},{threshold:0.9})
itemCards.forEach((card) => {
  observer2.observe(card);
  console.log(card);
});
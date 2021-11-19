//----------anchor-link----------
const anchors = document.querySelectorAll('.header__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// ----------menu-burger----------
let openBurger = document.getElementById("open-burger");
let closeBurger = document.getElementById("close-burger");
let hideMenu = document.getElementById("hide-menu");
let page = document.querySelector("body");
let link = document.querySelectorAll(".header__link");

openBurger.addEventListener("click", function () {
    hideMenu.style.width = "100%";
    page.classList.add("page_overflow");
})

closeBurger.addEventListener("click", function () {
    hideMenu.style.width = "0%";
    page.classList.remove("page_overflow");
})

for (var i = 0 ; i < link.length; i++) {
  link[i].addEventListener('click', function () {
    hideMenu.style.width = "0%";
    page.classList.remove("page_overflow");
 });
}

//----------popup----------
 let modalBtn = document.querySelectorAll(".modal-btn");
 let closeBtn = document.getElementById("close-btn");
 let modalShadow = document.getElementById("modal-shadow");
 let modalPopup = document.getElementById("modal-popup");

 for (var i = 0 ; i < modalBtn.length; i++) {
     modalBtn[i].addEventListener('click', function () {
         modalShadow.classList.remove("hidden");
         modalPopup.classList.remove("hidden");
         modalPopup.classList.add("popup-top");
    });
}

 closeBtn.addEventListener("click", function () {
     modalShadow.classList.add("hidden");
     modalPopup.classList.remove("popup-top");
 })

 window.onclick = function (event) {
     if (event.target === modalShadow) {
         modalShadow.classList.add("hidden");
         modalPopup.classList.remove("popup-top");
     }
 }
//----------animation----------
function onEntry(entry) {
  entry.forEach(change => {
      if (change.isIntersecting) {
          change.target.classList.add('wish_animation_element');
      }
  });
}
let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.wish');

for (let elm of elements) {
  observer.observe(elm);
}
//----------animationLeft----------
function onEntryLeft(entryanim) {
  entryanim.forEach(changeLeft => {
      if (changeLeft.isIntersecting) {
          changeLeft.target.classList.add('terrain_show_left');
      }
  });
}
let optionsLeft = {
  threshold: [0.5]
};
let observerLeft = new IntersectionObserver(onEntryLeft, optionsLeft);
let elementsLeft = document.querySelectorAll('.terrain_animation_left');

for (let elmLeft of elementsLeft) {
  observerLeft.observe(elmLeft);
}
//----------animationRight----------
function onEntryRight(entryright) {
  entryright.forEach(changeRight => {
      if (changeRight.isIntersecting) {
          changeRight.target.classList.add('terrain_show_right');
      }
  });
}
let optionsRight = {
  threshold: [0.5]
};
let observerRight = new IntersectionObserver(onEntryRight, optionsRight);
let elementsRight = document.querySelectorAll('.terrain_animation_right');

for (let elmRight of elementsRight) {
  observerRight.observe(elmRight);
}


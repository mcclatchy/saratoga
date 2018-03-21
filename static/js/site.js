/**
 * Personalization demo
 */

function changePersona() {
  let p = window.location.hash.replace(/^#/, "");
  let m = document.querySelector('.main');

  if(p) {
    m.setAttribute('persona', p);
  } else {
    m.removeAttribute('persona');
  }
}

window.addEventListener('hashchange', changePersona);
changePersona();

/**
 * Section Nav
 */

var sectionNav = document.querySelector(".section-nav .toggle");
if(sectionNav) {
  sectionNav.addEventListener("click", e => {
    e.currentTarget.parentElement.classList.toggle("closed");
  });
}

/**
 * Featured videos
 */

var videos = document.querySelector(".videos");
if(videos) {
  var videoCards = videos.querySelectorAll(".card");
  for(let v of videoCards) {
    v.addEventListener("click", e => {
      e.preventDefault();
      let i = findIndex(v, videoCards);
      if(i > -1) {
        videos.setAttribute("selected", i);
      }
    });
  }
}

function findIndex(ele, list) {
  for(let i = 0, len = list.length; i < len; i++) {
    if(ele == list[i]) return i;
  }
  return -1;
}

/**
 * Hamburger panel
 */

var hamburgerPanel = document.querySelector(".hamburger.panel");
var hamburgerToggles = document.querySelectorAll(".hamburger .toggle");
for(let toggle of hamburgerToggles) {
  toggle.addEventListener("click", e => {
    hamburgerPanel.classList.toggle("open");
  });
}
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

var hamburgerToggles = document.querySelectorAll(".hamburger .toggle");
for(let toggle of hamburgerToggles) {
  toggle.addEventListener("click", e => {
    document.body.classList.toggle("hamburger-menu-out");
  });
}

/**
 * Scroll animation
 */


if(window.IntersectionObserver && window.pageYOffset < 100) {
  // Create the observer
  let observer = new IntersectionObserver(handleIntersect);

  // Grab all the elements to animate
  let elements = mergeQuerySelections([
    '.main > .card',
    '.featured .card',
    '.digest'
  ]);

  elements.forEach(ele => {
    ele.classList.add("animate-in");
    observer.observe(ele);
  });
}

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.remove("animate-in");
      observer.unobserve(entry.target);
    }
  });
}

function mergeQuerySelections(selectors) {
  let elements = [];

  selectors.forEach(q => {
    let nodes = document.querySelectorAll(q);
    for(let i = 0, len = nodes.length; i < len; i++) {
      elements.push(nodes[i]);
    }
  });

  return elements;
}

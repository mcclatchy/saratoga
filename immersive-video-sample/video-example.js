var vc = document.querySelector(".video-container");
vc.addEventListener("click", _handleImmersiveClick);

function _handleImmersiveClick() {
  this.classList.toggle("video-playing");
  let v = this.querySelector("video");
  v.play();
  v.volume = 0;
}

function _handleImmersiveEnd() {
  this.classList.remove("video-playing");
}

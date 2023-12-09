let popup = document.querySelector(".popup");

function openNav() {
  popup.style.width = "30vw";
}
function closeNav() {
  popup.style.width = "0vw";
}

let pop = document.querySelector(".pop");
pop.addEventListener("click", openNav);

let cross = document.querySelector(".cross");
cross.addEventListener("click", closeNav);
let hero = document.querySelector(".hero");
hero.addEventListener("click", closeNav);

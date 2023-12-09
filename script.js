let popup = document.querySelector(".popup");

function openNav() {
  popup.style.display = "block";
}
function closeNav() {
  popup.style.display = "none";
}

let pop = document.querySelector(".pop");
pop.addEventListener("click", openNav);

let cross = document.querySelector(".cross");
cross.addEventListener("click", closeNav);

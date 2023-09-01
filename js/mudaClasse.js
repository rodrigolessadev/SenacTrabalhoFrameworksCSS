// ! Responsável pela mudança de classe:


function changeClass(element) {
  if (window.innerWidth < 1500) {
    element.classList.add("small");
    element.classList.remove("large")
  } else {
    element.classList.add("large");
    element.classList.remove("small");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var element = document.querySelector(".cartao");
  changeClass(element);
});

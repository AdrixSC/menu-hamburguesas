var boton = document.getElementById ("btn");

function showMenu() {
  var menu = document.getElementById('menu');
  if (menu.classList.contains("disable-menu")){
    menu.classList.remove("disable-menu");
    menu.classList.add("enabled-menu");
  }
  else {
    menu.classList.remove("enabled-menu");
    menu.classList.add("disable-menu");
  }
}

boton.addEventListener("click", showMenu);

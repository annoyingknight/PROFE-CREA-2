// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Profe Crea listo.");

  // Resaltar el enlace activo del menú
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll("nav ul.menu li a");

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].href === currentLocation) {
      menuItems[i].classList.add("active");
    }
  }

  // Alerta desde botón de contacto
  const contactoBtn = document.getElementById("contacto-btn");
  if (contactoBtn) {
    contactoBtn.addEventListener("click", function () {
      alert("Gracias por contactarnos. Te responderemos pronto.");
    });
  }
});

// script.js

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  console.log("Profe Crea listo.");

  // Resaltar el enlace activo del menú
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll("nav ul.menu li a");

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].href === currentLocation) {
      menuItems[i].classList.add("active");
    }
  }

  // Ejemplo: Alerta desde botón (útil para contacto o pruebas)
  const contactoBtn = document.getElementById("contacto-btn");
  if (contactoBtn) {
    contactoBtn.addEventListener("click", function () {
      alert("Gracias por contactarnos. Te responderemos pronto.");
    });
  }
});

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

  const submenuLinks = document.querySelectorAll('.submenu > a');
submenuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evita la navegación
    this.parentElement.classList.toggle('open');
  });
});

 // Funcionalidad de búsqueda
  const form = document.querySelector('.search-form');
  const input = document.querySelector('input[name="q"]');

  if (form && input) {
    const rutas = {
      matematicas: 'matematicas/index.html',
      juegos: 'matematicas/juegos.html',
      lectoescritura: 'lenguajes/lectoescritura.html',
      silabas: 'lenguajes/silabas.html',
      contacto: 'contacto.html',
      tienda: 'tienda.html',
      dibujos: 'dibujos.html',
      flashcards: 'flashcards.html'
      // Agrega más términos y rutas según necesites
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = input.value.trim().toLowerCase();
      const ruta = rutas[query];

      if (ruta) {
        window.location.href = ruta;
      } else {
        alert('No se encontraron resultados para: ' + query);
      }
    });
  }
});

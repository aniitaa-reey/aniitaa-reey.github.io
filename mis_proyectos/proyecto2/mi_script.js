document.addEventListener("DOMContentLoaded", function () {
  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
  document.getElementById("info").innerHTML =
    "Número de enlaces: " + document.links.length;

  // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
  document.getElementById("info").innerHTML +=
    "<br>Penúltimo enlace: " + document.links[document.links.length - 2].href;
  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
  document.getElementById("info").innerHTML +=
    "<br>Número de enlaces a http://prueba/: " +
    document.querySelectorAll('a[href="http://prueba/"]').length;

  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
  document.getElementById("info").innerHTML +=
    "<br>Número de enlaces en el tercer párrafo: " +
    document.querySelectorAll("p:nth-of-type(3) a").length;
});

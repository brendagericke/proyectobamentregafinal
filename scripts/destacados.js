let contenedorImagenes = document.getElementById("containerImagenes");

function agregarDefinicion(event) {
if (event.target.tagName = "IMG") {
    event.target.classList.add("imagenDefinida");
    console.log("Mouseover ejecutado correctamente");
}
}

function quitarDefinicion(event) {
if (event.target.tagName = "IMG") {
    event.target.classList.remove("imagenDefinida");
    console.log("Mouseout ejecutado correctamente")
}
}

contenedorImagenes.addEventListener("mouseover", agregarDefinicion);
contenedorImagenes.addEventListener("mouseout", quitarDefinicion);


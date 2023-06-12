let botonEnviar = document.getElementById ("botonEnviar");
let botonBorrar = document.getElementById ("botonBorrar");

function cambiarColor (event){
    event.target.classList.toggle("cambioColor");
    console.log ("Clase cambiocolor añadida al botón")
}

botonEnviar.addEventListener ("click", cambiarColor); 
botonBorrar.addEventListener ("click", cambiarColor);


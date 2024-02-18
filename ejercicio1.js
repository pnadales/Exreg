//función para validar que solo se ingrese texto
function validacion(texto) {

    let patron = /^[a-zA-Z\s]+$/;
    let respuesta = patron.test(texto);
    return respuesta;

}

//Función para mostrar mensaje de error en el campo que corresponda

function mostrarMensaje(valida, id) {
    let selector = ".error" + id.charAt(0).toUpperCase() + id.slice(1);
    if (!valida) {
        document.querySelector(selector).innerHTML = "El " + id + " es requerido. Solo ingresar valores alfabéticos";
    }
}




let boton = document.getElementById("botton");

boton.addEventListener('click', function (event) {
    event.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    mostrarMensaje(validacion(nombre), "nombre");
    mostrarMensaje(validacion(asunto), "asunto");
    mostrarMensaje(validacion(mensaje), "mensaje");
    if (validacion(nombre) && validacion(asunto) && validacion(mensaje)) {
        document.querySelector(".errorNombre").innerHTML = "";
        document.querySelector(".errorAsunto").innerHTML = "";
        document.querySelector(".errorMensaje").innerHTML = "";
        document.querySelector(".resultado").innerHTML = "¡Mensaje enviado con éxito!";
    }
})
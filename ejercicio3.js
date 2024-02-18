
//función para comprobar que solo se ingresen números
function comprobar(texto) {
    let eR = /[^0-9]/;
    return eR.test(texto);
}
let sumar = document.getElementById("btn-sumar");

sumar.addEventListener('click', function (e) {
    e.preventDefault();
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let suma = Number(valor1) + Number(valor2);

    if (comprobar(valor1) || comprobar(valor2)) {
        alert("Solo ingresar valores numéricos");
    } else if (suma < 0) {
        document.querySelector(".resultado").innerHTML = "0";
    } else {
        document.querySelector(".resultado").innerHTML = suma;
    }


})

let restar = document.getElementById("btn-restar");

restar.addEventListener('click', function (e) {
    e.preventDefault();
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    let resta = valor1 - valor2;

    if (comprobar(valor1) || comprobar(valor2)) {
        alert("Solo ingresar valores numéricos");
    } else if (resta < 0) {
        document.querySelector(".resultado").innerHTML = "0";
    } else {
        document.querySelector(".resultado").innerHTML = resta;
    }


})
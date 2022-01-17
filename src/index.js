import validator from './validator.js';
console.log(validator);

//Elementos del DOM (documento HTML)
const inputNombre=document.getElementById("nombre");
const btnEnviar=document.getElementById("enviar");
const btnValidar=document.getElementById("validar");
const mensajeBienvenida=document.getElementById("mensajedebienvenida");
const inputTarjeta=document.getElementById("tarjeta");
const mensajeTarjeta=document.getElementById("mensajetarjeta");

//Escuchadores de Eventos
btnEnviar.addEventListener("click", enviarNombre);
btnValidar.addEventListener("click", validarTarjeta); 

//Metodos
function enviarNombre () {
    if (inputNombre.value == "") {
        alert("Por favor digite su nombre");
    }
    else {
        mensajeBienvenida.innerHTML = "Bienvenido " + inputNombre.value;
        mostrarTarjeta()
    }
}

function validarTarjeta () {
    const numeroTarjeta=Array.from(inputTarjeta.value)
    
    
    if (numeroTarjeta== "") {
        alert("Digite el numero de su tarjeta");
    }
    else {
        mensajeTarjeta.innerHTML = "Validando su tarjeta...";
        if (validator.isValid(numeroTarjeta)) {
            mensajeTarjeta.innerHTML = "Su tarjeta es valida";
        }
        else {
            mensajeTarjeta.innerHTML = "Su tarjeta es invalida";
        }
    }
}



function mostrarTarjeta () {
    console.log("ok")
}


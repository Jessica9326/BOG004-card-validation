import validator from './validator.js';
console.log(validator);

//Elementos del DOM (documento HTML)
const inputNombre=document.getElementById("nombre");
const btnEnviar=document.getElementById("enviar");
const btnValidar=document.getElementById("validar");
const mensajeBienvenida=document.getElementById("mensajedebienvenida");
const inputTarjeta=document.getElementById("tarjeta");
const mensajeTarjeta=document.getElementById("mensajetarjeta");
const btncambiarTarjeta=document.getElementById("cambiarTarjeta");
const tarjetaOculta=document.getElementById("tarjetaOculta");

//Escuchadores de Eventos
btnEnviar.addEventListener("click", enviarNombre);
btnValidar.addEventListener("click", validarTarjeta); 
btncambiarTarjeta.addEventListener("click", cambiarTarjeta);

//Metodos
function enviarNombre () {
    if (inputNombre.value == "") {
        alert("Por favor digite su nombre");    
    }
    
    else {
        mensajeBienvenida.innerHTML = inputNombre.value;
        mostrarElemento("tarjetadecredito")
        ocultarElemento("inicio")
    }
}
 
function ocultarElemento (id){
    const elemento = document.getElementById(id)   
    elemento.classList.add("oculto")
}

function mostrarElemento (id) {
    const elemento = document.getElementById(id)
    elemento.classList.remove("oculto")       
}

function validarTarjeta () {
    const numeroTarjeta=inputTarjeta.value
    
    if (numeroTarjeta== "") {
        alert("Digite el numero de su tarjeta");
    }
    else {
        mensajeTarjeta.innerHTML = "Validando su tarjeta";
        mostrarElemento("mensajetarjeta")
        if (validator.isValid(numeroTarjeta)) {
            mensajeTarjeta.innerHTML = "Su tarjeta es válida ";
            ocultarElemento("tarjeta")  
            ocultarElemento("validar")
            mostrarElemento("cambiarTarjeta")
            ocultarElemento("digitarTarjeta")
            mensajeTarjeta.classList.add("verde") 
            mensajeTarjeta.classList.remove("rojo")
            tarjetaOculta.innerHTML = validator.maskify(numeroTarjeta);
        }

        else {
            mensajeTarjeta.innerHTML = "Su tarjeta es invalida " + numeroTarjeta;
            mensajeTarjeta.classList.add("rojo") 
            mensajeTarjeta.classList.remove("verde")
        }
    }
}
function cambiarTarjeta () {
    mostrarElemento("tarjeta")
    ocultarElemento("mensajetarjeta")
    mostrarElemento("validar")
    ocultarElemento("cambiarTarjeta")
    mostrarElemento("digitarTarjeta")
    tarjetaOculta.innerHTML = "";
}

    





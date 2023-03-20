function saludar() {
    alert("Hola querida mascota");
}

function presentar(){
    alert("Te saluda Yorghet Hernandez");
}

const botonSaludo = document.getElementById("saludo");

// manejador de eventos
botonSaludo.addEventListener("click", presentar);


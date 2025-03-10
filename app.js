const minimoAmigos = 3;
const maximoAmigos = 10;
const rangoMinimoYMaximo = document.getElementById("rango-minimo-y-maximo");
const nombreAmigosInput = document.getElementById("nombreAmigos");
const listaAmigosElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

rangoMinimoYMaximo.textContent = `Necesitas entre ${minimoAmigos} y ${maximoAmigos} amigos para el sorteo`;

let amigos = [];

function validarNombre(nombre) {
    if (nombre === '') {
        alert("Debes ingresar un nombre.");
        return false;
    }
    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números. Por favor, ingresa un nombre válido.");
        return false;
    }
    return true;
}

function limpiarInput() {
    nombreAmigosInput.value = "";
    nombreAmigosInput.focus();
}

function agregarAmigo() {
    let nombreAmigo = nombreAmigosInput.value.trim();

    if (!validarNombre(nombreAmigo)) {
        limpiarInput();
        return;
    }

    if (amigos.length >= maximoAmigos) {
        alert(`Ya tienes ${maximoAmigos} amigos. Estas listo para realizar el sorteo.`);
        return;
    }

    if (!amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);
        mostrarListaAmigos(amigos);
        resultadoElement.innerHTML = "";
        limpiarInput();
    } else {
        alert("Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
    }
}

function mostrarListaAmigos(lista) {
    listaAmigosElement.innerHTML = "";
    lista.forEach(amigo => {
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = amigo;
        listaAmigosElement.appendChild(nuevoItem);
    });
}

function sortearAmigo() {
    if (amigos.length < minimoAmigos) {
        alert(`Necesitas al menos ${minimoAmigos} amigos para realizar el sorteo.`);
        return;
    }

    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarMensajeGanador(ganador);
    amigos = [];
    mostrarListaAmigos(amigos);
    limpiarInput();
}

function mostrarMensajeGanador(ganador) {
    resultadoElement.innerHTML = "";
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = "El amigo secreto es: " + ganador;
    resultadoElement.appendChild(nuevoItem);
}

function volverAEmpezar() {
    amigos = [];
    mostrarListaAmigos(amigos);
    limpiarInput();
    resultadoElement.innerHTML = "";
}

// Agregar amigo con la tecla Enter
nombreAmigosInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: si el campo está vacío, mostrar alerta
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo y limpiar el campo
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}


function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual

   
    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Validar que la lista no esté vacía
    if (amigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega al menos un nombre.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}

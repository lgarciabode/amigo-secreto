// Creacion de array
const amigos = [];

//FUNCIONES
//Funcion para agregar amigos
function agregarAmigo() {
    //Toma el valor del campo de entrada
    const input = document.getElementById('amigo');
    //Elimina espacios innecesarios
    const nombre = input.value.trim();

    //Valida del campo, si esta vacio alerta para
    //ingresar un nombre
    if (nombre === '') {
        alert('Debes ingresar el nombre de un amigo');
        return;
    }

    //Añade el nombre del amigo al array
    amigos.push(nombre);

    //Actualiza la lista
    actualizarLista();

    //Limpia el campo luego de añadido el nombre
    input.value = '';
}

//Funcion para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    //Limpia la lista antes de actualizarla
    lista.innerHTML = '';

    //Recorre el array de amigos y crea un elemento li
    //para cada uno
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

//Funcion para sortear amigo invisible
function sortearAmigo() {
    //Valida que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear, añade algunos');
        return;
    }

    //Gener un indice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtiene el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`
}
// Creacion de variables 
const amigos = [];

//FUNCIONES
//Funcion para agregar amigos
function agregarAmigo(){
    //Toma el valor del campo de entrada
    const input = document.getElementById('amigo');
    //Elimina espacios innecesarios
    const nombre = input.value.trim();

    //Validacion del campo, si esta vacio alerta a
    //ingresar un nombre
    if (nombre === ''){
        alert('Debes ingresar el nombre del amigo');
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
function actualizarLista(){
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

    //Comprabacion
    console.log("Lista actualizada en el HTML");
}
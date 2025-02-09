

//creo la variable "amigo" y le digo que es un array y está vacio
let amigos = [];
/*
//creo la funcion agregarAmigo 
function agregarAmigo() {
  
    //creo la variable nombreAmigo y le digo que busque el elemento con el id "nombreAmigos" que está en el html
    //y que tome el valor que se le pase
    //en este caso, el valor que se le pasa es el nombre que se escribe en la caja de texto
    let nombreAmigo = document.getElementById("nombreAmigos").value;
    if (esNombreValido(nombreAmigo)) {
        amigos.push(nombreAmigo);
        mostrarListaAmigos(amigos);
        document.getElementById("nombreAmigos").value = ""; // Limpiar el input
        document.getElementById("nombreAmigos").focus(); // Dar foco al input
      } else {
        alert("Por favor, ingresa un nombre válido (sin números).");
      }
    }
*/
function agregarAmigo() {
    let nombreAmigo = document.getElementById("nombreAmigos").value.trim();
  
    // Validar que se haya ingresado un nombre
    if (nombreAmigo === '') {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }
  
    // Validar que el nombre sea válido (sin números)
    if (esNombreValido(nombreAmigo)) {
      // Verificar si el nombre ya existe en la lista
      if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        return;
      }
  
      // Agregar el amigo a la lista
      amigos.push(nombreAmigo);
      mostrarListaAmigos(amigos);
      document.getElementById("nombreAmigos").value = ""; // Limpiar el input
      document.getElementById("nombreAmigos").focus(); // Dar foco al input
  
      // Validar que haya al menos 3 amigos
      if (amigos.length >= 3) {
        // Validar que no haya más de 20 amigos
        if (amigos.length <= 20) {
          alert("¡Tienes suficientes amigos para el sorteo!");
        } else {
          alert("Lo siento, has alcanzado el máximo de 20 amigos. No puedes agregar más.");
        }
      } 
    } else {
      alert("Por favor, ingresa un nombre válido (sin números).");
    }
  }



function mostrarListaAmigos(lista) {
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = "";
    
    let listaOrdenada = document.createElement("ul");
    
    for (let i = 0; i < lista.length; i++) {
      let nuevoItem = document.createElement("li");
      nuevoItem.textContent = lista[i];
      listaOrdenada.appendChild(nuevoItem);
    }
    
    listaAmigosElement.appendChild(listaOrdenada);
  }
  function esNombreValido(nombre) {
    // Expresión regular que no permite números
    let sinNumeros = /^[^0-9]*$/;
    return sinNumeros.test(nombre);
  }
  
/*Explicación:

Mantenemos el array amigos declarado fuera de las funciones.
En la función agregarAmigo(), después de agregar el nuevo nombre al array, llamamos a la función mostrarListaAmigos() y le pasamos el array amigos como argumento.
La función mostrarListaAmigos() recibe el array lista como argumento y se encarga de actualizar el contenido del elemento HTML con el id "listaAmigos".
Primero, selecciona el elemento HTML con el id "listaAmigos" y lo asigna a la variable listaAmigosElement.
Luego, limpia el contenido actual de ese elemento usando listaAmigosElement.innerHTML = "".
Después, recorre el array lista y crea un nuevo elemento <li> por cada elemento del array, asignando el valor como texto del elemento.
Finalmente, agrega cada nuevo elemento <li> como hijo del elemento listaAmigosElement.
Al final, la función agregarAmigo() devuelve el array amigos actualizado.
Ahora, cada vez que se llame a agregarAmigo(), el array amigos se actualizará y se mostrará la lista de amigos en el elemento HTML con el id "listaAmigos".
*/
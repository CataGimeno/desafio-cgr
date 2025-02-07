// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigoSorteo = ["cata" , "Remi" , "Pepa" , "Paco" , "Pipo" , "Pepito" , "Pepita" , "Pepote"];
/*console.log (nombresAmigoSorteo);
console.log (nombresAmigoSorteo.length);
//pop me elimina el ultimo elemento del array

console.log (nombresAmigoSorteo.pop())
console.log (nombresAmigoSorteo)

//at(-1) me muestra el ultimo elemento del array
console.log (nombresAmigoSorteo.at(-1))
console.log (nombresAmigoSorteo)

//push me agrega un elemento al final del array
//deberia usar el metodo push para agregar un nuevo nombre al array en el juego
console.log (nombresAmigoSorteo.push("Amaia"))
console.log (nombresAmigoSorteo)

*/
//IMPORTANTE: el método shift() elimina el primer elemento del array y lo retorna. 
// la gracia es que lo puede devolver en una nueva variable. En este caso, shift nos sirve para 
//tomar el resultado del random del sorteo y almacenarlo en una variable nueva con la que 
//podemos trabajar. y mostrarla como resultado
//_________________________
/*ya para decirle a la nueva variable nuevoNombre que será un arrelgo debo poner
los corchetes para que almacene lo que fuera a ponerle. A continucación,
le digo que esa variable debe agregar, con el metodo push, una variable que
será extraida de nuevoAmigoSorte a traves del metodo shift ()*/
let nuevoNombre = [];
 nuevoNombre.push (nombresAmigoSorteo.shift());
 
console.log (nuevoNombre.push ("gonzalo"));
console.log (nuevoNombre);

/*
Para SOBREESCRIBIR el título de la página en el index.html
1. primero debo decirle a la varible que use el metodo document.querySelector en la etiqueta seleccionada
2. despues debo decirle a la variable que use el metodo innrHTML y escribo el titulo que quiero
3. No es lo mas adecuado y puede producir errores


*/

let titulo = document.querySelector ("h1")
titulo.innerHTML = "Otro titulo de prueba"

function agregarAmigo () {
alert ("hola") //para ver que está funcionando
   /* esto lo puso copilot
   let nuevoNombre = [];
    nuevoNombre.push (nombresAmigoSorteo.shift());
    console.log (nuevoNombre);
    document.getElementById("amigo").innerHTML = nuevoNombre;
    */
}

//Ahora haré una funcion con parametros 
//que me permita poner textos de forma mas otpimizeda

function cambiarTextos (aQueElemento, textoQueVaAIrEnElELemento) {//los elementos y texto pasan a ser variables
  //los elementos serian h1, p, h2 y el texto es el contenido
    let elementoDeHtml = document.querySelector (aQueElemento)
    elementoDeHtml.innerHTML = textoQueVaAIrEnElELemento

} 
cambiarTextos ("h1", "Este es un nuevo titulo")
cambiarTextos ("h2", "Este es un nuevo parrafo")



// La caja en el index que donde hay que escribir los nombres tiene como id="amigo"

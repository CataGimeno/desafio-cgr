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

//_________________________







// La caja en el index que donde hay que escribir los nombres tiene como id="amigo"

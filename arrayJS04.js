/*
==Arrays==
Es una coleccion ó agrupacion de elementos en una misma variable, cada ubo de ellos ubicado por la posición que ocupa el array.
Los arrays se utilizan para almacenar y organizar datos de manera más eficiente.
*/

//Crear un array
const numeros = [1,2,3,4,5];
//Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];
//console.log(comida);
//Array mixto
const mixto = [
    "Pluma",
    8,
    true,
    {nombre:"Rene"}
    ];
//console.log(mixto);

//Array vacio
const lista = [];
console.log(lista);
//Agregar elementos a mi array vacio
lista[0] = "leche";
lista[1] = "pollo";
lista[2] = "espinaca";
lista[3] = "huevo";
console.log(lista);

//Otra forma de crear arrays
const frutas = new Array("Manzana", "Naranja", "Peras", "Mandarinas", "Uvas verdes");
/*
Esta sintaxis se puede emplear en Arrays porque son objects, ese una manera de mandar a llamar un nuevo objeto de tipo Array.
*/
console.log(frutas);

//Longitud de un array
console.log(frutas.length);
//Acceder a los elemntos del array acorde a su índice
console.log(frutas[2]);
console.log(frutas[3]);

//Modificar un elemento del array por le indice
const  cremeria = ["jamón", "salchicha", "queso", "crema", "manteca", "yogurt"];
console.log(cremeria);
cremeria[2] = "ricotta";
cremeria[0] = "leche";
console.log(cremeria);

//Arreglo de arreglos o multidimensional 
//console.log("Arreglo de arreglos");

//Estados: Estado de méxico, Yucatan, Sonora, Oaxaca, CDMX
//Platilos: Tlacoyos, Panuchos, Dogos estilo Sonora, Tlayudas, Guajolocombo

const estados = ["Estado de méxico", "Yucatan", "Sonora", "Oaxaca", "CDMX "]
const platillos = ["Tlacoyos", "Panuchos", "Dogos estilo Sonora", "Tlayudas", "Guajolocombo"];
const menu = [estados, platillos];

console.log(menu[0][0],  menu[1][0]);

/*Metodos de arrays


El método de cola (FIFO) sigue el principio "Primero en entrar, primero en salir". Los elementos se añaden al final y se eliminan del principio. Es como una fila: el primero que llega es el primero en ser atendido.

push 
shift
unshift


El método de pila (LIFO) sigue el principio "Último en entrar, primero en salir". Los elementos se añaden y eliminan del mismo extremo, como una pila de platos. El último elemento agregado es el primero en ser retirado.

push
pop

*/

//console.log("Metodos de Arrays");

const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Paola", "Enrique"];
console.log(ch35);
//pop() Eliminar el ultimo elemento del array)
let popch35 = ch35.pop();
console.log(popch35);
console.log(ch35);
//push() Agregar al final 
let pushch35 = ch35.push("Mony");
console.log(ch35);
//shift() quitar el primero del array
let shiftch35 = ch35.shift();
console.log(ch35);
//unshift() Agregar al principio el array
let unshiftch35 = ch35.unshift("Dany");
console.log(ch35);

//reverse () cambia el sentido del ordenamiento del array

let reversech35 = ch35.reverse();
console.log(ch35);

/*
Investigar:
sort
forEach
slice
splice
indexOf
*/

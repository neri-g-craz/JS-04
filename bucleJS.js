/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

console.log("Ahora hablamos de bucles");

/*
====Ciclo for ====
Un ciclo for Itera sobre una secuencia ejecutando un bloque hasta que la condición sea falsa.

Sintaxis
    for (exoresionInicial; expresioncondicional; expresionactualización) {Codigo a ejecutar en cada iteración del bucle}

    1.- Inicialización: se debe inicializar con una variable  que será evaluada en la expresión a comparar.
    2.- Condición: es una expresion que debe cumplir la variable inicial (true), si no se cumple (false) el bucle termina.
    2.- Pasos a realizar: Son los intervalos que cambiaron la variable inicial mientras esta sea true.

*/

//Crear un programa para saber cuantos boletos vendemos para una rifa

for (let boleto = 1; boleto <=25; boleto++) {
    console.log(`Boleto # ${boleto}`);
}

// Programa para vender aguinaldos con una variable global
let aguinaldos = 1;
for (aguinaldos; aguinaldos <= 20; aguinaldos++){
    console.log(`Vendí ${aguinaldos}`);
}

//Cuenta regresiva
let cuentaRegresiva = 15;
for (cuentaRegresiva; cuentaRegresiva>=0; cuentaRegresiva-=5){
    console.log(`Quedan ${cuentaRegresiva} aguinaldos`);
}

/* Recorrer arrays con el ciclo for
Debemos usar indices del arreglo para poder usar el bucle, en indices desde el 0 hasta n y usaremos la propiedad Length
*/

const ch35 = ["Rodrigo", "Rey David", "Ania", "Diego"];

for (let i = 0; i < ch35.length; i++) {
    console.log(ch35[i]);
}


/*Variaciones del ciclo for

for of: Itera sobre valores de objetos iterables como arrays o strings.
for in: Itera sobre las propiedades enumerables de un objeto, proporcionando la posición o clave de cada propiedad.
*/

const fruits = ["Apple", "Banana", "Orange"];
for (fruta of fruits) {
  console.log(fruta);
}

//Sumar numeros del 1 al 20

let suma = 0;
for (let i = 1; i <= 20; i++){
    suma +=i;
}
console.log(suma);

//Tabla 5

const tabla = 5;
for (let i = 1; i <= 10; i++){
    let resultado = tabla * i;
    console.log(`${tabla} x ${i} = ${resultado}`);
}

/*
Ciclo while
El ciclo while itera mientras la condición dada sea verdadera, ejecutando repetidamente el bloque de código correspondiente.
*/

//Venta de productos
let productos = 5;
while (productos > 0) {
    console.log("Quedan " + productos + " en stock");
    productos--;
}

//Imprimir números

let numUno = 0;
    while (numUno < 100){
        numUno +=6
        console.log("El numero descartado es " + numUno );
    }

/* Links de la sesión
https://dcodingames.com/el-ciclo-while/
*/
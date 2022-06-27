
/* 
comentarios o 
//  de una linea

tipos de datos
undefined, null, boolean, string,symbol, number y Object



*/
var miVariable="CursoTwo";
console.log(miVariable);

var miVariable="CursoTwo";
// a la variable se le puede asignar cualquier tido de datos
console.log(miVariable);

var miNombre="Cristian"; // se recomienda ser descriptivo y camelCase
console.log(miNombre);

var a;
var b=2;
console.log(a); // undefine por no tener valor asignado
console.log(b);

a=10;  // asignando valores
 console.log(a);

 // asignado el valor de una variable a otra variable
 var c=5;
 var d=c;  // o var b;
 console.log(c);
 console.log(d);

 // inicializando la variable
var x=p; 
var miIdioma="Español";  // usar siempre camelCase

// variables no inicializadas

var a;
var b;
console.log(a);
a=50;
console.log(a);

var miVariable =5;
console.log(MIVARIABLE); // DARA ERROR POR QUE NO ESTA DEFINICA LA VARIBLE
console.log(miVariable); // js es sencible a las may y min

// operaciones de numeros enteros y decimales + , - , /,*,
// var nomVar = a+b;
// num / 0 =  infinity

/* 
declaracion de decmales

var miNumeroDecimal=23.4;
var peso=78.34;



var resto=15 % 5 el resultado es 0
*/

//el resto %
var resto=15 % 5 //el resultado es 0
console.log(resto);

//*******************************

//  ASIGNACION COMPUESTA
// incrementos
var librosComprados = 105;
console.log(librosComprados); // inicialmente

// opcion 1
librosComprados = librosComprados + 1;
console.log(librosComprados);

//opcion 2   composicion compuesta
librosComprados++;
console.log(librosComprados);

// para incrementes mayores
librosComprados += 5;
console.log(librosComprados);

// decrementos variable =variable - 1  o  varriable--

var estudiantes = 50;

estudiantes = estudiantes - 1;
console.log(estudiantes);
estudiantes--;
console.log(estudiantes);
// para decrementos mayores
estudiantes -= 10;
console.log(estudiantes);

// asignacion compuesta +=, -=, *= ,/=    '% es el resto de la operación'

//multiplicacion

// division

//--------------------------------------------

// CADENA DE CARACTERES
var nomnbre ="Alan";
var apellido="Garcia";

// escapar comillas "\"
var miCadena ="Soy una cadena con \"comillas\"";
console.log(miCadena);

// otra opcion alternar entre comillas simples y dobles segun el caso
var miCadena ='Soy una cadena con "comillas"';
console.log(miCadena);

//--------------------------------------------
/* secuencias de escape
\'
\"
\\
\n linea nueva
\r retorno carro
\t tab
\b retroceso
\f salto de pagina
...
*/
// concatenar cadena de caracteres "+"
var nombreCompleto="Alan"+" "+"Turing";
console.log(nombreCompleto);
var verbo ="programar";
var mensaje =" estoy aprendiendo a " + verbo;
console.log(mensaje);

// agregar variables a cadenas
var mensajeCompleto="Estoy aprendiendo a programar ";
var parteFinal="con freeCodeCam";
mensajeCompleto+=parteFinal
console.log(mensajeCompleto);

// longitud de cadenas
var miCadenaDos;
miCadenaDos="AB C";
console.log(miCadenaDos.length);

// notacion de corchetes posicion de los indices en la cadeda
var lenguajeDeProgramacion="JavaScript";
console.log(lenguajeDeProgramacion[0]);
//--------------------------------------------
// inmutabilidad de las cadenas de caracteres
var miCadena ="Jola Mundo";
console.log(miCadena);
miCadena[0]="H"; // error no se puede cambar un valor
console.log(miCadena);
miCadena="Hola Mundo" // se le puede reasignar un valor
console.log(miCadena);

// Notación de corchetes Enésimo Carácter acceso a los caracteres
var miCadenaDos="JavaScript";
// cadena: J a v a S c r i p t
// ïndice: 0 1 2 3 4 5 6 7 8 9
console.log(miCadenaDos[0]);
console.log(miCadenaDos[1]);

// Notación de Corchetes: Ultimo Caracter  [var.length -1]
var miCadena ="Hola Mundo";
console.log(miCadena[miCadena.length -1]);

// Notacíon de corchetes : posicion caracter especifico
// penultimo -2 o -3 ,-4 -5
console.log(miCadena[miCadena.length -2]);

// concatenacion Palabras en blanco juego historias locas
var miSustantivo = 'perro';
var miAdjetivo = 'negro';
var miVerbo = 'corrío';
var miAdverbio = 'rapidamente';

/* Concatena las cadenas para crear una cadena que muestre un mensaje.
Puedes cambiar los valores de las variables.

Por ejemplo :   El perro negro corrio rápidamente a la tienda.
                La bicicleta pequeña volo a la tienta lentamente.
*/
var palabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " "
    + miVerbo + " " + miAdverbio + " a la tienda.";
console.log(palabrasEnBlanco);
//--------------------------------------------
// Arreglos (Arrays)
var miArreglo=["Jhon",24];
console.log(miArreglo);

var estudiantes=["Nora","Gino","Pedro","Emily"];
var notas=[95,40,50,60];
console.log(estudiantes);
console.log(notas);

// arreglos individuales
var listaDeEstudiantes =[["Nora",97],["Giño",78]];
console.log(listaDeEstudiantes);

var listaDeProductos=[["Camisas",5.67,"S134"],["Celular",250,"S356"],["Zapatos",36.7,"S678"]];
console.log(listaDeProductos);

var datos=[[3.4, 5.6, 3.2],[6.7, 4.3, 7.8],[5.6, 3.4, 7.8]];
console.log(datos);

// acceder a los elementos de un array
var miArreglo=[10,20,30];
console.log(miArreglo[0]);  // igual que en java
console.log(miArreglo[1]);  // igual que en java

var suma= miArreglo[0]+miArreglo[1];//=30

//modificar elementos de un array

miArreglo[0]=20; // puede ser un string, un array

// acceso array multidimensionales

var miArrayBidi=[[1,2,3],[4,5,6],[7,8,9]];
//indice            0       1       2
//indice interno  0 1 2   0 1 2  0  1  2

console.log(miArrayBidi[1]); //  4,5,6
console.log(miArrayBidi[1][2]); // 6

// introducir datos array .pus
var estaciones=["Invierno","Otono","Primavera"];
estaciones.push("Verano");
console.log(estaciones);
//----------------------
//.pop remueve ULTIMA posicion
var estacion=["Invierno","Otono","Primavera","Verano"];
//estacion.pop();
// asignar a una variable el elemento estraido
var miEstacion=estacion.pop();
console.log(estacion);
console.log(miEstacion);
//---------------------
//.shift remueve PRIMERA posicion
estacion=["Invierno","Otono","Primavera","Verano"];

// asignar a una variable el elemento estraido
miEstacion=estacion.shift();
console.log(estacion);
console.log(miEstacion);
// ------------------------
//.unshift agreda en la PRIMERA posicion
estacion=["Invierno","Otono","Primavera"];

// asignar a una variable el elemento estraido
estacion.unshift("Verano"); // agrega al principio del arreglo
console.log("unshift :"+estacion);
//console.log(miEstacion);
//--------------------------------------------
// proyecto lista de compras con array bidimensionales
var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4],
["pan", 5], ["refresco", 7], ["pollo", 7]];

// compras
console.log("Voy a comprar "+miListaDeCompras[0][1]+" unidades de "+miListaDeCompras[0][0]);
console.log("Voy a comprar "+miListaDeCompras[1][1]+" unidades de "+miListaDeCompras[1][0]);
console.log("Voy a comprar "+miListaDeCompras[2][1]+" unidades de "+miListaDeCompras[2][0]);
//--------------------------------------------
// funciones y argumentos o variables
function mostrarMensaje() {  // sin argumentos
    console.log("Hola Mundo");
}

mostrarMensaje();

function sumar(a, b) {  // con argumentos
    var suma = a + b;
    console.log("la suma de " + a + " + " + b + " = " + suma);
}

sumar(10, 20);
sumar(100, 20);
sumar(1, 20);

var x = 5; // pase de variables
var y = 5;
sumar(x, y);

// cadenas 
function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("buenos", "dias", "mundo");
//--------------------------------------------
// variables de ambito global y local
// variables global
var miVariableGlobal =5;
console.log(miVariableGlobal);

function miFuncion(){
    console.log(miVariableGlobal);
}
miFuncion();

console.log(miVariableGlobal);

//variables locales
function miFuncion(){
    var miVariableLocal    // variable local
    console.log(miVariableLocal);
}
miFuncion();

console.log(miVariableLocal);  // error por estar declarada en la funcion

// global vs local

var miNombre="Nora";

function mostarMiNombre(){
    var miNombre="Gino";
    console.log(miNombre);
}
mostarMiNombre(); // mostrará la variable local

console.log(miNombre); // mostrará la variable global

// funciones - retornar valores
function sumar(a,b){
    return a+b;   // retorna los valores 
}

console.log(sumar(5,3));  // console. log muestra los valores en la consola para comprobar

// undefined 

// asignar valor a una variable
var total = sumar(10,20);
console.log(total);

function crearCadenaConMeta(lenguajeDeProgramacion){
    return "Mi meta es aprender "+lenguajeDeProgramacion;
}
var miMeta=crearCadenaConMeta("JavaScript");
console.log(miMeta);

//--------------------------------------------
/* Permanece en Fila -- Colas --
Es una estructura de datos abstracta en la cual los elementos se mantienen en orden.
Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran al principio de la cola.

Define una funcion proximoEnLaFila que tome un arreglo(arreglo) y un numero(elemento) como argumento.
Agrega el numero al final del arreglo y luego eleimina el primer elemento del arreglo.La función proximoEnLaFila debe 
retornar el elemento que fue removido.
*/
function proximoEnLaFila(arr,elem){
    miArreglo.push(elem);   // agrega al final del arreglo
    return arr.shift(); // Remover el primer elemento y retornar
}
var miArreglo=[1,2,3,4,5,];

console.log("Antes: "+JSON.stringify(miArreglo)); // JSON.stringify convierte el array en texto (CREO)

console.log(proximoEnLaFila(miArreglo,6));

console.log("Despues : "+JSON.stringify(miArreglo));
//--------------------------------------------
// valores booleanos "true" "false"  solo asi lo va a reconocer 
console.log(true); // dara error True,TRUE, solo acepta true igual sucedera con false
console.log(false);

// operadores de igualdad  ==
console.log(5==5); // true
console.log("hola"=="hola"); // true
console.log("Hola"=="hola"); // false

// no se debe utilizar para arreglos ya que compra los objetos de la memoria

// operadores de igualdad estricta  ===
console.log(9==9); // true
console.log(9=="9"); // true

console.log(9===9); // true
console.log(9==="9"); // false

// practica como comparar valores
var a;
var b;

a=5;
b=5;

console.log(a==b); // true
console.log(a===b); // true

b=8;
console.log(a==b); // false
console.log(a===b); // false

b="5";
console.log(a==b); // true
console.log(a===b); // false

a="Js5";
b="Js5";

console.log(a==b); // true
console.log(a===b); // true
//--------------------------------------------
// operadores de desigualdad  !=
console.log(9 != 6); // true
console.log(9 != 9); // false
console.log("java" != "java"); // false

//operador de desigual estricta !==
console.log(1 != "1"); // false
console.log(1 !== "1"); // true

// operador Mayor que >
console.log(6 > 5); // true

console.log("B" > "A"); // true  compara caracteres por orden alfabetico
console.log("ACB" > "ABC"); // true
console.log("ACB" > "A"); // true

// usando variables
var a=15;
var b=7;
console.log(a > b); // true

// mayor igual  >=
// menor  <
// menor igual <=
//--------------------------------------------
// operador logicos "and"  en javascript = "&&"
/* x && Y
t t t  // solo si ambos son verdaderos sera verdadero
t f f
f t f
f f f
*/
console.log(true && true); // true
var a = 8;
console.log((a > 5) && (a < 10)); // true

// operador logicos "OR"  en javascript = "||"
/* x || Y
t t t  // si hay un true  sera verdadero
t f t 
f t t
f f f  // solo si ambos son falsos sera falso
*/

a = 8;
console.log((a < 5) || (a > 15)); // false

// operador logicos "NOT"  en javascript = "!"
/* 
x !x
t f  
f t 
*/
a = 8;
console.log(!true); // false
console.log(!(a < 5)); // true
//--------------------------------------------
// SENTENCIAS CONDICIONALES if else else if

var x = 5;
if (x < 2) {
    console.log("la condicion es verdadera");
} else {
    console.log("la condicion es falsa");
}

var estacion = "Invierno";  // "Inviernos"  daria false
if (estacion === "Invierno") {
    console.log("Me encanta el invierno");
} else {
    console.log("la condicional es falsa");
}

function clasificarValor(valor) {
    if (valor % 2 == 0) {
        console.log("Divisible entre 2.");
    } else if (valor % 3 == 0) {
        console.log("Divisible entre 3.");
    } else {
        console.log("No es divisible entre las opciones ");
    }
}
clasificarValor(2);
clasificarValor(15);
clasificarValor(7);
//--------------------------------------------
// CONDICIONALES ORDEN LOGICO
function clasificarValor(valor){
    if (valor<5){
        console.log("Menor que 5");
    }else if(valor <10){
        console.log("Menor que 10");
    }else{
        console.log("Mayor o igual que 10");
    }
}

clasificarValor(2);
clasificarValor(6);
clasificarValor(11);

// Encadenar sentencias IF.. ELSE
function interpretarIMC(indiceMasaCorporal){
    if (indiceMasaCorporal <18.5){
        console.log("Bajo Peso");
    }else if(indiceMasaCorporal<=24.9){
        console.log("Normal");
    }else if(indiceMasaCorporal<=29.9){
        console.log("Sobrepeso")
    }else{
        console.log("Obeso")
    }
}
interpretarIMC(17);
interpretarIMC(23);
interpretarIMC(29.9);
interpretarIMC(40);

//--------------------------------------------
// PROYECTO JUEGO DE GOLF
/*
En el juego del golf cada hoyo tiene un par que representa el numero promedio de golpes
que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de qué tan por encima o por debajo del par estém tus golpes.

Tu función tomará los argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad

Golpes      Retornar
1            "Hole-in-one!"
<=par -2     "Eagle"
par -1      "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"

par y golpes siempre serán numericos y positivos
*/
function puntajeDeGolf(par, golpes){
    if (golpes == 1) {
        return "Hole-in-one!";
    } else if (golpes <= par - 2) {
        return "Eagle";
    } else if (golpes == par - 1) {
        return "Birdie";
    } else if (golpes == par) {
        return "Par";
    } else if (golpes == par + 1) {
        return "Bogey";
    } else if (golpes == par + 2) {
        return "Double Bogey";
    } else if (golpes >= par + 3) {
        return "Go Home";
    }
}
console.log(puntajeDeGolf(4,1));
console.log(puntajeDeGolf(4,2));
console.log(puntajeDeGolf(4,3));
console.log(puntajeDeGolf(4,4));
console.log(puntajeDeGolf(4,5));
console.log(puntajeDeGolf(4,6));
console.log(puntajeDeGolf(4,7));
//--------------------------------------------
// SENTENCIAS SWITCH se puede poner en el codigo directo o en la funcion
function clasificarValor(valor){
    var respuesta;

    switch(valor){ 
        case 1:   // PUEDE SER NUMERICO, CADENA, BOOLEAN
            respuesta="alfa";
            break;
        case 2:
            respuesta="beta";
            break;
        case 3:
            respuesta="gamma";
            break;
        case 4:
            respuesta="delta";
            break;
        case 5:
        case 6:
        case 7:  // multiples opciones o casos 5,6,7
            respuesta="MULTIPLES OPCIONES";
            break;

        default:   // PARA UN VALOR PREDETERMINADO SI NINGUNA CUMPLE
            respuesta="VALORES POR DEFECTO";
            break;
    }
    return respuesta;
}
console.log("letra "+clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));
console.log(clasificarValor(7));
console.log(clasificarValor(5));
console.log(clasificarValor(8));

// las condicionales se puede representar por SWITCH

//--------------------------------------------
// RETORNAR VALORES BOOLEANOS 
function esMenorQue(a,b){  // funciona larga
    if(a<b){
        return true;
    }else{
        return false;
    }
}

function esMenorQueCorto(a,b){  // funcion corta  RECOMENDADA SI FUNCIONA OK
    return a<b;
}
//PATRON DE RETORNO ANTICIPADO

function miFuncion(){
    console.log("Hola");
    return"Mundo";
    console.log("Adios"); // esta despues del return
}

function calcularRaizCuadrada(num){
    if (num<0){    // retortno anticipada para evitar el error 
        return undefined;
    }
    return Math.sqrt(num);
}

//--------------------------------------------
//PROYECTO BLACK JACK -- CONTEO CARTAS
/* DESCRIPCION 
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del numero relativo
de cartas altas y bajas que quedan en la baraja.

Esto se llama "conteo de cartas".

Tener más cartas añtas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuierdo a la 
siguiente tabla.
- cuando el conteo es positivo, el jugador deberia apostar alto.
- cuando el conteo es 0 o negativo, el jugador deneria apostar bajo.

cambio del conteo   cartas
+1                  2, 3, 4, 5, 6
0                   7, 8, 9,
-1                  10, J, Q, K, A

Nuestra meta es definir una función para contar cartas.

la función debe tomar un parámetro carta que puede ser un numero o una cadena de caracteres y luego aumentar
o reducir el valor de la variable global conteo de acuerdo al valor de la carta (ver tabla).

La funcion debe retornar una cadena de caracteres con el conteo actual y la cadena:
-"Apostar" si el conteo es positivo.
-"Esperar" si el conteo es cero o negativo.

El conteo actual y la decision del jugador ("Apostar" o "Esperar") deben de estar separados por un espacio.

*/

var conteo = 0;

function contarCartas(carta) {
    var decision;

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break
    }
    if (conteo > 0) {
        decision = "Apostar";
    } else {
        decision = "Esperar";
    }
    return conteo + " " + decision;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));
//--------------------------------------------
// CREAR OBJETOS  entre llaves,las propiedades entre comillas , luego : y asignar valor seguido de coma "," 
var miPerro = {
    "nombre": "Gino",
    "raza": "doberman",
    "edad": 4,
    "peso": 10.8,
    3: "tres"   // permite poner numero en el nombre de atributos
}
// ACCEDER A PROPIEDADES NOTACION DE PUNTO
console.log(miPerro.nombre);  // "Gino"
console.log(miPerro.edad);    // 4

// ACCEDE A LAS PROPIEDADES DEL OBJETO por corchetes ["propiedad"]
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200, // en estos casos usar notacion de corchetes
    "numero de horas": 100
};
console.log(miCuaderno.color);
// o
console.log(miCuaderno["color"]);

console.log(miCuaderno["numero de paginas"]);

// ACCEDER A PROPIEDADES : VARIABLES  // con corchetes o
var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef215",
    4: "kiara566"
}
var posicion=4;
console.log(resultados[posicion]);
//--------------------------------------------
//ACTUALIZAR PROPIEDADES de los objetos
var mochila={
    "color": "azul",
    "tamaño":"mediano",
    "contenido":["botella de agua","cuaderno"]
};
console.log(mochila.color);
mochila.color="Verder";
console.log(mochila.color);

console.log(mochila.contenido);
console.log(mochila.contenido.push("lapiz"));  // push para agregar pop ,etc
console.log(mochila.contenido);

//AGREGAR PROPIEDADES

var curso={
    "titulo":"Aprende JavaScript desde Cero",
    "idioma":"Español",
    "duracion":30
};
console.log(curso.vistas); // la propiedad vistas no esta definida "undefined"

curso.vistas=34500; // definimos vista y le damos un valor
curso["vistas2"]=34500; // definimos vista2 entre corchetes y le damos un valor 
console.log(curso.vistas);
console.log(curso);  // muestra las propiedades

// ELIMINAR PROPIEDADES delete
delete curso.vistas2;
console.log(curso);  // muestra las propiedades

// OBJETOS PARA BUSQUEDAS
function buscarElementoQuimico(simbolo){
    var elementoQuimico="";
    var simbolosQuimicos={
        "Al":"Aluminio",
        "S":"Azufre",
        "Cl":"Cloro",
        "He":"Helio",
        "B":"Boro",
        "Li":"Litio"
    }
    return simbolosQuimicos[simbolo];
}
console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

//--------------------------------------------
// VERIFICAR PROPIEDADES
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};
console.log(miCuaderno.hasOwnProperty("color"));  // true  COMPRUEBA SI EXISTE LA PROPIEDAD
console.log(miCuaderno.hasOwnProperty("PAIS"));  // FALSE  COMPRUEBA SI EXISTE LA PROPIEDAD

// APLICANDO hasOwnProperty EN UNA FUNCION

function verificaPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esta Propiedad";
    }
}
console.log(verificaPropiedad(miCuaderno, "color"));
console.log(verificaPropiedad(miCuaderno, "pais"));
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------

// PROYECTO COLECCION DE DISCOS
/*
Tenemos un objeto que representa parte de una colección de álbumes musicales.

Cada álbum tiene un número de identificación único (id)
asociado a otras propiedades.

No todos los albumes tienes la información completa.
*/

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold",
    }
};

/*
Define una función actualizarDiscos que tome los siguientes parametros:
- discos (el objeto que representa la colección de discos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas para
modificar el objeto pasado a la función:

- Si "valor" es una cadena vacia, elimina la propiedad del album correspondiente

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum
no tiene una propiedad llamada "canciones" , crea un arreglo vacio y agrega 
"valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es 
una cadena vacia, agregar "valor" al final del arreglo de canciones del 
álbum correspondiente.

- Si "valor" no es una cadena vacia y "propiedad" no es igual a "canciones", 
asigna el valor del parametro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignarle este valor.

*/

funcion actualizarDiscos(discos, id, propiedad, valor){
    if (valor ===""){
        delete discos[id][propiedad];
    }
    tiempo youtube 5.56
}
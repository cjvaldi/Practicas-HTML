// GETTERS Y SETTERS

class Libro {
    constructor(autor) {
        this._autor = autor;  // el gion bajo indica que es PRIVADA '_' 
    }

    get autor() {
        return this._autor;
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("Anónimo");
console.log(libro.autor);  // llama al getter

libro.autor="Gino Smith";
console.log(libro.autor);


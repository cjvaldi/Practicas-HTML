var nombreUsuario = "jhon";
let apellido = "Carter";
console.log(nombreUsuario);
console.log(apellido);
const PI = 3.1415;
console.log(PI);


let passwordDB = '12345';
let input = "12345";
let result = passwordDB == input;
if (result == true) {
    console.log("Login correcto");
} else {
    console.log("Contraseña incorrecto");
}

// if
let score = 70;
if (score > 30) {
    console.log("necesitas practicar más");
} else if (score > 15) {
    console.log("necesitas 15 practicar más");
} else {
    console.log("necesitas -15 practicar más");
}

// switch
let typeCard = 'Credict Card';
switch (typeCard) {
    case 'Debid Card':
        console.log("Esto es una tarjeta de Débito");
        break;
    case 'Credict Card':
        console.log("Esto es una tarjeta de Crédito");
        break;
    default:
        console.log("Esto no es una tarjeta");

}
// iteradores
// while  tener cuidado con los bucles infinitos
let count = 50;  // podemos empezar de 1 a 50
while (count > 0) {
    //console.log(count);
    count--; // count-- o count=count-1
}

let names = ['ryan', 'joe', 'jhon'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

// funciones

function saludar(name) {
    console.log("Hola funciona saludar " + name);
}
saludar('marcos');
saludar('juan');
saludar('luis');

function sumar (n1,n2){
    console.log(n1 + n2)
}
sumar(5,10);
sumar(55,10);
sumar(5,101);
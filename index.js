
// fn = función
//FUNCIONES - ES UNO DE LOS TEMAS MAS IMPORTANTES EN JavaScript (JS)
//Definicion: un bloque reutilizable de código; las funciones nos permiten escribir código que luego poemos volver a usar

//Las funciones (fn) tiene 2 partes:
//1) la declaración de la función
//2) Correr la fn o llamar la fn, call a function / run a function!


//Declarar Función (fn):
function funcName() {
    //aca aentro va a estar el cóigo que va a hacer algo...
}

// 1)
function tresConsolas(){
    console.log('hola chicos');
    console.log('hola chicos');
    console.log('hola chicos');
}

//tresConsolas();
//tresConsolas();


// 2)    EJEMPLO Dado
function dadoRandom() {
    let numero = Math.floor(Math.random() *6) + 1;
    console.log('Dado numero' + numero);
}
//dadoRandom()
//dadoRandom()  ahora vamos a trabajar con: for     3)
//for (let index = 0; index < 10; index++) {
  //  dadoRandom();
//}

//esto que hice arriba pueo hacerlo con parametros
//4) PARAMETROS: es una variable que definido dentro de los parantsis de las funciones

function lanzarDado(cantidad) {
    for (let index = 0; index < cantidad; index++) {
        dadoRandom();
    }
}

//ARGUMENTO de la función

//lanzarDado(50)

//Importante: JS no valida el tipo de los parametros. 
//6) otra funcion:
//function sayMyName(nombre) {
//    console.log(`Tu nombre es : ${nombre}`);
//}
//sayMyName(lUIGGI);


//7
//function sayMyName(nombre = 'Sin nombre') {
 //   console.log(`Tu nombre es : ${nombre}`);
//}
//sayMyName();

//8
//function sayMyName(nombre)  {
 //   if (typeof nombre === 'string') {
 //     console.log(`Tu nombre es : ${nombre}`);  
 //   } else {
 //     console.log(`Esperaba un string`);
 //   }
//}
//sayMyName(3344);

//9 JS NO VALIDA EL TIPO DE LOS PARAMETROS
function sayMyName(nombre = 'Un string')  {
  if (typeof nombre === 'string') {
    console.log(`Tu nombre es : ${nombre}`);  
  } else {
    console.log(`Esperaba un string`);
  }
}
sayMyName();

//10) FUNCIONES (FN) e matematicas:
function cuadrado(num){
  console.log(num * num);
}

function sumar(a, b) {
  console.log(a + b);
}

function dividir(a, b) {
  console.log(a / b);
}

//cuadrado(5);
//sumar(50, 250);
//dividir(50, 10);

//11) RETURN - es el valor que devuelve la función, son super útiles porque podemos guardarlo en una variable o pasarlo a otra función.
function cuadradoR(num){
  return num * num;
}

function sumarR(a, b) {
  return a + b;
}

function dividirR(a, b) {
  return a / b;
}

let cuadradoDe5 = cuadradoR(5); // = 25;  // las fx son objetos en Jv y lo pudo asignar; la fx puede ser algo que se esta declarando pero tambien puee ser un valor de asignacion (muy loco!). asignar una fx a una variable
let sumaDeNum = sumarR(50, 250);
let dividirVar = dividirR(50, 10);

console.log(cuadradoDe5);
console.log(sumaDeNum);
console.log(dividirVar);

//12) Para muchos valores:
function retornaMuchos() {
  return [1, 51, 3515];
}
let arr = retornaMuchos();

console.log(arr);

//13)Ejemplo de Fn con varios parametros y que vuelve Array de todos esos Parametros
//Una manera:
//function cuadrados(...args) {   //args:argumentos
//  let miArray = [];
 // for (let index = 0; index < args.length; index++) {
 //   miArray.push(args[index] * args[index]);
//  }
 // return miArray;
//}

//let arrayDeCuadrados = cuadrados(1, 2, 3, 5, 4, 5);
//console.log(arrayDeCuadrados)



//14)APROVECHANdO EL RETURNS
//Version 1
//function esRojo(color) {
//  if (color.toLowerCase() == 'rojo') {
//    return true;
//  } else {
//    return false;
//  }
//}
//console.log(esRojo('ROJO'));

//Version 2
//function esRojo2(color) {
//  if (color.toLowerCase() == 'rojo') {
//    return true;
//  } 
//    return false;
//  }

//console.log(esRojo2('ROJO'));


//Version 3
//function esRojo3(color) {
//  return color.toLowerCase() == 'rojo'; //expresion gooleana: si es true o false
//  } 
    

//console.log(esRojo3('ROJO'));

//15 ) Retomamos el punto 13)Ejemplo de Fn con varios parametros y que vuelve Array de todos esos Parametros

//ARRAY Destructuring - destructuración de un Array:
function cuadrados(...args) {   //args:argumentos
  let miArray = [];
  for (let index = 0; index < args.length; index++) {
    miArray.push(args[index] * args[index]);
  }
  return miArray;
}

let arrayDeCuadrados = cuadrados(1, 2, 3, 5, 4, 5);
console.log(arrayDeCuadrados)
let [valor1, valor2, valor3] = cuadrados(5, 4, 3);

//console.log('Valor1:' + valor1);
//console.log('Valor3:' + valor2);
//console.log('Valor3:' + valor3);

// 16) EJEMPLO DE FUNCION VALIDAR PASSWORD
//Requisitos
// 1 - mayor a 8 caracteres
// 2 - sin espacios en blanco
// 3 - no puede contener el nombre del usuario

//function checkPassword(password, userName) {
//}
//1ero haremos la forma larga:
function checkPassword(password, userName) {
  if(password.length < 8) {
    return false;
  } else if (password.includes(' ')) {     //espacios en blanco
    return false;
  } else if (password.includes(userName)) {
    return false;
  }
  return true;
}
//let pass = 'superseguro123';
//let pass = 'superseguro123  ';
let pass = 'supusjajajakala123';
let userId = 'usuario123';

//console.log(checkPassword(pass, userId));    AHORA haremos otra forma pero mas prolija:
let msjCheckPass = checkPassword(pass, userId)
  ? 'ok tu password es correcto' :          //(: = seria de lo contrario)
  'Password invalido!' ;
console.log(msjCheckPass);
  

//2o la forma corta: con expresiones guleanas
function checkPassword2(password, userName) {
  let passwordLength = password.length >= 8; // si es mayor o igual a 8 --> True 
  //let passwordBlanc = password.includes(' ');  //(si hay espacio tenria que ser FALSE y como lo hacemos? Necesitamos la inversion, negacion: ``!´´ )
  let passwordBlanc = !password.includes(' ');    // Si hay espacios en blanco ' ' --> True --> !true (true no!)--> False
  let passwordHasUsername = !password.includes(userName); // si hay User --> true ->!true -> False

  //         true               false              true           = FALSE
  return passwordLength && passwordBlanc && passwordHasUsername;
}
let msjCheckPass2 = checkPassword2(pass, userId)
  ? 'ok tu password es correcto' :          //(: = seria de lo contrario)
  'Password invalido!' ;
console.log(msjCheckPass);


//17) Funcion reducir todooo a un Valor . Lo va a hacer e esta manera porque la prox clase se sigue
//te paso un array y te lo reduzco:
//Funcion promedio:
let notasAlumno = [10, 5, 10, 10];

function promedio(arr) {  
  let total = 0; //(0): necesitamos un acumulador/inicializador para esta función. Se pone Cero, sino tira error.
  for (let num of arr) {
   //total = total + num          //o versión corta:
   total += num;    //(+=): suma y reasigna
  }
  return total / arr.length;
}
let promedioAlumno = promedio(notasAlumno);
//console.log(`Promedio final = ${promedioAlumno.toFixed(2)}`);
//console.log(`Promedio final = ${Math.floor(promedioAlumno)}`);
console.log(`Promedio final = ${Math.round(promedioAlumno)}`);


//18)FUNCTION EXPRESION
let multiplicar = (a, b) => {               // => multiplicar: multiplicar
  return a * b;
};   

let sum = (a, b) => {               // => sum : sumar
  return a + b;
};  

let div = (a, b) => {               // => div 
  return a / b;
};

let mathOperations = [multiplicar, sum, div];
console.log(mathOperations[0](5, 5));

for(let fn of mathOperations){
  let resultado = fn(5,5);
  console.log(resultado);
}

// 2:16hs: 
//19) CALLBACKS (cb): soy una fn que dentro de mi fn se va a ejecutar este cb
//en este caso la fn sera multiplicar peroooo puee ser suma, etc.
let doMath = (a, b, cb) => {
  return cb(a, b);
};

console.log('[doMath]:' + doMath(5, 5, multiplicar));
console.log('[doMath]:' + doMath(5, 5, sum));

let cambiarAyb = (a, b, cb) => {
  let num1 = a * a;
  let num2 = b * b;
  return cb(num1, num2);
};

console.log('[cambiarAyB]:' + cambiarAyb(5, 5, sum));

/*  que seria lo que estamos hacieno
doMath(5, 5, multiplicar){
  return multiplicar(5,5)
}
*/
//20) 
const multiplicarBy = (num) => {
  let numeroRecordado = num;
  return (otroNumero) => {
    return numeroRecordado * otroNumero;
  };
};

//const doble = multiplicarBy(2);
//console.log(doble);
const doble = multiplicarBy(2);
const triple = multiplicarBy(3);
const cuadruple = multiplicarBy(4);

console.log(doble(50));
console.log(triple(30));
console.log(cuadruple(25));



//fin
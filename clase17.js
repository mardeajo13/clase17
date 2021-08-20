//¿que era un CallBacks? recordamos

function soyUnaFn(fn){
    return fn('eyyy estoy dentro de soyUnaFn');
}

function logearFn(text) {
    console.log(text);
}
soyUnaFn(logearFn);

//que estaría pansano?:

//function soyUnaFn(logearFn){
//    return logearFn('eyyy estoy dentro de soyUnaFn');

//2)FUNCTION EXPRESSION: 
//*DECLARAdA o NAMED FUNCTION (1era fn pura):
//vamos a ver si es par o impar el resultao e la % 2
function esPar(n) {
    return n % 2 === 0;
}
//*EXPRESION DE FUNCION o FUNCTION EXPRESSION(2 fn pura):
//(en el caso que sea Fn es mejor const que let (en este caso): porque no quiero que cambie el valor en memoria de esta fn. QUE MUTE y no que cambie la dirección de la memoria de esa fn u objeto)
//const esPar = function(n){
 //   return n % 2 === 0;
//}  
const esPar2 = function(n){
    return n % 2 === 0;
}
//ARROW FUNCTION EXPRESSION:
const esPar3 = function(n){
    return n % 2 === 0;
}
//ARROW FUNCTION EXPRESSION con RETURN IMPLICITO:
const esPar4 = (n) => n % 2 === 0;


//3)ARRAY CALLBACKS METHODS - son metodos que tienen los Arrays que esperan callback como ARGUMENTOS
console.log('\n')
console.log('-----ForEach-----')   //correr la     consola = console
//FOREACH:
let numeros = [1,2,3,4,5,6,7,8,9,10];

//hay 2 formas de llamarlo:
//numeros.forEach(() => {})    //seria una ARRow function anonima
// o se puee hacer asi:
//numeros.forEach(function () {})  
// o bien:
//function imprimirNumeros(n) {  //seria una funcion nombrada
//    console.log(n)
//}


//numeros.forEach(imprimirNumeros)
//numeros.forEach((value, idx) => {         // idx = index
//  console.log(value, idx);
//}); 

//la manera mas engorrosa e hacer lo mismo:
//for (let index = 0; index < numeros.length; index++) {
//    console.log(numeros[index]);
//}

// Y OTRA MANERA tambien engorrosa e hacer lo mismo:
//for (const num of numeros) {
//    console.log(num);
//}

//4)NUMEROS PARES:
//numeros.forEach((value) => {         
 //   if (value % 2 === 0) {
 //       console.log(value);
 //   }
//}); 

//5:
const ARRAY_DE_ALUMNOS = [
    {
        nombre: 'Lorenzo',
        apellio: 'Lopez',
        materias: ['Algebra','Analisis Matematico'],
        tel: {
            cel: 1111111,
            casa: 21212121,
        },
        recursa: false,
     },
     {
        nombre: 'Mabel',
        apellio: 'Gutierrez',
        materias: ['Algebra','Analisis Matematico'],
        tel: {
            cel: 1111111,
            casa: 21212121,
        },
        recursa: false,
     },
     {
        nombre: 'Nico',
        apellio: 'Roel',
        materias: ['Algebra','Analisis Matematico'],
        tel: {
            cel: 1111111,
            casa: 21212121,
        },
        recursa: true,
     },
     {
        nombre: 'Luis',
        apellio: 'Gs',
        materias: ['Algebra','Analisis Matematico'],
        tel: {
            cel: 1111111,
            casa: 21212121,
        },
        recursa: false,
     },
     {
        nombre: 'Chino',
        apellio: 'Lopez',
        materias: ['Algebra','Analisis Matematico'],
        tel: {
            cel: 1111111,
            casa: 21212121,
        },
        recursa: true,
    },
];
ARRAY_DE_ALUMNOS.forEach((obj)  => {
    let textoRecursa = obj.recursa 
     ? `Recursa materias - Llamar ${obj.tel.casa}` 
     : 'No recursa materias';
   
    console.log(`El alumno: ${obj.nombre} ${obj.apellio} ${textoRecursa} \n`);
 })



// 6) 2º METODO :
console.log('\n')
console.log('-----MAP-----');   // MAP = MAPEO  (a dif del forEach el MAP crea un N U E V O  ARRAY)

//MAP - Crea un nuevo Array con el resultado de la operaciones definidas en el CALLBACK

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let dobles = numeros2.map((n) => {
    return n * 2;
});
console.log('[numero2]: ' + numeros2);
console.log('[dobles]: ' + dobles);


// 7:
let numObj = numeros2.map((n) => {
    return {
        numero: n,
        esPar: n % 2 === 0,
    };
});
console.log(numObj);

// 8:
let nombresAlumnos = ARRAY_DE_ALUMNOS.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellio}`;
});

console.log(nombresAlumnos);



console.log('\n')
console.log('-----FIND-----'); 
//FIND  no devuelve un array sino que devuelve un value (valor)
// Devuelve el 1ER valor que encuentra que satisface la logica que le pasamos en el callback
let books = [
    'El Hobbit', 
    'Narnia', 
    'Harry Potter',
    'El señor e los Anillos',
    'Yo Robot',
];

let book = books.find((book) => {
    return book.includes('Hobbit');
});
console.log(book);

//10) REAL USO PARA   F I N D   // y en vez de pasar un array de string, le vamos a pasar un array  de objetos
let books2 = [
    {
        id:123,
        titulo: 'El Hobbit'
    },
    {
        id:1234,
        titulo:'Narnia'
    },
    {
        id:12345,
        titulo:'Harry Potter'
    },
    {
        id:123456,
        titulo:'El señor e los Anillos'
    },
    {
        id:1234567,
        titulo:'Yo Robot'
    },
];
//seguimos en el punto 10: SUPON que este valor lo obtenemos e un INPUT el usuario
let idBook = 123456;
let book2 = books2.find((book) => {
    return book.id === idBook;
});
console.log(book2);




console.log('\n')
console.log('-----FILTER-----'); 
//11) F I L T E R                           (1:27 horas)
//Filter: devuelve un nuevo array (NO MUTA) con el/los elementos que cumplan con la logica que pasamos en el callback.
let books3 = [
    {
        id: 123,
        title: 'El Hobbit',
        author: 'J.R.R Tolkien',
        genres: ['ciencia ficción','aventura'],
    },
    {
        id: 1234,
        title: 'Narnia',
        author: 'C.S Lewis',
        genres: ['ciencia ficción','aventura'],
    },
    {
        id: 12345,
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        genres: ['ciencia ficción','aventura'],
    },
    {
        id: 123456,
        title: 'El señor e los anillos',
        author: 'J.R.R Tolkien',
        genres: ['aventura'],   //GENERO = es un objeto que tiene una propiedad adentro (que es un Array). 
    },
    {
        id: 1234567,
        title: 'Yo Robot',
        author: 'Isaac Asimov',
        genres: ['ciencia ficción','aventura'],
    },
    {
        id: 12345678,
        title: 'El último teorema e Fermat',
        author: 'Simon Singh',
        genres: ['ciencia','matemáticas'],
    },
    {
        id: 123456789,
        title: 'La puerta equivocada',
        author: 'AdRIAN Paenza',
        genres: ['ciencia','matemáticas'],
    },
    {
        id: 12345678910,
        title: 'Hisotoria el Tiempo',
        author: 'Stephen Hawking',
        genres: ['ciencia','física'],
    },
];
//SUPON que este valor lo obtenemos e un input el usuario. (seguimos con el punto 11)
let autor = 'J.R.R Tolkien';
//let genero = 'ciencia';

let librosFiltrados = books3.filter((book) => {
    let cond1 = book.author === autor;  // TRUE - lo mete en el nuevo ARRAY             //cond = condición
    let cond2 = book.genres.includes('ciencia ficción'); //TRUE – si existe /false si no hay ningún valor que coincida      (GENEROS: ES UN ARRAY)
    return cond1 && cond2;              // trauccion: si las 2 condiciones son reales, devolvemelo. (& = y ... si cumple la conucion 1 y la conicion 2 = true)
});

//12)Nueva Función: getBooks
const getBooks = (propiedad, valor, arr) => {        //arr = array    y va a ser el PARÁMETRO
    if(propiedad !== 'genres') {                     //traucción: si(if) filtro es distinto(!) de generos(genres), retorname.... 
       return arr.filter((book) => {               //.....y haceme el filtro de éste array(arr)
           return obj[propiedad] === valor;          //Retornar un objeto (obj) que tenga la propiedad FILTRO que sea IGUAL IGUAL(==) a VALOR
        });
    }
    return arr.filter((book) => {                  //ahora bien, si es un GENERO hago ésta estrucutura
      return book[propiedad].includes(valor);
      //traduccion: book [genres o generos].includes(ciencia ficcion)
    });
};
let searchBooks = getBooks('genres', '', books3);

console.log('[librosFiltrados]', librosFiltrados);
console.log('\n'); 

if (searchBooks.length === 0){
    console.log('[searchBooks]', 'No hay resultados para tu busqueda');
} else {
  console.log('[searchBooks]', searchBooks);
}


//13) SOME AND EVERY                           (2:04 horas)
// Every: devuelve TRUE si TODdOS cumplen la condición del callback.
// Some: devuelve TRUE si al menos 1 cumplen la condición del callback.
console.log('\n');
console.log('-----SOME AND EVERY-----'); 

let arrayNums = [1, 3, 5, , 9, 8];
console.log(arrayNums.every((n) => n % 2 === 1)); //si toos son IMPARES, entonces devolveme TRUE)

console.log(arrayNums.some((n) => n % 2 === 0));  //con que 1 se cumpla, entonces devolveme TRUE)



console.log('\n');
console.log('-----SOME AND EVERY-----'); 
//14) ---- SORT---- : convierte en STRING. y ordena de menor a mayor   2:13
//es mejor no usar numeros . Y si se hace hay que pasarle una FUNCION.

let arrayNums2 = [11.99, 77.88, 8, 1, 99.99, 9];

console.log(arrayNums2.sort()); // cuando usas numeros, hay que usar la Fx de abajo
console.log(arrayNums2.sort((a, b) => a - b)); //ORDEN ASCENDENTE//se agrega una Funcion/Parametro
console.log(arrayNums2.sort((a, b) => b - a)); //ORDEN DESCENDENTE
// si la resta (a - b) me devuelve => un numero negativo (-n) entonces ordena A antes que B.
// caso contrario: si la resta (a - b) me devuelve => un numero positivo (+n) entonces ordena B antes que A.


console.log('\n');
console.log('-----REDUCE-----');

//15) Reduce: toma los valores de un ARRAY y lo reduce a 1 solo valor: (2:16 horas)
let arrayNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado = arrayNum3.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

//console.log(resultado);
console.log('[Reduce arrayNum3]: ', resultado);
console.log('\n');
let numObj2 = [
  { value: 10 },
  { value: 10 },
  { value: 10 },
  { value: 10 },
  { value: 10 },
]
let resultado2 = numObj2.reduce((acumulador, valorActual) => {
    return acumulador + valorActual.value;
}, 0);

let resultado3 = numObj2.reduce((acumulador, valorActual) => {
    return { value: acumulador.value + valorActual.value };
});

let resultado4 = numObj2.reduce((acumulador, valorActual) => {
    acumulador['value'] = acumulador.value + valorActual.value;
    return acumulador;
 }, 
 {value: 0}
);



console.log('[Reduce numObj]: ', resultado2);
console.log('\n');

console.log('[Reduce numObj v2]: ', resultado3);
console.log('\n');

console.log('[Reduce numObj v3]: ', resultado4);
console.log('\n');
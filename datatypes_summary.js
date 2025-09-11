// primitive

// 7 types :string, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 102.90;

const IsLoggedIn = false;
const variable = null;
let userEmail; //undefined

const id = Symbol('145')
const anotherId = Symbol('145')

console.log(id === anotherId);
let bigNumber = 12223433232n
console.log(typeof(bigNumber));
// reference( Non-Primitive)

// Array, Objects, Functions

const name =["Aniket","viki","Shantanu"];

let obj={
    name:"Aniket",
    age:"21",
    city:"pune"
}

function fun1()
{
    console.log("Hello World!");
}
fun1();

console.log(typeof id)
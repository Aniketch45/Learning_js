//array

const myarr= [0,1,2,3,4,5];

// console.log(myarr[4]);

// console.log(myarr[2])

// myarr.push(9);
// console.log(myarr);

// myarr.pop()
// console.log(myarr);

// myarr.unshift(3);
// console.log(myarr);

// myarr.shift();
// console.log(myarr)


const myarr1=myarr.slice(1,3);
// console.log(myarr1);

// console.log("A ",myarr)

const myarr2=myarr.splice(1,3);
// console.log(myarr2);

// console.log("B ",myarr)

//slice excludes last range element and the base array remains same.

//splice includes last element range and manipulate base array.


const heros=["Ajay","Solman","Sherukh","Akshay"]

const newHeors=["Rutvik","Shikhar","Varun"]

// console.log(heros.push(newHeors))
// console.log(heros)

const allHeros=heros.concat(newHeors);
// console.log(allHeros);

const bollywoodHeros=[...heros, ...newHeors]; //intresting spread (glass drop and spread)
// console.log(bollywoodHeros)

const num_Array=[1,2,3,4,[5,6,7],23,[6.7,8,5,[34,65],345,6]];

// console.log(num_Array)

const real_Array=num_Array.flat(Infinity);
//  console.log(real_Array)

console.log(Array.isArray("Aniket"));
console.log(Array.from("Aniket"));
console.log(Array.from({name:"Aniket"})); //intresting

let score=100;
let score1=200;
let score2=300;

console.log(Array.of(score,score1,score2))
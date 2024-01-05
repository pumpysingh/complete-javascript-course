/*
 let js = "Amazing";
if (js === "Amazing") {
  console.log("JAVASCRIPT IS FUN!!");
  console.log(6 + 8);
  console.log("Apple");
  let b = "box";
  console.log(b);
  let job1 = "teacher";
  let job2 = "developer";
  console.log(job1);
  console.log(job2);
}
*/
// let funwithjs = true;
// console.log(funwithjs);
// console.log(typeof true);
// console.log(typeof funwithjs);
// console.log(typeof 23);
// console.log(typeof "pumpy");

// funwithjs = "YES";
// console.log(typeof funwithjs);
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1995;
// console.log(typeof year);
// console.log(typeof null);
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// var job = "programmer";
// job = "teacher";

// lastname = "Singh";
// console.log(lastname);

const currentAge = 2037;
const ageJonas = currentAge - 1991;
const ageSarah = currentAge - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// exponential operator '**'
// means 2 to the power of 3=2*2*2

const firstName = "Pumpy";
const secondName = "Singh";
console.log(firstName + " " + secondName);

//Assignment operators
// let x = 10 + 5;
// x += 10; //15=10=25
// x *= 4; //25*4=100
// x++; //100+1=101
// x--; // 101-1=100
// console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
if (ageJonas < ageSarah) console.log(true);
else console.log(false);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(ageJonas > ageSarah);

let x, y;
x = y = 25 - 10 - 5; //x=y=10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageJonas, averageAge);

const name = "Pumpy";
const job = "teacher";
const age = 29;
const pumpy = " I'm " + name + ", age " + age + " , profession " + job + "!";
console.log(pumpy);

const pumpyNew = `I'm ${name}, age ${age}, profession ${job}`;
console.log(pumpyNew);

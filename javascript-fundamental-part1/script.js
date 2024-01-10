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

//type conversion
const year = 1995;
console.log(year);
console.log(Number("jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log("I m " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
let n = "1" + 1;
n = n - 1;
console.log(n);

// truthy & falsy values(in javascript we have 5 falsy values(0,' ', null, undefined,NanN))

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));

// check person has money or not
const money = 0;
if (money) {
  console.log("if you have money don't spend it!!");
} else {
  console.log("if you have money spend it!!");
}

let height;
if (height) {
  console.log("Height is defined!");
} else {
  console.log("Height is undefined!");
}

const a = 18;
if (a === 18) {
  console.log("you just became an adult");
} else {
  console.log("you are not adult");
}

let fav = Number(prompt("what's your fav number"));
console.log(fav);
console.log(typeof fav);

if (fav === 5) {
  console.log("5 is my favrouite number");
} else if (fav === 7) {
  console.log("7 is also my fav number");
} else if (fav === 9) {
  console.log("9 is also my fav number");
} else {
  console.log("number is not 5 or 7 or 9");
}

if (fav !== 5) {
  console.log("why not 5");
}

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("sarah is able to drive!!");
} else {
  console.log("sarah is not able to drived!!");
}

// in other way
const shouldDSrive = hasDriversLicense && hasGoodVision;
if (shouldDSrive) console.log("Sarah is able to drive ");
else console.log("Sarah is able to drive ");

let weekDays = "",
  num = Number(prompt("enter your week days number in between 1 to 7"));

switch (num) {
  case 1:
    weekDays = "Monday";
    console.log(weekDays);
    break;
  case 2:
    weekDays = "Tuesday";
    console.log(weekDays);
    break;
  case 3:
    weekDays = "Wednesday";
    console.log(weekDays);
    break;
  case 4:
    weekDays = "Thursday";
    console.log(weekDays);
    break;
  case 5:
    weekDays = "Friday";
    console.log(weekDays);
    break;
  case 6:
    weekDays = "Saturday";
    console.log(weekDays);
    break;
  case 7:
    weekDays = "Sunday";
    console.log(weekDays);
    break;
  default:
    console.log("Not a valid week days");
}

3 + 4;
const ag = 1995;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Pumpy";
console.log(`I'm ${ag} years old ${me}`);

let ages = 25;
let res =
  ages >= 18
    ? console.log("I'm adult🧑 now i can drink wine🍷 ")
    : console.log("I'm not adult🧑 now i can drink wine🍷");

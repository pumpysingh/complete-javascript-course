//Question 1
let markHeight = 1.69,
  johnHeight = 1.95,
  markMass = 78,
  johnMass = 92;
let markBMI = 0;
markBMI = 78 / 1.69 ** 2;
console.log(markBMI);

let johnBMI = 0;
johnBMI = 92 / 1.95 ** 2;
console.log(johnBMI);
if (markBMI > johnBMI) {
  console.log(true);
} else {
  console.log(false);
}
if (markBMI < johnBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is lesser than Mark");
}

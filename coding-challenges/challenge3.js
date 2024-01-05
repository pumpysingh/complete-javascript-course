let bill1 = 275,
  bill2 = 40,
  bill3 = 430;

let tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
let tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
let tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

let totalbill1 = bill1 + tip1;
let totalbill2 = bill2 + tip2;
let totalbill3 = bill3 + tip3;

console.log(tip1, tip2, tip3);
console.log(totalbill1, totalbill2, totalbill3);

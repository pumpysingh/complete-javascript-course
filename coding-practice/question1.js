// add two numbers

const add = (a, b) => {
  console.log(a + b);
  return a + b;
};
add(8, 9);

//maximum & minimum number in an array
let arr = [9, 6, 5, 8, 2],
  max = arr[0],
  min = arr[0];
const maxMinOfArray = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      console.log("max", max);
    } else if (arr[i] < min) {
      min = arr[i];
      console.log("min", min);
    } else {
      console.log("not found");
    }
  }
};
maxMinOfArray();

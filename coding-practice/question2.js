// check number is palindrome or not
let n = Number(prompt("enter number of your choice"));
const palindromeNumber = () => {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log("number is palindrome.");
    } else {
      console.log("number is not palindrome.");
    }
  }
};
palindromeNumber();

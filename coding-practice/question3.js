// reverse the given string

// using reverse & split & join
const reverseString = (str1) => {
  let newStr1 = str1.split("").reverse(str1).join("");
  console.log(newStr1);
};
reverseString("ravi");

//using split & reduce
const reverseString2 = (str2) => {
  let newStr2 = str2.split("").reduce((accu, char) => char + accu, "");
  console.log(newStr2);
};
reverseString2("pumpy");

//using spread operator
const reverseString3 = (str3) => {
  const newStr3 = [...str3].reverse(str3).join("");
  console.log(newStr3);
};
reverseString3("vidya");

//using array.form() and reverse()
const reverseString4 = (str4) => {
  const newStr4 = Array.from(str4).reverse(str4).join("");
  console.log(newStr4);
};
reverseString4("adwait");

//using spread operator and reduce
const reverseString5 = (str5) => {
  const newStr5 = [...str5].reduce((accu, char) => {
    return accu + char;
  });
  console.log(newStr5);
};
reverseString5("aadya");

//using  for loop
const reverseString6 = (str6) => {
  let newStr6 = "";
  for (let i = str6.length - 1; i >= 0; i--) {
    newStr6 = newStr6 + str6[i];
    console.log(newStr6);
  }
};
reverseString6("ashika");

//using recursion
const reverseString7 = (str7) => {
  if (str7 === "") {
    return "";
  } else {
    const newStr7 = reverseString7(str7.substr(1)) + str7.charAt(0);
    return newStr7;
  }
};
const r = reverseString7("aditya");
console.log(r);

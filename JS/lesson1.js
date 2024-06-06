const str = "abcde";
// console.log(str[0] === 'a');
// if (str[0] === "a") {
//     console.log('Так');
// } else {
//     console.log('Ні');
// }
str.startsWith("a") ? console.log("Так") : console.log("Ні");

// const value = 15;
// if (value >= 65 && value <=99) {
//     console.log('Так')
// } else {
//     console.log("Ні")
// }
const number = 15;
if (number >= 0 && number <= 18) {
  console.log();
} else {
  console.log("Ні, не входить в діапазон");
}
function minNumber(a, b, c, d, e) {
  return Math.min(a, b, c, d, e);
}
console.log(minNumber(1, 55, 212, 534, 0));
const password = prompt('Enter you password')
function checkPassword(value) {
    const userPassword = "admin";
    return value === userPassword;
}
console.log(checkPassword(password));

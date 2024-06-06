// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[0]);
// console.log(planets[1]);
// console.log(planets[2]);
// if (planets.length >= 3) {
//   console.log("3 or more elements");
// } else {
//   console.log("3 or less elements");
// }
// const planet = ["Earth", "Mars", "Venus", "Uranus"];
// planet[0] = "Neptune";
// console.log(planet);
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits.length);
// function getExtremeElements(array) {
//   if (array.length === 0) {
//     return [];
//   }
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a);
// console.log(b);
// a[1] = "Jacob";
// console.log(a);
// console.log(b);
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2);
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const result = arr1 === arr2;
// const array = [1, true, "Poly"];
// console.log(String(array));
// console.log(array + "5");
// const number = ["1", "42", 64];
// console.log(Number.number + 1);
// console.log(Number.number);
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// console.log(Boolean(emptyArray));
// console.log(Boolean(nonEmptyArray));
// if (emptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }
// if (nonEmptyArray) {
//   console.log("if is in performed");
// } else {
//   console.log("else is not performed");
// }
// const array = [false];
// const result = array ? "A" : "B";
// console.log(result);
// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join(""));
// const fail = [1, 4, 5, 33, 444];
// console.log(fail.join());
// console.log(words.join(" "));
// console.log(words.join("-"));
// function transformString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }
// console.log(transformString("user_age"));
// console.log(transformString("prise_per_droid"));
// function getLength(array) {
//   // Об'єднуємо всі елементи масиву у один рядок
//   const concatenatedString = array.join("");

//   // Повертаємо довжину отриманого рядка
//   return concatenatedString.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // Виведе 22
// console.log(getLength(["M", "a", "n", "g", "o"])); // Виведе 5
// console.log(getLength(["top", "picks", "for", "you"])); // Виведе 14
// const name = "Mango";
// const letters = name.split("");
// console.log(letters);
// const massage = "JavaScript essentials";
// const words = massage.split("");
// console.log(words);
// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts);
// function calculateEngravingPrice(message, pricePerWord) {
//   // Розділяємо рядок на масив слів за пробілами
//   const words = message.split(" ");

//   // Підраховуємо кількість слів у рядку
//   const wordCount = words.length;

//   // Обчислюємо загальну вартість гравірування
//   const totalPrice = wordCount * pricePerWord;

//   // Повертаємо загальну вартість
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // Поверне 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // Поверне 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // Поверне 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // Поверне 80
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2));
// console.log(planets.slice(1, 4));
// console.log(
//   "створює новий масив, що містить елементи з індексами від 0 до 2 (не включаючи 2 або) вихідного масиву "
// );
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);
// console.log(result);
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly"));
// console.log(clients.indexOf('Monkong'));
// function getSlice(array, value) {
//     // Шукаємо індекс елемента зі значенням value в масиві array
//     const index = array.indexOf(value);

//     // Якщо індекс дорівнює -1 (тобто елемент зі значенням value не знайдено),
//     // повертаємо порожній масив
//     if (index === -1) {
//         return [];
//     }

//     // Якщо елемент зі значенням value знайдено,
//     // повертаємо підмасив, що починається з початку array і до знайденого елемента включно
//     return array.slice(0, index + 1);
// }

// // Приклади використання функції getSlice
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // []
// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// console.log(planets);
// planets.push("Saturn", "Neptune");
// console.log(planets);
// const tags = [];
// for (let i = 0; i < 10; i += 1) {
//   tags.push(`tag-${i}`);
// }
// console.log(tags);
// function createArrayOfNumbers(min, max) {
//   const arrayOfNumbers = [];
//   for (let i = min; i <= max; i++) {
//     arrayOfNumbers.push(i);
//   }
//   return arrayOfNumbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let index = 0; index < order.length; index++) {
//     total += order[index];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());
// function getEvenNumbers(start, end) {
//   const allEvenNumbers = [];
//   for (let index = start; index <= end; index++) {
//     if (index % 2 === 0) {
//       allEvenNumbers.push(index);
//     }
//   }
//   return allEvenNumbers;
// }

// // Приклади використання функції:
// console.log(getEvenNumbers(2, 5));  // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8));  // [8]
// console.log(getEvenNumbers(7, 7));  // []
// console.log(getEvenNumbers());       // []
// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.includes("Mars"));
// const fruits = ["apple", "banana", "orange"];
// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }
// function checkStorage(storage, item) {
//   const itemLow = item.toLowerCase();
//   if (storage.includes(itemLow)) {
//     return `${itemLow} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));   // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));   // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));   // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));   // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")); // "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")); // "Sorry! We are out of stock!"
// function getCommonElements(array1, array2) {
// //   const number = array1.includes[(1, 2, 3)];
//   for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//   }
// }
// console.log(getCommonElements(array1, array2));

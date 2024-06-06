// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
// multiply(2, 4, 7);

// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // Повертає 4
// console.log(getOrderQuantity(["apple", "banana"])); // Повертає 2
// console.log(getOrderQuantity(["apple", "banana", "pear"])); // Повертає 3
// console.log(getOrderQuantity([])); // Повертає 0

// const planets = ["earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]);
// function getLastElementMeta(array) {
//   // Отримуємо індекс останнього елементу
//   const lastIndex = array.length - 1;
//   // Отримуємо значення останнього елементу
//   const lastElement = array[lastIndex];
//   // Повертаємо новий масив з двома елементами
//   return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // Повертає [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"])); // Повертає [2, "pear"]
// console.log(getLastElementMeta(["apple", "peach"])); // Повертає [1, "peach"]
// console.log(getLastElementMeta(["apple"])); // Повертає [0, "apple"]

// function fna(order) {
//   const userName = prompt("Enter your name");
//   const age = prompt("Enter your age");
//   if (age >= 18) {
//     console.log(`Hello ${userName} your age ${age}`);
//   } else {
//     console.log("Your little");
//   }

//   return fna;
// }
// // fna();
// function products(x, y, z) {
//   const productName = ["Loptop", "Komputer", "Mobile", "Switch"];
//   const index = prompt();
//   if (index.includes( "Komputer",)) {
//     console.log("Enter your products");
//   } else {
//     console.log("Excucmy");
//   }
// }
// products();
function getCommonElements(array1, array2) {
  let commonElements = []; // Створюємо порожній масив для зберігання спільних елементів

  // Цикл для перевірки кожного елемента з першого масиву
  for (let i = 0; i < array1.length; i++) {
    // Перевіряємо, чи поточний елемент існує в другому масиві
    if (array2.includes(array1[i])) {
      // Якщо елемент є спільним, додаємо його до масиву спільних елементів
      commonElements.push(array1[i]);
    }
  }

  return commonElements; // Повертаємо масив спільних елементів
}

// Приклади використання функції:
console.log(getCommonElements([1, 2, 3], [2, 4])); // Виведе: [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // Виведе: [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // Виведе: [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // Виведе: [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // Виведе: []
const family = ["Andriy", "Nastya", "Maksym", "Nina", "Olga"];
console.log(family.length);
const numberZero = ["JavaScript", "awesome", "is"].join(" "); // Робить пробіл залежить що в дужках //
console.log(numberZero);
const numberOne = [8, 5, 3, 9, 3].indexOf(3);
console.log(numberOne); // Дивиться в масиві чи є таке значення і повертає його індекс//
const numberTwo = [8, 5, 3, 9, 3].slice(3);
console.log(numberTwo); //Робить відрізок по значинню в масиві//
const numberThree = [2, 4, 6].concat([1, 3], [5]);
console.log(numberThree); //Робить Конкотинацію//
const numberFour = [3, 5, 12, 7, 4].includes(8);
console.log(numberFour); // Повертає True або False //

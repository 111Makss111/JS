// 1. Отримати і вивести всі імена користувачів
// Умови:
// Є масив користувачів у форматі JSON. Потрібно вивести в консоль усі імена.

// Назва функції:

// const jsonData = '["Anastasiia", "Maksym", "Nina", "Olia"]';
// function printUserNames(strJson) {
//   const arr = JSON.parse(strJson);
//   arr.forEach((arr) => console.log(arr));
// }

// console.log(printUserNames(jsonData));

// 2. Порахувати кількість користувачів
// Умови:
// Порахуй кількість елементів у масиві користувачів і виведи це число у консоль.

// Назва функції:

// const jsonData = '["Anastasiia", "Maksym", "Nina", "Olia"]';
// function countUsers(strJson) {
//   const getResult = JSON.parse(strJson);
//   console.log(getResult.length);
// }

// countUsers(jsonData);

// 3. Вивести імена користувачів, яким більше 18 років
// Умови:
// Потрібно перевірити вік кожного користувача і вивести в консоль імена лише тих, кому більше 18.

// Назва функції:
// const jsonData = `[
//   { "name": "Anastasiia", "age": 22 },
//   { "name": "Maksym", "age": 17 },
//   { "name": "Nina", "age": 30 },
//   { "name": "Olia", "age": 15 }
// ]`;
// function printAdultUsers(user) {
//   const result = [];
//   const strJson = JSON.parse(user);
//   for (const user of strJson) {
//     if (user.age >= 18) {
//       result.push(user.name);
//     }
//   }
//   return result;
// }
// console.log(printAdultUsers(jsonData));

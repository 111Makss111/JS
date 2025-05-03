// 3 Задача на об'єкти і цикли: Створіть об'єкт, який містить список продуктів у магазині(назва, ціна).
//  Напишіть функцію, яка виведе назву та ціну кожного продукту.

// const products = {
//   phone: { name: "Samsung", price: 2210 },
//   laptop: { name: "Asus", price: 4300 },
//   headphones: { name: "Sony", price: 850 },
// };

// function getProducts(item) {
//   for (const i in item) {
//     const product = item[i];
//     console.log(`${product.name}--- ${product.price}`);
//   }
// }
// console.log(getProducts(products));

// 1 Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.

// Оголошена функція checkAge(age)
// Виклик checkAge(20) повертає рядок "You are an adult"
// Виклик checkAge(17) повертає undefined
// Виклик checkAge(10) повертає undefined
// Виклик checkAge(30) повертає рядок "You are an adult"
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function checkAge(age) {
//   return age >= 18 ? "You are an adult" : undefined;
// }
// console.log(checkAge(20));
// console.log(checkAge(17));

// 6. Завдання: Замінити всі входження слова в рядку
// Назва функції: replaceWord
// Назва змінної: fullText

// Умова:
// Напиши функцію, яка замінює всі входження певного слова на інше.
// Використай метод replaceAll.

// Приклад виклику:

// javascript
// Копировать
// Редактировать
// replaceWord('Я люблю JS. JS дуже крутий!', 'JS', 'JavaScript');
// "Я люблю JavaScript. JavaScript дуже крутий!"
// const fullText = "Я люблю JS. JS дуже крутий!";
// function replaceWord(str, replace, full) {
//   return str.replaceAll(replace, full);
// }
// console.log(replaceWord("Я люблю JS. JS дуже крутий!", "JS", "JavaScript"));
// Задача 1 – Простий виклик функції
// Створи функцію showName, яка повертає this.name. Виклич її у глобальному контексті та в об'єкті.

// const users = {
//   name: "Maksym",
//   age: 29,
//   showName() {
//     return console.log(this.name);
//   },
// };

// users.showName();

// Задача 2 – Метод об'єкта
// Створи об'єкт user з полем name і методом greet,
//  який повертає привітання з ім'ям, використовуючи this.name.
// const userName = {
//   name: "Maksym",
//   age: 29,
//   greet() {
//     return console.log(`My name ${this.name} and I am ${this.age} years   `);
//   },
// };
// userName.greet();

// Задача 4 – Використання call
// Є функція sayHello, яка повертає
// "Hello, my name is" + this.name.Використай call, щоб задати значення this.
// const userName = {
//   name: "Maksym",
//   age: 29,
// };

// function sayHello() {
//   return `Hello, my name is ${this.name}`;
// }
// console.log(sayHello.call(userName));

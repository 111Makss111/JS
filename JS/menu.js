`use strict`;
// const number = 23 % 2;
// console.log(number);
// let result = "Some phrase";
// result = 10;
// console.log(result);
// const b = 9;
// const sum = b + 1;
// function fon() {
//   const question = prompt("Enter your Emeil");
//   console.log(question);
//   return question;
// }
// fon();
// let num;
// console.log(num);
// num = "7";
// console.log(num, typeof num);
// function masteryFunc(arr) {
//   return arr.reduce((acc, val) => acc + val, 0);
// }
// const res = masteryFunc([1, 2, 3]);
// console.log(res);

// Number.parseInt("25.7px");
// function fn_1() {
//   const value = 5;
//   const userName = "Maksym";
//   return value;
// }
// console.log(fn_1);
// const sum = "JavaScript";
// console.log(sum.length);
// console.log("2" >= "12");
// const userName = "Jacob";
// console.log(Number(userName));
// let elementWidth = "50px";
// console.log(elementWidth, Number.parseInt(elementWidth));
// let elementHeight = "203.74px";
// console.log(elementHeight, Number.parseFloat(elementHeight));
// let value = Math.floor(27.9);

// console.log(value);
// function multiply(number_1, number_2) {
//   const result = number_1 * number_2;
//   console.log(result);
// }
// multiply(19,412);
// function fnA() {
//   console.log("Inside fnA");
//   return function fnB() {
//     console.log("===> Inside fnB <===");
//   };
// }
// console.log("before fnA execution");
// const fnB = fnA();
// console.log("After fnA execution");
// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");
// function calcBMI(width, height) {
//   const comaToDotWidth = width.replace(",", " .");
//   const comaToDoHeight = height.replace(",", ".");
//   console.log(comaToDoHeight);
//   console.log(comaToDotWidth);
//   const number = Number(comaToDoHeight);
//   console.log(number);
//   const num = Number(comaToDotWidth);
//   console.log(num);
//   const result = comaToDotWidth / comaToDoHeight ** 2;
//   console.log(result.toFixed(1));
// }
// const bmi = calcBMI("81.3", "1.75");
// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   const result = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   return result;
// }
// makeTransaction();
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   const result = `Shipping to ${country} will cost ${totalPrice} credits`;
//   return result;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
// function getElementWidth({ content, padding, border }) {
//   return (
//     Number.parseFloat(content) +
//     Number.parseFloat(padding) * 2 +
//     Number.parseFloat(border) * 2
//   );
// }

// console.log(
//   getElementWidth({ content: "50px", padding: "8px", border: "4px" })
// );
// console.log(
//   getElementWidth({ content: "60px", padding: "12px", border: "8.5px" })
// );
// console.log(
//   getElementWidth({ content: "200px", padding: "0px", border: "0px" })
// );
// let prise = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//   prise = 100;
// }
// console.log(prise);
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }
// console.log(checkAge(20));
// console.log(checkAge(18));
// console.log(checkAge(10));
// console.log(checkAge(30));
// const grade = 69;
// if (grade >= 70) {
//     console.log("Satisfaction");
// } else {
//     console.log("Unsatisfactorily");
// }
// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }

// // Приклади викликів функції:
// console.log(checkStorage(100, 50)); // Поверне "Order is processed, our manager will contact you"
// console.log(checkStorage(100, 130)); // Поверне "Not enough goods in stock!"
// console.log(checkStorage(200, 20)); // Поверне "Order is processed, our manager will contact you"
// console.log(checkStorage(200, 150)); // Поверне "Order is processed, our manager will contact you"
// console.log(checkStorage(150, 180)); // Поверне "Not enough goods in stock!"

// if (condition_1) {
// } else if (condition_2) {
// } else if (condition_3) {
// } else {
// }
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 30));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));
// let type;
// const age = 20;
// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
// console.log(type);
// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);

// Використовуючи тернарний оператор
// const a = 5;
// const b = 10;
// let biggerNumber;
// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }
// console.log(biggerNumber);
// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber);
// Використовуючи тернарний оператор
// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     const result = password === correctPassword ? 'Access granted' : "Access denied, wrong password!";
//     return result;

// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));
// const fruit = "banana";
// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }
// const day = 3;
// const day_1 = 7;
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("this is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
// }
// function getSubscriptionPrice(type) {
//   let prise;
//   switch (type) {
//     case "starter":
//       prise = 0;
//       break;
//     case "professional":
//       prise = 20;
//       break;
//     case "organization":
//       prise = 50;
//       break;
//     default:
//       prise = "Invalid subscription type";
//   }
//   return prise;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));
// console.log(getSubscriptionPrice("premium"));
// const globalWar = "Global";
// console.log(globalWar);
// if (true) {
//   const aVar = "A";
//   console.log(aVar);
//   if (true) {
//     const bVar = "B";
//     console.log(globalWar);
//     console.log(aVar);
//     console.log(bVar);
//   }
// }
// if (true) {
//   const cVar = 'C';
//   console.log(globalVariable);
//   console.log(cVar);
// }
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// if (null) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }
// if (0) {
//   console.log("block if");
// } else {
//   console.log("block else");
// }
// if (5) {
//   console.log("Block if");
// } else {
//   console.log("block else");
// }
// console.log(Boolean(""));
// console.log(Boolean("Hello"));
// console.log(Boolean("False"));
// if ("batman") {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }
// console.log("hello" && 5);
// console.log(5 && "hello");
// console.log("mango" && "poly");
// console.log("poly" && "mango");
// console.log(3 && true);
// console.log(true && 3);
// console.log("hello" && 0);
// console.log(0 && "hello");
// console.log(3 && false);
// console.log(false && 3);
// console.log(0 && "");
// console.log("" && 0);
// const a = 20;
// console.log(a > 10 && a < 30);
// const b = 50;
// console.log(b > 10 && b < 30);
// console.log(b > 80 && b < 120);
// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;
// if (screenWidth <= sm) {
//   console.log("Mobile screen");
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log("Tablet screen");
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log("Desktop screen");
// } else {
//   console.log("Godzilla screen");
// }
// console.log(null && true);
// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   } else {
//     return false;
//   }
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);
// const a = 5;
// console.log(a < 10 || a > 30);
// const b = 50;
// console.log(b < 10 || b > 30);
// const c = 20;
// console.log(c - 20 || c * 2);
// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip") {
//     return true;
//   } else {
//     return false;
//   }
// }
// checkAccess("pro");
// checkAccess("starter");
// checkAccess("vip");
// checkAccess("free");
// const isBlocked = false;
// const canChat = !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat");
// }
// const isBlocked = true;
// const canChat = !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }
// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }
// const message = 'JavaScript is awesome';
// console.log(message.length);
// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // "Jaco"
// console.log(fullName.slice(3)); // "ob Mercer"
// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return (input.toUpperCase());
//   } else {
//     return (input.toLowerCase());
//   }
// }
// normalizeInput("This ISN'T SpaM", "lower");
// normalizeInput("This ISN'T SpaM", "upper");
// normalizeInput("Big SALE", "lower");
// normalizeInput("Big SALE", "upper");
// normalizeInput("Stay Awhile and Listen", "lower");
// normalizeInput("Stay Awhile and Listen", "upper");
// const username = "Jacob Mercer";
// console.log(username.includes('Jacob'));
// console.log(username.includes("Mario"));
// const message = "Please buy our stuff!";
// const hasSpam = message.includes('buy');
// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }
// function checkForName(fullName, firstName) {
//   const fullNameLower = fullName.toLowerCase();
//   const firstNameLower = firstName.toLowerCase();
//   return fullNameLower.includes(firstNameLower);
// }
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));
// const str = 'Hello World';
// console.log(str.startsWith("Hello"));
// console.log(str.startsWith("hello"));
// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }
// checkFileExtension("styles.css", ".css");
// checkFileExtension("styles.css", ".js");
// checkFileExtension("app.js", ".js");
// checkFileExtension("app.js", ".html");
// checkFileExtension("index.html", ".html");
// checkFileExtension("index.html", ".css");
// checkFileExtension("index.html", ".js");
// const message = "Welcome to Bahamas!";
// const index = message.indexOf('to');
// console.log(index);
// const input = " JavaScript is awesome!         ";
// const trimmedInput = input.trim();
// console.log(trimmedInput);
// console.log(input);
// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   const fullFileName = `${trimmedName}.${ext}`;
//   return fullFileName;
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));
// const userName = prompt("Enter your name");
// const userAge = prompt("Enter your age");
// function showMessage(name, age) {
//   return `Hello ${name}, your age is ${age}`;
// }
// console.log(showMessage(userName, userAge));
// ФУНКЦІЯ РЕЄСТРАЦІЇ ІМЕНІ І ВІКУ
// let count = 0;
// while (count < 10) {
//   console.log(`const: ${count}`);
//   count +=1;
// }

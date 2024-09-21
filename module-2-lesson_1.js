// 'use strict'

// const points = 500;

// if(points < 500){
//     console.log("level 1");    
// }  else if(points < 500){
//     console.log(  );
// }
// console.log(false && 5 && null);
// console.log(5 && null);

// function calculateNumber(min,max){
//     let sum = 0;
//     for(let i = min; i <= max; i++ ){
//         if(i % 2 === 0){
//             sum += 1;
//         }
//     }
//     return sum
// }
// console.log(calculateNumber(0,6));






/*Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда



Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.*/
/*




*/
// function makeTransaction(quantity,pricePerDroid){
//     const totalPrice = `You ordered ${quantity} droids worth ${pricePerDroid} credits!`
//     return totalPrice
// }

// console.log(makeTransaction(5, 3000)); 
// console.log(makeTransaction(3, 1000)); 
// console.log(makeTransaction(10, 500)); 



/*Виконуй це завдання у файлі task-2.js


Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару



Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



 */

// function getShippingMessage(country,price,deliveryFee){
//     const total = price + deliveryFee;
//  const totalPrice = `Shipping to ${country} will cost ${total} credits`;
//  return totalPrice;
// }
// console.log(getShippingMessage("Australia", 120 , 50)); 
// console.log(getShippingMessage("Germany", 80, 20)); 
// console.log(getShippingMessage("Sweden", 100, 20)); 


// function getElementWidth(content, padding, border) {
//     return Number.parseFloat(content) + 2 * (Number.parseFloat(padding) + Number.parseFloat(border));}

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// let price = 0;
// const subscription = "pro";
//     if(subscription === "pro"){
//         price = 100;
//     }
//     console.log(price);
    
// function checkAge(age){
//     if(age >= 18){
//       return "You are an adult"
//     }
    
//   }
//   console.log(checkAge(20));
//   console.log(checkAge(17));
//   console.log(checkAge(10));
//   console.log(checkAge(30));
  
//   const grade = 40;
//   if(grade >= 70){
//     console.log('Satisfactorily');
    
// } else {
//     console.log("Unsatisfactorily");
//   }
// function checkStorage(available, ordered) {
//     if(available <= ordered){
//       return 'Not enough goods in stock!'
//     }else{
//       return'Order is processed, our manager will contact you'
//     }
    
//   }
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//   console.log(checkStorage(150, 180));
// console.log(checkStorage(80, 80))
// console.log(checkStorage(150, 0))
// const apple = 90;
// if(apple < 70){
//     console.log("Perfectly");
// }else if(apple > 110){
//  console.log("Good");
// }else if(apple >= 700){
//     console.log("Satisfactorily");
// }else{
//     console.log("Unsatisfactorily");
    
// }

// function checkStorage(available, ordered) {
//     if(ordered === 0){
//         return "There are no products in the order!"
//     } else if(available < ordered){
//         return "Your order is too large, there are not enough items in stock!"
//     }else{
//         return "The order is accepted, our manager will contact you"
//     }
//     }
//     console.log(checkStorage(100, 50));
//     console.log(checkStorage(100, 130));
//     console.log(checkStorage(200, 20));
//     console.log(checkStorage(200, 150));
//     console.log(checkStorage(150, 180));
//   console.log(checkStorage(80, 80))
//   console.log(checkStorage(150, 0))


// const a = [5,10,100,7];
// const b = [5,11,100,7];
// let biggerNumber;
// if(a > b){
//     biggerNumber = a
// }else{
//     biggerNumber = b;
// }
// console.log(biggerNumber);

// const day = 7;
// switch(day){
//     case 1:
//         case 2:
//             case 3:
//                 console.log("It is of day");
//                 break;
//                 case 4:
//                     case 5:
//                         console.log("This is a working day");
//                         break;
//                         case 6:
//                             case 7:
//                                 console.log("It is a day of");
//                                 break;
//                                 default:
//                                     console.log("invalid");
                                    
                        
// }
function getSubscriptionPrice(type){
    switch (type) {
        case "starter":
            return  0;
        
        case "professional":
           return  20;
            
        case "organization":
            return  50;
            
        default:
           return  "Invalid subscription type!";
    }
}
console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization")); 
console.log(getSubscriptionPrice("starter"));
console.log(getSubscriptionPrice("random")); 
console.log(getSubscriptionPrice("premium"));
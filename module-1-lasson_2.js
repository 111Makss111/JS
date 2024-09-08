console.log (2 * '5') ;
let width = '12px';
width = Number.parseInt(width)
console.log(width);
//
let height = '12.5';

height = Number.parseFloat(height)
console.log(height);
const value = 12.1;
console.log(Math.floor(value));// округлення до меншого числа 
console.log(Math.ceil(value)); // округлення до більшого числа
console.log(Math.round(value)); // округлення до цілого числа

function add (x,y){
    const dayTotal = x * 8 ;
    const total = dayTotal * y;
    return total;
}

const petya = add(20, 20);
const katya = add(20, 15);
const yura = add(17, 21);
console.log("petya", petya);
console.log("katya", katya);
console.log("yura", yura);




/*   Напиши функцію calcBMI(weight, height) 
    * яка розраховуватиме та повертає індекс масу 
    * тіла людини. Для цього необхідно розділити вагу
    * на квадрат висоти.
    

    * Вага та висота будуть спеціально передані як
    * рядки. Не цілі числа можуть бути задані у 
    * вигляді 24.7 або 24,7 тобто як розділювачі 
    * дробової частини може бути кома.
    * 
    * Індекс маси тіла необхідно округлити до однієї цифри після коми.
*/ 


function calcBMI(weight,height){
    let numWeight = weight.replace(",", ".");
    numWeight = Number.parseFloat(numWeight);
    const numHeight = Number.parseFloat(height);
    const bmi = numWeight / (numHeight ** 2);
    return bmi.toFixed(1);
}
const bmi = calcBMI("98,7", "1.75");
console.log(bmi);

function multiply (x, y, z){
    console.log(`Result: ${x * y * z}`);
    
}
multiply(2,3,5)

// function makeMessage(username) {
// 	console.log(`Hello ${username}`);
// }
// makeMessage()
function makeMessage (name, price) {
    return `You picked ${name} price per item is ${price} credits`
    };
    console.log(makeMessage('Radar', 6150));
    
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));


function calculateTotalPrice(orderedQuantity, pricePerItem) {
    return orderedQuantity * pricePerItem;
  }
  console.log(calculateTotalPrice(5, 100));
  console.log(calculateTotalPrice(8, 60));
  console.log(calculateTotalPrice(3, 400));
  console.log(calculateTotalPrice(1, 3500));
  console.log(calculateTotalPrice(12, 70));
  
  
  
  
  
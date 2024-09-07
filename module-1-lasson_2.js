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



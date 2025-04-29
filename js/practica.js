// 3 Задача на об'єкти і цикли: Створіть об'єкт, який містить список продуктів у магазині(назва, ціна).
//  Напишіть функцію, яка виведе назву та ціну кожного продукту.

const products = {
  phone: { name: "Samsung", price: 2210 },
  laptop: { name: "Asus", price: 4300 },
  headphones: { name: "Sony", price: 850 },
};

function getProducts(item) {
  for (const i in item) {
    const product = item[i];
    console.log(`${product.name}--- ${product.price}`);
  }
}
console.log(getProducts(products));

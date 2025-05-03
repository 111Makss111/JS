// іф
// вфів
// const products = [
//   {
//     id: 1,
//     name: "Ноутбук Lenovo IdeaPad 3",
//     category: "Ноутбуки",
//     price: 17999,
//     stock: 12,
//     brand: "Lenovo",
//     rating: 4.5,
//     isAvailable: true,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkw3Mz3Gw1fZ7Q2DGjkRPk-4jDffpO319HfTgyiA9-Q&s&ec=72940545",
//   },
//   {
//     id: 2,
//     name: "Смартфон Samsung Galaxy A54",
//     category: "Смартфони",
//     price: 13999,
//     stock: 8,
//     brand: "Samsung",
//     rating: 4.7,
//     isAvailable: true,
//     img: "https://www.ttt.ua/uploads/shop/products/medium/c_0363d40f873a73972c2c691a52e767eb.jpg",
//   },
//   {
//     id: 3,
//     name: "Телевізор LG 43UP75003LF",
//     category: "Телевізори",
//     price: 15999,
//     stock: 4,
//     brand: "LG",
//     rating: 4.4,
//     isAvailable: true,
//     img: "https://esat.com.ua/image/cache/catalog/morda/Samsung%20UE43T5300AUXUA-470x401.png",
//   },
//   {
//     id: 4,
//     name: "Пральна машина Bosch WAN24160BY",
//     category: "Пральні машини",
//     price: 18999,
//     stock: 3,
//     brand: "Bosch",
//     rating: 4.6,
//     isAvailable: true,
//     img: "https://esat.com.ua/image/cachewebp/products/2/3/6/78632-0-860x860.webp",
//   },
//   {
//     id: 5,
//     name: "Пилосос Philips PowerPro Compact",
//     category: "Пилососи",
//     price: 5499,
//     stock: 7,
//     brand: "Philips",
//     rating: 4.3,
//     isAvailable: true,
//     img: "https://esat.com.ua/image/cachewebp/products/9/0/4/58409-0-680x630.webp",
//   },
//   {
//     id: 6,
//     name: "Холодильник Samsung RB34T672FB1",
//     category: "Холодильники",
//     price: 21999,
//     stock: 5,
//     brand: "Samsung",
//     rating: 4.8,
//     isAvailable: true,
//     img: "https://esat.com.ua/image/cachewebp/products/4/8/5/77584-0-680x630.webp",
//   },
//   {
//     id: 4,
//     name: "Пральна машина Bosch WAN24160BY",
//     category: "Пральні машини",
//     price: 18999,
//     stock: 3,
//     brand: "Bosch",
//     rating: 4.6,
//     isAvailable: true,
//     img: "https://esat.com.ua/image/cachewebp/products/2/3/6/78632-0-860x860.webp",
//   },
//   {
//     id: 4,
//     name: "Пральна машина Bosch WAN24160BY",
//     category: "Пральні машини",
//     price: 18999,
//     stock: 3,
//     brand: "Bosch",
//     rating: 4.6,
//     isAvailable: true,
//     img: "https://esat.com.ua/image/cachewebp/products/2/3/6/78632-0-860x860.webp",
//   },
//   {
//     id: 7,
//     name: 'Планшет Apple iPad 10.2"',
//     category: "Планшети",
//     price: 16999,
//     stock: 6,
//     brand: "Apple",
//     rating: 4.9,
//     isAvailable: true,
//     img: "https://esat.com.ua/image/cachewebp/products/1/8/9/63981-0-680x630.webp",
//   },
//   {
//     id: 1,
//     name: "Ноутбук Lenovo IdeaPad 3",
//     category: "Ноутбуки",
//     price: 17999,
//     stock: 12,
//     brand: "Lenovo",
//     rating: 4.5,
//     isAvailable: true,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkw3Mz3Gw1fZ7Q2DGjkRPk-4jDffpO319HfTgyiA9-Q&s&ec=72940545",
//   },
// ];

// const container = document.querySelector(".products");
// container.insertAdjacentHTML("beforeend", createMarkup(products));
// container.addEventListener("click", handleClick);

// function createMarkup(arr) {
//   return arr
//     .map(
//       (product) => `
//     <li class="item product-item" data-id="${product.id}">
//             <img width="300" src="${product.img}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p>Ціна: ${product.price}грн</p>
//         </li>
//         `
//     )
//     .join("");
// }
// function handleClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   const currentProduct = event.target.closest(".product-item");
//   const id = currentProduct.dataset.id;
//   const product = products.find((item) => item.id === +id);
//   const instance = basicLightbox.create(`
//         <div class="model">
//         <img width="300" src="${product.img}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p>Ціна: ${product.price}грн</p>
//         </div>
//         `);
//   console.log(instance);
//   instance.show();
// }
// 🔸 Завдання 4: Слайдер (Swiper.js)
// Мета:
// Створити слайдер з 5 фото.

// Кроки:
// Підключи Swiper.js (CSS + JS).

// Розмісти 5 фото в HTML.

// Ініціалізуй Swiper з кнопками “вперед/назад”.

// Додай автопрокрутку через 3 секунди.

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

// 4. Змінити колір елемента
// Умова: При наведенні на блок <div id="colorBox"></div> його колір має змінюватися.

// Покроковий план:

// Вибрати елемент.

// Додати події mouseover і mouseout.

// Змінювати style.backgroundColor.

// const block = document.getElementById("colorBox");

// block.addEventListener("mouseover", () => {
//   block.style.backgroundColor = "red";
//   block.style.cursor = "pointer";
// });

// block.addEventListener("mouseout", () => {
//   block.style.backgroundColor = "white"; // або вкажи початковий колір, напр. "white"
// });

// const box = document.getElementById("dragBox");

// document.addEventListener("mousemove", (e) => {
//   const x = e.clientX;
//   const y = e.clientY;

//   box.style.left = x - 25 + "px";
//   box.style.top = y - 25 + "px";

//   createSmoke(x, y);
// });

// function createSmoke(x, y) {
//   const smoke = document.createElement("div");
//   smoke.classList.add("smoke");

//   smoke.style.left = x + "px";
//   smoke.style.top = y + "px";

//   smoke.style.backgroundColor = getRandomColor();

//   document.body.appendChild(smoke);

//   setTimeout(() => {
//     smoke.remove();
//   }, 5000);
// }

// function getRandomColor() {
//   const colors = [
//     "#ff007f",
//     "#ff7f00",
//     "#7fff00",
//     "#00ffff",
//     "#8a2be2",
//     "#ff1493",
//   ];
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// const products = [
//   { name: "iPhone 14", category: "Смартфони" },
//   { name: "Samsung Galaxy S23", category: "Смартфони" },
//   { name: "Xiaomi Redmi Note 12", category: "Смартфони" },
//   { name: "MacBook Air M2", category: "Ноутбуки" },
//   { name: "Dell XPS 15", category: "Ноутбуки" },
//   { name: "Lenovo ThinkPad X1", category: "Ноутбуки" },
//   { name: "Навушники AirPods", category: "Аксесуари" },
//   { name: "Зарядний пристрій", category: "Аксесуари" },
//   { name: "Мишка Logitech MX Master 3", category: "Аксесуари" },
//   { name: "Клавіатура Keychron K6", category: "Аксесуари" },
//   { name: "Телевізор LG OLED C2", category: "ТВ і Аудіо" },
//   { name: "Акустична система JBL Charge 5", category: "ТВ і Аудіо" },
//   { name: "Саундбар Samsung HW-Q600B", category: "ТВ і Аудіо" },
//   { name: "Sony PlayStation 5", category: "Гаджети" },
//   { name: "Apple Watch Series 9", category: "Гаджети" },
//   { name: "Фітнес-браслет Xiaomi Mi Band 8", category: "Гаджети" },
//   { name: "Фотоапарат Sony Alpha 7 IV", category: "Фототехніка" },
//   { name: "Об'єктив Canon RF 50mm f/1.8", category: "Фототехніка" },
//   { name: "Дрон DJI Mini 3 Pro", category: "Фототехніка" },
//   { name: "Ігровий ПК MSI Trident 3", category: "Комп'ютери" },
//   { name: "Монітор LG UltraGear 27GL850", category: "Комп'ютери" },
//   { name: "Процесор AMD Ryzen 7 7800X", category: "Комп'ютери" },
//   { name: "Відеокарта NVIDIA RTX 4080", category: "Комп'ютери" },
// ];

// const category = [...new Set(products.map((product) => product.category))];
// console.log(category);

// const buttonsElem = document.querySelector(".buttons");
// const productsList = document.querySelector(".products");
// console.log(buttonsElem);
// console.log(productsList);
// buttonsElem.insertAdjacentHTML("afterbegin", markupButtons(category));
// function markupButtons(arr) {
//   return arr
//     .map((category) => `<button class="btn">${category}</button>`)
//     .join("");
// }
// const btnsElem = document.querySelectorAll(".btn");

// btnsElem.forEach((button) => button.addEventListener("click", toggleCategory));

// function toggleCategory(event) {
//   const selectCategory = event.target.textContent;
//   const filteredProducts = products.filter(
//     (product) => product.category === selectCategory
//   );
//   renderProducts(filteredProducts);
// }
// function renderProducts(arr) {
//   return (productsList.innerHTML = arr
//     .map((item) => `<li class="products-list">${item.name}</li>`)
//     .join(""));
// }
// const inputElem = document.querySelector(".input-text");
// const btnElem = document.querySelector(".btn");
// const comment = document.querySelector(".comments");

// btnElem.addEventListener("click", getComment);

// function getComment(event) {
//   const getText = inputElem.value.trim();
//   if (getText === "") return;

//   comment.insertAdjacentHTML("beforeend", markupComment(getText));
//   inputElem.value = "";
// }

// function markupComment(text) {
//   return `<li>${text}</li>`;
// }

/* 
🟢 Легкі
1. Отримати текст із HTML-елемента за ID
Умова: Є HTML з елементом <p id="intro">Привіт, світ!</p>. Треба отримати текст цього елемента.

Покроковий план:

Отримати елемент за допомогою getElementById.

Вивести його textContent або innerText.

*/
// const intro = document.getElementById("intro");
// intro.textContent;
// console.log(intro.textContent);

/*
2. Змінити текст кнопки після натискання
Умова: Є кнопка <button id="myBtn">Натисни мене</button>. Після натискання її текст повинен змінитися на "Натиснуто".

Покроковий план:

Отримати кнопку через getElementById.

Додати обробник подій через addEventListener.

Всередині обробника змінити innerText кнопки.
*/
// const myBtn = document.getElementById("myBtn");

// myBtn.addEventListener("click", function () {
//   myBtn.innerText = "Натиснуто";
// });

/*
3. Показати/сховати елемент
Умова: Є блок <div id="box">Привіт</div> і кнопка "Приховати". Натискаючи на кнопку, приховувати або показувати блок.

Покроковий план:

Отримати обидва елементи.

В обробнику подій змінювати style.display на "none" / "block".
*/
// const divElem = document.querySelector(".box");
// const btnElem = document.querySelector(".btn");

// btnElem.addEventListener("click", function () {
//   if (divElem.style.display === "none") {
//     divElem.style.display = "block";
//     btnElem.innerText = "Приховати";
//   } else {
//     divElem.style.display = "none";
//     btnElem.innerText = "Показати";
//   }
// });

/*4. Змінити колір елемента
Умова: При наведенні на блок <div id="colorBox"></div> його колір має змінюватися.

Покроковий план:

Вибрати елемент.

Додати події mouseover і mouseout.

Змінювати style.backgroundColor.
*/
// const divElem = document.getElementById("colorBox");

// divElem.addEventListener("mouseover", function () {
//   divElem.style.backgroundColor = "red";
// });

// divElem.addEventListener("mouseout", function () {
//   divElem.style.backgroundColor = "blue";
// });

/*
5. Додати новий елемент до списку
Умова: Є список <ul id="myList"></ul> і кнопка "Додати пункт". При натисканні додається новий <li>.

Покроковий план:

Отримати список і кнопку.

Створити новий li через createElement.

Додати текст.

Вставити через appendChild.

*/
const listElem = document.querySelector(".myList");
const btnElem = document.querySelector(".btn");
console.log(listElem);
console.log(btnElem);

listElem.insertAdjacentElement("beforeend", markupElem);
function markupElem(arr) {
  return arr.map((elem) => "<li>4</li>").join("");
}
/*

🟡 Середні
6. Видалити елемент зі списку за кліком
Умова: Кожен пункт списку <ul> має кнопку "Видалити". При кліку він зникає.

Покроковий план:

Використати делегування подій (через батьківський елемент).

В обробнику видаляти parentNode кнопки.

7. Створити галерею з мініатюр
Умова: Є список зображень. При кліку на мініатюру велике зображення змінюється.

Дані:
HTML:

html
Копировать
Редактировать
<img id="mainImage" src="img1.jpg">
<div class="thumbnails">
  <img src="img1.jpg">
  <img src="img2.jpg">
  ...
</div>
План:

Отримати всі мініатюри.

Додати обробники на кожну.

Змінювати src основного зображення.

8. Форма: показати введені дані
Умова: Користувач вводить дані у форму. Після натискання кнопки показати ці дані у <div>.

Покроковий план:

Отримати значення input.

Зчитати через .value.

Вивести у <div>.

9. Реалізувати вкладки (tabs)
Умова: Є кілька кнопок-вкладок. При натисканні — показується відповідний блок.

Покроковий план:

Створити структуру HTML для вкладок і контенту.

За допомогою querySelectorAll обрати всі кнопки.

На кожну додати обробник.

Ховати всі блоки, показувати відповідний.

10. Підрахунок кількості кліків по елементу
Умова: Є елемент. Потрібно рахувати, скільки разів по ньому клікнули, і виводити це число.

Покроковий план:

Створити змінну-лічильник.

Додати обробник подій.

Інкрементувати лічильник.

Виводити його у DOM.

🔵 Складніші
11. Drag and Drop
Умова: Реалізувати переміщення елементів між двома контейнерами.

Покроковий план:

Використати dragstart, dragover, drop.

У dragstart зберігати дані.

У drop вставляти елемент.

12. Фільтрація списку по введеному тексту
Умова: Є список і поле вводу. При вводі — показуються лише ті елементи, які відповідають тексту.

План:

Обробник на input.

Перевірка кожного елемента через includes().

Ховати/показувати.

13. Валідація форми у реальному часі
Умова: Перевіряти, чи правильний email, поки користувач вводить.

План:

Обробник input.

Перевірка регулярним виразом.

Зміна стилів (червоний/зелений).

14. Реалізувати аккордеон
Умова: Кожен заголовок розкриває прихований блок тексту.

План:

Структура: заголовок + прихований блок.

При кліку — додавати/знімати classList.toggle('active').

Змінювати max-height або display.

15. Інтерактивний To-Do список
Умова: Користувач додає, відмічає як виконане і видаляє задачі.

План:

Ввід і кнопка "Додати".

Список <ul> для задач.

Додавання li, чекбокс, кнопка "видалити".

Взаємодія через обробники подій.

🔴 Важкі
16. Сортування HTML-таблиці
Умова: При кліку на заголовок таблиці — сортуються рядки за значенням у цьому стовпці.

План:

Отримати thead і tbody.

На кліку — зібрати всі рядки.

Відсортувати їх.

Перемістити у tbody.

17. Реалізація власного select (dropdown)
Умова: Замість стандартного <select> — зробити кастомний зі стилями.

План:

Створити кнопку і список опцій.

При кліку відкривати/закривати.

При виборі — оновлювати значення.

18. Створити світлофор (з таймером)
Умова: Перемикання кольорів світлофора кожні 3 секунди.

План:

Створити три блоки (червоний, жовтий, зелений).

Цикл через setInterval.

Кожного разу — змінювати класи.

19. Побудова дерева DOM елементів з JSON
Умова: Є вкладений JSON, що описує структуру HTML. Побудувати DOM відповідно.

План:

Рекурсивна функція.

createElement, appendChild.

Обхід всіх вкладених елементів.

20. Редагування елементів на сторінці (in-place editing)
Умова: При кліку на текст він стає input. Після введення — текст змінюється.

План:

Обробник на click.

Створення input, вставка замість textNode.

Обробник blur або Enter.

 Замінити назад на текст */

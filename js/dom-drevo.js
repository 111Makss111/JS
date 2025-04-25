// 3. Показати/сховати елемент
// Умова: Є блок <div id="box">Привіт</div> і кнопка "Приховати". Натискаючи на кнопку, приховувати або показувати блок.

// Покроковий план:

// Отримати обидва елементи.

// В обробнику подій змінювати style.display на "none" / "block".

const divElem = document.getElementById("box");
const btnElem = document.querySelector(".btn");
btnElem.addEventListener("click", function () {
  if (divElem.style.display === "none") {
    divElem.style.display = "block";
  } else {
    divElem.style.display = "none";
  }
});

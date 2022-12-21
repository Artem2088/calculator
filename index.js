let a = ""; //первое число
let b = ""; //второе число
let sign = ""; //знак операции
let finish = false;

// массивы с данными
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const simbols = ["+", "-", "x", "/"];

// экран
const out = document.querySelector(".result__number");

// функция очистки
const clearAll = () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
};

document.querySelector(".buttons").onclick = (event) => {
  // нажата не кнопка
  if (!event.target.classList.contains("button__title")) return;
  // нажата АС
  if (event.target.classList.contains("ac")) {
    clearAll();
    return;
  }

  out.textContent = "";

  const key = event.target.textContent;

  if (numbers.includes(key)) {
    // нажата 0-9 и .
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }
  //  нажата + - / x
  if (simbols.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }

  //  нажата =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Ошибка!";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
};

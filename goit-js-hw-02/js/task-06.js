let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);
for (let index = 0; index < numbers.length; index += 1) {
  total += numbers[index];
}
console.log(`Общая сумма чисел равна ${total}`);

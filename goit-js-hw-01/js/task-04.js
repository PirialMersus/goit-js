const credits = 23580;
const pricePerDroid = 3000;

let message;
const CANCELED_BY_USER = 'Отменено пользователем!';
const NOT_ENOUGH_MONEY = 'Недостаточно средств на счету!';
const NEGATIVE_AMOUNT = 'Количество дронов не может быть меньше 0';
const numberOfDronsThatClientWants = Number(
  prompt('How many drones do you want to buy?'),
);

if (numberOfDronsThatClientWants === 0) {
  message = CANCELED_BY_USER;
} else if (numberOfDronsThatClientWants < 0) {
  message = NEGATIVE_AMOUNT;
} else {
  const totalAmount = numberOfDronsThatClientWants * pricePerDroid;
  if (totalAmount > credits) {
    message = NOT_ENOUGH_MONEY;
  } else {
    message = `Вы купили ${numberOfDronsThatClientWants} дроидов, на счету осталось 
        ${credits - numberOfDronsThatClientWants * pricePerDroid} кредитов.`;
  }
}
console.log(message);

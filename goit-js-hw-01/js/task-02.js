'use strict';

const total = 100;
const ordered = 50;

if (ordered > total) {
  console.log('На складе недостаточно товаров!');
} else if (ordered <= total && ordered > 0) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('Заказ не может быть нулевым или отрицательным!');
}

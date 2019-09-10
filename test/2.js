// Удалить из строки проданный товар и вставить в строку новые товары.
// Строку вывести в консоль, с помощью assert сделать проверку
// const products = 'apple orange grape watermelon kiwi bananas';
// const sales = 'watermelon';
// const newProducts = 'melon tomato';
// let stock;

const products = 'apple orange grape watermelon kiwi bananas';
const sales = 'watermelon';
const newProducts = 'melon tomato';
let stock;

const positionStart = products.indexOf(sales);
const positionEnd = positionStart + sales.length;
const productsWithoutSales =  products.slice(0, positionStart).trim() + products.slice(positionEnd);
const productsWithNewProducts = productsWithoutSales + newProducts;
console.log(productsWithNewProducts);

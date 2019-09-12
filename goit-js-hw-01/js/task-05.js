const country = prompt('Enter your country');
let message;

const china = 'Китай';
const chinaCost = 100;
const chile = 'Чили';
const chileCost = 250;
const australia = 'Австралия';
const australiaCost = 170;
const india = 'Индия';
const indiaCost = 80;
const jamaica = 'Ямайка';
const jamaicaCost = 120;
if (country === null) {
  message = 'Canceled by user';
} else {
  switch (country.toLowerCase()) {
    case china.toLowerCase():
      message = `Доставка в ${china} будет стоить ${chinaCost} 
    кредитов`;
      break;

    case chile.toLowerCase():
      message = `Доставка в ${chile} будет стоить ${chileCost} 
      кредитов`;
      break;
    case australia.toLowerCase():
      message = `Доставка в ${australia} будет стоить ${australiaCost} 
      кредитов`;
      break;
    case india.toLowerCase():
      message = `Доставка в ${india} будет стоить ${indiaCost} 
      кредитов`;
      break;
    case jamaica.toLowerCase():
      message = `Доставка в ${jamaica} будет стоить ${jamaicaCost} 
      кредитов`;
      break;
    default:
      message = 'В вашей стране доставка не доступна';
  }
}
alert(message);

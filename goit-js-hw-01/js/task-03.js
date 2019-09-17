const CANCELED_BY_USER = "Отменено пользователем!";
const WELLCOME = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";

const ADMIN_PASSWORD = "jqueryismyjam";
const userSaid = prompt("Enter the password");
let message;

if (userSaid === null) {
  message = CANCELED_BY_USER;
} else if (userSaid === ADMIN_PASSWORD) {
  message = WELLCOME;
} else {
  message = ACCESS_DENIED;
}

alert(message);

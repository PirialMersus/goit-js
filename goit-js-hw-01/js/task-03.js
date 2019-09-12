const CANCELED_BY_USER = 'Отменено пользователем!';
const WELLCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';

const ADMIN_PASSWORD = 'jqueryismyjam';
const userSaid = prompt('Enter the password');
let message;

if (userSaid === null) {
  message = CANCELED_BY_USER;
  console.assert(
    userSaid === null && message === CANCELED_BY_USER,
    'Error: при обработке null',
  );
} else if (userSaid === ADMIN_PASSWORD) {
  message = WELLCOME;
  console.assert(
    userSaid === ADMIN_PASSWORD && message === WELLCOME,
    'Error: при обработке правильного пароля',
  );
} else {
  message = ACCESS_DENIED;
  console.assert(
    userSaid !== ADMIN_PASSWORD
      && userSaid !== null
      && message === ACCESS_DENIED,
    'Error: при обработке неправильного пароля',
  );
}

alert(message);

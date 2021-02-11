export default function Validateion(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Введите email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Введите корректный email';
  }
  if (!values.password) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен быть больше 6 символов';
  }
  return errors;
}

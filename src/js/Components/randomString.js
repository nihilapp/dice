let array = [];
let number;

export const randomString = () => {
  const str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/?_=+-&*^%$#@!~';
  for (let i = 0; i < 6; i++) {
    number = Math.ceil(Math.random() * str.length - 1);
    array.push(str[number]);
  }

  const arraystring = array.join('');

  return arraystring;
};
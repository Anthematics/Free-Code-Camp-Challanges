
function reverseString(str) {
  str2 = str.split('').reverse('').join('');
  str = str2;
  return str;
}

reverseString("hello");
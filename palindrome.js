function palindrome(str) {
  var str1 =  str.replace(/[\W_]/g, '').toLowerCase();
  var str2 =  str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');

  if (str2 === str1) {
  return true;
  } else {
  return false;
  }
}

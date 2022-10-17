/**
 * Bài 2: Nhập vào một số nguyên dương n. Tìm chữ số lớn nhất trong các chữ số mà n có
 */

const findBiggestDigit = (n) => {
  let max = 0;
  const str = n.toString();
  console.log(str);
  for (let index in str) {
    if (parseInt(str[index]) > max)
      max = parseInt(str[index]);
  }
  return max;
};
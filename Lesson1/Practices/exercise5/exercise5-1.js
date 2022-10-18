/**
 * Bài 1: Cho một mảng n số nguyên. Đếm xem trong mảng có bao nhiêu số khác nhau và mỗi số xuất hiện bao nhiêu lần trong mảng
 */

// Nhập hàm uniqueArray từ bài số 2 để sao chép một mảng độc nhất từ mảng cho trước

import { uniqueArray } from "../exercise2.js";

const countElements = (arr) => {
  const unique = uniqueArray(arr);
  const diffElems = unique.length;
  // đếm số làn xuất hiện của từng phần tử trong arr cho trước
  const counting = unique.map((uniqueElem) => {
    let count = 0;
    arr.forEach((elem) => {
      if (uniqueElem === elem) {
        count += 1;
      }
    });
    return `
    ${uniqueElem} xuat hien ${count} lan.`;
  });
  // nối các string lại để trình bày
  const result = counting.reduce((acc, elem) => {
    return acc.concat(elem);
  }, "");
  console.log(`So phan tu khac nhau: ${diffElems}.
  ${result}`);
};
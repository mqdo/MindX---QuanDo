import { uniqueArray } from "./exercise2.js";
//Import hàm uniqueArray từ bài tập số 2 để tái sử dụng

const countMost = (arr) => {
  const unique = uniqueArray(arr);
  // tạo mảng mới lưu cả value lẫn count của từng phần tử
  const counting = unique.map((uniqueElem) => {
    let count = 0;
    arr.forEach((elem) => {
      if (uniqueElem === elem) {
        count += 1;
      }
    });
    return { value: uniqueElem, count: count };
  });
  return counting.sort((a, b) => b.count - a.count)[0];
  // sắp xếp count từ lớn đến bé
};
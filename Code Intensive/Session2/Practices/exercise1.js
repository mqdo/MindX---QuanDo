const reverseString = str => {
  return str.split("").reverse().join("");
}

console.log(reverseString("abcdef"));

/**
 * 1. Tách chuỗi đã cho thành một array với phương thức split
 * 2. Từ array nhận được sử dụng phương thức reverse sẵn có để đảo ngược các phân tử
 * 3. Nối các phần tử trong array lại thành một string với phương thức join
 */
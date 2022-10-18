export const uniqueArray = (arr) => [...new Set(arr)];

/**
 * 1. Tạo hàm uniqueArray với đầu vào là một array arr
 * 2. Từ gọi đến object constructor Set và truyền vào đối số là arr để trả về một set (với các phần tử độc nhất)
 * 3. Bởi vì output cần tìm là một arr, ta sử dụng toán tử spread trên Set tìm được để biến nó thành một array
 */

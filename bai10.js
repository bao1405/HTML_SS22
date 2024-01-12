//giá trị được coi là truthy nếu nó được đánh giá là đúng khi sử dụng trong ngữ cảnh boolean và falsy nếu nó được đánh giá là sai. Các giá trị falsy thông thường bao gồm:

//false: Giá trị boolean false.
// 0: Số nguyên 0.
// '' hoặc "": Chuỗi rỗng.
// null: Giá trị biến không có giá trị.
// undefined: Giá trị của biến chưa được định nghĩa.
// NaN: Not-a-Number, kết quả của một phép toán không hợp lệ.
// Các giá trị còn lại được xem là truthy, bao gồm cả một số giá trị đặc biệt như:

// true: Giá trị boolean true.
// Số khác 0: Bất kỳ số nào khác 0, bao gồm số âm và số thập phân.
// Chuỗi không rỗng: Bất kỳ chuỗi nào có ít nhất một ký tự.
// {} hoặc []: Đối tượng và mảng.

//ví dụ

let x = 10;
if (x) {
    console.log("Giá trị của x là truthy.");
} else {
    console.log("Giá trị của x là falsy.");
}
// Sử dụng truthy/falsy trong biểu thức logic
let y = '';

let result = x || 'Giá trị y là falsy';
console.log(result); // In ra 10, vì x là truthy
let result2 = y || 'Giá trị y là falsy';
console.log(result2); // In ra 'Giá trị y là falsy', vì y là falsy
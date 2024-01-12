let a = +prompt("nhập số");

if (!isNaN(a) && a > 0) {
let check = 0;
for (let i = 1; i <= Math.sqrt(a); i++) {
    if (a == i * i) {
        check++;
    }
}if (check == 0) {
    console.log("không phải số chính phương");
    } else {
        console.log("là số chính phương");
    }
} else {
    console.log("không hợp lệ, vui lòng nhập lại.");
}
let a = +prompt("nhập năm");
if (!isNaN(a) && a > 0) {
    if (a % 400 == 0 || (a % 4 == 0 && a % 100 != 0)) {
        console.log("là năm nhuận");
    } else {
        console.log("là năm không nhuận");
    }
} else {
    console.log("không hợp lệ");
}
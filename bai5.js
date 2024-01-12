let a = +prompt();
let b = +prompt();
if (!isNaN(a)&&!isNaN(b)) {
    console.log('nghiệm của phương trình là :'+(-b/a));
}else{
    console.log('không hợp lệ. vui lòng nhập lại là sô.');
}
let a = +prompt('nhập số có 4 chữ số');
if (!isNaN(a)&&a>=1000&&a<=9999) {
    console.log('đơn vị=' +a%10);
    b=Math.floor(a/10)
    console.log('chục='+b%10);
    c=Math.floor(b/10)
    console.log('trăm='+c%10);
    d=Math.floor(c/10)
    console.log('ngìn='+d%10);
}else{
    console.log('không hợp lệ.vui lòng nhập lại.');
}
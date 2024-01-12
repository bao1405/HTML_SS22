let a = +prompt();
let b = +prompt();
if (!isNaN(a)&&!isNaN(b)) {
    if(a%b==0){
        console.log('a chia hết cho b');
    }else if(b%a==0){
        console.log('b chia hết cho a');
    }else{
        console.log('hai số không chia hết được cho nhau');
    }
}else{
    console.log('không hợp lệ, vui lòng nhập lại.');
}
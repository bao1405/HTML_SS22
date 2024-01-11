let a = +prompt()
let b = +prompt()
let c = +prompt()
if (!isNaN(a)&&!isNaN(b)&&!isNaN(b)) {
    if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a){
        console.log('là tam giác')
    }else{
        console.log('không phải là tam giác')
    }
}else{
    console.log('không hợp lệ, vui lòng nhập lại.')
}
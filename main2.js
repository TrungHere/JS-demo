
console.log('========Cach1=========')
var agejohn = 0;
var agejohn1 = 0;
//hàm - trả về return
function tinhtuoi(year) {
    //tinh toan
    return 2022 - year;
}
//thủ tục - khong return
function thaydoituoi() {
    agejohn = 1997;
}
//agejohn = 1997;
thaydoituoi(); //loi goi ham`

var age = tinhtuoi(agejohn);

console.log('tuoi cua John la : ',age);

console.log('==========Cach2===========');

var tinhtuoi1 = (year) => {
    //to do sth...
    return 2022 - year; 
}

var thaydoituoi = () => {
    agejohn1 = 1998;
}

thaydoituoi(); //loi goi ham
var age = tinhtuoi1(agejohn1);
console.log('tuoi cua John la :',age);
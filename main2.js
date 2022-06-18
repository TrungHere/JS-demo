

var agejohn = 0;

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
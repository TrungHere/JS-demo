var bills = [124,48,268];

console.log('bills =', bills);

var tientip = (bill) => {
    var percent;
    if(bill < 50) {
        percent = 0.2;
    }else if (bill <= 200) {
        percent = 0.15;
        
    }else {
        percent = 0.1;
    }
    return percent * bill;

}

var tips = [
    tientip(bills[0]),
    tientip(bills[1]),
    tientip(bills[2])
];
console.log('tips =',tips);


var bills = [149,48,279];
console.log('bills', bills);

var counttip = (bill) => {
    var percent;
    if(bill<50) {
        percent = 0.2;
    }else if(bill<200) {
        percent = 0.15;
    }else {
        percent = 0.1;
    }
    return percent * bill;
}

var tips = [
    counttip(bills[0]),
    counttip(bills[1]),
    counttip(bills[2])
];
console.log('tips = ', tips);

var totalbills = [];
totalbills.push(bills[0] + tips[0]);
totalbills.push(bills[1] + tips[1]);
totalbills.push(bills[2] + tips[2]);
console.log('totalbills = ', totalbills);

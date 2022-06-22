var arrDemo =[
    'trung',
    25,
    'co vo',
    true,
    [010,111,101]

]
console.log('arrDemo = ', arrDemo);

console.log('arrDemo(job)',arrDemo.push('coder',11));
console.log('unshift(123)',arrDemo.unshift(123,456))
console.log('pop',arrDemo.pop())
console.log('shift',arrDemo.shift())
console.log('indexOf',arrDemo.indexOf('trung'))


console.log('arrDemo = ', arrDemo);

console.log('----------------------------')

if (arrDemo.indexOf('co vo') !== -1) {
    console.log('Trung da ket hon');

}else {
    console.log('Trung chua ket hon');
    
}

console.log('--------------Challenge3--------------')


var bill = [
    124,
    48,
    268
];
console.log('bill :', bill);

var tip = (tientip) => {
    if(tientip <= 50) {
        console.log(bill[1] * 0.2);
    }else if (tientip >50 && tientip <=200) {
        console.log(bill[0] * 0.15);
        
    }else {
        console.log(bill[2] * 0.1);
    }
}
var totalbill = bill + tientip;
console.log('total bill = ',totalbill );


for (var run = 1; run <= 10 ; run = run+1) {
    //const element = array[run];
    console.log('run =',run);
    }
    console.log('run sau khi chay xong vong lap =',run);

//for/in
var Trung = ['Trung','co ny',25,true];
console.log('Trung :',Trung);

for (let run = 0; run < Trung.length; run++) {
    //const element = array[run];
    console.log('Phan tu thu ' + (run +1)+ ' =',Trung[run]);
}
console.log('---------------------Danh sanh HS--------------------------');

function calaverage() {
    this.average = (this.Maths + this.physics) / 2;
    return this.average;
};


var arrStudents = [
    {
        fullname : 'Nguyen van A',
        Maths : 10 ,
        physics : 9.5
    },{
        fullname : 'Nguyen Hoang Lam',
        Maths : 6 ,
        physics : 4
    },{
        fullname : 'Nguyen van N',
        Maths : 7 ,
        physics : 3
    },{
        fullname : 'Nguyen Thanh Trung',
        Maths : 10 ,
        physics : 10
    }
]

for (var index = 0; index < arrStudents.length; index++) {
    //const element = array[index];
    arrStudents[index].calaverage = calaverage;
    arrStudents[index].calaverage();
    //console.log(arrStudents[index]);
}
console.log('arrStudents =',arrStudents);
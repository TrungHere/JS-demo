var student = {
    fullname: 'Nguyen Hoang Lam',
    year: 1997,
    score: {
        marths:9,
        physics:7.7,
        chemistry:5
    },
    calAverage : function()  {
        //tinh toan dua tren score
        //console.log('run');
        //console.log(this);
        var marths = this.score.marths;
        var physics = this.score.physics;
        var chemistry = this.score.chemistry;
        return (marths + physics + chemistry)/3;
    }
};
console.log('student :',student);
console.log('fullname :',student.fullname);
console.log('score :',student.score);
console.log('score maths :',student.score.marths);
console.log('score physics:',student.score.physics);
console.log('score chemistry:',student.score.chemistry);
// arrDemo.push()
var average = student.calAverage(); //method cua object student
// this -> con tro This -> tro toi doi tuong hien tai.
console.log('average =',average);

console.log('---------------------------------------');

var student2 = new Object();
console.log('student =',student2);
student2.fullname = 'Nguyen Thanh Trung';
student2.year = 1997;
student2.score = {
    marths:9,
    physics:7,
    chemistry:5
}
student2.calAverage= function() {
    var marths = this.score.marths;
    var physics = this.score.physics;
    var chemistry = this.score.chemistry;
    return (marths + physics + chemistry)/3;
}
console.log('student2 =',student2);
console.log('year =',student2.year);
console.log('student2.calAverage() = ',student2.calAverage());




var type0 = 'primary school';
var type1 = 'secondary school';
var type2 = 'high school'; 
var age = 15;
var name = 'Trung';
if(age <= 11) {
    console.log('academic level :',type0);
} else if (11 > age <= 15) {
    console.log('academic level :',type1);
} else {
    console.log('academic level :',type2);
}


var job = 'teacher';

console.log('================Job===================')
switch (job) {
    case 'designer':
        console.log( name + 'la 1 designer');
        
        break;
    case 'doctor':
        console.log( name + 'la 1 doctor');

        break;
    
    case 'teacher':
        console.log( name + 'la 1 teacher');

        break;

    default:
        console.log(name + 'la 1 nguoi khong thanh dat')
        break;
}
console.log('===============Var-If=================')

var height;
height = 0;
if (height || height === 0) {
    console.log('Height co gia tri',height);
} else {
    console.log('Height khong co gia tri',height);
}
console.log('===============so sanh=================')
var height2 = "22";

if(height2 === 22 ) {
    console.log('height2 nhan gia tri', height2);
} else {
    console.log('height2 khong nhan gia tri', height2);
}

console.log('===============challenge2=================')

var j_score_1 = 89;
var j_score_2 = 120;
var j_score_3 = 103;
var avarage_j_score = (j_score_1 + j_score_2 + j_score_3) / 3

console.log('avarage_j_score = ',avarage_j_score)

var m1_score_1 = 116;
var m1_score_2 = 94;
var m1_score_3 = 123;
var avarage_m1_score = (m1_score_1 + m1_score_2 + m1_score_3) / 3

console.log('avarage_m1_score = ',avarage_m1_score)
var m2_score_1 = 97;
var m2_score_2 = 134;
var m2_score_3 = 105;
var avarage_m2_score = (m2_score_1 + m2_score_2 + m2_score_3) / 3;

console.log('avarage_m2_score = ',avarage_m2_score);
var highest_score;
var lowest_score;

if(avarage_j_score > avarage_m1_score) {
    console.log('avarage_j_score is higher = ',avarage_j_score);

}else if(avarage_j_score > avarage_m2_score) {
    console.log('avarage_j_score is higher = ',avarage_m1_score);
}else {
    console.log('average_j_score is lowest', avarage_j_score );
}

if(avarage_m1_score > avarage_m2_score) {
    console.log('avarage_m1_score is higher = ',avarage_m1_score);

}else if(avarage_m1_score > avarage_j_score) {
    console.log('avarage_m1_score is higher = ',avarage_m1_score);
}else {
    console.log('average_m1_score is lowest', avarage_m1_score );
}

if(avarage_m2_score < avarage_m1_score) {
    console.log('avarage_m2_score is lower = ',avarage_m2_score);

}else if(avarage_m2_score < avarage_j_score) {
    console.log('avarage_m2_score is lower = ',avarage_m2_score);
}else {
    console.log('average_m2_score is highest', avarage_m2_score );
}

console.log('============solution-of-challenge2===============')

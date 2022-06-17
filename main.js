var fisrtname = 'Nguyen';
var age = 24;


console.log('bien fisrtname =', fisrtname);
console.log('bien age =', age);




var ismarried;
ismarried = false;
console.log('ismarried =', ismarried);

var x,y;
x = 10; 
y = 5;

console.log('bien x =', x)
console.log('bien y =', y)
//challenge1 : do chi so BMI cua mark va john
var M_BMI,M_mass,M_height;

M_mass = 75;
M_height = 1.7;

M_BMI = M_mass / M_height**2;
console.log('M_BMI =', M_BMI)

var J_BMI,J_mass,J_height;

J_mass = 62;
J_height = 1.75;

J_BMI = J_mass / J_height**2;
console.log('J_BMI =', J_BMI)


result = M_BMI >= J_BMI
console.log('M_BMI >= J_BMI',result)
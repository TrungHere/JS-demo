var Trung = {
    Fullname: 'Nguyen Thanh Trung',
    age:25,
    T_height:170,
    T_mass:78,
    countBMI : function() {
        var height = this.T_height;
        var mass = this.T_mass;
        return mass / height**2 
    }
};

console.log('Trung',Trung);
var TrungBMI = Trung.countBMI();
console.log('TrungBMI',TrungBMI);

var Lam = {
    Fullname: 'Nguyen Hoang Lam',
    age:22,
    L_height:170,
    L_mass:65,
    CountBMI : function() {
        var Height = this.L_height;
        var Mass = this.L_mass;
        return Mass / Height**2
    }
};
console.log('Lam',Lam);
var LamBMI = Lam.CountBMI();
console.log('LamBMI',LamBMI);

if(TrungBMI > LamBMI) {
    console.log('TrungBMI is higher than LamBMI',TrungBMI);
}else if (TrungBMI < LamBMI) {
    console.log('LamBMI is higher than TrungBMI',LamBMI);
}else {
    console.log('LamBMI is equal TrungBMI',LamBMI);
};


console.log('--------------------------------------------------------------------');

var Count1BMI = function() {
    return this.mass / (this.height * this.height);
};


var Trung1 = {
    Fullname: 'Nguyen Thanh Trung',
    age:25,
    height:170,
    mass:78,
    BMI : Count1BMI
    };

var Lam1 = {
    Fullname: 'Nguyen Hoang Lam',
    age:22,
    height:170,
    mass:65,
    BMI : Count1BMI
    };


console.log('TrungBMI =',Trung1.BMI());
console.log('LamBMI =',Lam1.BMI());

function randomArray(n,max) {
    
    var arr = [];
    for (var index = 1 ; index <= n ;index++ ) {
        var num = Math.random() * max;
            num = Math.round(num);
        arr.push(num);
    }
    return arr;
}

//var Bills = randomArray(3,500);

var Trung = {
    Firstname: 'Nguyen',
    Lastname: 'Trung',
    Bills : randomArray(10,500),
    calTips: function(){
        this.tips = [];
        this.totalvalues = [];
        var length = this.Bills.length;
        consoe.log('length =',length);
        for(var index = 0;index < length ;index ++) {
                var percent;
                var bill = this.Bills[index];
                if(bill<50) {
                    percent = 0.2;
                }else if(bill<200) {
                    percent = 0.15;
                }else {
                    percent = 0.1;
                }
                this.tips[index] = bill * percent;
                this.totalvalues[index] = this.tips[index] + this.Bills[index];

        }
    }
}
Trung.calTips();
console.log('Trung : ',Trung)
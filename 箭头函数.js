function fun(test){
    let res = test(this);
    console.log(res);
}
fun(_this => {a:1})

/* 
    箭头函数中的this
    箭头函数继承了cool()函数的this绑定
*/
var obj = {
    count:0,
    cool: function(){
        if(this.count <1){
            setTimeout(() => {
                this.count++;
                console.log("awesome?",this.count); //1
            }, 100);
        }
    }
}
obj.cool();

var obj2 = {
    count: 0,
    cool: function () {
        if (this.count < 1) {
            setTimeout(function () {
                this.count++;
                console.log("awesome?", this.count); //NaN
            }, 100);
        }
    }
}
obj2.cool();
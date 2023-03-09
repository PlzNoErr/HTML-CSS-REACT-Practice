function genericFun(str) {
    return str.length;
}
console.log(genericFun("12345"));
var data = '{"name" : "dog", "age" : 1 }';
function 함수123(x) {
    return JSON.parse(x);
}
var result = 함수123(data);
console.log(result);
//
//
var Person1234 = /** @class */ (function () {
    function Person1234(a) {
        this.name = a;
    }
    return Person1234;
}());
var a = new Person1234("어쩌구");
a.name; //any 타입이 되었넹

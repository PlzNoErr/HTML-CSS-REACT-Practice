var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Person;
}());
var 사람1 = new Person("누누", 12);
var 사람2 = new Person("리신", 42);
사람1.setName("호랑이");
console.log(사람1);
1;
console.log(사람2);
// 문제1
var CarTT = /** @class */ (function () {
    function CarTT(type, price) {
        this.CarTTType = type;
        this.CarTTPrice = price;
    }
    CarTT.prototype.tax = function () {
        return this.CarTTPrice / 10;
    };
    return CarTT;
}());
var CarTT1 = new CarTT("소나타", 3000);
console.log(CarTT1);
console.log(CarTT1.tax());
// 문제2
var Word = /** @class */ (function () {
    function Word() {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        parameters.forEach(function (el) {
            if (typeof el === "string")
                _this.str.push(el);
            else
                _this.num.push(el);
        });
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']

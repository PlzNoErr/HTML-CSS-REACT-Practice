var UserTest = /** @class */ (function () {
    function UserTest(name, age) {
        this.name = name;
        this.age = age;
        // private 걸렸어도 내부에서는 사용 가능
        console.log(this.name + this.age);
    }
    // setter를 사용하면 private도 수정가능
    UserTest.prototype.setAge = function (num) {
        this.age = num;
    };
    return UserTest;
}());
var 유저1 = new UserTest("dragon", 12);
// age 변수는 private 걸렸기 때문에 애러를 띄운다.
// 유저1.age = 11;
// 그럼 age를 수정하고 싶다면?
// setter를 사용하면 해결
유저1.setAge(14);
// public이라면 this.name = name; 축약 가능
var Person12 = /** @class */ (function () {
    function Person12(name) {
        this.name = name;
    }
    return Person12;
}());
var 유저2 = new Person12("john");

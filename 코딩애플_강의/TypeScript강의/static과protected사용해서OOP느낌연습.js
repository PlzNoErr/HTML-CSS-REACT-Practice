// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var desUser = /** @class */ (function () {
    function desUser() {
        this.z = 30;
    }
    desUser.x = 10;
    desUser.y = 20;
    return desUser;
}());
// 변수 x의 경우 desUser.x를 통해서 조회는 가능하지만 외부 수정이 모두 막혀있다.
// 변수 y의 경우 desUser.y를 통해서 조회 / 수정이 외부에서 모두 가능하다.
// 변수 z의 경우 extends하는 자손 class 안에서는 조작이 가능하지만 외부에서는 조회만 가능하다.
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
var Uuser = /** @class */ (function () {
    function Uuser() {
    }
    Uuser.addOne = function (num) {
        this.x += num;
    };
    Uuser.printX = function () {
        console.log(this.x);
    };
    Uuser.x = 10;
    Uuser.y = 20;
    return Uuser;
}());
Uuser.addOne(3); //이렇게 하면 x가 3 더해져야함
Uuser.addOne(4); //이렇게 하면 x가 4 더해져야함
Uuser.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// (숙제3)
// 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
var Square = /** @class */ (function () {
    // public일 때 필드 변수를 저렇게 축약 가능하다.
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n        top:".concat(a * 400, "px; \n        left:").concat(a * 400, "px; \n        width:").concat(this.width, "px; \n        height : ").concat(this.height, "px; \n        background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();

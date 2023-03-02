// 무조건 파라미터는 string타입, return은 number타입으로 해야한다.
// 함수를 변수에 저장하는 방식으로 function에 type alias사용 가능하다.
var testFunc = function (a) { return 3; };
var userInfo = {
    name: "kim",
    calAge: function (a) { return 2023 - a; },
    // 오브젝트 안에서 함수 지정할때는 function 선언 X
    chcheck: function (params) {
        return params;
    },
};
var cutZero = function (s) { return s.replace(/^0+/, ""); };
var removeDash = function (s) { return Number(s.replace(/-/g, "")); };
var CustomFunc = function (str, func1, func2) {
    var mid_result = func1(str);
    console.log(func2(mid_result));
};
console.log("연습5");
CustomFunc("010-1111-2222", cutZero, removeDash);

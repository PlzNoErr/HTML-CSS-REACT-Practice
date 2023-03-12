var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 이런 친구를 tuple이라고 한다. 단 ?는 무조건 맨 뒤에서 부터 차근차근 채워야 한다.
var 멍멍 = ["dog", true];
var arr1 = [1, 2, 3];
// spread operator 타입 지정하는 법
var arr2 = __spreadArray([4, 5], arr1, true);
// 문제 1
var todayFood = ["동서녹차", 4000, true];
// 문제 2
var tuplePractice2 = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
// 문제3
function tp3() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
}
// 문제4
function tp4() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var stringArr = [];
    var numberArr = [];
    params.forEach(function (el) {
        if (typeof el === "string")
            stringArr.push(el);
        else
            numberArr.push(el);
    });
    return [stringArr, numberArr];
}
console.log(tp4("b", 5, 6, 8, "a"));

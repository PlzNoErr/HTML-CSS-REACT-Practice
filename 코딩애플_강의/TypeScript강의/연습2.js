// Narrowing 문법 => 타입을 좁혀준다
function myFunc(x) {
    if (typeof x === "string")
        return x + "입니다";
    else
        return x + 10;
}
// Assertion 문법 => 타입을 그냥 그렇다 치고 덮어 씌운다
// 여러개의 복잡한 유니온 타입을 하나로 확정할때 사용함. 이미 선언된 자료형 바꾸는데 쓰는거 아님.
// 그리고 "무조건" 무슨형의 타입이 사전에 알고 있을 때 사용할 수 있다.
function myFunc2(x) {
    var array = [];
    array[0] = x;
}
// 그냥 웬만하면 대부분 if 문법을 사용하자.
// 디버깅 비상용으로 써먹을 때나 Assertion문법을 사용하자.
/** */
function cleaning(arr) {
    for (var index = 0; index < arr.length; index++) {
        arr[index] = Number(arr[index]);
    }
    return arr;
}
var test = [1, 2, "3", "4"];
console.log(cleaning(test));
/** */
function checkSub(x) {
    if (typeof x.subject === "string")
        return x.subject;
    else if (Array.isArray(x.subject))
        return x.subject[x.subject.length - 1];
    else
        return "없음";
}
console.log(checkSub({ subject: "math" }));
console.log(checkSub({ subject: ["science", "art", "korean"] }));

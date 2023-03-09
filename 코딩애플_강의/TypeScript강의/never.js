function never함수() {
    // 1. 리턴이 없어야만 가능
    // 2. endpoint가 없어야만 가능 => 즉 무한히 동작해야됨
    throw new Error();
    // or //
    while (true) { }
}
// 코드를 이상하게 짜다보면 뜬금 never타입이 등장할 때가 있음.
function 이상하게짜본never(param) {
    if (typeof param === "string") {
        console.log(param);
    }
    else {
        console.log(param);
    }
    // 코드를 이따구로 짜면 어차피 else문은 영원히 도달못함.
    // 여기서도 파라미터 설명보면 never로 타입이 되어있음.
}
// 이 함수도 자동으로 never타입으로 세팅됨
// 일단 never타입으로 변수가 선언되었다? 뭔가 잘못된 코딩을 했다는 반증임
var 이상한never2 = function () {
    throw new Error();
};

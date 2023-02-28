// 함수도 타입지정이 가능하다
type 함수타입 = (a: string) => number;
// 무조건 파라미터는 string타입, return은 number타입으로 해야한다.

// 함수를 변수에 저장하는 방식으로 function에 type alias사용 가능하다.
let testFunc: 함수타입 = (a) => 3;

// Object안에 함수 넣기
type UserUser = {
  name: string;
  calAge: (a: number) => number;
  chcheck: (a: string) => string;
};

let userInfo: UserUser = {
  name: "kim",
  calAge: (a) => 2023 - a,
  // 오브젝트 안에서 함수 지정할때는 function 선언 X
  chcheck(params) {
    return params;
  },
};

// 함수로 연습해 보기
type CutZero = (s: string) => string;
type RemoveDash = (s: string) => number;

let cutZero: CutZero = (s) => s.replace(/^0+/, "");

let removeDash: RemoveDash = (s) => Number(s.replace(/-/g, ""));

type customFunc = (a: string, b: CutZero, c: RemoveDash) => void;

let CustomFunc: customFunc = (str, func1, func2) => {
  let mid_result = func1(str);
  console.log(func2(mid_result));
};

console.log("연습5");
CustomFunc("010-1111-2222", cutZero, removeDash);

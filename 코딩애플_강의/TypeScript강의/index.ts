let myName: string[] = ["dragon", "kim"];

let kkk: { name?: string; age: number } = { age: 12 };

let changable: string | number = 12;
changable = "park";

type Mytype = string | number;

let zke: Mytype = 12;

// 파라미터와  return의 타입을 설정해 줌
function 함수(x: number): number {
  return x + 12;
}

type Member = {
  // 글자로 된 모든 object 속성의 타입은 string으로 고정
  [key: string]: string;
};

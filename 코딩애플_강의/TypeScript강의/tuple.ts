// 이런 친구를 tuple이라고 한다. 단 ?는 무조건 맨 뒤에서 부터 차근차근 채워야 한다.
let 멍멍: [string, boolean?, number?] = ["dog", true];

let arr1 = [1, 2, 3];

// spread operator 타입 지정하는 법
let arr2: [number, number, ...number[]] = [4, 5, ...arr1];

// 문제 1
let todayFood: [string, number, boolean] = ["동서녹차", 4000, true];

// 문제 2
let tuplePractice2: [string, number, ...boolean[]] = [
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
function tp3(...params: [string, boolean, ...(string | number)[]]) {}

// 문제4
function tp4(...params: (string | number)[]) {
  let stringArr: string[] = [];
  let numberArr: number[] = [];
  params.forEach((el) => {
    if (typeof el === "string") stringArr.push(el);
    else numberArr.push(el);
  });
  return [stringArr, numberArr];
}

console.log(tp4("b", 5, 6, 8, "a"));

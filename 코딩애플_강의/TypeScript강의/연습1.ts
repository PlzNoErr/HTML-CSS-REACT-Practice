let myInfo: { name: string; age: number; home: string } = {
  name: "name",
  age: 12,
  home: "home",
};

type Project = { member: string[]; days: number; started: boolean };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

type School = {
  score: (number | boolean)[];
  teacher: string;
  friend: string[] | string;
};

let 학교: School = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

function work(a: number): number {
  return a + 1;
}

// void를 사용가능하다
function work2(a: number): void {}

// 파라미터가 들어 올 수도 있고 아닐수도 있고
// => ? :number는 :number | undefined와 같은 뜻이다
function work3(a?: number): void {}

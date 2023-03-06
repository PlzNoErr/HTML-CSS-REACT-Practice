// type alias를 활용해서 간단하게 타입을 저장해 주자
// type은 파스칼 케이스로 작성하는 것이 국룰이다.
type Alias = string | number | undefined;
let 복잡한변수: Alias;

// readonly를 사용해 읽기전용 상태로 바꿔줌.
// 이렇게 설정되면 해당 객채안의 속성들도 잠가 버릴 수 있음.
// 단 그냥 애러만 띄워 주는 것 뿐, 실제로 js에서는 전환도 하고 실행도 잘 됨
type Persons = { readonly name: string };
const person: Persons = { name: "이름" };

// type 끼리도 Union Type으로 만드는 것이 가능하다.
type Name = string;
type Age = number;
type Human = Name | Age;

// Objct 타입안에서 서로의 속성을 extend해서 새로운 type을 만들고 싶다면 &를 사용하면 된다.
type PositionX = { x: number };
type PositionY = { x: number; y: number; z: number };

type newPosition = PositionX & PositionY;
// { x: number, y: number, z: number }

let doTest: newPosition = { x: 3, y: 1, z: 3 };

/**
 * (참고)
 * 같은 이름의 type변수는 재정의가 불가능하다.
 */

type Homework2 = { color?: string; size: number; readonly position: number[] };
let 테스트용변수: Homework2 = {
  size: 123,
  position: [1, 2, 3],
};

type User = { name: string; age?: number; email?: string; phone: number };
type Adult = { adult: boolean };
type newUser = User & Adult;

let 회원가입정보: newUser = {
  name: "kim",
  phone: 123,
  adult: false,
};

// interface 비슷하게 extends 기능을 사용 가능하다.
type Animal = { name: string };
type Cat = { age: number } & Animal;

// 그럼 뭐가 다르냐!! interface는 중복선언이 가능하다.
// 중복으로 선언할 경우 둘의 타입 규정을 자동으로 합쳐버린다.
// 즉 간단하게 타입을 기존의 interface에 더할 수 있어서 커스터마이징이 편하다.
// type은 중복선언하면 Error를 뱉는다.
// interface는 유연하고 type은 엄격하다.

// 경험해 보듯이 type을 &기호로 서로 모순되게 합쳐도 에러를 안뱉는다.
// 실행을 시켜봐야 문제가 생기는 걸 알 수 있다.
// 반면 interface는 서로 충돌하면 즉시 에러를 자동으로 경고해 준다.
// 엄격하게 하나의 종류로 고정해 버릴꺼면 type을 유연하게 열어둘거라면 interface를 사용하자.

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let studet: Student = { name: "Kim" };
let teacher: Teacher = { name: "Kang", age: 30 };

// 문제1
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 문제2
interface Pdct {
  product: string;
  price: number;
}

let 장바구니: Pdct[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// 문제3
interface newPdct extends Pdct {
  card: boolean;
}

// 문제4
interface CalFunc {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let calObj: CalFunc = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

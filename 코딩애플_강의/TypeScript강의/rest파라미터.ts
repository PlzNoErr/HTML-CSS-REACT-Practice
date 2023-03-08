// 배열로 만들어지니 당연히 배열로 타입지정을 해야됨.
function 함수2(...a: number[]) {
  console.log(a);
}

function 함수3({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

// 문제1

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.

// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.

// 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

function checkMax(...params: number[]): number {
  return Math.max(...params);
}

console.log(checkMax(1, 2, 3, 4, 5, 6));

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.

// 함수( { user : 'kim', comment : [3,5,4], admin : false } )

// 어떻게 코드를 짜야할까요?

// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

function testFunction({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user, comment, admin);
}

testFunction({ user: "kim", comment: [3, 5, 4], admin: false });

function test22([a, b, c]: [number, string, boolean]) {
  console.log(a, b, c);
}
test22([40, "wine", false]);

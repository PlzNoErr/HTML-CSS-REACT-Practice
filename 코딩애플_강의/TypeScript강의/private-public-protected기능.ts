class UserTest {
  // 모든 자식들이 자유롭게 이용 가능
  // 아무것도 안붙이면 자동으로 붙음. 대부분 생략
  public name: string;

  // private가 붙으면 class 안에서만 수정, 이용이 가능하다.
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

    // private 걸렸어도 내부에서는 사용 가능
    console.log(this.name + this.age);
  }

  // setter를 사용하면 private도 수정가능
  setAge(num: number): void {
    this.age = num;
  }
}

let 유저1 = new UserTest("dragon", 12);

// age 변수는 private 걸렸기 때문에 애러를 띄운다.
// 유저1.age = 11;

// 그럼 age를 수정하고 싶다면?
// setter를 사용하면 해결
유저1.setAge(14);

// public이라면 this.name = name; 축약 가능
class Person12 {
  constructor(public name: string) {}
}
let 유저2 = new Person12("john");

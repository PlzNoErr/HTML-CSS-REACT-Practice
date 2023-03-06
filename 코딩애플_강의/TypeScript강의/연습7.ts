class Person {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

let 사람1 = new Person("누누", 12);
let 사람2 = new Person("리신", 42);
사람1.setName("호랑이");
console.log(사람1);
console.log(사람2);

// 문제1
class Car {
  carType;
  carPrice;
  constructor(type: string, price: number) {
    this.carType = type;
    this.carPrice = price;
  }
  tax(): number {
    return this.carPrice / 10;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

// 문제2
class Word {
  num: number[] = [];
  str: string[] = [];
  constructor(...parameters: (string | number)[]) {
    parameters.forEach((el) => {
      if (typeof el === "string") this.str.push(el);
      else this.num.push(el);
    });
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']

function genericFun<T extends string | string[]>(str: T) {
  return str.length;
}

console.log(genericFun<string>("12345"));
//
//
interface Animal11 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function 함수123<Type>(x: string): Type {
  return JSON.parse(x);
}
let result = 함수123<Animal11>(data);
console.log(result);
//
//
class Person1234<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a = new Person1234("어쩌구");
a.name; //any 타입이 되었넹

type Car123 = {
  wheel: number;
  model: string;
};

interface Bike123 {
  wheel: 2;
  model: string;
}

export type ObjFunction11 = (a?: object) => void;
export { Car123, Bike123 };

//////

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };

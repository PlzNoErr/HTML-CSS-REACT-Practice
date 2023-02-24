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

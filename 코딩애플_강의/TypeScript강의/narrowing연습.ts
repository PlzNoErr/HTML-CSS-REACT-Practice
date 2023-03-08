function 네로잉(a?: string) {
  a && console.log("스트링이 들어옴");
}

네로잉("우라");

///

type Fish = { swim: string };
type Bird = { fly: string };

function fb(animal: Fish | Bird) {
  if ("swim" in animal) console.log("너 물고기구나");
  else console.log("너 새구나");
}

fb({ swim: "물고기" });

///

let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log("이놈 날짜 Class임");
}

function 네로잉(a) {
    a && console.log("스트링이 들어옴");
}
네로잉("우라");
function fb(animal) {
    if ("swim" in animal)
        console.log("너 물고기구나");
    else
        console.log("너 새구나");
}
fb({ swim: "물고기" });
///
var 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log("이놈 날짜 Class임");
}

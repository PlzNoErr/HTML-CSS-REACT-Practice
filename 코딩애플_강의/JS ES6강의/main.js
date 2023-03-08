let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let cactusArr = [];
let jumping = false;
let jumpTimer = 0;
let animation;

document.addEventListener("keydown", function (e) {
  if (e.code == "Space") jumping = true;
});

function 프레임마다실행() {
  animation = requestAnimationFrame(프레임마다실행);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    let cactus = new Cactus();
    cactusArr.push(cactus);
  }
  cactusArr.forEach((a, i, o) => {
    if (a.x < -50) o.splice(i, 1);
    a.x -= 7;

    crashCheck(dino, a);

    a.draw();
  });

  if (jumping) {
    dino.y -= 5;
    jumpTimer++;
  }
  if (!jumping) {
    if (dino.y < 200) dino.y += 5;
  }

  if (jumpTimer > 20) {
    jumping = false;
    jumpTimer = 0;
  }

  dino.draw();
}
function crashCheck(dino, cactus) {
  let x차이 = cactus.x - (dino.x + dino.width);
  let y차이 = cactus.y - (dino.y + dino.height);
  if (x차이 < 0 && y차이 < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

프레임마다실행();

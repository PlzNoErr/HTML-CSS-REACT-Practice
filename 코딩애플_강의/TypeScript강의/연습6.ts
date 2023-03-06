let 제목 = document.querySelector("#title");
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "google.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", () => {
  console.log("눌렀당");
});

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

let 모두 = document.querySelectorAll(".naver");
모두.forEach((el) => {
  if (el instanceof HTMLAnchorElement) {
    el.href = "google.com";
  }
});

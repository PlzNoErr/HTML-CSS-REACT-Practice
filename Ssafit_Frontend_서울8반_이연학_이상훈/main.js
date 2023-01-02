window.addEventListener("load", function () {
  const Arr = [];
  const URL = "data/video.json"
  axios({
    url: URL,
    method: 'GET'
  })
  .then((res) => {
    return res.data;
  })
  .then((res) => {

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")
const img7 = document.getElementById("img7")
const img8 = document.getElementById("img8")

const title1 = document.getElementById("title1")
const title2 = document.getElementById("title2")
const title3 = document.getElementById("title3")
const title4 = document.getElementById("title4")
const title5 = document.getElementById("title5")
const title6 = document.getElementById("title6")
const title7 = document.getElementById("title7")
const title8 = document.getElementById("title8")


const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const text4 = document.getElementById("text4")
const text5 = document.getElementById("text5")
const text6 = document.getElementById("text6")
const text7 = document.getElementById("text7")
const text8 = document.getElementById("text8")


UU1 = "https://img.youtube.com/vi/"+res[0].id+"/0.jpg";
UU2 = "https://img.youtube.com/vi/"+res[1].id+"/0.jpg";
UU3 = "https://img.youtube.com/vi/"+res[2].id+"/0.jpg";
UU4 = "https://img.youtube.com/vi/"+res[3].id+"/0.jpg";
UU5 = "https://img.youtube.com/vi/"+res[4].id+"/0.jpg";
UU6 = "https://img.youtube.com/vi/"+res[5].id+"/0.jpg";
UU7 = "https://img.youtube.com/vi/"+res[6].id+"/0.jpg";
UU8 = "https://img.youtube.com/vi/"+res[7].id+"/0.jpg";
url1 = res[0].url
url2 = res[1].url
url3 = res[2].url
url4 = res[3].url
url5 = res[4].url
url6 = res[5].url
url7 = res[6].url
url8 = res[7].url

img1.setAttribute("src",UU1)
img2.setAttribute("src",UU2)
img3.setAttribute("src",UU3)
img4.setAttribute("src",UU4)
img5.setAttribute("src",UU5)
img6.setAttribute("src",UU6)
img7.setAttribute("src",UU7)
img8.setAttribute("src",UU8)

img1.setAttribute("value",res[0].url)
img2.setAttribute("value",res[1].url)
img3.setAttribute("value",res[2].url)
img4.setAttribute("value",res[3].url)
img5.setAttribute("value",res[4].url)
img6.setAttribute("value",res[5].url)
img7.setAttribute("value",res[6].url)
img8.setAttribute("value",res[7].url)

title1.innerHTML=res[0].title
title2.innerHTML=res[1].title
title3.innerHTML=res[2].title
title4.innerHTML=res[3].title
title5.innerHTML=res[4].title
title6.innerHTML=res[5].title
title7.innerHTML=res[6].title
title8.innerHTML=res[7].title

text1.innerHTML=res[0].channelName
text2.innerHTML=res[1].channelName
text3.innerHTML=res[2].channelName
text4.innerHTML=res[3].channelName
text5.innerHTML=res[4].channelName
text6.innerHTML=res[5].channelName
text7.innerHTML=res[7].channelName
text8.innerHTML=res[8].channelName
return;
  })
})

function move(value){
  location.href=("reviewlist.html?value="+value+"&q=0")
}

const slides = document.querySelector('#slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('#slides .card'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = 2; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 300; //한개의 슬라이드 넓이
const slideMargin = 20; //슬라이드간의 margin 값

function moveSlide(num) {
  slides.style.left = -num * 400 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});
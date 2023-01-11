import sty from "./Sho.module.css";
import styled from "styled-components";

// 장점 : CSS 파일간에 서로 간섭을 하지 않음. Vue의 scoped와 같음.
// 사실 CSS 간섭을 피하고 싶으면 이름.module.css 로 작명하면 그만임.
// 또한 바로 컴포넌트를 주입하는 식이라 속도가 증가함.
// 최고의 장점은 props로 컴포넌트 재활용이 가능하다는 점이다.
// 당연히 간단한 프로그래밍도 가능하다.
let YellowBtn = styled.button`
  background: ${(props) => (props.color === "yellow" ? "black" : "blue")};
  color: ${(props) => props.color};
  padding: 10px;
`;
// 단점 : jsx 파일이 더러워짐.
// 중복시 컴포넌트간 import 해야 하는데 그럴 꺼면 그냥 css 새로 만드는게?
// 협업시 상대가 못알아 먹을 가능성 높음

export default function Sho(props) {
  let idx =
    "https://codingapple1.github.io/shop/shoes" +
    (props.shoData.id + 1) +
    ".jpg";
  return (
    <div className="col-md-4">
      <img src={idx} width="80%" alt="" />
      <h4 className={sty.head + " " + sty.mind}>{props.shoData.title}</h4>
      <YellowBtn color="yellow">버튼</YellowBtn>
      <p>{props.shoData.content}</p>
      <p>{props.shoData.price}원</p>
    </div>
  );
}

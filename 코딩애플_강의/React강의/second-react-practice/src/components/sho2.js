import { useParams } from "react-router-dom";

export default function Sho2(props) {
  let { num, nu } = useParams();
  let idx =
    "https://codingapple1.github.io/shop/shoes" +
    (props.shoData[num].id + 1) +
    ".jpg";
  return (
    <div className="col-md-4">
      <img src={idx} width="80%" alt="" />
      <h4>{props.shoData[num].title}</h4>
      <p>{props.shoData[num].content}</p>
      <p>{props.shoData[nu].price}원</p>
    </div>
  );
}

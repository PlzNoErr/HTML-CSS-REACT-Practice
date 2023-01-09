export default function Sho(props) {
  let idx =
    "https://codingapple1.github.io/shop/shoes" +
    (props.shoData.id + 1) +
    ".jpg";
  return (
    <div className="col-md-4">
      <img src={idx} width="80%" alt="" />
      <h4>{props.shoData.title}</h4>
      <p>{props.shoData.content}</p>
      <p>{props.shoData.price}원</p>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  let [제목, set제목] = useState("블로그임");

  /* 오만가지를 useState 만들지 말고 로고 처럼 박으면 안바뀌는건 그냥 위처럼 넣는다 */

  let [데이터1, 데이터변경함수] = useState([
    "서초갈비",
    "이토야 돈까스",
    "그시키라",
  ]);
  /* useState를 사용하면 실시간으로 데이터가 변경시 자동으로 랜더링 해준다. */
  let [좋아요, 좋아요변경함수] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{제목}</h4>
      </div>
      <div className="list">
        <button
          onClick={() => {
            // 깊은 복사
            let copy = [...데이터1];
            copy[0] = "바뀐다!";
            데이터변경함수(copy);
          }}
        >
          {/* state변경 함수의 경우 기존값===바뀐값이면 작동하지 않는다
          => 즉 항상 깊은 복사를 해줘서 주소값을 바꿔야 한다. */}
          클릭하면 Array값 수정함
        </button>

        <button
          onClick={() => {
            // 참조형 변수들은 항상 깊은복사를 해야한다. 그래야 state 변경을 알아먹음.
            let 데이터_정렬 = [...데이터1];
            데이터_정렬.sort();
            데이터변경함수(데이터_정렬);
          }}
        >
          클릭하면 가나다 순으로 바꿔줌
        </button>

        <button
          onClick={() => {
            if (!modal) setModal(true);
            else setModal(false);
          }}
        >
          클릭하면 모달 보였다 안보였다~
        </button>

        <h4 style={{ color: "black", fontSize: "30px" }}>{데이터1[0]}</h4>
        {/* {{ }}를 사용해 태그의 속성이나 html을 직접 고칠 수 있다. */}
        {/* { }를 활용해서 데이터를 바인딩 한다. */}
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h2>
          {데이터1[1]}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              let copy = [...좋아요];
              copy[0] += 1;
              좋아요변경함수(copy);
            }}
          >
            {/* 이벤트 함수 안에는 화살표 함수를 써야한다. */}
            👍
          </span>
          {좋아요[0]}
        </h2>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h2>{데이터1[2]}</h2>
        <p>2월 17일 발행</p>
      </div>

      {/* 반복문을 사용해서 HTML을 반복 실행하기 */}
      {데이터1.map(function (data, idx) {
        return (
          // key값은 고유해야 함. 랜더링에 연관된 문제라서 겹치게되면
          // 중복해서 랜더링이 일어 날 수 있음.
          <div className="list" key={idx}>
            <h2>
              {data} !!{데이터1[idx]}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  let copy = [...좋아요];
                  copy[idx] += 1;
                  좋아요변경함수(copy);
                }}
              >
                {/* 이벤트 함수 안에는 화살표 함수를 써야한다. */}
                👍
              </span>
              {좋아요[idx]}
            </h2>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <br />
      <input
        type="text"
        // 이벤트 종류가 30개 쯤 된다. onChange는 input값이 바뀔때마다
        // 자동으로 실행된다. 스크롤을 굴릴때 등등등 종류는 졸라 많다.
        // e는 이벤트 객체를 의미한다.
        onChange={(e) => {
          // 이러면 input값이 바뀌면 실시간으로 그 값은 로그에 띄운다.
          console.log(e.target.value);
          입력값변경(e.target.value);
          console.log("나온다 나와" + 입력값);
          // 상위 태그에도 같은 이벤트가 걸려있으면 여기서 실행된 이벤트가
          // 연이어서 위에 이벤트까지 실행시켜 보리는 이벤트 버블링이 발생한다/
          // 이벤트 버블링을 막고 싶다면 아래 함수를 적어주자.
          // 이건 겪어봐야 확실하게 느낌이 올듯
          e.stopPropagation();
        }}
      />
      <button
        onClick={() => {
          set제목(입력값);
        }}
      >
        누르면 input값으로 제목이 바뀐다!!!
      </button>

      {/* React 에서는 if를 3항 연사자를 사용해서 구현함 */}
      {/* 부모의 여러 date를 자식에게 넘겨주려면 어떻게 해야할까? */}
      {/* 자바스크립트 변수는 다 보낼 수 있다. 단순 원시타입 데이터,
          참조형 데이터, 함수도 보낼 수 있다. */}
      {/* 상속할때 좀 귀찮더라도 데이터 따로, 변경함수 따로 내려야 한다. */}
      {modal ? (
        <Modal
          부모데이터={제목}
          color={"yellow"}
          데이터변경={데이터변경함수}
          데이터상속={데이터1}
        />
      ) : null}
    </div>
  );
}

// 새로운 함수를 선언해서 Component를 만들어 보자
function Modal(props) {
  return (
    // Vue처럼 하나의 태그로 모든 컴포넌트가 묶여야 하는데
    // 아무 의미도 없는 div 쓰기 싫을 때 <> ~ </>로 묶어주자.
    // 걍 div로 묶어도 되긴함
    <>
      <div className="modal" style={{ background: props.color }}>
        {/* 자식이 부모의 데이터를 활용하는 방법!!! */}
        {/* 패륜, 불륜, 근친 전송 금지임. 무조건 부모가 주는 것만 가능 */}
        <h4>{props.부모데이터}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let copy = [...props.데이터상속];
            copy[0] = "강남역 김치볶음밥";
            props.데이터변경(copy);
          }}
        >
          누르면 첫번째 데이터가 바뀜
        </button>
      </div>
    </>
  );
}

export default App;

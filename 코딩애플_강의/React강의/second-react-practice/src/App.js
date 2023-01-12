import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import Shooo from "./components/Sho";
import Sho2 from "./components/sho2";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import data from "./data";
import { useDispatch, useSelector } from "react-redux";
import { set변수1, set변수2, set변수3 } from "./test.store";

function App() {
  let [shoes, setShose] = useState([]);
  let navigate = useNavigate();

  // 여기서 state는 등록된 모든 state를 의미한다.
  // "state.특정변수"로 필요한 변수 한개만 딱 정해서 빼오는 것도 가능하다
  // 변수명 선언은 편한대로 하면 된다.
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((res) => {
        console.log(res);
        let copy = [...data, ...res.data];
        setShose(copy);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      {/*  */}
      <Routes>
        <Route
          path="/"
          element={
            <div
              onClick={() => {
                dispatch(set변수2("진짜 여기 적은대로 바뀌냐?"));
                dispatch(set변수3());
              }}
            >
              {state.변수1.v1} + {state.변수2}
            </div>
          }
        />
        <Route path="/detail" element={<div>보여준다?</div>} />
        <Route
          path="/detail/:num/:nu"
          element={<Sho2 shoData={shoes}></Sho2>}
        />

        {/* Nested Routes => 거의 변화가 없는 페이지를 제활용 할 때 */}
        <Route
          path="/about"
          element={
            <div>
              어바웃 페이지임 <Outlet></Outlet>
            </div>
          }
        >
          <Route path="kind" element={<div>어바웃 카인드 페이지임</div>} />
          <Route path="hope" element={<div>어바웃 호프 페이지임</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지에요!!</div>} />
      </Routes>
      <Link to="/">홈?</Link>
      <Link to="/detail">디테일?</Link>
      {/*  */}

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            style={{ color: "white" }}
          >
            SSAFY핑몰
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
              style={{ color: "white" }}
              href="#home"
            >
              뒤로가기
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(1);
              }}
              className="head"
              href="#features"
            >
              앞으로가기
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mainBg"></div>
      <h2>상품 목록</h2>
      <div className="container">
        <div className="row">
          {shoes.map((sho, i) => {
            return <Shooo shoData={sho} key={i}></Shooo>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

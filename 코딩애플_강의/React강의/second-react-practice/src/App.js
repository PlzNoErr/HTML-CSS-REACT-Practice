import "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Shooo from "./components/Sho";
import Sho2 from "./components/sho2";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/*  */}
      <Routes>
        <Route path="/" element={<div>이건 메인 페이지다</div>} />
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
      <div className="main-bg"></div>
      <h2>상품 목록</h2>
      <div className="container">
        <div className="row">
          {shoes.map(function (sho) {
            return <Shooo shoData={sho} key={sho.id}></Shooo>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

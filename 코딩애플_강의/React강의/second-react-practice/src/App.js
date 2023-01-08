import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Shooo from "./components/sho";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }} href="#home">
            SSAFY핑몰
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#features">
              Features
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

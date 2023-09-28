import { Row, Col, Container, Button } from "react-bootstrap";
import { useState } from "react";
import Counter from "./Components/Counter";
import MyForm from "./Components/MyForm";
import MyNavBar from "./Components/MyNavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Movies from "./Test/Views/Movies";
import Cats from "./Test/Views/Cats";

function App() {
  let [count, setCount] = useState(1);
  let [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setFormInfo({ ...formInfo, [name]: value });
  };

  const increaseCount = () => {
    return setCount(++count);
  };

  const handleSubmit = () => {
    console.log("We would be submitting this: ", formInfo);
    return;
  };

  return (
    <div>
      <MyNavBar />
      <Container>
        <Row>
          <h3>React testing</h3>
        </Row>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cats" element={<Cats />} />
        </Routes>
        {/* <Row style={{ paddingTop: "10px", display: "flex", justifyContent: "center" }}>
        <Counter count={count} increaseCount={increaseCount} />
      </Row> */}
        {/* <Row style={{ paddingTop: "10px", display: "flex", justifyContent: "center" }}>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <MyForm formInfo={formInfo} handleChange={handleChange} handleSubmit={handleSubmit} />
          </Col>
        </Row> */}
        {/* Some block of text
      <SomeComponent name="Daniel" isTired={true} borderColor="red" />
      <NewComponent>
        Whatever is in here
        <SomeComponent name="Alex" borderColor="blue" />
      </NewComponent>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <Button variant="primary">Test button</Button> */}
      </Container>
    </div>
  );
}

export default App;

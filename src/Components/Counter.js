import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Counter = (props) => {
  const { count, increaseCount } = props;
  return (
    <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
      <h4>Our count: {count}</h4>
      <Button variant="primary" onClick={increaseCount}>
        Increase!
      </Button>
    </Col>
  );
};

export default Counter;

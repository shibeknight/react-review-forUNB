import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

const MyCard = (props) => {
  const { item, type } = props;
  console.log('item', item)
  if (type === "cats") {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.url} />
        <Card.Body>
          <Card.Title>
            {item.id}
          </Card.Title>
          <Card.Text>A cat??</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          {item.title === "The Matrix" ? <span style={{ fontWeight: "bold", color: "white", backgroundColor: "green" }}>{item.title}</span> : item.title}
        </Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Subtitle>{item.releaseDate}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default MyCard;

import React from "react";
import { Form, Button } from "react-bootstrap";

const MyForm = (props) => {
  const { formInfo, handleChange, handleSubmit } = props;
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="firstName" value={formInfo.firstName} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Last name" name="lastName" value={formInfo.lastName} onChange={handleChange}/>
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;

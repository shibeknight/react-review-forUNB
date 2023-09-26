import React from "react";

const SomeComponent = (props) => {
  const { name, isTired, borderColor } = props;
  return (
    <div style={{border: `solid ${borderColor} 5px`}}>
      <h3>Hi, my name is {name} </h3>
      <h4>Just testing stuff</h4>
      {isTired ? <p>I am tired</p> : ""}
    </div>
  );
};

export default SomeComponent;

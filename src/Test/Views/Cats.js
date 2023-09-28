import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import MyCard from "../Components/MyCard";

const Cats = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCats = async () => {
    setLoading(true);
    const result = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=aege&api_key=${process.env.REACT_APP_API_KEY}`);
    const jsonResult = await result.json();
    console.log(jsonResult);

    setData(jsonResult);
    return setLoading(false);
  };

  useEffect(() => {
    getCats();
  }, []);

  if (loading) {
    return (
      <>
        <Row>
          <h4>Loading...</h4>
        </Row>
      </>
    );
  }

  return (
    <Row>
      <h4>Some cats</h4>
      {data &&
        data.map((cat, i) => {
          return (
            <>
              <MyCard type="cats" item={cat} />
            </>
          );
        })}
    </Row>
  );
};

export default Cats;

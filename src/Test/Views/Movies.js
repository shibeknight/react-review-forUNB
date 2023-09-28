import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import MyCard from "../Components/MyCard";

const movies = [
  {
    title: "The Matrix",
    releaseDate: "1999",
    image: "someurl",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence",
  },
  {
    title: "The Shawshank Redemption",
    releaseDate: "September 23, 1994",
    image: "https://example.com/shawshank_redemption.jpg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    title: "The Godfather",
    releaseDate: "March 15, 1972",
    image: "https://example.com/the_godfather.jpg",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    title: "Pulp Fiction",
    releaseDate: "October 14, 1994",
    image: "https://example.com/pulp_fiction.jpg",
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
];

const Movies = () => {
  return (
    <Row>
      <h4>Movies</h4>
      {movies.map((item, i) => {
        return (
          <MyCard item={item} key={i}/>
        );
      })}
    </Row>
  );
};

export default Movies;

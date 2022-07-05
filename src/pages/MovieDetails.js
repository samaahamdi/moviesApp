import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axiosInstance from "../network/config";
import LanguageContext from "../context/language";
export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  console.log(params.id);
  const { contextLang } = useContext(LanguageContext);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`, {
        params: {
          language: contextLang,
        },
      })
      .then((res) => {
        setMovieDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  movieDetails.poster_path =
    "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
    movieDetails.poster_path;
  return (
    <Row xs={2} md={4} className="g-4">
      <Col className="mx-auto">
        <Card className="h-100">
          <Card.Img variant="top" src={movieDetails.poster_path} />
          <Card.Body>
            <Card.Title>{movieDetails.title}</Card.Title>
            <Card.Text>{movieDetails.overview}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

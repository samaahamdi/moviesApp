import { useEffect } from "react";
// import axios from "axios";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

export default function Favourites() {
  const fav = useSelector((state) => state.movies.favourites);

  useEffect(() => {
    // component did mount
    console.log("FavouritesDidMount");
    return () => {
      // component will unmount
      console.log("FavouritesWillUnmount");
      console.log("---------------------");
    };
  }, []);

  useEffect(() => {
    // component did update
    console.log("FavouritesDidUpdate");
  }, []); //array not empty
  return (
    <Row xs={2} md={4} className="g-4">
      {fav.map((movie) => {
        return (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        );
      })}
    </Row>
  );
}

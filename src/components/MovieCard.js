import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  addToFavourites,
  removeFromFavourites,
} from "../store/actions/favourite";
import { useSelector, useDispatch } from "react-redux";

export default function MovieCard({ movie }) {
  movie.poster_path =
    "https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path;
  const dispatch = useDispatch();
  const toggleFavourates = (movie) => {
    if (fav.includes(movie)) {
      dispatch(removeFromFavourites(movie));
    } else {
      dispatch(addToFavourites(movie));
    }
  };
  const fav = useSelector((state) => state.movies.favourites);
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.poster_path} />
      <Card.Body>
        <Card.Title
          style={{ fontSize: "14px" }}
          onClick={() => toggleFavourates(movie)}
        >
          {movie.title}
          {"          "}
          <FontAwesomeIcon
            icon={faHeart}
            style={fav.includes(movie) ? { color: "red" } : { color: "gray" }} //findIndex
          />
        </Card.Title>

        {/* <Card.Text style={{ fontSize: "12px" }}>{movie.overview}</Card.Text> */}
        <Link to={`/movieDetails/${movie.id}`}>
          <Button>More info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

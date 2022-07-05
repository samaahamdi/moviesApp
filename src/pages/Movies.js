import { useEffect, useContext } from "react";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList } from "../store/actions/favourite";
import LanguageContext from "../context/language";

export default function Movies() {
  const movies = useSelector((state) => state.movies.allMovies);

  const dispatch = useDispatch();
  const { contextLang } = useContext(LanguageContext);
  useEffect(() => {
    console.log("MoviesDidUpdate");
    dispatch(getMoviesList(contextLang));
  }, []);
  return (
    <Row xs={2} md={4} className="g-4">
      {movies.map((movie) => {
        return (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        );
      })}
    </Row>
  );
}

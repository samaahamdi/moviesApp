import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LanguageContext from "../context/language";
import Button from "react-bootstrap/Button";

export default function NavigationBar() {
  const location = useLocation();
  console.log(location.pathname);
  const fav = useSelector((state) => state.movies.favourites.length);
  console.log("fav   ", fav);
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const changeAppLanguage = () => {
    setContextLang(contextLang === "ar" ? "en" : "ar");
  };
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Navbar.Brand>
        <NavLink
          to="/"
          style={() =>
            location.pathname === "/"
              ? { color: "white", textDecoration: "none" }
              : { color: "gray", textDecoration: "none" }
          }
        >
          <img
            alt=""
            src="images/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          App Name
        </NavLink>
      </Navbar.Brand>
      <Nav>
        <NavLink
          to="/movies"
          style={() =>
            location.pathname === "/movies"
              ? { color: "white", textDecoration: "none" }
              : { color: "gray", textDecoration: "none" }
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/favourites"
          className="mx-3"
          style={() =>
            location.pathname === "/favourites"
              ? { color: "white", textDecoration: "none" }
              : { color: "gray", textDecoration: "none" }
          }
        >
          Favourits{"  "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
          {"  " + fav}
        </NavLink>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text to="/" style={{ color: "white", textDecoration: "none" }}>
          Language :{" "}
          <Button
            className="btn btn-outline-light btn-dark"
            onClick={() => {
              changeAppLanguage();
            }}
          >
            {contextLang}
          </Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

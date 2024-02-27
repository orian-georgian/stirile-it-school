import { Navbar, Nav, Container, Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";

import useFavorites from "../../hooks/useFavorites";

import { FaHeart } from "react-icons/fa";

import "./Header.css";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <Navbar expand="lg" className="itschool-news-header py-3">
      <Container className="max-content-width" fluid>
        <Navbar.Brand>
          <Link to="/">
            <Image src="./images/white-logo.svg" width={100} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <NavLink path="/category/football" title="Football" />
            <NavLink path="/category/weather" title="Weather" />
            <NavLink path="/category/technology" title="Technology" />
            <Link
              className="nav-link favorites-link position-relative ms-5"
              to="/favorites"
            >
              <Stack
                className="position-absolute"
                direction="horizontal"
                gap={3}
              >
                <div className="favorites-size">{favorites.length}</div>
                <FaHeart size={36} color="var(--white)" />
              </Stack>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

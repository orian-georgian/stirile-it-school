import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import NavLink from "../NavLink/NavLink";

import "./Header.css";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <Navbar expand="lg" className="itschool-news-header py-3">
      <Container className="max-content-width" fluid>
        <Navbar.Brand>
          <Link to="/">
            <Image src="/images/white-logo.svg" width={100} />
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

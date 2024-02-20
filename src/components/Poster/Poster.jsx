import { Stack, Row, Col, Image } from "react-bootstrap";

import "./Poster.css";

export default function Poster() {
  return (
    <Stack className="itschool-poster">
      <Row className="max-content-width">
        <Col md={6} className="d-flex justify-content-center flex-column gap-4">
          <h1 className="h1">Discover the Latest Headlines!</h1>
          <p>
            Step into a world of breaking news and captivating stories that keep
            you informed and engaged. Dive into our latest updates, where every
            click unveils a new chapter in the ever-evolving narrative of our
            world. Explore, learn, and stay ahead with our comprehensive
            coverage. Start your journey now!
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image className="poster-image" src="/images/news-lady.png" />
        </Col>
      </Row>
    </Stack>
  );
}

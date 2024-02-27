import { Stack, Row, Col, Image } from "react-bootstrap";

import "./Poster.css";

export default function Poster({ title, text, image }) {
  return (
    <Stack className="itschool-poster">
      <Row className="max-content-width">
        <Col
          md={6}
          className="d-flex justify-content-center flex-column gap-4 h-500"
        >
          <h1 className="h1">{title}</h1>
          <p>{text}</p>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image className="poster-image" src={image} />
        </Col>
      </Row>
    </Stack>
  );
}

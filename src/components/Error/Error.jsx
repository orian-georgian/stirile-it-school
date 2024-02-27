import { Stack, Row, Col, Image } from "react-bootstrap";

export default function Error() {
  return (
    <Stack className="itschool-error py-5">
      <Row className="max-content-width">
        <Col>
          <Image
            src="/images/error.webp"
            alt="error"
            fluid
            className="d-block mx-auto"
          />
        </Col>
      </Row>
    </Stack>
  );
}

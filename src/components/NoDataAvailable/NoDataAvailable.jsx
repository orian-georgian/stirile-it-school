import { Stack, Row, Col, Image } from "react-bootstrap";

export default function NoDataAvailable() {
  return (
    <Stack>
      <Row className="max-content-width py-5">
        <Col>
          <Stack gap={5}>
            <div className="justify-content-center d-flex">
              <Image src="/images/no-data.webp" alt="No data available" />
            </div>

            <h2 className="h2 text-center mt-5">No data available</h2>
          </Stack>
        </Col>
      </Row>
    </Stack>
  );
}

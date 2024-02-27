import { Stack, Row, Col, Image } from "react-bootstrap";

import "./Footer.css";

export default function Footer() {
  return (
    <Stack className="itschool-footer">
      <Row className="max-content-width py-5 d-flex">
        <Col className="d-flex flex-column gap-4 pe-5" md={3}>
          <Image src="./images/dark-logo.svg" width={108} />
          <p>
            Din 2014, peste 8000 de începători ne-au ales să le fim partener în
            procesul lor de transformare digitală.
          </p>

          <div className="d-flex flex-column gap-2">
            <small className="text-muted">Social Media</small>
            <Stack direction="horizontal" gap={3}>
              <Image src="./images/facebook.svg" width={24} />
              <Image src="./images/linkedin.svg" width={24} />
              <Image src="./images/youtube.svg" width={24} />
              <Image src="./images/instagram.svg" width={24} />
            </Stack>
          </div>
        </Col>

        <Col className="d-flex flex-column gap-4" md={3}>
          <small className="text-muted">IT School</small>
          <Stack gap={3}>
            <a href="https://www.itschool.ro/cursuri">Cursuri</a>
            <a href="https://www.itschool.ro/certificari">Certificări</a>
            <a href="https://www.itschool.ro/despre/faq">Întrebări frecvente</a>
            <a href="https://www.itschool.ro/contact">Contact</a>
          </Stack>
        </Col>

        <Col className="d-flex flex-column gap-4" md={3}>
          <small className="text-muted">Mai mult</small>
          <Stack gap={3}>
            <a href="https://www.itschool.ro/despre/testimoniale">
              Testimoniale
            </a>
            <a href="https://www.itschool.ro/despre/traineri">Traineri</a>
            <a href="https://itschoolromania.typeform.com/trainer">
              Devino trainer
            </a>
            <a href="https://www.itschool.ro/corporate/parteneriate">
              Parteneriate
            </a>
          </Stack>
        </Col>

        <Col className="d-flex flex-column gap-4" md={3}>
          <small className="text-muted">Utile</small>
          <Stack gap={3}>
            <a href="https://www.juniors.ro/">Juniors</a>
            <a href="https://www.techevents.ro/">TechEvents</a>
            <a href="https://www.certiprime.ro/">CertiPrime</a>
            <a href="https://www.edu.ro/">MEN</a>
            <a href="https://anpc.ro/">ANPC</a>
          </Stack>
        </Col>
      </Row>
    </Stack>
  );
}

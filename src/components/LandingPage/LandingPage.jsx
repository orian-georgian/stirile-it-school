import { Stack } from "react-bootstrap";

import Section from "../Section/Section";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <Stack className="itschool-landing-page">
      <Section
        title="Football"
        section="football"
        itemsPerPage={6}
        hasPagination={false}
      />

      <Section
        title="Weather"
        section="weather"
        itemsPerPage={6}
        hasPagination={false}
      />
      <Section
        title="Technology"
        section="technology"
        itemsPerPage={6}
        hasPagination={false}
      />
    </Stack>
  );
}

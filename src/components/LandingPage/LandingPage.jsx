import { Stack } from "react-bootstrap";

import Section from "../Section/Section";
import Poster from "../Poster/Poster";

export default function LandingPage() {
  return (
    <Stack className="itschool-landing-page articles-background">
      <Poster
        title="Discover the Latest Headlines!"
        text="Step into a world of breaking news and captivating stories that keep
            you informed and engaged. Dive into our latest updates, where every
            click unveils a new chapter in the ever-evolving narrative of our
            world. Explore, learn, and stay ahead with our comprehensive
            coverage. Start your journey now!"
        image="/images/news-lady.png"
      />
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

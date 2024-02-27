import { useParams } from "react-router-dom";
import { Stack } from "react-bootstrap";

import Section from "../Section/Section";

import Poster from "../Poster/Poster";

import { sectionsEnum } from "../../constants/sections-enum";

export default function ArticleCategory() {
  const { categoryType } = useParams();

  const title = categoryType.charAt(0).toUpperCase() + categoryType.slice(1);

  return (
    <Stack className="articles-background">
      {categoryType === sectionsEnum.FOOTBALL && (
        <Poster
          title={title}
          text="Breaking News! In the world of football, excitement mounts as teams gear up for an electrifying clash on the pitch. Stay tuned as we bring you the latest updates, exclusive insights, and thrilling highlights from the heart of the beautiful game. Get ready to witness the passion, the drama, and the unforgettable moments that make football the world's most beloved sport."
          image="./images/football-guy.png"
        />
      )}

      {categoryType === sectionsEnum.WEATHER && (
        <Poster
          title={title}
          text=" Whether you're planning your day or preparing for the week ahead, trust us to keep you informed and prepared for whatever weather may come your way. So grab your umbrella or soak up the sun, because we're here to deliver the forecast you need to navigate your day with confidence. Stay tuned for all the weather updates right here!"
          image="./images/weather-lady.png"
        />
      )}

      {categoryType === sectionsEnum.TECHNOLOGY && (
        <Poster
          title={title}
          text="Welcome to the forefront of innovation! In the ever-evolving world of technology, where breakthroughs shape our future, we're your gateway to the latest advancements and trends. From groundbreaking gadgets to revolutionary discoveries, we're here to decode the complexities and unveil the possibilities that technology offers."
          image="./images/tech-guy.png"
        />
      )}
      <Section section={categoryType} itemsPerPage={30} hasPagination={true} />
    </Stack>
  );
}

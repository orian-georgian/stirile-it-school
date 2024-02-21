import { useParams } from "react-router-dom";
import { Stack } from "react-bootstrap";

import Section from "../Section/Section";

export default function ArticleCategory() {
  const { categoryType } = useParams();

  const title = categoryType.charAt(0).toUpperCase() + categoryType.slice(1);

  return (
    <Stack className="articles-background">
      <Section
        title={title}
        section={categoryType}
        itemsPerPage={30}
        hasPagination={true}
      />
    </Stack>
  );
}

import { useParams } from "react-router-dom";

import Section from "../Section/Section";

export default function ArticleCategory() {
  const { categoryType } = useParams();

  const title = categoryType.charAt(0).toUpperCase() + categoryType.slice(1);

  return (
    <Section
      title={title}
      section={categoryType}
      itemsPerPage={30}
      hasPagination={true}
    />
  );
}

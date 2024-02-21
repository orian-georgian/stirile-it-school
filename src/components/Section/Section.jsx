import { Stack, Row, Col } from "react-bootstrap";

import ArticleCard from "../ArticleCard/ArticleCard";
import ArticlesPagination from "../ArticlesPagination/ArticlesPagination";

import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import { getUrlBySection } from "../../apis/endpoints";

export default function Section({
  title,
  section,
  itemsPerPage,
  hasPagination,
}) {
  const { page } = usePagination();
  const url = getUrlBySection(section, page, itemsPerPage);
  const { data } = useFetch(url);

  return (
    <Stack className="itschool-section py-5">
      <Row className="max-content-width">
        <h2 className="h2 text-center mb-5">{title}</h2>
        {data &&
          data.response.results.length > 0 &&
          data.response.results.map((article) => (
            <Col className="p-3" key={article.id} md={4} sm={6} xs={12}>
              <ArticleCard {...article} />
            </Col>
          ))}
      </Row>
      {hasPagination && (
        <Row className="max-content-width mt-5">
          <ArticlesPagination page={page} totalPages={data?.response.pages} />
        </Row>
      )}
    </Stack>
  );
}

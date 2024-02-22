import { Stack, Row, Col, Image } from "react-bootstrap";

import ArticleCard from "../ArticleCard/ArticleCard";
import ArticlesPagination from "../ArticlesPagination/ArticlesPagination";

import useFetch from "../../hooks/useFetch";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getUrlBySection } from "../../apis/endpoints";

export default function Section({
  title,
  section,
  itemsPerPage,
  hasPagination,
}) {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const url = getUrlBySection(section, page, itemsPerPage);

  const { data, error } = useFetch(url);
  const navigate = useNavigate();

  const handlePageChanged = (page) => {
    navigate(`/category/${section}?page=${page}`);
  };

  if (error) {
    return (
      <Stack className="itschool-section py-5">
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
          <ArticlesPagination
            page={page}
            totalPages={data?.response.pages}
            onPageChanged={handlePageChanged}
          />
        </Row>
      )}
    </Stack>
  );
}

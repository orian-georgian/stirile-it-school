import { Stack, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ArticleCard from "../ArticleCard/ArticleCard";
import ArticlesPagination from "../ArticlesPagination/ArticlesPagination";
import Error from "../Error/Error";
import NoDataAvailable from "../NoDataAvailable/NoDataAvailable";

import useFetch from "../../hooks/useFetch";
import useFavorites from "../../hooks/useFavorites";
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
  const navigate = useNavigate();

  const url = getUrlBySection(section, page, itemsPerPage);

  const { data, error } = useFetch(url);
  const { favorites, toggleFavorites } = useFavorites();

  const handlePageChanged = (page) => {
    navigate(`/category/${section}?page=${page}`);
  };

  const handleToggleFavorites = (data) => {
    toggleFavorites(data);
  };

  if (error) {
    return <Error />;
  }

  if (data?.response.results.length === 0) {
    return <NoDataAvailable />;
  }

  return (
    <Stack className="itschool-section py-5">
      <Row className="max-content-width">
        {title && <h2 className="h2 text-center mb-5">{title}</h2>}
        {data &&
          data.response.results.length > 0 &&
          data.response.results.map((article) => (
            <Col className="p-3" key={article.id} md={4} sm={6} xs={12}>
              <ArticleCard
                {...article}
                wasAddedToFavorites={
                  !!favorites.find((favorite) => favorite.id === article.id)
                }
                onToggleFavorites={handleToggleFavorites}
              />
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
      {!hasPagination && (
        <Row className="max-content-width mt-5 fs-5 text-center">
          <span>
            Read more news from this section{" "}
            <Link className="text-success" to={`/category/${section}`}>
              here
            </Link>
          </span>
        </Row>
      )}
    </Stack>
  );
}

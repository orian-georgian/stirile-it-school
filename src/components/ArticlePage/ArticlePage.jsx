import { Stack, Row, Col, Badge } from "react-bootstrap";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import { getArticleUrlById } from "../../apis/endpoints";

import "./ArticlePage.css";

export default function ArticlePage() {
  const { articleId } = useParams();
  const url = getArticleUrlById(articleId);

  const { data, error } = useFetch(url);

  const formattedDate = new Date(
    data?.response.content.webPublicationDate
  ).toLocaleString("de-DE");

  return (
    <Stack className="itschool-article-page py-5">
      <Row className="max-content-width-900">
        <Col md={12} className="mb-5">
          <h1 className="h1">{data?.response.content.fields.headline}</h1>
        </Col>

        <Col md={12} className="mb-3">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.response.content.fields.main,
            }}
          ></div>
        </Col>

        <Col md={12} className="mb-3">
          <Stack direction="horizontal">
            <Badge className="fs-5" bg="info">
              {data?.response.content.fields.byline}
            </Badge>
            <div className="ms-auto">{formattedDate}</div>
          </Stack>
        </Col>

        <Col md={12}>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{
              __html: data?.response.content.fields.body,
            }}
          ></div>
        </Col>
      </Row>
    </Stack>
  );
}

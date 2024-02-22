import { Stack, Row, Col } from "react-bootstrap";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import { getArticleUrlById } from "../../apis/endpoints";

export default function ArticlePage() {
  const { articleId } = useParams();
  const url = getArticleUrlById(articleId);

  const { data, error } = useFetch(url);

  console.log(data);

  return (
    <Stack className="itschool-article-page py-5">
      <Row className="max-content-width">
        <Col>Page d bdhvsdjvsjyj sjdj vsdjvjsd ds</Col>
      </Row>
    </Stack>
  );
}

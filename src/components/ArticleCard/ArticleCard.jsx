import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

import "./ArticleCard.css";

export default function ArticleCard({
  fields: { thumbnail, headline, trailText },
  id,
}) {
  return (
    <Card className="itschool-article-card h-100">
      <Link
        className="article-redirect"
        to={`/article/${encodeURIComponent(id)}`}
      >
        <FaBookReader size={32} color="var(--warning)" />
      </Link>
      <Card.Img src={thumbnail} />
      <Card.Body>
        <Card.Title>{headline}</Card.Title>
        <Card.Text>{trailText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

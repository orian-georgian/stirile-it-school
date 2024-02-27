import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookReader, FaHeart } from "react-icons/fa";

import "./ArticleCard.css";

export default function ArticleCard({
  fields: { thumbnail, headline, trailText },
  id,
  wasAddedToFavorites,
  onToggleFavorites,
}) {
  const favoriteColor = wasAddedToFavorites ? "--danger" : "--white";

  const handleToggleFavorites = () => {
    const data = !wasAddedToFavorites
      ? { id, fields: { thumbnail, headline, trailText } }
      : id;
    onToggleFavorites(data);
  };

  return (
    <Card className="itschool-article-card h-100">
      <Button
        className="article-favorite"
        variant="link"
        onClick={handleToggleFavorites}
      >
        <FaHeart size={36} color={`var(${favoriteColor})`} />
      </Button>
      <Link
        className="article-redirect"
        to={`/article/${encodeURIComponent(id)}`}
      >
        <FaBookReader size={36} color="var(--white)" />
      </Link>

      <Card.Img src={thumbnail} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{headline}</Card.Title>
        <Card.Text>{trailText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

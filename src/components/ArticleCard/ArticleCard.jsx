import { Card } from "react-bootstrap";

export default function ArticleCard({
  fields: { thumbnail, headline, trailText },
}) {
  return (
    <Card className="h-100">
      <Card.Img src={thumbnail} />
      <Card.Body>
        <Card.Title>{headline}</Card.Title>
        <Card.Text>{trailText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

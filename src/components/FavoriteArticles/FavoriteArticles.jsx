import { Stack, Row, Col } from "react-bootstrap";
import ArticleCard from "../ArticleCard/ArticleCard";
import Poster from "../Poster/Poster";
import NoDataAvailable from "../NoDataAvailable/NoDataAvailable";

import useFavorites from "../../hooks/useFavorites";

export default function FavoriteArticles() {
  const { favorites, toggleFavorites } = useFavorites();

  const handleToggleFavorites = (data) => {
    toggleFavorites(data);
  };

  if (favorites.length === 0) {
    return <NoDataAvailable />;
  }

  return (
    <Stack className="itschool-favorites">
      <Poster
        title="Favorite Articles"
        image="./images/favorites-guy.png"
        text="Whether you're passionate about technology, arts, science, or lifestyle, this page is your gateway to a treasure trove of knowledge and inspiration. Explore, bookmark, and revisit your favorite articles at your leisure."
      />
      <Row className="max-content-width py-5">
        {favorites.length > 0 &&
          favorites.map((article) => (
            <Col className="p-3" key={article.id} md={4} sm={6} xs={12}>
              <ArticleCard
                {...article}
                wasAddedToFavorites={true}
                onToggleFavorites={handleToggleFavorites}
              />
            </Col>
          ))}
      </Row>
    </Stack>
  );
}

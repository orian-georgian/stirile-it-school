import {
  Header,
  ArticlePage,
  Footer,
  LandingPage,
  ArticleCategory,
  FavoriteArticles,
} from "./components";

import FavoritesProvider from "./contexts/FavoritesContext";

import { HashRouter, Routes, Route } from "react-router-dom";

import { Stack } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <FavoritesProvider>
        <Stack className="itschool-news">
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              exact
              path="/category/:categoryType"
              element={<ArticleCategory />}
            />
            <Route exact path="/article/:articleId" element={<ArticlePage />} />
            <Route exact path="/favorites" element={<FavoriteArticles />} />
          </Routes>
          <Footer />
        </Stack>
      </FavoritesProvider>
    </HashRouter>
  );
}

export default App;

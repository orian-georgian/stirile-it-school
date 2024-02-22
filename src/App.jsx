import {
  Header,
  ArticlePage,
  Footer,
  LandingPage,
  ArticleCategory,
} from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Stack } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
        </Routes>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;

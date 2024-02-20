import {
  Header,
  Poster,
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
        <Poster />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/category/:categoryType" element={<ArticleCategory />} />
        </Routes>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;

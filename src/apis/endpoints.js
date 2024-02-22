const BASE_URL = "https://content.guardianapis.com/";

const API_KEY = "61081418-5524-45f0-9acc-6c7bb8c6390b";

export const getUrlBySection = (category, page = 1, itemsPerPage = 20) => {
  return `${BASE_URL}/search?section=${category}&page=${page}&show-fields=all&page-size=${itemsPerPage}&api-key=${API_KEY}`;
};

export const getArticleUrlById = (articleId) => {
  return `${BASE_URL}/${articleId}?show-fields=all&api-key=${API_KEY}`;
};

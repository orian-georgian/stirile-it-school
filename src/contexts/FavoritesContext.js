import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (data) => {
    setFavorites((prevState) =>
      typeof data === "string"
        ? prevState.filter((favorite) => favorite.id !== data)
        : [...prevState, data]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;

import { FavoritesContext } from "../contexts/FavoritesContext";
import { useContext } from "react";

export default function useFavorites() {
  const values = useContext(FavoritesContext);

  if (!values) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return values;
}

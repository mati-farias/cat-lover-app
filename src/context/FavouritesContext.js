import { createContext, useState, useEffect, useRef } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const initialRender = useRef(true);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavourites = window.localStorage.getItem('favourites');
      setFavourites(savedFavourites ? JSON.parse(savedFavourites) : []);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (typeof window !== 'undefined') {
      // Save the favourites to local storage whenever it changes
      window.localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  }, [favourites]);

  const addToFavourites = (cat) => {
    setFavourites((prev) => [...prev, cat]);
  };

  const removeFromFavourites = (cat) => {
    setFavourites((prev) => prev.filter((c) => c.id !== cat.id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};

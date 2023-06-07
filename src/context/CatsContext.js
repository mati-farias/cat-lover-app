import { createContext, useState, useContext } from 'react';
import { fetchCats } from '../services/catService';

export const CatsContext = createContext();

export const CatsProvider = ({ children }) => {
  const [cats, setCats] = useState([]);

  const fetchInitialCats = async () => {
    const initialCats = await fetchCats();
    setCats(initialCats);
  };

  const fetchMoreCats = async () => {
    const moreCats = await fetchCats();
    setCats((oldCats) => [...oldCats, ...moreCats]);
  };

  return (
    <CatsContext.Provider value={{ cats, fetchInitialCats, fetchMoreCats }}>
      {children}
    </CatsContext.Provider>
  );
};

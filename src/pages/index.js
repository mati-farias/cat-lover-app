import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { fetchCats, fetchCatById } from '../services/catService';
import CatCard from '../components/CatCard';
import CatModal from '../components/CatModal';

const HomePage = () => {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [catId, setCatId] = useState(null);
  const router = useRouter();
  const CatCardMemo = React.memo(CatCard);

  useEffect(() => {
    const fetchInitialCats = async () => {
      const response = await fetch('/api/cats');
      const initialCats = await response.json();
      setCats(initialCats);
    };

    fetchInitialCats();
  }, []);

  useEffect(() => {
    if (catId) {
      const fetchAndSetSelectedCat = async () => {
        const response = await fetch(`/api/cats/${catId}`);
        const cat = await response.json();
        setSelectedCat(cat);
      };

      fetchAndSetSelectedCat();
    } else {
      setSelectedCat(null);
    }
  }, [catId]);

  useEffect(() => {
    setCatId(router.query.catId);
  }, [router.query.catId]);

  const fetchMoreCats = async () => {
    const moreCats = await fetchCats();
    setCats((oldCats) => [...oldCats, ...moreCats]);
  };

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 gap-y-12 px-5'>
          {cats.map((cat) => (
            <CatCardMemo
              key={cat.id}
              cat={cat}
              className='transform hover:scale-105 transition-transform duration-200 rounded-lg shadow-lg overflow-hidden'
            />
          ))}
          <button
            onClick={fetchMoreCats}
            className='col-span-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Load More
          </button>
          <CatModal
            cat={selectedCat}
            onRequestClose={() => router.push({ pathname: '/', query: {} })}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../services/catApi';
import CatCard from '../components/CatCard';
import CatModal from '../components/CatModal';
import { fetchCats, fetchCatById } from '../services/catService';
import Link from 'next/link';

const HomePage = () => {
  const [cats, setCats] = useState([]);
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    if (cats.length === 0) {
      const fetchInitialCats = async () => {
        const initialCats = await fetchCats();
        setCats(initialCats);
      };

      fetchInitialCats();

      if (router.query.catId) {
        const fetchAndSetSelectedCat = async () => {
          const cat = await fetchCatById(router.query.catId);
          setSelectedCat(cat);
        };

        fetchAndSetSelectedCat();
      } else {
        setSelectedCat(null);
      }
    }
  }, [router.query.catId]);

  const fetchMoreCats = async () => {
    const moreCats = await fetchCats();
    setCats((oldCats) => [...oldCats, ...moreCats]);
  };

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:mx-auto'>
        <h1 className='text-2xl font-bold text-blue-900 mb-6 text-center'>
          Hello, cat lovers!
        </h1>
        <div className='grid grid-cols-5 gap-4 px-5'>
          {cats.map((cat) => (
            <CatCard
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

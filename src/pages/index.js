import React, { useEffect, useState } from 'react';
import CatCard from '../components/CatCard';
import CatModal from '../components/CatModal';
import SkeletonCatCard from '../components/SkeletonCatCard';

const HomePage = () => {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshingCats, setRefreshingCats] = useState(false);

  const fetchInitialCats = async () => {
    setInitialLoading(true);
    const response = await fetch('/api/cats');
    const initialCats = await response.json();
    setCats(initialCats);
    setInitialLoading(false);
  };

  useEffect(() => {
    fetchInitialCats();
  }, []);

  const fetchMoreCats = async () => {
    setLoadingMore(true);
    const response = await fetch('/api/cats');
    const moreCats = await response.json();
    setCats((oldCats) => [...oldCats, ...moreCats]);
    setLoadingMore(false);
  };

  const handleRefreshCats = () => {
    setRefreshingCats(true);
    fetchInitialCats();
    setRefreshingCats(false);
  };

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 font-chelsea'>
      <div className='relative py-3 sm:mx-auto'>
        {initialLoading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 gap-y-12 px-5'>
            {Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCatCard key={index} />
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 gap-y-12 px-5'>
            {cats?.map((cat) => (
              <CatCard
                key={cat.id}
                cat={cat}
                setSelectedCat={setSelectedCat}
                className='transform hover:scale-105 transition-transform duration-200 rounded-lg shadow-lg overflow-hidden'
              />
            ))}
            <button
              onClick={fetchMoreCats}
              disabled={loadingMore}
              className='col-span-full xl:col-span-1 xl:col-start-2 bg-blue-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center'>
              {loadingMore ? 'Loading...' : 'Load More'}
            </button>

            <button
              onClick={handleRefreshCats}
              disabled={refreshingCats}
              className='col-span-full xl:col-span-1 xl:col-start-4 bg-green-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center'>
              Get Other Cats!
            </button>

            <CatModal
              cat={selectedCat}
              onRequestClose={() => setSelectedCat(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

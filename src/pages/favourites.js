import { useContext, useState } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import CatModal from '../components/CatModal';

const FavouritesPage = () => {
  const { favourites, removeFromFavourites } = useContext(FavouritesContext);
  const [selectedCat, setSelectedCat] = useState(null);

  if (!favourites) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or similar
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-chelsea'>
      <h1 className='text-3xl font-bold text-center py-6'>
        Your Favourite Cats
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {favourites &&
          favourites.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCat(cat)}
              className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer'>
              <img
                src={cat.url}
                alt={cat.id}
                className='w-full h-56 object-cover'
              />
              <div className='p-4 flex justify-center'>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    removeFromFavourites(cat);
                  }}
                  className='col-span-full bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
                  Remove from favourites
                </button>
              </div>
            </div>
          ))}
        {(!favourites || favourites.length === 0) && (
          <p>No favourite cats yet!</p>
        )}
      </div>
      <CatModal
        cat={selectedCat}
        onRequestClose={() => setSelectedCat(null)}
      />
    </div>
  );
};

export default FavouritesPage;

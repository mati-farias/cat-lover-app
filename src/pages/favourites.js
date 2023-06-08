import { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';

const FavouritesPage = () => {
  const { favourites, removeFromFavourites } = useContext(FavouritesContext);
  console.log(favourites, 'page');

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
              className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <img
                src={cat.url}
                alt={cat.id}
                className='w-full h-56 object-cover'
              />
              <div className='p-4'>
                <button
                  onClick={() => removeFromFavourites(cat)}
                  className='col-span-full bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-5'>
                  Remove from favourites
                </button>
              </div>
            </div>
          ))}
        {(!favourites || favourites.length === 0) && (
          <p>No favourite cats yet!</p>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;

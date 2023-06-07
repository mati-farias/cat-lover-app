import { useContext } from 'react';
import Modal from 'react-modal';
import { FavouritesContext } from '../context/FavouritesContext';
import { fetchBreedDetails } from '../services/catService';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CatModal = ({ cat, onRequestClose }) => {
  const { favourites, addToFavourites } = useContext(FavouritesContext);
  const [breedDetails, setBreedDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getBreedDetails = async () => {
      if (cat?.breeds?.[0]?.id) {
        const details = await fetchBreedDetails(cat.breeds[0].id);
        setBreedDetails(details);
      }
    };

    getBreedDetails();
  }, [cat]);

  const handleFavourite = () => {
    addToFavourites(cat);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={!!cat}
      onRequestClose={onRequestClose}
      className='relative overflow-y-auto rounded-lg'
      overlayClassName='fixed inset-0 bg-black flex justify-center items-center'>
      <div className='relative bg-white rounded-lg max-w-md m-6 sm:m-20'>
        <button
          onClick={onRequestClose}
          className='absolute right-2 text-gray-600 hover:text-gray-800'
          style={{ fontSize: '2rem' }}
          aria-label='Close Modal'>
          &times;
        </button>
        <img
          src={cat?.url}
          className='w-full h-64 object-cover rounded-t-lg'
        />
        <div className='px-6 py-4'>
          {breedDetails ? (
            <div>
              <h2 className='font-bold text-2xl mb-2'>{breedDetails.name}</h2>
              <p className='text-gray-700 text-base'>
                {breedDetails.description}
              </p>
              <button
                onClick={() => router.push(`/breed/${breedDetails.id}`)}
                className='mt-4 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none'>
                More about this breed
              </button>
            </div>
          ) : (
            <p className='text-gray-700 text-base'>
              Breed information is not available for this cat!
            </p>
          )}
          <button
            onClick={handleFavourite}
            className='mt-4 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none'>
            Add to Favourites
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CatModal;
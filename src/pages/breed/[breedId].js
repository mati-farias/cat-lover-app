import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchBreedDetails } from '../../services/catService';

const BreedPage = () => {
  const [breedDetails, setBreedDetails] = useState(null);
  const router = useRouter();
  const { breedId } = router.query;

  useEffect(() => {
    const getBreedDetails = async () => {
      if (breedId) {
        const details = await fetchBreedDetails(breedId);
        setBreedDetails(details);
      }
    };

    getBreedDetails();
  }, [breedId]);

  if (!breedDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
      <div className='bg-white rounded-lg shadow p-6'>
        <h1 className='text-3xl font-bold mb-5'>{breedDetails.name}</h1>
        <p className='mb-4 text-gray-700'>{breedDetails.description}</p>
        <div className='flex'>
          <p className='mr-2 text-gray-900 font-bold'>Weight: </p>
          <p className='text-gray-500'>{breedDetails.weight.metric} kg</p>
        </div>
        <div className='flex'>
          <p className='mr-2 text-gray-900 font-bold'>Origin: </p>
          <p className='text-gray-500'>{breedDetails.origin}</p>
        </div>
        <div className='flex'>
          <p className='mr-2 text-gray-900 font-bold'>Life Span: </p>
          <p className='text-gray-500'> {breedDetails.life_span} years</p>
        </div>
        <div className='flex'>
          <p className='mr-2 text-gray-900 font-bold'>Affection Level: </p>
          <p className='text-gray-500'> {breedDetails.affection_level}/5</p>
        </div>
        <div className='flex'>
          <p className='mr-2 text-gray-900 font-bold'>Child Friendly: </p>
          <p className='text-gray-500'> {breedDetails.child_friendly}/5</p>
        </div>
        <div className='flex'>
          <p className='mr-2 text-gray-900 font-bold'>Temperament: </p>
          <p className='text-gray-500'>{breedDetails.temperament}</p>
        </div>
      </div>
    </div>
  );
};

export default BreedPage;

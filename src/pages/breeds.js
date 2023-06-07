import { useState, useEffect } from 'react';
import api from '../services/catApi';
import BreedCard from '../components/BreedCard';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await api.get('/breeds');
      setBreeds(response.data);
    };

    fetchBreeds();
  }, []);

  return (
    <div className='px-6 py-4'>
      <h1 className='font-bold text-3xl mb-4'>Cat Breeds</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {breeds.map((breed) => (
          <BreedCard
            key={breed.id}
            breed={breed}
            className='bg-white rounded-lg shadow-lg p-6'
          />
        ))}
      </div>
    </div>
  );
};

export default Breeds;

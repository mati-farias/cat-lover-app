import { useState, useEffect } from 'react';
import BreedCard from '../components/BreedCard';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('/api/breeds');
      const data = await response.json();
      setBreeds(data);
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
            className='rounded-lg shadow-lg p-6'
          />
        ))}
      </div>
    </div>
  );
};

export default Breeds;

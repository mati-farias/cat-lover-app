import { useState, useEffect } from 'react';
import BreedCard from '../components/BreedCard';
import SkeletonBreedCard from '../components/SkeletonBreedCard';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true);
      const response = await fetch('/api/breeds');
      const data = await response.json();
      setBreeds(data);
      setLoading(false);
    };

    fetchBreeds();
  }, []);

  return (
    <div className='px-6 py-4 font-chelsea'>
      <h1 className='font-bold text-3xl mb-4'>Cat Breeds</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {loading // change this
          ? Array.from({ length: breeds.length || 20 }).map((_, index) => (
              <SkeletonBreedCard key={index} />
            ))
          : breeds.map((breed) => (
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

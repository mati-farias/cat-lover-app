import { useState, useEffect } from 'react';
import api from '../services/catApi';
import BreedModal from './BreedModal';

const BreedCard = ({ breed }) => {
  const [cats, setCats] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = async () => {
    const response = await fetch(`/api/images/${breed.id}`);
    const data = await response.json();
    setCats(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCats([]);
    setShowModal(false);
  };

  const bgColors = [
    'bg-sky-200',
    'bg-blue-400',
    'bg-green-500',
    'bg-teal-500',
    'bg-emerald-300',
    'bg-emerald-500',
    'bg-cyan-500',
  ];

  const getRandomBgColor = () => {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  };

  return (
    <div
      className={`${getRandomBgColor()} flex flex-col rounded-lg shadow-lg p-6 hover:bg-gray-500 hover:shadow-xl transition-all duration-200`}>
      <h2
        onClick={handleOpenModal}
        className='text-xl font-bold mb-2 cursor-pointer'>
        {breed.name}
      </h2>

      <BreedModal
        cats={cats}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        breed={breed}
      />
    </div>
  );
};

export default BreedCard;

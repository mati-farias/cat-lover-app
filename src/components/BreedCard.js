import { useState, useEffect } from 'react';
import api from '../services/catApi';
import Modal from 'react-modal';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

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
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        className='flex items-center justify-center h-full outline-none'
        overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='bg-white rounded-lg p-6 max-w-lg'>
          <Carousel>
            {cats.map((cat) => (
              <Link
                href={`/cat/${cat.id}`}
                key={cat.id}>
                <div className='flex justify-center'>
                  <img
                    src={cat.url}
                    alt={breed.name}
                    className='rounded-lg max-h-96 max-w-lg'
                  />
                </div>
              </Link>
            ))}
          </Carousel>
          <button
            onClick={handleCloseModal}
            className='text-white bg-red-500 rounded px-4 py-2'>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BreedCard;

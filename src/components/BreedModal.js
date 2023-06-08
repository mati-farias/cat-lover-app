import { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const BreedModal = ({ cats, showModal, handleCloseModal, breed }) => {
  return (
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
              <div className='flex justify-center h-96 w-full'>
                <img
                  src={cat.url}
                  alt={breed.name}
                  className='object-cover h-full w-full rounded-lg'
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
  );
};

export default BreedModal;

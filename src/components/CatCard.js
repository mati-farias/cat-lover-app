import Link from 'next/link';
import { useRouter } from 'next/router';

const CatCard = ({ cat }) => {
  const router = useRouter();

  const handleOpenModal = () => {
    router.push({ pathname: `/cat/${cat.id}` });
  };

  return (
    <div
      className='rounded overflow-hidden shadow-lg cursor-pointer'
      onClick={handleOpenModal}>
      <div className='w-full h-64 overflow-hidden relative'>
        <img
          className='object-cover h-64 w-full'
          src={cat.url}
          alt='Cat'
        />
      </div>
      {/* <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Cat ID: {cat.id}</div>
      </div> */}
    </div>
  );
};

export default CatCard;
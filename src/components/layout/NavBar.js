import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='bg-gray-800 py-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <div className='flex flex-row space-x-4 my-2 sm:my-0'>
            <Link
              href='/'
              className='text-white hover:bg-gray-700 px-5 py-2 rounded-md text-lg sm:text-xl font-medium'>
              Home
            </Link>
            <Link
              href='/breeds'
              className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg sm:text-xl font-medium'>
              Breeds
            </Link>
            <Link
              href='/favourites'
              className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg sm:text-xl font-medium'>
              Favourites
            </Link>
          </div>
          <h1 className='text-2xl sm:text-4xl font-bold text-blue-400 my-2 sm:my-0 text-center'>
            CAT-LOVERS-APP
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import Link from 'next/link';

const NotFound = () => (
  <div className='flex flex-col items-center'>
    <h1 className='mt-10 mb-4 text-5xl text-gray-800'>
      404 - That&apos;s an error!
    </h1>
    <h2 className='mb-5 text-xl text-gray-600'>
      The page you are looking for does not exist. How you got here is a
      mystery. But you can click the button below to go back to the homepage.
    </h2>
    <Link href='/'>
      <button className='px-4 py-2 rounded bg-gray-500 text-gray-200'>
        Home
      </button>
    </Link>
  </div>
);

export default NotFound;

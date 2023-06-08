// pages/404.js

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen text-center font-chelsea pt-24'>
      <h1 className='font-bold text-3xl md:text-5xl max-w-xl mt-12 text-blue-400'>
        Oh no! The page you're looking for does not exist.
      </h1>
      <p className='mt-2 mb-6'>
        It looks like the page you're looking for doesn't exist or has been
        moved.
      </p>
      <Link href='/'>
        <span className='cursor-pointer text-blue-500 hover:underline'>
          Go back home
        </span>
      </Link>
    </div>
  );
}

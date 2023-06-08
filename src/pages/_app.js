import '@/styles/globals.css';
import { FavouritesProvider } from '@/context/FavouritesContext';
import { CatsProvider } from '@/context/CatsContext';
import Layout from '@/components/layout/Layout';
import './api/cats';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <FavouritesProvider>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap'
          rel='stylesheet'
        />
        <style
          jsx
          global>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Chelsea Market', cursive;
          }
          p,
          span,
          a,
          button {
            font-family: 'Montserrat', sans-serif;
            font-family: 'Short Stack', cursive;
          }
        `}</style>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavouritesProvider>
  );
}

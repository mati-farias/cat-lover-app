import '@/styles/globals.css';
import { FavouritesProvider } from '@/context/FavouritesContext';
import { CatsProvider } from '@/context/CatsContext';
import Layout from '@/components/layout/Layout';
import './api/cats';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function App({ Component, pageProps }) {
  return (
    <FavouritesProvider>
      <CatsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CatsProvider>
    </FavouritesProvider>
  );
}

import '@/styles/globals.css';
import { FavouritesProvider } from '@/context/FavouritesContext';
import Layout from '@/components/layout/Layout';
import '../pages/api/catImages';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function App({ Component, pageProps }) {
  return (
    <FavouritesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavouritesProvider>
  );
}

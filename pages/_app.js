import '../styles/globals.css';
import Layout from '../components/Layout';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

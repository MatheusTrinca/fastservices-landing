/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import { services } from '../data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fast Service</title>
        <meta
          name="description"
          content="Fast Service App. Encontre os melhores profissionais 24hs por dia"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <About services={services} />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: { services },
  };
};

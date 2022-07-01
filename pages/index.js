/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import About from '../components/About';
import DownloadApp from '../components/DownloadApp';
import { Faq } from '../components/Faq';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';
import { services, aboutServices, testimonialCards, questions } from '../data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fast Service</title>
        <meta
          name="description"
          content="Fast Service App. Encontre os melhores profissionais 24hs por dia"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <About services={services} aboutServices={aboutServices} />
      <Testimonials testimonials={testimonialCards} />
      <Faq questions={questions} />
      <DownloadApp />
      <Subscribe />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: { services, aboutServices, testimonialCards, questions },
  };
};

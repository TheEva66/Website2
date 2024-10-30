import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {FC, memo} from 'react';

import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import GobletOfFire from '../components/Sections/GobletOfFire';
import Hero from '../components/Sections/Hero';
import Page from '../components/Layout/Page';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  const router = useRouter();

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      {router.pathname === '/fy103' && <GobletOfFire />}
      <Footer />
    </Page>
  );
});

export default Home;

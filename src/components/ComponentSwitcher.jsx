import { h } from 'preact'

import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import SquareImage from '../components/SquareImage';
import Promotion from '../components/Promotion';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';

export default function ComponentSwitcher({ tagName, data }) {
  switch (tagName) {
    case 'Nav':
      return <Nav />;

    case 'Footer':
      return <Footer />;

    case 'SideNav':
      return <SideNav data={data} />;

    case 'Carousel':
      return <Carousel data={data} />;

    case 'SquareImage':
      return <SquareImage data={data} />;

    case 'Promotion':
      return <Promotion data={data} />;
  }
}

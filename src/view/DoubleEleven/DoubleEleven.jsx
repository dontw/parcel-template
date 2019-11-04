import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Helmet from "preact-helmet";

// components
import Nav from '../../components/Nav';
import Carousel from '../../components/Carousel';
import SquareImage from '../../components/SquareImage';
import Promotion from '../../components/Promotion';
import Footer from '../../components/Footer';
import SideNav from '../../components/SideNav';
import ContentConfig from './content.config';
// import Card from '../components/Card.jsx';

const MyComponent = function({ tagName, data }) {
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
};

const getProductData = (barcodes) => {
  if (barcodes) {
    return fetch(
      `${process.env.API_URL}/products?barcodes=${barcodes.join(',')}`
    )
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
};

export default function DoubleEleven() {
  const [components, setComponents] = useState([]);
  const CurrentEnv = process.env.CURR_ENV;

  function setContent() {
    ContentConfig.components.forEach((item) => {
      if (item.tagName === 'Promotion' && item.data.promotionBarcodes) {
        getProductData(item.data.promotionBarcodes).then((res) => {
          item.data.promotionItems = res;
          setComponents([...ContentConfig.components]);
        });
      }
    });
  }

  useEffect(() => {
    // if (CurrentEnv !== 'production') {
    //   const Spell = prompt('請輸入咒語');
    //   switch (Spell) {
    //     case 'shibe':
    //       alert('wow! you are so awesome!');
    //       setContent();
    //       break;
    //     default:
    //       alert('ooops! something wrong, maybe you should google it..');
    //       location.href = 'https://www.google.com';
    //       break;
    //   }
    // } else {
    //   setContent();
    // }
    setContent();
  }, []);

  return (
    <div>
      <Helmet
        title="ELEVEN EVENT"
        meta={[
          { name: 'title', content: 'Helmet application' },
          { name: 'description', content: 'Helmet application' },
          { name: 'keywords', content: 'Helmet application' },

          // FaceBook
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'title'},
          { property: 'og:description', content: 'desc'},
          { property: 'og:url', content: 'url'},
          { property: 'og:image', content:'imageurl'},

          // Twitter
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:title', content: 'title'},
          { property: 'twitter:description', content: 'desc'},
          { property: 'twitter:url', content: 'url'},
          { property: 'twitter:image', content:'imageurl'}
        ]}
      />
      {components.map((item) => (
        <MyComponent tagName={item.tagName} data={item.data}></MyComponent>
      ))}
    </div>
  );
}

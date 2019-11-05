import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

// utils
import miniAuthCheck from '../utils/miniAuthCheck';
import getProductData from '../utils/getProductData';

// component
import ComponentSwitcher from '../components/ComponentSwitcher';

export default function EventPageContainer({ content }) {
  const [components, setComponents] = useState([]);
  const CurrentEnv = process.env.CURR_ENV;

  function setContent() {
    content.components.forEach((item) => {
      if (item.tagName === 'Promotion' && item.data.promotionBarcodes) {
        getProductData(item.data.promotionBarcodes, content.eventId).then(
          (res) => {
            item.data.promotionItems = res;
            setComponents([...content.components]);
          }
        );
      }
    });
  }

  useEffect(() => {
    CurrentEnv !== 'production' ? miniAuthCheck(setContent) : setContent();
  }, []);

  return (
    <div>
      {components.map((item) => (
        <ComponentSwitcher
          tagName={item.tagName}
          data={item.data}
        ></ComponentSwitcher>
      ))}
    </div>
  );
}

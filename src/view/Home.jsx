import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

// components
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import SquareImage from "../components/SqureImage";
import Promotion from "../components/Promotion";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import ContentConfig from "../content.config";
// import Card from '../components/Card.jsx';

const MyComponent = function({ tagName, data }) {
  switch (tagName) {
    case "Nav":
      return <Nav />;

    case "Footer":
      return <Footer />;

    case "SideNav":
      return <SideNav data={data} />;

    case "Carousel":
      return <Carousel data={data} />;

    case "SquareImage":
      return <SquareImage data={data} />;

    case "Promotion":
      return <Promotion data={data} />;
  }
};

const getProductData = barcodes => {
  if (barcodes) {
    return fetch(
      `${process.env.API_URL}/products?barcodes=${barcodes.join(
        ","
      )}`
    )
      .then(response => response.json())
      .catch(error => console.error(error));
  }
};

export default function Home() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    ContentConfig.components.forEach(item => {
      if (item.tagName === "Promotion" && item.data.promotionBarcodes) {
        getProductData(item.data.promotionBarcodes).then(res => {
          item.data.promotionItems = res;
          setComponents([...ContentConfig.components]);
        });
      }
    });
    document.title = ContentConfig.title;
  }, []);

  return (
    <div>
      {components.map(item => (
        <MyComponent tagName={item.tagName} data={item.data}></MyComponent>
      ))}
    </div>
  );
}

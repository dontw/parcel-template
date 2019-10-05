import { h, render } from 'preact'
import { useState, useEffect } from 'preact/hooks';

// components
import Nav from '../components/Nav'
import Carousel from '../components/Carousel';
import SquareImage from '../components/SqureImage'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import contentConfig from '../content.config';
// import Card from '../components/Card.jsx';


const MyComponent = function ({tagName, data}) {
  switch (tagName) {
    case 'Carousel':
      return h(Carousel,{data})
    
    case 'SquareImage':
      return h(SquareImage, {data})
    
    case 'Promotion':
      const doge = getProductData()
      return h(Promotion, {data})
  }
}

const getProductData = (barcodes) => {
  console.log('doge')
  fetch('https://stock.halfme.com/api/promo/products?barcodes=Q91020461701S')
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))
}

export default function Home() {
  const [promoItems, setPromoItems] = useState([])

  function fetchPromoItems(){
    return null
  }

  useEffect(() => {
    const newPromoItems = fetchPromoItems();
    setPromoItems(newPromoItems)
  }, []);

  return (
    <div>
      <Nav />
      {
        contentConfig.map(item => <MyComponent tagName={item.tagName} data={item.data}></MyComponent>)
      }
      <Footer/>
    </div>
  )
}
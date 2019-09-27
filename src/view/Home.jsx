import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks';

// components
import Carousel from '../components/Carousel.jsx';
import Card from '../components/Card.jsx';

export default function Home() {
  const [images, setImages] = useState([])

  function fetchImages() {
    return [{ name: 'shiba', url: 'https://cdn.shibe.online/shibes/286a57961373d05d8bc885a7470231d6b8cfb8d9.jpg' },
    { name: 'shiba', url: 'https://cdn.shibe.online/shibes/c22b64222bd50ffb2e2c718bd9260b7ad9d51413.jpg' },
    { name: 'shiba', url: 'https://cdn.shibe.online/shibes/8e0bdd8f8c9da7d60f0e73cab2f64f902c1f3f16.jpg' }]
  }

  useEffect(() => {
    const newImages = fetchImages();
    setImages(newImages);
  }, []);

  return (
    <div>
      <div class="container mx-auto">
        <h1 class="text-6xl text-center">Hello World from Preact! 📦 🚀 🤯</h1>
      </div>
      <div className="container mx-auto text-center">
        the carousel component
      </div>
      <Carousel images={images} number={0}></Carousel>
      <div className="container mx-auto text-center my-12">
        <div className="flex">
          {images.map(image => <div class="w-1/3"><Card data={image}/></div>)}
        </div>
      </div>
    </div>
  )
}
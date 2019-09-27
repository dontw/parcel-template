import { h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import Glide from '@glidejs/glide'

import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

export default function Carousel({ images, number }) {

  //get element
  let glideElm = useRef(null);

  useEffect(() => {
    new Glide(`#glide-${number}`, { autoplay: 5000 }).mount()
  }, [images]);

  const ImageSlidesContent = images.map(image => (<li class="glide__slide"><img class="h-screen w-full object-fill" src={image.url} /></li>))

  return (
    <div id={`glide-${number}`} ref={glideElm} class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {images.length > 0 ? ImageSlidesContent : <li class="glide__slide"></li>}
        </ul>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        {images.map((item, index) => <button class="glide__bullet" data-glide-dir={`=${index}`}></button>)}
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
    </div>
  )
}
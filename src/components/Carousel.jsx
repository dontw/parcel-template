import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import Glide from "@glidejs/glide";

export default function Carousel({ data }) {
  //get element
  let glideElm = useRef(null);
  useEffect(() => {
    new Glide(`#glide-${data.id}`, { autoplay: 5000 }).mount();
  }, [data.images]);

  const ImageSlidesContent = data.images.map(image => (
    <li class='glide__slide'>
      <picture >
        <source
          media='(min-width: 768px)'
          srcset={image.url}
        />
        <img class="w-full object-cover" src={image.mobileUrl} alt='image' />
      </picture>
    </li>
  ));

  return (
    <div id={`glide-${data.id}`} ref={glideElm} class='glide'>
      <div class='glide__track' data-glide-el='track'>
        <ul class='glide__slides'>
          {data.images.length > 0 ? (
            ImageSlidesContent
          ) : (
            <li class='glide__slide'></li>
          )}
        </ul>
      </div>
      <div class='glide__bullets' data-glide-el='controls[nav]'>
        {data.images.map((item, index) => (
          <button class='glide__bullet' data-glide-dir={`=${index}`}></button>
        ))}
      </div>

      {/* arrows */}
      {/* <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div> */}
    </div>
  );
}

import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import LazyLoad from "vanilla-lazyload";

const LazyloadConfig = {
  elements_selector: ".lazy"
};

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(LazyloadConfig);
}

export default function LazyImage({ alt, src, srcset, sizes, width, height }) {
  useEffect(() => {
    document.lazyLoadInstance.update();
  });

  return (
    <img
      alt={alt}
      className="lazy object-cover"
      data-src={src}
      data-srcset={srcset}
      data-sizes={sizes}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}

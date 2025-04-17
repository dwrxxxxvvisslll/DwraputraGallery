import React from 'react';

const Gallery = ({ images, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(({ id, webp, full, alt }) => (
        <div
          key={id}
          onClick={() => onSelect(id)}
          className="aspect-square overflow-hidden rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <picture>
            <source srcSet={webp} type="image/webp" />
            <img src={full} alt={alt} className="w-full h-full object-cover" />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

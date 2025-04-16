import React from 'react';

const Gallery = ({ images, showFrames, autoplay, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(({ id, src, type, alt }) => (
        <div
          key={id}
          onClick={() => onSelect(id)}
          className={`aspect-square overflow-hidden rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 ${
            showFrames ? 'border border-white/20' : ''
          }`}
        >
          {type === 'video' && autoplay ? (
            <video src={src} autoPlay muted loop className="w-full h-full object-cover" />
          ) : (
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;

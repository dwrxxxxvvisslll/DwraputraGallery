import React from 'react';

const ImageModal = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-black rounded-lg max-w-3xl w-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl font-bold"
        >
          ×
        </button>
        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-2xl font-bold"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-2xl font-bold"
        >
          ›
        </button>

        <picture>
          <source srcSet={item.webp} type="image/webp" />
          <img
            src={item.full}
            alt={item.alt}
            className="w-full max-h-[70vh] object-contain"
          />
        </picture>

        <div className="p-4 text-white text-sm">{item.detail}</div>
      </div>
    </div>
  );
};

export default ImageModal;

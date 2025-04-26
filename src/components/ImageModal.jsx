import React, { useEffect, useState, useRef } from 'react';

const ImageModal = ({ item, onClose, onPrev, onNext, onBack }) => {
  const [fade, setFade] = useState(true);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!item) return;
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onNext, onPrev, onClose]);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 20);
    return () => clearTimeout(timeout);
  }, [item]);

  const handlePrev = () => {
    setDirection(-1);
    onPrev(); // langsung update item
  };

  const handleNext = () => {
    setDirection(1);
    onNext(); // langsung update item
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX.current;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
  };

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative bg-black rounded-lg max-w-5xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-red-400 transition"
        >
          ×
        </button>

        {/* Prev / Next */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:scale-125 transition"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:scale-125 transition"
        >
          ›
        </button>

        <div
          className={`transition-transform duration-300 ${
            direction === -1
              ? 'animate-slide-left'
              : direction === 1
              ? 'animate-slide-right'
              : ''
          }`}
        >
          <picture>
            <source srcSet={item.webp} type="image/webp" />
            <img
              src={item.full}
              alt={item.alt}
              className={`w-full max-h-[80vh] object-contain transition-opacity duration-300 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </picture>
        </div>

        {item.detail && (
          <div className="p-4 text-white text-sm text-center border-t border-white/20">
            {item.detail}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;

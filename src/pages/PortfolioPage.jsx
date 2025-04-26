import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import galleryData from '../data/galleryData';
import ImageModal from '../components/ImageModal';

const PortfolioPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = galleryData.find((item) => item.id === selectedId);

  const handlePrev = () => {
    const currentIndex = galleryData.findIndex((item) => item.id === selectedId);
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedId(galleryData[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = galleryData.findIndex((item) => item.id === selectedId);
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setSelectedId(galleryData[nextIndex].id);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Works</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="space-y-4"
      >
        {galleryData.map((item) => (
          <img
            key={item.id}
            src={item.webp}
            alt={item.alt}
            className="w-full rounded cursor-pointer hover:opacity-80 transition duration-200"
            onClick={() => setSelectedId(item.id)}
          />
        ))}
      </Masonry>

      <ImageModal
        item={selectedItem}
        onClose={() => setSelectedId(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default PortfolioPage;

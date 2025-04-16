import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ImageModal from './components/ImageModal';
import galleryData from './data/galleryData';

function App() {
  const [showFrames, setShowFrames] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
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

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-end mb-4 gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showFrames}
            onChange={() => setShowFrames(!showFrames)}
          />
          <span>Show Frames</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={autoplay}
            onChange={() => setAutoplay(!autoplay)}
          />
          <span>Autoplay All</span>
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <Header />
        <Gallery
          images={galleryData}
          showFrames={showFrames}
          autoplay={autoplay}
          onSelect={(id) => setSelectedId(id)}
        />
      </div>

      <ImageModal
        item={selectedItem}
        onClose={() => setSelectedId(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ImageModal from './components/ImageModal';
import galleryData from './data/galleryData';
import Footer from './components/Footer';

function App() {
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow p-6">
        <div className="grid md:grid-cols-2 gap-10">
          <Header />
          <Gallery
            images={galleryData}
            onSelect={(id) => setSelectedId(id)}
          />
        </div>
      </div>

      <ImageModal
        item={selectedItem}
        onClose={() => setSelectedId(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ImageModal from './components/ImageModal';
import galleryData from './data/galleryData';
import { Link } from 'react-router-dom';
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
    <div className="flex flex-col min-h-screen bg-black text-white w-full">
      <div className="flex-grow px-4 py-6">  {/* Ubah p-6 menjadi px-4 py-6 untuk mengurangi padding horizontal */}
        <div className="grid md:grid-cols-2 gap-10 max-w-none">  {/* Tambah max-w-none */}
          <Header />
          <Gallery
            images={galleryData.slice(0, 9)}
            onSelect={(id) => setSelectedId(id)}
          />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/portfolio"
            className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          >
            See More
          </Link>
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

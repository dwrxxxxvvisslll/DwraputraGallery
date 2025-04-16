import { useParams, Link } from 'react-router-dom';
import galleryData from '../data/galleryData';

const DetailPage = () => {
  const { id } = useParams();
  const item = galleryData.find((img) => img.id === parseInt(id));

  if (!item) return <div className="text-white p-6">Gambar tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <Link to="/" className="mb-4 text-blue-400">← Kembali</Link>
      {item.type === 'video' ? (
        <video src={item.src} controls className="max-w-xl w-full rounded" />
      ) : (
        <img src={item.src} alt={item.alt} className="max-w-xl w-full rounded" />
      )}
      <p className="mt-4">{item.detail}</p>
    </div>
  );
};

export default DetailPage;

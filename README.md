# Dwraputra Photography Portfolio

> Portfolio website untuk Dwraputra (Wiradana Putra) - seorang fotografer freelance yang mengkhususkan diri dalam fotografi pernikahan dan street photography.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-cyan)

## 📸 Tentang Proyek

Website portfolio ini menampilkan karya fotografi Dwraputra dengan fokus pada:
- **Wedding Photography** - Mengabadikan momen-momen berharga pernikahan
- **Street Photography** - Menangkap kehidupan sehari-hari dengan perspektif artistik
- **Freelance Work** - Kolaborasi dengan Tarumenyan sejak 2022

## 🎯 Fitur Utama

### 🖼️ Galeri Foto
- **Responsive Grid Layout** - Menyesuaikan dengan ukuran layar
- **70+ Foto Portfolio** - Koleksi lengkap karya terbaik
- **WebP Optimization** - Loading cepat dengan kualitas tinggi
- **Lazy Loading** - Performa optimal untuk pengalaman pengguna

### 🔍 Image Viewer
- **Modal Full-Screen** - Tampilan foto dalam resolusi penuh
- **Keyboard Navigation** - Navigasi dengan arrow keys
- **Touch Gestures** - Swipe untuk mobile devices
- **Zoom Functionality** - Detail foto yang lebih jelas

### 🎵 Spotify Integration
- **Embedded Playlist** - Musik favorit fotografer
- **Responsive Design** - Menyesuaikan dengan berbagai ukuran layar
- **Custom Styling** - Terintegrasi dengan tema website

### 🎨 Design Features
- **Full-Width Layout** - Menggunakan seluruh lebar layar
- **Dark Theme** - Fokus pada karya fotografi
- **Smooth Animations** - Transisi yang halus dan elegan
- **Mobile-First Approach** - Optimized untuk semua perangkat

## 🛠️ Teknologi Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **React** | 18.x | Frontend framework |
| **Vite** | Latest | Build tool & dev server |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **React Router** | 6.x | Client-side routing |
| **ESLint** | Latest | Code linting |

## 📁 Struktur Proyek
dwraputraweb/
├── public/ # Static assets
│ ├── favicon.png # Website icon
│ ├── img1.jpg - img70.jpg # Portfolio images (JPG)
│ └── img1.webp - img70.webp # Optimized images (WebP)
│
├── src/ # Source files
│ ├── components/ # React components
│ │ ├── Header.jsx # Hero section + Spotify integration
│ │ ├── Gallery.jsx # Photo gallery grid
│ │ ├── ImageModal.jsx # Full-screen image viewer
│ │ ├── Footer.jsx # Contact information
│ │ └── SocialLinks.jsx # Social media links
│ │
│ ├── pages/ # Route pages
│ │ ├── DetailPage.jsx # Individual photo details
│ │ └── PortfolioPage.jsx # Complete portfolio view
│ │
│ ├── data/ # Data management
│ │ └── galleryData.js # Photo metadata & info
│ │
│ ├── assets/ # Build assets
│ │ └── react.svg # React logo
│ │
│ ├── App.jsx # Main application
│ ├── App.css # Global styles
│ └── main.jsx # Application entry point
│
├── vite.config.js # Vite configuration
├── eslint.config.js # ESLint rules
├── .gitignore # Git ignore rules
├── .htaccess # Apache server config
├── package.json # Dependencies & scripts
└── README.md # Project documentation


## 🚀 Instalasi & Setup

### Prerequisites
- **Node.js** (versi 16 atau lebih baru)
- **npm** atau **yarn** package manager
- **Git** untuk version control

### 1. Clone Repository
```bash
# Clone project
git clone https://github.com/dwraputra/dwraputraweb.git
cd dwraputraweb
```

### 2. Install Dependencies
```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

### 3. Development Server
```bash
# Start development server
npm run dev

# Atau dengan yarn
yarn dev
```

Server akan berjalan di `http://localhost:5173`

### 4. Build untuk Production
```bash
# Build optimized version
npm run build

# Preview build result
npm run preview
```

### 5. Linting & Code Quality
```bash
# Check code quality
npm run lint

# Fix linting issues
npm run lint:fix
```

## ⚙️ Konfigurasi & Kustomisasi

### 🖼️ Mengganti Foto Portfolio

1. **Tambahkan foto baru** ke folder `public/`:
   ```bash
   # Format penamaan: img[number].jpg dan img[number].webp
   public/img71.jpg
   public/img71.webp
   ```

2. **Update metadata** di `src/data/galleryData.js`:
   ```javascript
   export const galleryData = [
     // ... existing photos
     {
       id: 71,
       src: '/img71.webp',
       fallback: '/img71.jpg',
       alt: 'Deskripsi foto',
       category: 'wedding', // atau 'street'
       location: 'Lokasi pemotretan',
       date: '2024-01-01'
     }
   ];
   ```

### 🎵 Mengubah Spotify Playlist

1. **Buka** `src/components/Header.jsx`
2. **Ganti URL** pada iframe src:
   ```jsx
   <iframe 
     src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID"
     // ... other props
   />
   ```

### 🎨 Kustomisasi Tema

#### Warna Utama (`src/index.css`):
```css
:root {
  --bg-primary: #000000;     /* Background utama */
  --text-primary: #ffffff;   /* Teks utama */
  --text-secondary: #cccccc; /* Teks sekunder */
  --accent: #ffffff;         /* Warna aksen */
}
```

#### Layout (`src/App.css`):
```css
#root {
  width: 100vw;              /* Full width */
  min-height: 100vh;         /* Full height */
  background-color: #000000; /* Black background */
}
```

### 📱 Responsive Breakpoints

| Device | Breakpoint | Grid Columns |
|--------|------------|-------------|
| Mobile | < 640px | 1-2 columns |
| Tablet | 640px - 1024px | 2-3 columns |
| Desktop | > 1024px | 3-4 columns |

## 🔧 Scripts Available

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues

# Utilities
npm run clean        # Clean build files
npm run analyze      # Analyze bundle size
```

## 📊 Performance Optimizations

### 🖼️ Image Optimization
- **WebP Format** - 25-35% smaller file size
- **Lazy Loading** - Images load as needed
- **Responsive Images** - Different sizes for different screens
- **Fallback Support** - JPG fallback for older browsers

### ⚡ Loading Performance
- **Code Splitting** - Lazy load components
- **Tree Shaking** - Remove unused code
- **Minification** - Compressed CSS/JS
- **Gzip Compression** - Server-side compression

### 📱 Mobile Optimization
- **Touch Gestures** - Swipe navigation
- **Viewport Meta** - Proper mobile scaling
- **Fast Tap** - Reduced touch delay
- **Offline Support** - Service worker caching

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### Apache Server
1. Upload `dist/` folder contents
2. Ensure `.htaccess` is configured for SPA routing

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

## 📄 License

Proyek ini dibuat untuk portfolio pribadi Dwraputra. Semua foto dan konten adalah hak cipta dari fotografer.

## 📞 Contact & Support

**Dwraputra (Wiradana Putra)**
- 🌐 Website: [dwraputra.com](https://dwraputra.com)
- 📷 Instagram: [@dwraputra](https://instagram.com/dwraputra)
- 📧 Email: contact@dwraputra.com
- 💼 LinkedIn: [Wiradana Putra](https://linkedin.com/in/dwraputra)

**Technical Support**
- 🐛 Issues: [GitHub Issues](https://github.com/dwraputra/dwraputraweb/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/dwraputra/dwraputraweb/discussions)

---

<div align="center">

**Built with ❤️ using React + Vite**

*"Photography, for me, isn't about perfection. It's about honesty."*

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)
![Photography](https://img.shields.io/badge/📸-Photography-blue)
![Portfolio](https://img.shields.io/badge/🎨-Portfolio-purple)

</div>

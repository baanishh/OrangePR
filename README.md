# Orange PR Landing Page

A modern, responsive landing page built for **Orange PR**, a Dubai-based communications agency specializing in culture, lifestyle, fashion, and art.

---

# 📁 Project Structure

```text
src/
├── assets/              # Images, icons, and fonts
├── components/
│   ├── common/          # Reusable UI components
│   └── layout/          # Header, Footer, MainLayout
├── data/                # Static content and section data
├── hooks/               # Custom React hooks
├── pages/
│   └── Home.tsx         # Main landing page
├── sections/
│   ├── Hero
│   ├── About
│   ├── Services
│   ├── WhyChoose
│   ├── Testimonials
│   ├── Contact
│   └── Newsletter
├── styles/              # Global styles and theme
├── types/               # TypeScript types
├── App.tsx
└── main.tsx
```

---

# ✨ Features

### Hero Section

- Responsive hero carousel
- Smooth slide transitions
- Video preview card
- Mobile swipe support

### About Section

- Company introduction
- Statistics and highlights
- Responsive layout

### Services

- Interactive service cards
- Horizontal scrolling layout
- Hover animations

### Why Choose Us

- Feature cards
- Responsive grid layout

### Testimonials

- Customer testimonial carousel
- Custom image layout
- Smooth transitions

### Contact

- Contact form
- Form validation
- Responsive design

---

# ⚡ Performance Optimizations

### Optimized Images

- Converted images to **WebP** format for faster loading.
- Reduced image sizes without sacrificing quality.

### Smart Image Loading

- **Hero images**
  - `loading="eager"`
  - `fetchPriority="high"`
  - `decoding="async"`

- **Below-the-fold images**
  - `loading="lazy"`
  - `decoding="async"`

This improves loading speed and reduces unnecessary network requests.

### Responsive Design

- Mobile-first approach
- Responsive typography
- Responsive spacing
- Optimized layouts for different screen sizes

### Performance Improvements

- Reusable React components
- Modular folder structure
- Optimized asset organization
- Clean TypeScript architecture
- Lazy loading for non-critical content where appropriate

---

# 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite

---

# 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 📌 Highlights

- Pixel-perfect implementation from the provided design
- Fully responsive across desktop, tablet, and mobile
- Modern React + TypeScript architecture
- Clean and reusable component structure
- Optimized images and assets
- Fast loading with WebP and optimized image loading strategies
- Maintainable and scalable folder structure

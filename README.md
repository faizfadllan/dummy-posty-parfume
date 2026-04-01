# 🌸 Posty Parfume — Landing Page

> **"Be Different, Smell Different"**  
> Landing page brand parfume, dibangun menggunakan React + Vite dan terintegrasi dengan Contentful CMS.

---

## 📋 Daftar Isi

- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Fitur](#-fitur)
- [Struktur Project](#-struktur-project)
- [Cara Menjalankan](#-cara-menjalankan)
- [Konfigurasi Contentful](#-konfigurasi-contentful)
- [Struktur Sections](#-struktur-sections-aida)
- [Scripts](#-scripts)

---

## 🚀 Demo

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| [React](https://react.dev/) | ^18.3.1 | UI Framework |
| [Vite](https://vitejs.dev/) | ^5.4.10 | Build Tool & Dev Server |
| [Contentful](https://www.contentful.com/) | ^11.12.0 | Headless CMS (data produk) |
| [Font Awesome](https://fontawesome.com/) | ^6.6.0 | Icon Library |
| Vanilla CSS | — | Styling (flat design) |
| Google Fonts | — | Tipografi (Playfair Display + Inter) |

---

## ✨ Fitur

- ⚡ **Fast** — Ditenagai Vite dengan HMR (Hot Module Replacement)
- 🎨 **Flat Design** — Peach color palette (#FEEAC9, #FFCDC9, #FDACAC, #FD7979)
- 📱 **Responsive** — Mobile-first, adaptif di semua ukuran layar
- 🗂️ **Contentful CMS** — Data produk (nama, deskripsi, harga, gambar, kategori) diambil real-time
- 🟢 **WhatsApp CTA** — Semua tombol beli mengarah ke WhatsApp dengan prefill pesan otomatis
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigable
- 🎴 **Fan Card Hero** — 3 poster produk berjejeran seperti kartu remi di hero section
- 🔍 **SEO Ready** — Meta tags, Open Graph, title & description lengkap

---

## 📁 Struktur Project

```
DummyPostyParfume/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigasi + mobile drawer
│   │   ├── Hero.jsx            # Hero section (fan card 3 produk)
│   │   ├── Why.jsx             # Value proposition (6 keunggulan)
│   │   ├── ProductList.jsx     # Daftar produk dari Contentful
│   │   ├── SocialProof.jsx     # Testimonial + statistik
│   │   ├── FAQ.jsx             # Accordion FAQ
│   │   ├── CTASection.jsx      # Call-to-action WhatsApp
│   │   └── Footer.jsx          # Footer brand + navigasi
│   ├── services/
│   │   └── contentful.js       # Contentful client + fetch produk
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Why.css
│   │   ├── ProductList.css
│   │   ├── SocialProof.css
│   │   ├── FAQ.css
│   │   ├── CTASection.css
│   │   └── Footer.css
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point React
│   └── index.css               # Global styles & design tokens
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🏃 Cara Menjalankan

### Prasyarat

Pastikan sudah terinstall:
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- npm (sudah termasuk dalam instalasi Node.js)

### Langkah-langkah

**1. Clone atau buka folder project**
```bash
cd c: ... \DummyPostyParfume
```

**2. Install dependencies**
```bash
npm install
```

**3. Jalankan development server**
```bash
npm run dev
```

**4. Buka di browser**
```
http://localhost:5173
```

---

## 📦 Scripts

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Jalankan dev server lokal (dengan HMR) |
| `npm run build` | Build production ke folder `dist/` |
| `npm run preview` | Preview hasil build production |

---

## 🗄️ Konfigurasi Contentful

Data produk diambil dari **Contentful CMS** secara real-time.

### Credentials (sudah dikonfigurasi di `src/services/contentful.js`)

| Setting | Nilai |
|---------|-------|
| Space ID | `gwu9kb1zs83n` |
| Access Token | `eDWINknXObqork1rw8LbleJUC1RvgEeh0b71ay46VLA` |
| Content Type | `postyParfume` |

### Fields yang digunakan

| Field | Tipe | Keterangan |
|-------|------|------------|
| `name` | Text | Nama produk |
| `deskripsi` | Rich Text | Deskripsi produk (otomatis dikonversi ke plain text) |
| `harga` | Number | Harga dalam Rupiah |
| `kategori` | Text | Kategori/series produk |
| `image` | Text (URL) | Direct link gambar produk (gunakan i.postimg.cc atau imgbb.com) |
| `featured` | Text | `"Yes"` atau `"No"` untuk produk unggulan |

> ⚠️ **Tips gambar:** Gunakan **direct link** dari layanan image hosting seperti [imgbb.com](https://imgbb.com) (format: `https://i.ibb.co/...`) agar gambar bisa tampil di website.

---

## 🗺️ Struktur Sections (AIDA)

Landing page menggunakan teknik copywriting **AIDA**:

| # | Section | Tujuan AIDA | Konten |
|---|---------|-------------|--------|
| 1 | **Hero** | Attention | Headline kuat + 3 poster produk fan card + CTA WhatsApp |
| 2 | **Why** | Interest | 6 keunggulan Posty Parfume dengan ikon |
| 3 | **Product List** | Desire | Grid produk dari Contentful + filter kategori |
| 4 | **Social Proof** | Desire/Trust | Statistik + 6 testimonial pelanggan |
| 5 | **FAQ** | Overcome Objection | 6 pertanyaan umum dengan accordion |
| 6 | **CTA** | Action | Tombol besar WhatsApp prefill ke 082138980041 |

---

## 🎨 Design System

### Color Palette

| Variabel CSS | Hex | Penggunaan |
|--------------|-----|-----------|
| `--color-peach-lightest` | `#FEEAC9` | Background section, badge |
| `--color-peach-light` | `#FFCDC9` | Aksen, testimonial quote mark |
| `--color-peach-mid` | `#FDACAC` | Border, shadow, avatar |
| `--color-peach-bold` | `#FD7979` | Tombol utama, highlight |
| `--color-peach-dark` | `#e85e5e` | Harga produk, hover |
| `--color-text-dark` | `#2D1F1F` | Teks heading utama |
| `--color-text-body` | `#5A3E3E` | Teks body |

### Typography

- **Heading:** Playfair Display (Google Fonts)
- **Body:** Inter (Google Fonts)


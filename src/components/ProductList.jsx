import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faStar,
  faTag,
  faSpinner,
  faTriangleExclamation,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import { getProducts } from '../services/contentful';
import '../styles/ProductList.css';

const WA_LINK_BASE = 'https://wa.me/6282138980041?text=Halo%20Posty%20Parfume%2C%20saya%20mau%20pesan%20';

function formatHarga(harga) {
  if (typeof harga === 'number') {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(harga);
  }
  return harga;
}

function ProductCard({ product, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const waLink = `${WA_LINK_BASE}${encodeURIComponent(product.name || 'produk Posty Parfume')}`;

  return (
    <article
      className="product-card reveal"
      ref={cardRef}
      style={{ transitionDelay: `${index * 0.07}s` }}
      aria-label={`Produk: ${product.name}`}
    >
      {/* Image */}
      <div className="product-card__image-wrap">
        {product.featured && (
          <div className="product-card__badge--featured">
            <FontAwesomeIcon icon={faFire} /> Featured
          </div>
        )}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
            loading="lazy"
          />
        ) : (
          <div className="product-card__image-placeholder" aria-hidden="true">
            <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="45" width="60" height="65" rx="8" fill="#FDACAC" stroke="#2D1F1F" strokeWidth="2"/>
              <rect x="24" y="28" width="32" height="20" rx="4" fill="#FFCDC9" stroke="#2D1F1F" strokeWidth="2"/>
              <rect x="18" y="16" width="44" height="15" rx="3" fill="#2D1F1F"/>
              <rect x="36" y="8" width="8" height="10" rx="2" fill="#2D1F1F"/>
              <rect x="22" y="60" width="36" height="36" rx="4" fill="#FEEAC9" stroke="#2D1F1F" strokeWidth="1.5"/>
              <text x="40" y="78" textAnchor="middle" fontFamily="serif" fontSize="7" fontWeight="bold" fill="#2D1F1F">POSTY</text>
              <text x="40" y="90" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#FD7979">PARFUME</text>
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="product-card__body">
        {product.kategori && (
          <span className="product-card__kategori">
            <FontAwesomeIcon icon={faTag} /> {product.kategori}
          </span>
        )}
        <h3 className="product-card__name">{product.name}</h3>
        {product.deskripsi && (
          <p className="product-card__desc">{product.deskripsi}</p>
        )}
        <div className="product-card__footer">
          <span className="product-card__harga">{formatHarga(product.harga)}</span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary product-card__cta"
            id={`product-cta-${product.id}`}
            aria-label={`Pesan ${product.name} via WhatsApp`}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Pesan
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('semua');

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Contentful error:', err);
        setError('Gagal memuat produk. Silakan coba lagi nanti.');
        setLoading(false);
      });
  }, []);

  // Build unique category list
  const categories = ['semua', ...new Set(products.map((p) => p.kategori).filter(Boolean))];

  const filtered = activeFilter === 'semua'
    ? products
    : products.filter((p) => p.kategori === activeFilter);

  // Featured first
  const sorted = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <section id="products" className="products" aria-labelledby="products-title">
      <div className="container">
        <div className="products__header text-center reveal">
          <span className="section-eyebrow">Koleksi Kami</span>
          <h2 className="section-title" id="products-title">
            Temukan Aromamu.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Setiap varian Posty Parfume punya karakter sendiri.
            Mana yang paling "kamu"?
          </p>
        </div>

        {/* Filter Tabs */}
        {!loading && !error && categories.length > 1 && (
          <div className="products__filters" role="tablist" aria-label="Filter kategori">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`products__filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                id={`filter-${cat}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* States */}
        {loading && (
          <div className="products__state" aria-live="polite">
            <FontAwesomeIcon icon={faSpinner} spin />
            <p>Memuat produk…</p>
          </div>
        )}

        {error && (
          <div className="products__state products__state--error" role="alert">
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && sorted.length === 0 && (
          <div className="products__state" aria-live="polite">
            <FontAwesomeIcon icon={faStar} />
            <p>Belum ada produk di kategori ini.</p>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="products__grid" role="list">
            {sorted.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

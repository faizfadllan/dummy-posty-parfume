import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faStar, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import '../styles/Hero.css';

const WA_LINK = 'https://wa.me/6282138980041?text=Halo%20Posty%20Parfume%2C%20saya%20tertarik%20dengan%20produk%20kalian!';

// Card fan config: rotation and offset per card (left, center, right)
const CARD_CONFIG = [
  { rotate: -14, translateX: -70, translateY: 30, zIndex: 1, label: null },
  { rotate: 0,   translateX: 0,   translateY: 0,  zIndex: 3, label: 'Best Seller' },
  { rotate: 14,  translateX: 70,  translateY: 30, zIndex: 2, label: null },
];

function PosterCard({ product, config, index }) {
  const formatHarga = (h) => {
    if (typeof h === 'number') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
      }).format(h);
    }
    return h || '';
  };

  return (
    <div
      className="hero__poster-card"
      style={{
        transform: `rotate(${config.rotate}deg) translate(${config.translateX}px, ${config.translateY}px)`,
        zIndex: config.zIndex,
      }}
      aria-label={product?.name || `Produk ${index + 1}`}
    >
      {/* Best seller badge on center card */}
      {config.label && (
        <div className="hero__poster-badge">
          <FontAwesomeIcon icon={faStar} /> {config.label}
        </div>
      )}

      {/* Image area */}
      <div className="hero__poster-image">
        {product?.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="eager"
          />
        ) : (
          <div className="hero__poster-placeholder" aria-hidden="true">
            <FontAwesomeIcon icon={faSprayCanSparkles} />
          </div>
        )}
      </div>

      {/* Card footer info */}
      <div className="hero__poster-info">
        <span className="hero__poster-kategori">{product?.kategori || 'Posty Series'}</span>
        <strong className="hero__poster-name">{product?.name || 'Posty Parfume'}</strong>
        {product?.harga && (
          <span className="hero__poster-harga">{formatHarga(product.harga)}</span>
        )}
      </div>
    </div>
  );
}

export default function Hero({ products = [] }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      requestAnimationFrame(() => el.classList.add('hero--visible'));
    }
  }, []);

  // Pad to exactly 3 slots
  const cards = Array.from({ length: 3 }, (_, i) => products[i] ?? null);

  return (
    <section id="hero" className="hero" ref={heroRef} aria-label="Hero section">
      {/* Decorative Blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true"></div>
      <div className="hero__blob hero__blob--2" aria-hidden="true"></div>

      <div className="container hero__inner">
        {/* Left: Text Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <FontAwesomeIcon icon={faStar} />
            <span>Parfume dengan Karakter & Jiwa</span>
          </div>

          <h1 className="hero__headline">
            Kamu Beda,<br />
            <em>Aromamu</em><br />
            Pun Harus Beda.
          </h1>

          <p className="hero__subtext">
            Posty Parfume hadir untuk mereka yang tidak mau jadi sama.
            Setiap botol adalah ekspresi — temukan aroma yang bicara
            tentang <strong>siapa kamu sebenarnya</strong>.
          </p>

          {/* Social Proof Snippet */}
          <div className="hero__proof">
            <div className="hero__proof-avatars">
              {['A', 'R', 'D', 'M'].map((l, i) => (
                <span key={i} className="hero__proof-avatar" aria-hidden="true">{l}</span>
              ))}
            </div>
            <p>
              <strong>1.200+ pelanggan</strong> sudah temukan aroma mereka
            </p>
          </div>

          {/* CTAs */}
          <div className="hero__ctas">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero__cta-primary"
              id="hero-cta-wa-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Pesan via WhatsApp
            </a>
            <a href="#products" className="btn btn-secondary hero__cta-secondary" id="hero-cta-products-btn">
              Lihat Produk
              <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </div>
        </div>

        {/* Right: 3 Poster Cards Fan */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__fan">
            {cards.map((product, i) => (
              <PosterCard
                key={i}
                product={product}
                config={CARD_CONFIG[i]}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#why" className="hero__scroll-hint" aria-label="Scroll ke bawah">
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </section>
  );
}
